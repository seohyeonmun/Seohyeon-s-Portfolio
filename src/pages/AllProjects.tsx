import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe } from 'lucide-react';
import { Footer } from '../components/Footer';
import { projectsData, ProjectItem } from '../data/projectsData';

export function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamProjects = projectsData.filter(p => p.tags.includes('TEAM'));
  const personalProjects = projectsData.filter(p => p.tags.includes('PERSONAL'));
  const otherProjects = projectsData.filter(p => !p.tags.includes('TEAM') && !p.tags.includes('PERSONAL'));

  const renderGrid = (items: ProjectItem[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((project) => (
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
            <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow whitespace-pre-line">
              {project.description}
            </p>
            <div className="flex gap-2 font-label-mono text-[10px] text-on-surface-variant flex-wrap mb-6">
              {project.stack.map(s => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex gap-2 items-center w-full">
                <a 
                  href={project.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors flex-grow"
                >
                  VIEW PROJECT
                </a>
                {project.demoUrl && (
                  <div className="relative group/tooltip inline-flex items-center">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="inline-flex items-center justify-center border border-outline text-on-surface p-3 rounded-lg hover:bg-on-surface hover:text-surface transition-colors shrink-0"
                    >
                      <Globe size={20} />
                    </a>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-label-mono bg-on-surface text-surface rounded shadow-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                      Live Demo
                    </span>
                  </div>
                )}
              </div>
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
  );

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

        <main className="pt-32 pb-24 max-w-[var(--spacing-container-max)] mx-auto px-gutter space-y-16">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-4">All Projects</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">지금까지 진행했던 모든 프로젝트를 확인해보세요.</p>
          </div>

          {/* Team Projects Section */}
          {teamProjects.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
                <span className="bg-on-surface/10 text-on-surface px-3 py-1 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider">
                  TEAM PROJECTS
                </span>
                <h2 className="font-headline-md text-xl font-bold">팀 프로젝트</h2>
              </div>
              {renderGrid(teamProjects)}
            </div>
          )}

          {/* Personal Projects Section */}
          {personalProjects.length > 0 && (
            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
                <span className="bg-on-surface/10 text-on-surface px-3 py-1 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider">
                  PERSONAL PROJECTS
                </span>
                <h2 className="font-headline-md text-xl font-bold">개인 프로젝트</h2>
              </div>
              {renderGrid(personalProjects)}
            </div>
          )}

          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
                <span className="bg-on-surface/10 text-on-surface px-3 py-1 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider">
                  OTHER PROJECTS
                </span>
                <h2 className="font-headline-md text-xl font-bold">기타 프로젝트</h2>
              </div>
              {renderGrid(otherProjects)}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
