import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import OpenAI from "openai";
import { RAG_KNOWLEDGE_BASE, KnowledgeChunk } from "./src/data/ragKnowledge";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory cache for chunk embeddings
interface EmbeddedChunk extends KnowledgeChunk {
  embedding?: number[];
}

let embeddedChunks: EmbeddedChunk[] = [...RAG_KNOWLEDGE_BASE];
let isEmbeddingInitialized = false;
let isEmbeddingInProgress = false;

// Cosine similarity helper
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Lazy OpenAI client initialization
function getOpenAIClient(): OpenAI | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey.trim() === "" || apiKey === "MY_OPENAI_API_KEY") {
    return null;
  }
  return new OpenAI({ apiKey });
}

// Pre-compute embeddings for knowledge chunks
async function ensureChunkEmbeddings(openai: OpenAI) {
  if (isEmbeddingInitialized || isEmbeddingInProgress) return;
  isEmbeddingInProgress = true;
  try {
    console.log("[RAG] Generating embeddings for knowledge base chunks...");
    const textsToEmbed = embeddedChunks.map(
      chunk => `${chunk.title}\n키워드: ${chunk.keywords.join(", ")}\n${chunk.content}`
    );

    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: textsToEmbed,
    });

    response.data.forEach((item, index) => {
      embeddedChunks[index].embedding = item.embedding;
    });

    isEmbeddingInitialized = true;
    console.log(`[RAG] Successfully embedded ${embeddedChunks.length} chunks.`);
  } catch (error) {
    console.error("[RAG] Failed to embed knowledge chunks:", error);
  } finally {
    isEmbeddingInProgress = false;
  }
}

// Fallback keyword retrieval when API key is not yet configured
function keywordSearch(query: string, topK = 3): EmbeddedChunk[] {
  const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 1);
  const scored = embeddedChunks.map(chunk => {
    let score = 0;
    const titleLower = chunk.title.toLowerCase();
    const contentLower = chunk.content.toLowerCase();
    const keywordsLower = chunk.keywords.map(k => k.toLowerCase());

    queryWords.forEach(word => {
      if (titleLower.includes(word)) score += 5;
      if (keywordsLower.some(k => k.includes(word))) score += 4;
      if (contentLower.includes(word)) score += 1;
    });

    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map(s => s.chunk);
}

// API: Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY),
    chunksLoaded: embeddedChunks.length,
    embeddingReady: isEmbeddingInitialized
  });
});

