import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export function Projects() {
  return (
    <section className="py-section-gap-desktop bg-surface text-on-surface" id="projects">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg">Selected  Projects</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              핵심적인 문제 해결과 독창적 시도를 담은 작업물입니다.
            </p>
          </div>
          <Link to="/projects" className="font-label-mono text-label-mono border-b border-on-surface pb-1 hover:text-primary transition-colors uppercase cursor-pointer">
            ({projectsData.length}) VIEW ALL WORK
          </Link>
        </div>
        <div className="space-y-section-gap-mobile">
          {/* Project Card 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-3/5 bg-surface-container rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/20 p-2 md:p-3 aspect-video flex items-center justify-center">
              <img
                alt="교통봇 : 음성 기반 대중교통 안내 서비스"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                src="/2. 전체 파이프라인 구조도.png"
              />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex gap-2">
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">AI SERVICE</span>
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">VOICE ASSISTANT</span>
              </div>
              <h3 className="font-headline-md text-headline-md">교통봇 : 음성 기반 대중교통 안내 서비스</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                호출어 '교통봇' 감지와 음성 인식을 기반으로 실시간 버스 도착 정보를 제공하는 음성 AI 서비스입니다.<br />저는 Whisper 기반 STT를 구현하고, 광주 BIS OpenAPI를 연동했습니다.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-label-mono text-label-mono text-on-surface-variant">
                <span>Python</span>
                <span>Whisper</span>
                <span>OpenWakeWord</span>
                <span>GPT-SoVITS</span>
                <span>BIS OpenAPI</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <a 
                  href="https://github.com/seohyeonmun/first-project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors hover:text-on-primary"
                 >
                  VIEW PROJECT
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-3/5 bg-surface-container rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/20 p-2 md:p-3 aspect-video flex items-center justify-center">
              <img
                alt="MoonMac - 멀티 페르소나 창작 AI 서비스"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                src="/창작콘텐츠제작도우미.png"
              />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex gap-2">
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">LLM SERVICE</span>
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">LoRA</span>
              </div>
              <h3 className="font-headline-md text-headline-md">멀티 페르소나 창작 지원 AI 서비스</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                소설 작가, 광고 스토리보드 작가, 게임 시나리오 라이터, 영화 시나리오 각본가 페르소나를 설계한 팀 프로젝트입니다.<br />저는 소설 작가 페르소나의 데이터셋 구축, LoRA 파인튜닝, 프롬프트 설계 및 평가를 담당했습니다.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-label-mono text-label-mono text-on-surface-variant">
                <span>Python</span>
                <span>Qwen3-8B</span>
                <span>LoRA</span>
                <span>QLoRA</span>
                <span>PEFT</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <a 
                  href="https://github.com/2026-EST-AIHuman-3/multi_persona_writer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors hover:text-on-primary"
                 >
                  VIEW PROJECT
                </a>
                <a 
                  href="https://github.com/2026-EST-AIHuman-3/multi_persona_writer/tree/main/ai/novelist" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-outline text-on-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-on-surface hover:text-surface transition-colors"
                 >
                  VIEW MY PART
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-3/5 bg-surface-container rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/20 p-2 md:p-3 aspect-video flex items-center justify-center">
              <img
                alt="FinePrint - 구독 서비스 소비자 보호 AI Agent"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                src="/FinePrint메인페이지.png"
              />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex gap-2">
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">AI SERVICE</span>
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">Agent</span>
              </div>
              <h3 className="font-headline-md text-headline-md">FinePrint - 구독 서비스 소비자 보호 AI Agent</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                구독 서비스의 해지·환불·자동결제 문제를<br />약관과 소비자 보호 자료를 기반으로 분석하고,<br />검증된 답변과 다음 행동을 안내하는 AI Agent입니다.<br />저는 LangGraph 기반 근거 검증과<br />답변 개선 흐름을 설계·구현했습니다.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-label-mono text-label-mono text-on-surface-variant">
                <span>LangGraph</span>
                <span>LangChain</span>
                <span>OpenAI GPT-4o</span>
                <span>FastAPI</span>
                <span>ChromaDB</span>
                <span>React</span>
                <span>TypeScript</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <a 
                  href="https://github.com/2026-EST-AIHuman-3/FinePrint" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors hover:text-on-primary"
                 >
                  VIEW PROJECT
                </a>
                <a 
                  href="https://github.com/2026-EST-AIHuman-3/FinePrint/tree/main/msh/agent" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-outline text-on-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-on-surface hover:text-surface transition-colors"
                 >
                  VIEW MY PART
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
