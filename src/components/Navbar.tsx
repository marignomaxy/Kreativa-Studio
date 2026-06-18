import { brand, navLinks } from '../data/siteData';

type NavbarProps = {
  scrolled: boolean;
};

export function Navbar({ scrolled }: NavbarProps) {
  const logo = scrolled ? brand.logoDark : brand.logoLight;

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="nav-logo" href="#top" aria-label="Kreativa Studio Arq">
        <img src={logo} alt="" decoding="async" />
        <span>{brand.name}</span>
      </a>
      <nav className="nav-links" aria-label="Navegación principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contacto">
        Hablemos
      </a>
    </header>
  );
}
