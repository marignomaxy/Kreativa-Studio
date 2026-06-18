import { contact, interiors } from '../data/siteData';

export function Showcase() {
  const captionedInteriors = interiors.filter((item) => item.title.trim().length > 0);

  return (
    <section className="showcase" id="interiorismo" aria-label="Interiores que inspiran">
      <div className="showcase-header reveal">
        <h2>Interiores que inspiran</h2>
        <span>Desliza</span>
      </div>
      <div className="showcase-track">
        {captionedInteriors.map((item, index) => (
          <figure className="showcase-card" key={`${item.alt}-${index}`}>
            <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const whatsappUrl = `${contact.whatsappUrl}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <section className="contact section-pad" id="contacto">
      <div className="reveal">
        <p className="section-label section-label-dark">Contacto</p>
        <h2>
          {contact.headline}
          <br />
          <em>{contact.headlineEmphasis}</em>
        </h2>
        <p>{contact.text}</p>
      </div>
      <div className="contact-panel reveal reveal-delay-2">
        <dl>
          {contact.details.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="contact-actions">
          <a className="contact-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp →
          </a>
        </div>
        <div className="contact-qr">
          <img src={contact.qr} alt="QR de contacto de Kreativa Studio Arq" loading="lazy" decoding="async" />
          <span>{contact.instagramHandle}</span>
        </div>
        <div className="social-links">
          {contact.socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
          <a href={`mailto:${contact.email}`}>Email</a>
        </div>
      </div>
    </section>
  );
}
