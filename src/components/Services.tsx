import { services } from '../data/siteData';

export function Services() {
  return (
    <section className="services section-pad" id="servicios" aria-labelledby="services-title">
      <div className="services-header reveal">
        <div>
          <p className="section-label">Servicios</p>
          <h2 id="services-title">
            Lo que
            <br />
            <em>hacemos</em>
          </h2>
        </div>
        <p className="section-text">
          Integramos arquitectura, interiorismo, remodelaciones y ejecución de obra en un solo estudio. Desde el primer
          boceto hasta la entrega, somos tu equipo completo en Lima.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <article className={`service-card reveal reveal-delay-${index + 1}`} key={service.title}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <b aria-hidden="true">→</b>
          </article>
        ))}
      </div>
    </section>
  );
}
