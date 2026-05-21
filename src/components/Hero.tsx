import React from 'react';

export function Hero() {
  return (
    <section className="min-h-[90svh] relative flex items-center pt-[72px] bg-white text-black overflow-hidden" id="intro">
      <div className="max-w-[var(--spacing-container-max)] w-full mx-auto px-gutter relative z-10 h-full flex flex-col justify-center">
        {/* Image on the right (constrained to wrapper on large screens) */}
        <div className="absolute right-0 bottom-0 top-0 w-[150%] md:w-[85%] lg:w-[75%] z-0 flex items-end justify-end pointer-events-none">
          <img
            alt="문서현 개발자 프로필 사진"
            className="w-full h-auto max-h-[110%] object-contain object-right-bottom mix-blend-multiply opacity-50 md:opacity-100"
            src="/profile.png"
          />
        </div>

        <div className="space-y-8 max-w-2xl relative z-10 my-20">
          <div>
            <span className="font-label-mono text-label-mono text-black border border-black/30 px-3 py-1.5 rounded-full uppercase bg-white/50 backdrop-blur-sm">
              AI Developer & Problem Solver
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg leading-[1.1] relative">
            <span className="bg-white/50 md:bg-white/80 backdrop-blur-sm md:backdrop-blur-md rounded-lg break-keep inline-block px-1">AI를 설계하고</span><br />
            <span className="text-gray-mid bg-white/50 md:bg-white/80 backdrop-blur-sm md:backdrop-blur-md rounded-lg break-keep inline-block px-1 mt-1">기술로 가치를 실현하는</span><br />
            <span className="bg-white/50 md:bg-white/80 backdrop-blur-sm md:backdrop-blur-md rounded-lg break-keep inline-block px-1 mt-1">개발자 <b className='name text-black'>문서현</b>입니다.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-gray-mid max-w-lg bg-white/60 md:bg-white/80 backdrop-blur-sm md:backdrop-blur-md rounded-xl p-3 md:-ml-3 break-keep leading-relaxed mt-4">
            사용자 중심의 사고방식과 탄탄한 엔지니어링 기술을 결합하여, <br className="hidden md:block" />실제 문제를 해결하는 AI 서비스를 구축합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
