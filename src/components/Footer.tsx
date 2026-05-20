import React from 'react';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-[var(--spacing-container-max)] mx-auto gap-base">
        <div className="text-center md:text-left">
          <span className="font-headline-md text-headline-md text-white font-extrabold tracking-tighter">
            PORTFOLIO
          </span>
          <p className="font-label-mono text-label-mono mt-2 text-on-surface-variant">
            © 2024 디자인 포트폴리오. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-white transition-colors underline hover:scale-105" href="#">GitHub</a>
          <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-white transition-colors underline hover:scale-105" href="#">LinkedIn</a>
          <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-white transition-colors underline hover:scale-105" href="#">Twitter</a>
          <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-white transition-colors underline hover:scale-105" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
