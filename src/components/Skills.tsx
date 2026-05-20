import React from 'react';
import { Code2, Mic, Cloud, Wrench } from 'lucide-react';
import { SiPython, SiGithub } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

export function Skills() {
  return (
    <section className="py-section-gap-desktop bg-gray-light" id="skills">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 text-black">Technical Proficiency</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Category 1 */}
          <div className="bg-white p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black transition-colors">
                <Code2 size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-black">언어</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-4 py-2 rounded-full bg-gray-light/50">
                <SiPython /> Python
              </span>
            </div>
          </div>

          {/* Category 2 */}
          <div className="bg-white p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black transition-colors">
                <Mic size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-black">AI / 음성 처리</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center font-label-mono text-label-mono text-black border border-black/10 px-4 py-2 rounded-full bg-gray-light/50">openWakeWord</span>
              <span className="inline-flex items-center font-label-mono text-label-mono text-black border border-black/10 px-4 py-2 rounded-full bg-gray-light/50">Whisper</span>
              <span className="inline-flex items-center font-label-mono text-label-mono text-black border border-black/10 px-4 py-2 rounded-full bg-gray-light/50">GPT-SoVITS</span>
            </div>
          </div>

          {/* Category 3 */}
          <div className="bg-white p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black transition-colors">
                <Cloud size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-black">API 연동</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center font-label-mono text-label-mono text-black border border-black/10 px-4 py-2 rounded-full bg-gray-light/50">공공데이터포털 API</span>
            </div>
          </div>

          {/* Category 4 */}
          <div className="bg-white p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black transition-colors">
                <Wrench size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-black">협업 및 개발 도구</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-4 py-2 rounded-full bg-gray-light/50">
                <SiGithub /> GitHub
              </span>
              <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-4 py-2 rounded-full bg-gray-light/50">
                <TbBrandVscode /> VSCode
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
