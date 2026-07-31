import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { projectsData } from '../data/projectsData';

export function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = projectsData;

  return (
    <>
      <div className="bg-surface text-on-surface min-h-screen">
        <header className="fixed w-full top-0 bg-surface/80 backdrop-blur-md z-40 border-b border-outline-variant/20">
          <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter h-20 flex items-center">
            <Link to="/" className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors">
              <ArrowLeft size={20} />
              <span className="font-label-mono font-bold">BACK TO HOME</span>
            </Link>
          </div>
        </header>

        <main className="pt-32 pb-24 max-w-[var(--spacing-container-max)] mx-auto px-gutter">
          <div className="mb-16">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-4">All Projects</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">지금까지 진행했던 모든 프로젝트를 확인해보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-surface-container rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/20 flex flex-col h-full">
                <div className="w-full aspect-video flex-shrink-0 flex items-center justify-center p-4 bg-surface-container-highest overflow-hidden relative">
                  <img
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    src={project.image}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-label-mono text-[10px] border border-outline-variant/50 px-2 py-0.5 rounded text-on-surface-variant">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface mb-3">{project.title}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex gap-2 font-label-mono text-[10px] text-on-surface-variant flex-wrap mb-6">
                    {project.stack.map(s => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-center bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors w-full"
                    >
                      VIEW PROJECT
                    </a>
                    {project.myPartUrl && (
                      <a 
                        href={project.myPartUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center border border-outline text-on-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-on-surface hover:text-surface transition-colors w-full"
                      >
                        VIEW MY PART
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
