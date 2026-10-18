export interface KnowledgeChunk {
  id: string;
  category: 'profile' | 'education' | 'project' | 'skills' | 'resume';
  title: string;
  keywords: string[];
  content: string;
}

export const RAG_KNOWLEDGE_BASE: KnowledgeChunk[] = [
  {
    id: "profile-general",
    category: "profile",
    title: "문서현 개발자 프로필 및 희망 직무",
    keywords: ["문서현", "프로필", "소개", "이름", "직무", "희망 직무", "포지션", "이메일", "연락처", "깃허브"],
    content: `[인적 사항 및 기본 프로필]
- 이름: 문서현 (Seohyeon Mun)
- 희망 직무 및 도메인: AI 엔지니어, LLM / Agent 엔지니어
- 이메일: anstjgus221@gmail.com
- GitHub: https://github.com/seohyeonmun
- 포트폴리오 웹사이트: https://seohyeon-s-portfolio.ai.studio
- 핵심 전문성 및 역량 요약:
  1. LangGraph 기반 근거 검증 Agent 워크플로우 설계 및 실패 복구 분기(REGENERATE, RETRIEVE_AGAIN) 구현 역량
  2. 오픈소스 LLM(Qwen3-8B) LoRA/QLoRA 파인튜닝, 프롬프트 엔지니어링, llama.cpp 런타임 연동
  3. Whisper(STT), Levenshtein 거리 알고리즘 기반 음성-데이터 연동 및 예외 처리
  4. 문제 발생 시 라이브러리 호환성 분석, 하이퍼파라미터 조율, 검색-답변 불일치 검증을 집요하게 수행하여 해결하는 문제 해결 능력`
  },
  {
    id: "education-and-courses",
    category: "education",
    title: "학력 및 교육 수료 이력",
    keywords: ["학력", "대학교", "학교", "전공", "학점", "졸업", "교육", "수료", "부트캠프", "이스트소프트"],
    content: `[학력 사항]
- 2018.03 - 2023.02: 국립순천대학교 정보통신공학과 학사 졸업 (학점: 3.71 / 4.5)
- 2015.03 - 2018.02: 장흥고등학교 인문계 졸업

[교육 및 수료 이력]
- 기간: 2026.02 - 2026.07
- 교육 기관: 이스트소프트 (ESTsoft)
- 교육 과정: AI 휴먼 (멀티모달, STT, TTS, 프롬프트 엔지니어링, RAG) 과정
- 주요 교육 내용:
  - 멀티모달 AI, STT(Whisper), TTS, 프롬프트 엔지니어링
  - 오픈소스 LLM 파인튜닝(PEFT, LoRA, QLoRA)
  - LangChain, LangGraph 기반 에이전트 구조 및 상태 관리
  - RAG 파이프라인 및 벡터 검색`
  },
  {
    id: "certifications",
    category: "skills",
    title: "자격증 및 기술 자격",
    keywords: ["자격증", "정보처리기사", "컴퓨터활용능력", "기사", "컴활"],
    content: `[보유 자격증]
1. 정보처리기사
   - 취득일자: 2025년 12월 24일
   - 발급기관: 한국산업인력공단
   - 검증 역량: 소프트웨어 설계, 데이터베이스, 네트워크, 운영체제, 프로그래밍 언어 활용 등 전산 전반의 공인 역량

2. 컴퓨터활용능력 1급
   - 취득일자: 2022년 3월 4일
   - 발급기관: 대한상공회의소
   - 검증 역량: 스프레드시트 및 데이터베이스 실무 활용 능력`
  },
  {
    id: "skills-stack",
    category: "skills",
    title: "기술 스택 (Technical Proficiency)",
    keywords: ["기술스택", "스킬", "기술", "스택", "stack", "skills", "언어", "프론트엔드", "ML", "LLM", "Agent", "RAG", "비전", "API", "배포"],
    content: `[문서현 개발자의 공식 기술 스택 (Technical Proficiency)]
문서현 개발자의 기술 스택은 정확히 아래의 9가지 카테고리로 구성되어 있습니다. 기술 스택을 질문받았을 때는 반드시 아래 9개 분류와 여기에 명시된 기술들만 정확하게 안내해야 합니다:

1. 언어
   - Python, JavaScript

2. 웹 프론트엔드
   - HTML5, CSS3

3. 브라우저 API
   - DOM, localStorage, Geolocation API, Fetch API

4. 데이터 · ML
   - Pandas, NumPy, scikit-learn, PyTorch

5. LLM · 파인튜닝
   - Hugging Face, Transformers, PEFT, TRL, LoRA, QLoRA, BitsAndBytes

6. Agent · RAG
   - LangChain, LangGraph, OpenAI API, FAISS, ChromaDB, Ollama

7. 음성 · 비전
   - Whisper, OpenCV, MediaPipe, YOLO, Tesseract OCR

8. API · 서비스
   - FastAPI, Gradio, REST API, 공공데이터포털 OpenAPI, OpenWeatherMap API

9. 배포 · 개발 도구
   - Git, GitHub, GitHub Pages, VS Code, Google Colab, Conda, Linux`
  },
  {
    id: "project-traffic-bot",
    category: "project",
    title: "교통봇: 음성 기반 실시간 대중교통 안내 서비스",
    keywords: ["교통봇", "프로젝트", "음성", "대중교통", "버스", "Whisper", "STT", "Levenshtein", "BIS"],
    content: `[프로젝트: 교통봇 (음성 기반 실시간 버스 도착 안내 서비스)]
- 개발 기간: 2026.04.16 ~ 2026.04.29 (팀 프로젝트, 총 3명)
- 기획 의도: 출근 시간대 빠른 정보 확인 및 시각 장애/화면 접근이 어려운 사용자를 위해 호출어와 음성 질문만으로 버스 도착 정보를 안내하는 음성 파이프라인 서비스

★ [팀원별 엄격한 역할 분담 - 주의: 타 팀원의 역할을 문서현이 했다고 답하지 말 것!] ★
1. 문서현 (본인 담당 업무):
   - STT(Whisper-base) 파이프라인 연동 및 한국어 음성-텍스트 변환 구현
   - 변환된 질문 텍스트에서 버스 번호와 정류소 이름 추출 로직 구현
   - 광주광역시 BIS OpenAPI(공공데이터포털) 연동 및 실시간 버스 도착 정보 조회
   - [문서현 본인 핵심 트러블슈팅]:
     * 문제: Whisper 음성 인식 시 발음 차이, 주변 소음으로 인해 정류소명이 완벽하게 일치하지 않아 BIS API 검색이 실패하는 문제 발생
     * 해결: Levenshtein Ratio 기반 문자열 유사도 비교 알고리즘을 적용하여 음성 인식이 다소 부정확하더라도 가장 유사한 정류소명을 자동으로 탐색하도록 구현
     * 결과: 오인식된 정류소명에서도 사용자가 의도한 정류소를 안정적으로 찾아 도착 정보 제공
   - 동일 명칭 정류소가 상·하행으로 나뉘는 경우 '정류소(종점)' 형태로 명확히 분기하여 안내하도록 예외 처리

2. 김현진 (팀원 - 문서현이 한 일 아님):
   - KWS(openWakeWord) 호출어 감지 모델 파인튜닝
   - 200개 녹음 데이터 기반 1000개 증강, 네거티브 데이터 학습, 호출어 감지 점수 0.97 달성

3. 김가람 (팀원 - 문서현이 한 일 아님):
   - TTS(GPT-SoVITS-v2Pro) 음성 합성 및 API 서버 구성
   - 모델 메모리 상주 아키텍처로 응답 시간 20초에서 1~3초로 단축, Cloudflare Tunnel 연동`
  },
  {
    id: "project-novelist-persona",
    category: "project",
    title: "Novelist Persona Fine-tuning (소설 작가 LoRA 파인튜닝)",
    keywords: ["소설", "페르소나", "LoRA", "QLoRA", "파인튜닝", "Qwen3", "EXAONE", "프롬프트", "창작"],
    content: `[프로젝트: Novelist Persona Fine-tuning (소설 작가 페르소나 LoRA 파인튜닝)]
- 담당 형태: 개인 전담 프로젝트 (Persona Writer Studio 팀 프로젝트 중 소설가 파트 전담)
- 담당자: 문서현 (본인 단독 전담)
- 목표: 인물의 감정과 장면의 분위기가 자연스러운 한국어 서술형 소설 문체 구현 및 '[소설 장면]' + '[작가 코멘트]' 출력 구조 안정화
- 문서현 본인 수행 세부 내용:
  1. 데이터셋 구축: 총 101개 JSONL 데이터셋 직접 구축 및 검수 (생성 65개, 수정 16개, Val 10개, Test 10개), 일상/감정, 공포/긴장, 판타지/SF 3개 범주 구성
  2. [트러블슈팅 1 - Base Model 변경]:
     - 문제: 초기 EXAONE-3.5-7.8B-Instruct 검토 시 Ubuntu 20.04/Python 3.8 환경에서 Transformers RopeParameters 및 generate() create_causal_mask 호환성 오류 발생
     - 해결: 안정적 학습 및 재현성을 위해 Base model을 Qwen/Qwen3-8B로 변경하고 Python 3.10 환경 구성
  3. [트러블슈팅 2 - QLoRA 과적합 vs bf16 LoRA 비교 분석]:
     - 문제: 4-bit NF4 QLoRA v1 학습 시 문체는 학습되었으나 중국어 외래어(好久不见) 혼입 및 과적합 발생. v2로 규제하자 학습 효과가 너무 약해져 번역투 문체 재발.
     - 해결: 4-bit 양자화를 배제하고 Qwen3-8B를 bf16으로 로드하여 LoRA adapter만 학습(rank 8, alpha 16, lr 5e-5, epoch 2, gradient accumulation 8)하는 bf16 LoRA 채택하여 중국어 혼입 억제 및 문맥 보존력 대폭 개선
  4. 프롬프트 엔지니어링과의 역할 분리:
     - LoRA 파인튜닝: 기본 문체 감성 및 '[소설 장면]' + '[작가 코멘트]' 출력 구조 학습
     - 추론 프롬프트: 외래어 금지, 임의 공포 요소 추가 방지, 원문 설정 유지, 작가 코멘트의 부드러운 존댓말(~해봤어요) 규칙 제어
  5. 평가 결과: 최종 평가에서 Fine-tuned 모델이 유용성 4.5점으로 최고점을 기록.`
  },
  {
    id: "project-persona-writer-studio",
    category: "project",
    title: "Persona Writer Studio: AI 작가 페르소나 창작 지원 스튜디오",
    keywords: ["Persona Writer", "페르소나", "창작", "스튜디오", "llama.cpp", "GGUF", "시나리오"],
    content: `[프로젝트: Persona Writer Studio (AI 작가 페르소나 창작 지원 스튜디오)]
- 프로젝트 성격: 팀 프로젝트
- 개요: 소설가, 영화 시나리오, 게임 시나리오, 광고 카피 등 다양한 작가 페르소나와 LoRA 어댑터를 결합한 창작 지원 스튜디오
- 문서현 (본인) 담당 역할:
  * 소설 작가 페르소나 LoRA adapter 모델(bf16 LoRA 기반)을 전담 제작하여 GGUF 포맷으로 변환 후, 팀 서비스의 llama.cpp 런타임 소설가 어댑터 엔진으로 공급 및 통합
- 팀 전체 및 타 팀원 수행 내용 (문서현 단독 수행 아님):
  * 웹 애플리케이션 프론트엔드/백엔드 아키텍처 구축
  * 타 작가 페르소나(영화 시나리오 작가, 게임 시나리오 작가, 광고 카피라이터) LoRA 학습 및 인터랙티브 분기 그래프 플로우 개발`
  },
  {
    id: "project-fineprint",
    category: "project",
    title: "FinePrint: LangGraph 기반 근거 검증 및 약관 소비자 보호 AI Agent",
    keywords: ["FinePrint", "LangGraph", "에이전트", "Agent", "약관", "소비자보호", "환불", "검증"],
    content: `[프로젝트: FinePrint (구독형 서비스 약관 기반 소비자 보호 AI Agent)]
- 개발 기간: 2026.07.01 ~ 2026.07.23 (팀 프로젝트, 총 5명)
- 기획 배경: 구독 서비스의 복잡한 해지 수수료, 숨겨진 환불 조건 등으로 인한 소비자 피해를 막기 위해 실제 약관 및 소비자 보호 법령을 검색하고 답변을 자가 검증하는 AI Agent

★ [팀원별 엄격한 역할 분담 - 주의: 타 팀원의 역할을 문서현이 했다고 답하지 말 것!] ★
1. 문서현 (본인 담당 업무 - LangGraph 기반 근거 검증 Agent 전담):
   - LangGraph 기반 근거 검증 Agent 워크플로우 설계 및 구현 전담
   - FinePrintState 정의 (사용자 입력, 의도 분류, 검색 근거, 초안 답변, 검증 상태, 실패 원인, retry_count, 라운드 로그)
   - 주요 노드 구현: 의도 분류(classify_intent), 1차 답변 생성(generate_answer), 근거 일치성 검증(verify_answer), 개선 전략(improve_strategy), 최종 답변 생성(generate_final_answer), 근거 부족 안내(generate_insufficient_evidence_answer), 범위 밖 안내(generate_out_of_scope_answer)
   - [문서현 본인 핵심 아키텍처 - 실패 원인별 복구 분기 (Self-Correction)]:
     * PASS: 답변이 검색 근거와 일치하면 최종 구조화 답변 생성
     * REGENERATE: 근거는 충분하나 표현이 부정확/단정적일 경우 근거는 유지하고 답변만 재생성
     * RETRIEVE_AGAIN: 질문에 답하기 위한 근거 자체가 부족한 경우 검색 전략을 보완하여 재검색
     * INSUFFICIENT: 최대 재시도(2회) 초과 시 무리하게 단정하지 않고 확인된 사실과 추가 필요 자료 안내
     * OUT_OF_SCOPE: 지원 범위 밖 질문은 별도 안내 후 안전하게 종료
   - [문서현 본인 트러블슈팅]:
     * 문제 1: 약관에 없는 전액 환불을 모델이 확정적으로 단정하는 문제 -> 별도 검증 노드에서 약관 조문과 대조하여 조건부 안내로 제한
     * 문제 2: 사용자가 묻지 않은 해지/환불까지 답변이 확장되는 문제 -> primary_intent 분류 노드를 신설해 질문 범위 엄격 통제
     * 문제 3: 최종 답변 생성 시 새로운 사실이 임의 추가되는 문제 -> 최종 단계를 검증된 초안의 구조화 및 표현 정제로만 제한

2. 타 팀원 담당 업무 (문서현이 한 일 아님! 절대 문서현이 했다고 답변하지 말 것):
   - 안민재 (팀원): 공식 약관 및 정책 URL 자동 탐색 (Tavily 등)
   - 정현천 (팀원): 웹페이지 본문 추출 및 정제 (Playwright, Trafilatura)
   - 박시영 (팀원): 약관/소비자보호 문서 전처리, ChromaDB 임베딩, 지식베이스 구축 및 Hybrid RAG 검색 모듈 구현
   - 문하현 (팀원): React 기반 UI, 입력/결과/근거/분석 이력 화면 구현`
  },
  {
    id: "project-momentum",
    category: "project",
    title: "Momentum Clone: 바닐라 JavaScript 기반 개인 대시보드",
    keywords: ["Momentum", "모멘텀", "자바스크립트", "바닐라JS", "LocalStorage", "날씨", "시계", "할일"],
    content: `[프로젝트: Momentum Clone (바닐라 JS 브라우저 대시보드)]
- 개발 기간: 2024.09.16 ~ 2024.09.24 (개인 프로젝트)
- 담당자: 문서현 (본인 단독 개발)
- 기술 스택: HTML5, CSS3, JavaScript, LocalStorage, Geolocation API, OpenWeatherMap API
- 주요 기능: 실시간 시계(setInterval), 사용자 맞춤 인사말, 할 일(ToDo) 목록 CRUD, Geolocation 기반 현재 위치 날씨 조회, 랜덤 배경 이미지 및 명언
- 트러블슈팅: 새로고침 시 데이터 초기화 문제 해결 -> LocalStorage에 Date.now() 기반 고유 ID를 부여한 객체 배열을 JSON.stringify() 및 JSON.parse()로 영속화하여 안정적인 상태 복원 구현
- 배포: GitHub Pages (https://seohyeonmun.github.io/seohyun.github.io/)`
  },
  {
    id: "resume-download-info",
    category: "resume",
    title: "이력서 다운로드 안내",
    keywords: ["이력서", "다운로드", "PDF", "포트폴리오", "링크"],
    content: `[이력서 다운로드 안내]
- 문서현 개발자의 정식 이력서(PDF)는 웹사이트 상단 헤더 우측의 '이력서 다운로드' 버튼을 클릭하시면 즉시 다운로드하실 수 있습니다.
- 다운로드 직접 링크: https://drive.google.com/uc?export=download&id=1a151Yq5_rlDIiGU49_-NGR9jvh-EzAAs
- 이력서에는 상세 학력(국립순천대학교 정보통신공학과 3.71/4.5), 이스트소프트 AI 휴먼 과정 수료 내역, 정보처리기사 자격증 및 각 프로젝트별 상세 기여 내용이 일목요연하게 정리되어 있습니다.`
  }
];
