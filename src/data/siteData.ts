import heroJuarezImage from '../assets/kreativa/project-galleries/juarez-001-exterior-wide.jpeg';
import juarezAccessImage from '../assets/kreativa/project-galleries/juarez-001-access-wide.jpeg';
import casaCuroImage from '../assets/kreativa/project-galleries/curo-720-vertical.jpeg';
import curoFacadeDetailImage from '../assets/kreativa/project-galleries/curo-720-facade-detail-brick.jpeg';
import curoAccessDetailImage from '../assets/kreativa/project-galleries/curo-720-access-detail.jpeg';
import interiorPremiumImage from '../assets/kreativa/project-galleries/interior-bano-premium.jpeg';
import interiorCommercialImage from '../assets/kreativa/project-galleries/interior-bano-comercial.jpeg';
import interiorAxonometricImage from '../assets/kreativa/project-galleries/interior-bano-axonometric.jpeg';
import planCuroFirstImage from '../assets/kreativa/project-galleries/plan-curo-primer-nivel.jpeg';
import planCuroSecondImage from '../assets/kreativa/project-galleries/plan-curo-segundo-nivel.jpeg';
import planCuroRoofImage from '../assets/kreativa/project-galleries/plan-curo-azotea.jpeg';
import planDuplexImage from '../assets/kreativa/project-galleries/plan-duplex-op1.jpeg';
import planKreativaRoofImage from '../assets/kreativa/project-galleries/plan-kreativa-azotea.jpeg';
import planKreativaBedroomsImage from '../assets/kreativa/project-galleries/plan-kreativa-dormitorios.jpeg';
import planKreativaFirstImage from '../assets/kreativa/project-galleries/plan-kreativa-primer-nivel.jpeg';
import logoLightImage from '../assets/kreativa/project-galleries/logo-kr-light-transparent.png';
import logoDarkImage from '../assets/kreativa/project-galleries/logo-kr-dark-transparent.png';
import contactQrImage from '../assets/kreativa/project-galleries/contact-qr-card.png';

export const brand = {
  name: 'Kreativa Studio Arq',
  logo: logoLightImage,
  logoLight: logoLightImage,
  logoDark: logoDarkImage,
};

export const navLinks = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Interiorismo', href: '#interiorismo' },
];

export const hero = {
  eyebrow: 'Lima, Perú · Arquitectura · Interiorismo · Remodelaciones',
  title: 'Espacios',
  titleEmphasis: 'que perduran',
  description:
    'Arquitectura en Lima para viviendas, locales comerciales y remodelaciones. Diseñamos interiores, planimetría y ejecución de obra con técnica, identidad y detalle.',
  image: heroJuarezImage,
  alt: 'Render exterior del proyecto arquitectónico Juárez 001 por Kreativa Studio Arq en Lima',
};

export const marqueeItems = ['Arquitectura', 'Interiorismo', 'Ejecución', 'Diseño', 'Remodelaciones', 'Lima, Perú'];

export const about = {
  label: 'Nosotros',
  title: 'Del concepto',
  titleEmphasis: 'al detalle',
  text:
    'Somos un estudio de arquitectura e interiorismo en Lima, Perú. Desarrollamos proyectos residenciales, comerciales y remodelaciones con un enfoque integral: concepto, diseño de espacios, planimetría, documentación técnica y ejecución de obra. Nuestra mirada combina creatividad, funcionalidad y precisión constructiva para crear espacios que se sienten propios y perduran.',
  tag: 'Juárez 001',
  images: {
    main: heroJuarezImage,
    accent: interiorPremiumImage,
  },
  alts: {
    main: 'Render exterior de proyecto arquitectónico comercial Juárez 001 diseñado por Kreativa Studio Arq',
    accent: 'Diseño interior de baño premium con luz natural y vegetación por Kreativa Studio Arq',
  },
};

export const projects = [
  {
    number: '01',
    title: 'Juárez 001',
    tag: 'Comercial · Ejecutado',
    image: heroJuarezImage,
    alt: 'Render exterior de proyecto arquitectónico comercial Juárez 001 en Lima',
    gallery: [
      { image: heroJuarezImage, alt: 'Vista exterior completa del proyecto comercial Juárez 001' },
      { image: juarezAccessImage, alt: 'Detalle de acceso y materialidad del proyecto Juárez 001' },
    ],
  },
  {
    number: '02',
    title: 'Casa Curo 720',
    tag: 'Vivienda multifamiliar · Proyecto',
    image: casaCuroImage,
    alt: 'Fachada vertical de vivienda multifamiliar Casa Curo 720 diseñada por Kreativa Studio Arq',
    gallery: [
      { image: casaCuroImage, alt: 'Fachada principal de vivienda multifamiliar Casa Curo 720' },
      { image: curoFacadeDetailImage, alt: 'Detalle de ladrillo y balcones de Casa Curo 720' },
      { image: curoAccessDetailImage, alt: 'Detalle de acceso residencial de Casa Curo 720' },
    ],
  },
  {
    number: '03',
    title: 'Baños comerciales',
    tag: 'Interiorismo · Comercial',
    image: interiorCommercialImage,
    alt: 'Diseño interior de baño comercial contemporáneo por Kreativa Studio Arq',
    gallery: [
      { image: interiorCommercialImage, alt: 'Vista interior de baño comercial con propuesta contemporánea' },
      { image: interiorAxonometricImage, alt: 'Axonometría técnica de baño comercial para documentación de obra' },
      { image: interiorPremiumImage, alt: 'Diseño interior de baño premium con lavatorio circular y vegetación' },
    ],
  },
  {
    number: '04',
    title: 'Planimetría Curo',
    tag: 'Documentación técnica',
    image: planCuroSecondImage,
    alt: 'Plano arquitectónico del segundo nivel del proyecto Curo',
    imageFit: 'contain',
    gallery: [
      { image: planCuroFirstImage, alt: 'Plano arquitectónico de primer nivel del proyecto Curo' },
      { image: planCuroSecondImage, alt: 'Plano arquitectónico de segundo nivel del proyecto Curo' },
      { image: planCuroRoofImage, alt: 'Plano arquitectónico de azotea del proyecto Curo' },
    ],
  },
  {
    number: '05',
    title: 'Dúplex OP 1',
    tag: 'Planimetría · Vivienda',
    image: planDuplexImage,
    alt: 'Planimetría de vivienda dúplex desarrollada por Kreativa Studio Arq',
    imageFit: 'contain',
    gallery: [{ image: planDuplexImage, alt: 'Plano arquitectónico de vivienda dúplex opción 1' }],
  },
];

