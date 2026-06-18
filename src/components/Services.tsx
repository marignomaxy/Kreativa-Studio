import { services } from '../data/siteData';

export function Services() {
  return (
    <section className="services section-pad" id="servicios">
      <div className="services-header reveal">
        <div>
          <p className="section-label">Servicios</p>
          <h2>
            Lo que
            <br />
            <em>hacemos</em>
          </h2>
        </div>
        <p className="section-text">
          Integramos diseño y ejecución en un solo estudio. Desde el primer boceto hasta la llave en mano, somos tu
          equipo completo.
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
