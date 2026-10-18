import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projectsData';

export function Projects() {
  const [activeImageId, setActiveImageId] = useState<number | null>(null);
  const [inViewIds, setInViewIds] = useState<Set<number>>(new Set());

  const homeProjects = projectsData.filter(p => !p.hideInHome);
  const teamProjects = homeProjects.filter(p => p.tags.includes('TEAM'));
  const personalProjects = homeProjects.filter(p => p.tags.includes('PERSONAL'));
  const otherProjects = homeProjects.filter(p => !p.tags.includes('TEAM') && !p.tags.includes('PERSONAL'));

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setInViewIds((prev) => {
          let hasChange = false;
          const next = new Set(prev);
          entries.forEach((entry) => {
            const idAttr = entry.target.getAttribute('data-project-card-id');
            if (idAttr) {
              const id = Number(idAttr);
              if (entry.isIntersecting) {
                if (!next.has(id)) {
                  next.add(id);
                  hasChange = true;
                }
              } else {
                if (next.has(id)) {
                  next.delete(id);
                  hasChange = true;
                }
              }
            }
          });
          return hasChange ? next : prev;
        });
      },
      {
        // Focus on the central reading band of the mobile viewport
        rootMargin: '-18% 0px -22% 0px',
        threshold: [0.15, 0.4],
      }
    );

    const elements = document.querySelectorAll('[data-project-card-id]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [homeProjects.length]);

  const toggleImageActive = (id: number) => {
    setActiveImageId(prev => (prev === id ? null : id));
  };

  const renderProjectCard = (project: ProjectItem, index: number) => {
    const isReverse = index % 2 === 1;
    const isActive = activeImageId === project.id;
    const isInView = inViewIds.has(project.id);

    return (
      <div 
        key={project.id} 
        className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
      >
        <div 
          data-project-card-id={project.id}
          onClick={() => toggleImageActive(project.id)}
          className={`w-full md:w-3/5 bg-surface-container rounded-2xl overflow-hidden shadow-sm group border transition-all duration-700 p-2 md:p-3 aspect-video flex items-center justify-center cursor-pointer select-none ${
            isActive 
              ? 'border-primary/60 shadow-lg ring-1 ring-primary/30' 
              : isInView
                ? 'max-md:border-primary/50 max-md:shadow-md max-md:ring-1 max-md:ring-primary/20 border-outline-variant/20 md:hover:border-outline-variant/40'
                : 'border-outline-variant/20 md:hover:border-outline-variant/40'
          }`}
          title="클릭/터치하여 이미지 강조 토글"
        >
          <img
            alt={project.title}
            className={`w-full h-full object-contain transition-all duration-700 ${
              isActive
                ? 'scale-105 grayscale-0'
                : isInView
                  ? 'max-md:scale-105 max-md:grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105'
                  : 'max-md:grayscale max-md:scale-100 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105'
            } active:scale-105 active:grayscale-0`}
            src={project.image}
          />
        </div>
        <div className="w-full md:w-2/5 space-y-6">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="font-label-mono text-xs border border-on-surface/20 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-headline-md text-headline-md">{project.title}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-label-mono text-label-mono text-on-surface-variant">
            {project.stack.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-on-surface text-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-primary transition-colors hover:text-on-primary"
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
                  className="inline-flex items-center justify-center border border-outline text-on-surface p-3 rounded-lg hover:bg-on-surface hover:text-surface transition-colors"
                >
                  <Globe size={20} />
                </a>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-label-mono bg-on-surface text-surface rounded shadow-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                  Live Demo
                </span>
              </div>
            )}
            {project.myPartUrl && (
              <a 
                href={project.myPartUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-outline text-on-surface px-6 py-3 rounded-lg font-label-mono text-label-mono hover:bg-on-surface hover:text-surface transition-colors"
               >
                VIEW MY PART
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderProjectList = (projects: ProjectItem[]) => {
    return (
      <div className="flex flex-col gap-12 md:gap-16">
        {projects.map((project, idx) => (
          <React.Fragment key={project.id}>
            {idx > 0 && (
              <div 
                className="w-full border-t border-outline-variant/30" 
                role="separator" 
                aria-hidden="true" 
              />
            )}
            {renderProjectCard(project, idx)}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <section className="py-section-gap-desktop bg-surface text-on-surface" id="projects">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter space-y-20">
        <div>
          <h2 className="font-headline-lg text-headline-lg">All Projects</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            핵심적인 문제 해결과 독창적 시도를 담은 작업물입니다.
          </p>
        </div>

        {/* Team Projects Section */}
        {teamProjects.length > 0 && (
          <div className="space-y-12">
            <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
              <span className="bg-on-surface/10 text-on-surface px-3 py-1 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider">
                TEAM PROJECTS
              </span>
              <h3 className="font-headline-md text-xl font-bold">팀 프로젝트</h3>
            </div>
            {renderProjectList(teamProjects)}
          </div>
        )}

        {/* Personal Projects Section */}
        {personalProjects.length > 0 && (
          <div className="space-y-12 pt-8">
            <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
              <span className="bg-on-surface/10 text-on-surface px-3 py-1 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider">
                PERSONAL PROJECTS
              </span>
              <h3 className="font-headline-md text-xl font-bold">개인 프로젝트</h3>
            </div>
            {renderProjectList(personalProjects)}
          </div>
        )}

        {/* Other Projects Section if any */}
        {otherProjects.length > 0 && (
          <div className="space-y-12 pt-8">
            <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
              <span className="bg-on-surface/10 text-on-surface px-3 py-1 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider">
                OTHER PROJECTS
              </span>
              <h3 className="font-headline-md text-xl font-bold">기타 프로젝트</h3>
            </div>
            {renderProjectList(otherProjects)}
          </div>
        )}
      </div>
    </section>
  );
}
