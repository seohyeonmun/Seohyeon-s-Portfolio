import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, BotMessageSquare } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요! 문서현 개발자의 포트폴리오를 방문해주셔서 감사합니다. 무엇을 도와드릴까요?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMsg = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "현재 AI 답변 기능은 준비 중입니다. 궁금한 점이 있으시면 아래 연락처를 통해 메일로 문의해 주세요!",
        sender: "bot"
      }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden absolute bottom-20 right-0 origin-bottom-right animate-in fade-in zoom-in duration-200">
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <span className="font-headline-md text-body-lg font-bold">AI Assistant</span>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50">
            <div className="text-center">
              <span className="font-label-mono text-[10px] text-gray-500 bg-gray-200 px-2 py-1 rounded-full uppercase">Chat Online</span>
            </div>
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`max-w-[85%] p-3 text-sm shadow-sm ${
                  msg.sender === 'bot' 
                    ? 'bg-white self-start rounded-2xl rounded-tl-none text-black border border-gray-100' 
                    : 'bg-black self-end rounded-2xl rounded-tr-none text-white'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
            {/* Quick replies */}
            {messages.length === 1 && (
              <div className="flex flex-col gap-2 mt-4">
                <button 
                  onClick={() => { setInputValue("가장 도전적이었던 프로젝트는 무엇인가요?"); handleSend(); }}
                  className="text-left bg-white p-2 text-xs rounded border border-gray-200 text-black hover:bg-gray-100 transition-colors shadow-sm"
                >
                  "가장 도전적이었던 프로젝트는 무엇인가요?"
                </button>
                <button 
                  onClick={() => { setInputValue("Python 사용 숙련도가 궁금해요."); handleSend(); }}
                  className="text-left bg-white p-2 text-xs rounded border border-gray-200 text-black hover:bg-gray-100 transition-colors shadow-sm"
                >
                  "Python 사용 숙련도가 궁금해요."
                </button>
              </div>
            )}
          </div>
          
          {/* Input Area */}
          <div className="p-3 bg-white flex gap-2 border-t border-gray-200">
            <input
              className="flex-grow bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors text-black"
              placeholder="메시지를 입력하세요..."
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button 
              className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center shrink-0"
              onClick={handleSend}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all relative z-50"
      >
        {isOpen ? <X size={26} /> : <BotMessageSquare size={26} />}
      </button>
    </div>
  );
}
