import { useCallback, useEffect, useState } from 'react';
import { projects } from '../data/siteData';

export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];
  const gallery = activeProject?.gallery ?? [];

  const openProject = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(0);
  };

  const closeProject = useCallback(() => {
    setActiveProjectIndex(null);
    setActiveImageIndex(0);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveImageIndex((current) => (current === 0 ? gallery.length - 1 : current - 1));
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setActiveImageIndex((current) => (current === gallery.length - 1 ? 0 : current + 1));
  }, [gallery.length]);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    document.body.classList.add('modal-open');

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProject();
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeProject, closeProject, showNext, showPrevious]);

  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-header reveal">
        <h2 id="projects-title">
          Proyectos <em>destacados</em>
        </h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <button
            className={`project-card ${
              project.imageFit === 'contain' ? 'project-card-contain' : ''
            } reveal reveal-delay-${(index % 4) + 1}`}
            key={project.title}
            type="button"
            onClick={() => openProject(index)}
            aria-label={`Abrir galería de ${project.title}`}
          >
            <span className="project-number">{project.number}</span>
            <img
              src={project.image}
              alt={project.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="project-info">
              <p>{project.tag}</p>
              <h3>{project.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {activeProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button className="project-modal-backdrop" type="button" onClick={closeProject} aria-label="Cerrar galería" />
          <div className="project-modal-panel">
            <div className="project-modal-header">
              <div>
                <p>{activeProject.tag}</p>
                <h3 id="project-modal-title">{activeProject.title}</h3>
              </div>
              <button type="button" onClick={closeProject} aria-label="Cerrar galería">
                Cerrar
              </button>
            </div>

            <figure className="project-carousel">
              <img src={gallery[activeImageIndex].image} alt={gallery[activeImageIndex].alt} decoding="async" />
              <figcaption>
                {activeImageIndex + 1} / {gallery.length}
              </figcaption>
            </figure>

            {gallery.length > 1 && (
              <div className="project-carousel-controls">
                <button type="button" onClick={showPrevious} aria-label="Imagen anterior">
                  Anterior
                </button>
                <button type="button" onClick={showNext} aria-label="Imagen siguiente">
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
