import { hero } from '../data/siteData';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-image" src={hero.image} alt={hero.alt} decoding="async" fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="hero-title" id="hero-title">
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
