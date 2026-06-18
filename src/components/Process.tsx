import { processSteps } from '../data/siteData';

export function Process() {
  return (
    <section className="process section-pad" id="proceso" aria-labelledby="process-title">
      <div className="process-copy reveal">
        <p className="section-label">Proceso</p>
        <h2 id="process-title">
          Del concepto
          <br />
          <em>al detalle.</em>
        </h2>
        <p className="section-text">
          Desarrollamos cada proyecto con rigor técnico y creatividad, cuidando cada decisión desde la idea inicial
          hasta la documentación técnica, la remodelación o la construcción.
        </p>
      </div>
      <div className="process-list">
        {processSteps.map((step, index) => (
          <article className={`process-step reveal reveal-delay-${index + 1}`} key={step.title}>
            <span>{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