// API: RAG Chat Completion
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    const openai = getOpenAIClient();

    // If OpenAI API key is missing, provide a helpful message with keyword-based retrieval
    if (!openai) {
      // Check if the query is asking about skills
      const isSkillQuery = /기술|스택|stack|skill|사용|역량|도구/i.test(message);
      if (isSkillQuery) {
        const skillChunk = embeddedChunks.find(c => c.id === "skills-stack");
        if (skillChunk) {
          return res.json({
            answer: `문서현 개발자의 공식 기술 스택(Technical Proficiency)입니다:\n\n${skillChunk.content.replace("[문서현 개발자의 공식 기술 스택 (Technical Proficiency)]\n문서현 개발자의 기술 스택은 정확히 아래의 9가지 카테고리로 구성되어 있습니다. 기술 스택을 질문받았을 때는 반드시 아래 9개 분류와 여기에 명시된 기술들만 정확하게 안내해야 합니다:\n\n", "")}\n\n※ OpenAI API 키를 등록하시면 대화형 상세 RAG 질의응답이 활성화됩니다.`,
            sources: [{ title: skillChunk.title, category: skillChunk.category }],
            mode: "keyword_fallback"
          });
        }
      }

      const relevantChunks = keywordSearch(message, 2);
      const fallbackSummary = relevantChunks
        .map(c => `• [${c.title}]\n${c.content}`)
        .join("\n\n");

      return res.json({
        answer: `안녕하세요! 문서현 개발자의 AI 포트폴리오 챗봇입니다.\n\n현재 서버에 \`OPENAI_API_KEY\`가 아직 등록되지 않아 **키워드 기반 검색 모드**로 동작하고 있습니다.\n(AI Studio Settings/Secrets 메뉴에서 \`OPENAI_API_KEY\`를 등록하시면 **OpenAI Embeddings(text-embedding-3-small) + GPT-4o-mini RAG**가 실시간으로 활성화됩니다!)\n\n질문하신 내용과 관련된 포트폴리오 정보입니다:\n\n${fallbackSummary || "궁금하신 내용(예: '기술 스택', '교통봇', 'FinePrint', '학력', '자격증')을 입력해 보세요!"}\n\n추가로 궁금한 점이나 채용 문의는 anstjgus221@gmail.com 으로 연락 부탁드립니다.`,
        sources: relevantChunks.map(c => ({ title: c.title, category: c.category })),
        mode: "keyword_fallback"
      });
    }

    // 1. Ensure chunk embeddings are cached
    await ensureChunkEmbeddings(openai);

    // 2. Embed user query with OpenAI text-embedding-3-small
    let relevantChunks: { chunk: EmbeddedChunk; similarity: number }[] = [];

    if (isEmbeddingInitialized) {
      const queryEmbeddingRes = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: message,
      });
      const queryVector = queryEmbeddingRes.data[0].embedding;

      // 3. Compute cosine similarities
      const scored = embeddedChunks.map(chunk => ({
        chunk,
        similarity: chunk.embedding ? cosineSimilarity(queryVector, chunk.embedding) : 0,
      }));

      scored.sort((a, b) => b.similarity - a.similarity);
      // Pick top 3 chunks
      relevantChunks = scored.slice(0, 3);
    } else {
      // Fallback if embedding generation had a transient error
      relevantChunks = keywordSearch(message, 3).map(chunk => ({ chunk, similarity: 0.5 }));
    }

    const contextText = relevantChunks
      .map((item, idx) => `[참고 문서 ${idx + 1}: ${item.chunk.title}]\n${item.chunk.content}`)
      .join("\n\n---\n\n");

    // 4. Generate answer using GPT-4o-mini with retrieved context
    const systemPrompt = `당신은 AI/LLM 엔지니어 지원자 '문서현(Seohyeon Mun)'의 공식 포트폴리오 전담 AI 어시스턴트입니다.
방문자(채용 담당자, 엔지니어, 면접관 등)에게 문서현 지원자의 학력, 기술 역량, 프로젝트 경험, 트러블슈팅 과정 및 문제 해결 능력을 친절하고 신뢰감 있는 전문적인 어조로 설명하세요.

[절대 원칙 및 중요 지침]

★ 1. [기술 스택 답변 규칙 (엄격 준수)] ★
사용자가 기술 스택(또는 사용 언어/도구/기술)을 물으면, 반드시 아래의 9가지 카테고리와 여기에 포함된 기술들만 정확하게 안내하세요. 임의로 React, Next.js 등 다른 기술을 추가하거나 누락하지 마세요:
1. 언어: Python, JavaScript
2. 웹 프론트엔드: HTML5, CSS3
3. 브라우저 API: DOM, localStorage, Geolocation API, Fetch API
4. 데이터 · ML: Pandas, NumPy, scikit-learn, PyTorch
5. LLM · 파인튜닝: Hugging Face, Transformers, PEFT, TRL, LoRA, QLoRA, BitsAndBytes
6. Agent · RAG: LangChain, LangGraph, OpenAI API, FAISS, ChromaDB, Ollama
7. 음성 · 비전: Whisper, OpenCV, MediaPipe, YOLO, Tesseract OCR
8. API · 서비스: FastAPI, Gradio, REST API, 공공데이터포털 OpenAPI, OpenWeatherMap API
9. 배포 · 개발 도구: Git, GitHub, GitHub Pages, VS Code, Google Colab, Conda, Linux

★ 2. [팀 프로젝트에서의 본인 역할 vs 팀원 역할의 엄격한 구분] ★
팀 프로젝트에 대해 답변할 때, 절대로 다른 팀원이 수행한 역할을 문서현 지원자가 한 것처럼 답변하지 마세요. 반드시 문서현 본인이 직접 수행한 작업만을 본인의 성과로 설명하고, 필요시 팀원의 역할임을 분명히 밝히세요:
- [교통봇 (3인 팀)]:
  * 문서현 본인 전담: STT(Whisper-base) 파이프라인 연동, 정류소 Levenshtein Ratio 문자열 유사도 비교 트러블슈팅(음성 오인식 극복), 광주광역시 BIS OpenAPI 연동, 상/하행 종점 분기 처리
  * 팀원 수행 (문서현이 한 것 아님): KWS(openWakeWord 호출어 파인튜닝)는 김현진 팀원 담당, TTS(GPT-SoVITS-v2Pro) 및 API 서버/메모리 상주 최적화는 김가람 팀원 담당
- [FinePrint (5인 팀)]:
  * 문서현 본인 전담: LangGraph 기반 근거 검증 Agent 워크플로우 전담 설계 및 구현, FinePrintState 설계, 의도 분류 노드, 검증 노드(verify_answer), 실패 복구 분기(PASS, REGENERATE, RETRIEVE_AGAIN, INSUFFICIENT, OUT_OF_SCOPE) 설계, 전액 환불 단정 억제 및 질문 과확장 방지 트러블슈팅
  * 팀원 수행 (문서현이 한 것 아님): URL 탐색(안민재 팀원), 본문 추출/정제(정현천 팀원), RAG 전처리/ChromaDB 임베딩/Hybrid RAG 모듈(박시영 팀원), React UI(문하현 팀원)
- [Persona Writer Studio]:
  * 문서현 본인 전담: 소설 작가 페르소나 LoRA adapter(bf16 LoRA) 학습 전담 및 GGUF 변환 후 팀 서비스의 소설가 어댑터 엔진으로 연동/공급
  * 팀원 수행: 웹 프론트엔드/백엔드 아키텍처 및 타 페르소나(영화/게임/광고) 개발은 팀 전체 및 다른 팀원이 분담
- [Novelist Persona Fine-tuning]: 문서현 본인 단독 전담 (101개 데이터셋, EXAONE 호환성 분석 후 Qwen3-8B 선정, bf16 LoRA 채택, 프롬프트 엔지니어링)
- [Momentum Clone]: 문서현 본인 단독 개발 (바닐라 JS, LocalStorage 동기화)

★ 3. [기본 프로필 및 이력서 다운로드] ★
- 학력: 국립순천대학교 정보통신공학과 학사 졸업 (학점 3.71 / 4.5)
- 교육: 이스트소프트 AI 휴먼(멀티모달, STT, TTS, 프롬프트 엔지니어링, RAG) 과정 수료
- 자격증: 정보처리기사(2025.12), 컴퓨터활용능력 1급(2022.03)
- 이력서 요청 시: 헤더의 '이력서 다운로드' 버튼이나 구글 드라이브 다운로드 링크(https://drive.google.com/uc?export=download&id=1X5_p3lx26auhGul4E5PkdxrMIbfUJ16K)를 친절히 안내`;

    const chatMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: `${systemPrompt}\n\n[참고 문서 Context]\n${contextText}` },
      ...history.slice(-4).map((h: { role: string; content: string }) => ({
        role: h.role === "user" ? ("user" as const) : ("assistant" as const),
        content: h.content,
      })),
      { role: "user", content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: chatMessages,
      temperature: 0.3,
    });

    const answer = completion.choices[0]?.message?.content || "죄송합니다. 답변을 생성하지 못했습니다.";

    return res.json({
      answer,
      sources: relevantChunks.map(rc => ({
        title: rc.chunk.title,
        category: rc.chunk.category,
        similarity: Math.round(rc.similarity * 100) / 100,
      })),
      mode: "rag_openai"
    });
  } catch (error: any) {
    console.error("[Chat API Error]:", error);
    return res.status(500).json({
      error: "답변 처리 중 오류가 발생했습니다.",
      details: error?.message || String(error)
    });
  }
});

async function startServer() {
  // Vite middleware in dev, static build in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
