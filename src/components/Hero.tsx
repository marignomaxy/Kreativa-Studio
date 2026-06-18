import { hero } from '../data/siteData';

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Inicio">
      <img className="hero-image" src={hero.image} alt="Exterior del proyecto Juárez 001" decoding="async" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="hero-title">
          {hero.title}
          <br />
          <em>{hero.titleEmphasis}</em>
        </h1>
        <div className="hero-bottom">
          <p>{hero.description}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="btn btn-ghost" href="#contacto">
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
