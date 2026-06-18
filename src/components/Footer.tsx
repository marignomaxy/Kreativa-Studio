import { brand, navLinks } from '../data/siteData';

export function Footer() {
  return (
    <footer className="footer">
      <a className="footer-brand" href="#top" aria-label="Volver al inicio">
        <img src={brand.logoLight} alt="" loading="lazy" decoding="async" />
        <span>{brand.name}</span>
      </a>
      <p>© 2024 Kreativa Studio Arq. Todos los derechos reservados.</p>
      <nav aria-label="Navegación secundaria">
        {navLinks.slice(0, 3).map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
