import { about } from '../data/siteData';

export function About() {
  return (
    <section className="about section-pad" id="nosotros" aria-labelledby="about-title">
      <div className="about-copy reveal">
        <p className="section-label">{about.label}</p>
        <h2 id="about-title">
          {about.title}
          <br />
          <em>{about.titleEmphasis}</em>
        </h2>
        <p className="section-text">{about.text}</p>
      </div>
      <div className="about-media reveal reveal-delay-2">
        <figure className="about-main">
          <img src={about.images.main} alt={about.alts.main} loading="lazy" decoding="async" />
        </figure>
        <figure className="about-accent">
          <img src={about.images.accent} alt={about.alts.accent} loading="lazy" decoding="async" />
        </figure>
        <span className="about-tag">{about.tag}</span>
      </div>
    </section>
  );
}
