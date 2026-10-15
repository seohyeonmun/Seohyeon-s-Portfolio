import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, BotMessageSquare, Sparkles, BookOpen, Loader2 } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  sources?: { title: string; category?: string; similarity?: number }[];
  mode?: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "안녕하세요! AI 엔지니어 문서현의 포트폴리오 전담 AI 어시스턴트입니다.\nOpenAI Embeddings 기반 RAG로 프로젝트 경험, 기술 스택, 학력 및 자격증에 대해 무엇이든 자세하게 안내해 드립니다. 궁금한 점을 질문해 보세요!",
      sender: "bot"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (customQuery?: string) => {
    const query = (customQuery ?? inputValue).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now(), text: query, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    if (!customQuery) {
      setInputValue("");
    }
    setIsLoading(true);

    try {
      // Build brief chat history
      const history = messages.slice(-4).map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query, history })
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        text: data.answer || "답변을 가져오지 못했습니다.",
        sender: "bot",
        sources: data.sources,
        mode: data.mode
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chatbot request error:", error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "죄송합니다. 서버와의 통신 중 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해 주시거나, 메일(anstjgus221@gmail.com)로 문의해 주세요.",
          sender: "bot"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    "교통봇에서 해결한 핵심 트러블슈팅이 뭔가요?",
    "FinePrint에서 LangGraph를 어떻게 설계했나요?",
    "소설 작가 LoRA 파인튜닝 과정과 배운 점은?",
    "문서현 지원자의 학력과 자격증을 알려주세요"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[410px] h-[540px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden absolute bottom-20 right-0 origin-bottom-right animate-in fade-in zoom-in duration-200">
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-md text-sm font-bold">문서현 AI 어시스턴트</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-mono">
                    <Sparkles size={10} /> RAG
                  </span>
                </div>
                <p className="text-[11px] text-gray-300">OpenAI Embeddings 지식베이스 연동</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="닫기"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50 text-sm">
            <div className="text-center">
              <span className="font-label-mono text-[10px] text-gray-500 bg-gray-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                RAG Knowledge Assistant
              </span>
            </div>

            {messages.map(msg => (
              <div
                key={msg.id}
                className={`max-w-[88%] p-3.5 shadow-sm rounded-2xl ${
                  msg.sender === 'bot'
                    ? 'bg-white self-start rounded-tl-none text-black border border-gray-100'
                    : 'bg-black self-end rounded-tr-none text-white'
                }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed text-[13.5px]">
                  {msg.text}
                </div>

                {/* Retrieved Sources Indicator */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-gray-100 text-[11px] text-gray-500 flex flex-col gap-1">
                    <div className="flex items-center gap-1 font-medium text-gray-700">
                      <BookOpen size={12} />
                      <span>참고한 포트폴리오 근거:</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {msg.sources.map((s, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px] border border-gray-200 truncate max-w-full"
                          title={s.title}
                        >
                          {s.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="bg-white self-start rounded-2xl rounded-tl-none p-3.5 border border-gray-100 text-gray-600 flex items-center gap-2 text-xs shadow-sm">
                <Loader2 size={16} className="animate-spin text-black" />
                <span>지식베이스 검색 및 답변 생성 중...</span>
              </div>
            )}

            <div ref={messagesEndRef} />

            {/* Quick Prompts on initial load */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-col gap-1.5 mt-2">
                <p className="text-[11px] text-gray-400 font-mono px-1">추천 질문</p>
                {sampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-left bg-white p-2 text-xs rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white flex gap-2 border-t border-gray-200">
            <input
              className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors text-black placeholder:text-gray-400"
              placeholder="문서현 개발자에 대해 질문하세요..."
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
            />
            <button
              className="bg-black text-white p-2.5 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center shrink-0 disabled:opacity-50"
              onClick={() => handleSend()}
              disabled={isLoading || !inputValue.trim()}
              aria-label="전송"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all relative z-50 group"
        aria-label="AI 챗봇 열기"
      >
        {isOpen ? <X size={26} /> : <BotMessageSquare size={26} className="group-hover:rotate-6 transition-transform" />}
      </button>
    </div>
  );
}