export const services = [
  {
    number: '01',
    title: 'Arquitectura',
    description:
      'Diseñamos proyectos residenciales y comerciales en Lima con criterio funcional, estética contemporánea y rigor técnico desde la idea inicial.',
  },
  {
    number: '02',
    title: 'Interiorismo',
    description:
      'Creamos interiores cálidos, eficientes y coherentes con cada estilo de vida, cuidando materialidad, iluminación, mobiliario y detalle.',
  },
  {
    number: '03',
    title: 'Planimetría',
    description:
      'Desarrollamos planos, documentación técnica y compatibilización para licencias, obra, remodelaciones y ejecución sin improvisaciones.',
  },
  {
    number: '04',
    title: 'Ejecución de obra',
    description:
      'Acompañamos la construcción, remodelación y seguimiento de obra con control de calidad, coordinación técnica y compromiso con el resultado.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Concepto e idea',
    description:
      'Escuchamos tus necesidades, analizamos el contexto y definimos una visión clara para el diseño arquitectónico o interior.',
  },
  {
    number: '02',
    title: 'Diseño y desarrollo',
    description:
      'Traducimos la idea en distribución, renders, planos y documentación técnica con precisión, creatividad y decisiones bien sustentadas.',
  },
  {
    number: '03',
    title: 'Permisos y licencias',
    description:
      'Preparamos documentación para trámites, coordinación técnica y revisión municipal cuando el proyecto lo requiere.',
  },
  {
    number: '04',
    title: 'Construcción y entrega',
    description:
      'Ejecutamos y supervisamos cada etapa para cuidar acabados, tiempos, presupuesto y coherencia entre diseño y obra construida.',
  },
];

export const interiors = [
  {
    title: 'Baño G - Residencial',
    image: interiorPremiumImage,
    alt: 'Diseño interior de baño residencial premium con lavatorio circular, plantas y luz natural',
  },
  {
    title: 'Local SSHH - Comercial',
    image: interiorCommercialImage,
    alt: 'Diseño interior de servicios higiénicos comerciales con acabados contemporáneos',
  },
  {
    title: 'Vista isométrica',
    image: interiorAxonometricImage,
    alt: 'Vista isométrica técnica de baño comercial para documentación arquitectónica',
  },
  {
    title: 'Planta primer nivel',
    image: planKreativaFirstImage,
    alt: 'Plano de planta primer nivel desarrollado por Kreativa Studio Arq',
  },
  {
    title: 'Planta azotea',
    image: planKreativaRoofImage,
    alt: 'Plano arquitectónico de azotea desarrollado por Kreativa Studio Arq',
  },
  {
    title: 'Planta típica de dormitorios',
    image: planKreativaBedroomsImage,
    alt: 'Plano arquitectónico de planta típica de dormitorios por Kreativa Studio Arq',
  },
];

export const contact = {
  headline: '¿Tienes un proyecto',
  headlineEmphasis: 'en mente?',
  text:
    'Consultas de arquitectura, interiorismo y remodelaciones en Lima. Conversemos sobre tu vivienda, local comercial, planos, documentación técnica o ejecución de obra.',
  email: 'kreativastudioarq@gmail.com',
  whatsapp: '+51936715570',
  whatsappUrl: 'https://wa.me/51936715570',
  whatsappMessage: 'Hola, quiero conversar sobre un proyecto de arquitectura/interiorismo con Kreativa Studio Arq.',
  instagramHandle: '@kreativastudioarq_pe',
  instagramUrl: 'https://www.instagram.com/kreativastudioarq_pe',
  qr: contactQrImage,
  details: [
    { label: 'Instagram', value: '@kreativastudioarq_pe' },
    { label: 'WhatsApp', value: '(+51) 936 715 570' },
    { label: 'Email', value: 'kreativastudioarq@gmail.com' },
    { label: 'Ubicación', value: 'Lima, Perú' },
  ],
  socialLinks: [
    { label: 'WhatsApp', href: 'https://wa.me/51936715570' },
    { label: 'Instagram', href: 'https://www.instagram.com/kreativastudioarq_pe' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@kreativastudioarq_pe' },
    { label: 'YouTube', href: 'https://www.youtube.com/@kreativastudioarq_pe' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575727731507' },
    { label: 'Threads', href: 'https://www.threads.net/@kreativastudioarq_pe' },
  ],
};
