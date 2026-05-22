import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [activeSection, setActiveSection] = useState('intro');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ['intro', 'skills', 'projects', 'board', 'contact'];
      let current = '';
      const triggerY = window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom >= triggerY) {
            current = section;
          }
        }
      }

      // If scrolled to the very bottom, activate the last section
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navItems = [
    { id: 'intro', label: '소개' },
    { id: 'skills', label: '기술' },
    { id: 'projects', label: '프로젝트' },
    { id: 'board', label: '게시판' },
    { id: 'contact', label: '연락처' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="flex justify-between items-center h-[72px] px-gutter max-w-[var(--spacing-container-max)] mx-auto">
        <Link to="/" className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform" onClick={() => { if(isHome) window.scrollTo(0, 0); }}>
          <Terminal size={24} className="text-black" />
          <span className="font-display-lg text-headline-md font-extrabold tracking-tighter text-black">
            PORTFOLIO
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isHome && activeSection === item.id;
            return (
              <a
                key={item.id}
                className={`font-body-lg text-body-lg transition-all ${
                  isActive
                    ? 'text-black font-bold border-b-2 border-black pb-1'
                    : 'text-gray-mid font-medium border-b-2 border-transparent pb-1 hover:text-black hover:border-black/30'
                }`}
                href={isHome ? `#${item.id}` : `/#${item.id}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <button className="bg-black text-white px-6 py-2 rounded-full font-label-mono text-label-mono hover:scale-105 transition-transform active:scale-95">
          이력서 다운로드
        </button>
      </div>
    </header>
  );
}
