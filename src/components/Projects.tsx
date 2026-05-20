import React from 'react';
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <section className="py-section-gap-desktop bg-surface text-on-surface" id="projects">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg">Selected Projects</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              핵심적인 문제 해결과 독창적 시도를 담은 작업물입니다.
            </p>
          </div>
          <Link to="/projects" className="font-label-mono text-label-mono border-b border-on-surface pb-1 hover:text-primary transition-colors uppercase cursor-pointer">
            View All Work
          </Link>
        </div>
        <div className="space-y-section-gap-mobile">
          {/* Project Card 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-3/5 bg-surface-container rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/20">
              <img
                alt="교통봇 : 음성 기반 대중교통 안내 서비스"
                className="w-full aspect-video object-contain group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
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
                호출어 '교통봇' 감지와 음성 인식을 기반으로 실시간 버스 도착 정보를 제공하는 음성 AI 서비스입니다.
              </p>
              <div className="flex gap-4 font-label-mono text-label-mono text-on-surface-variant">
                <span>Python</span>
                <span>Whisper</span>
                <span>OpenWakeWord</span>
                <span>GPT-SoVITS</span>
              </div>
              <a 
                href="https://github.com/seohyeonmun/first-project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors"
               >
                VIEW PROJECT
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-3/5 bg-surface-container rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/20">
              <img
                alt="추후 프로젝트 추가 예정입니다."
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5sRmtKc3-r9DNmPf63xj40x6ko0E7CEPzvfvjMTrEr2O1cQH4YCftIzKNl8MPtdIP5-9jl2nKTFrJz7ueYFesi1FQpStjXLehHIjbUxAGpNTD6C1gLifXJ-DCe5Y7SJ1i77Nrv_UIqKyBMqSsvo4Z0FAfF1P262bwF6U6eSYOwQG3SFEaEGpDpsbkHjjyBHekVzbpIXB7XnK4GanvmsWl0Igev1nIR6HdZqOZ2rP8ZDH5mt1luSiaj40lYRsnBaFhdwPccWgTOSo"
              />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex gap-2">
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">1</span>
                <span className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">2</span>
              </div>
              <h3 className="font-headline-md text-headline-md">추후 프로젝트 추가 예정입니다.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                ........
              </p>
              <div className="flex gap-4 font-label-mono text-label-mono text-on-surface-variant">
                <span>..</span>
                <span>...</span>
                <span>....</span>
              </div>
              <a 
                href="https://github.com/여기에_깃허브_주소를_적어주세요_2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors"
               >
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
