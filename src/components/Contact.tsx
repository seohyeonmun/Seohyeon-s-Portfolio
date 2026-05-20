import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-section-gap-desktop bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-gutter text-center flex flex-col items-center">
        <h2 className="font-display-lg text-display-lg mb-8 text-black">
          Let's Create<br />Something Great.
        </h2>
        <p className="font-body-lg text-body-lg text-gray-mid mb-12">
          새로운 프로젝트, 협업 제안, 혹은 가벼운 인사도 환영합니다.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full justify-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <span className="font-headline-md text-headline-md text-black whitespace-nowrap">anstjgus221@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <span className="font-headline-md text-headline-md text-black whitespace-nowrap">+82 10-2972-5739</span>
          </div>
          <a 
            href="https://github.com/seohyeonmun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-70 transition-opacity"
          >
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
              <Github size={24} />
            </div>
            <span className="font-headline-md text-headline-md text-black whitespace-nowrap">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
