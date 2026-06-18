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
  eyebrow: 'Lima, Perú · Arquitectura · Interiorismo · Ejecución',
  title: 'Espacios',
  titleEmphasis: 'que perduran',
  description:
    'Diseñamos espacios que conectan propósito, estética y técnica para transformar ideas en proyectos construidos con excelencia.',
  image: heroJuarezImage,
};

export const marqueeItems = ['Arquitectura', 'Interiorismo', 'Ejecución', 'Diseño', 'Construcción', 'Lima, Perú'];

export const about = {
  label: 'Nosotros',
  title: 'Del concepto',
  titleEmphasis: 'al detalle',
  text:
    'Somos un estudio de arquitectura e interiorismo en Lima, Perú. Desarrollamos proyectos residenciales, comerciales y de interior con un enfoque integral: desde la idea inicial y el diseño, hasta la documentación técnica y la ejecución de obra. Nuestra visión combina creatividad, funcionalidad y precisión constructiva para entregar espacios que perduran.',
  tag: 'Juárez 001',
  images: {
    main: heroJuarezImage,
    accent: interiorPremiumImage,
  },
};

export const projects = [
  {
    number: '01',
    title: 'Juárez 001',
    tag: 'Comercial · Ejecutado',
    image: heroJuarezImage,
    alt: 'Exterior del proyecto comercial Juárez 001',
    gallery: [
      { image: heroJuarezImage, alt: 'Vista exterior completa de Juárez 001' },
      { image: juarezAccessImage, alt: 'Detalle de acceso y materialidad de Juárez 001' },
    ],
  },
  {
    number: '02',
    title: 'Casa Curo 720',
    tag: 'Vivienda multifamiliar · Proyecto',
    image: casaCuroImage,
    alt: 'Vista vertical del proyecto Casa Curo 720',
    gallery: [
      { image: casaCuroImage, alt: 'Fachada principal de Casa Curo 720' },
      { image: curoFacadeDetailImage, alt: 'Detalle de ladrillo y balcones de Casa Curo 720' },
      { image: curoAccessDetailImage, alt: 'Detalle de acceso de Casa Curo 720' },
    ],
  },
  {
    number: '03',
    title: 'Baños comerciales',
    tag: 'Interiorismo · Comercial',
    image: interiorCommercialImage,
    alt: 'Interiorismo de baño comercial',
    gallery: [
      { image: interiorCommercialImage, alt: 'Vista interior de baño comercial' },
      { image: interiorAxonometricImage, alt: 'Axonometría de baño comercial' },
      { image: interiorPremiumImage, alt: 'Baño premium con luz natural y vegetación' },
    ],
  },
  {
    number: '04',
    title: 'Planimetría Curo',
    tag: 'Documentación técnica',
    image: planCuroSecondImage,
    alt: 'Planimetría del Proyecto Curo segundo nivel',
    imageFit: 'contain',
    gallery: [
      { image: planCuroFirstImage, alt: 'Planta primer nivel del Proyecto Curo' },
      { image: planCuroSecondImage, alt: 'Planta segundo nivel del Proyecto Curo' },
      { image: planCuroRoofImage, alt: 'Planta azotea del Proyecto Curo' },
    ],
  },
  {
    number: '05',
    title: 'Dúplex OP 1',
    tag: 'Planimetría · Vivienda',
    image: planDuplexImage,
    alt: 'Planimetría de dúplex opción 1',
    imageFit: 'contain',
    gallery: [{ image: planDuplexImage, alt: 'Planta de dúplex opción 1' }],
  },
];

export const services = [
  {
    number: '01',
    title: 'Arquitectura',
    description:
      'Diseñamos espacios funcionales y estéticos, adaptados a cada contexto y necesidad del cliente, con rigor técnico y visión creativa.',
  },
  {
    number: '02',
    title: 'Interiorismo',
    description: 'Creamos interiores cálidos y contemporáneos que elevan la experiencia de habitar. Cada detalle cuenta.',
  },
  {
    number: '03',
    title: 'Diseño de planos',
    description: 'Documentación técnica precisa para licencias, obra y ejecución sin contratiempos ni sorpresas.',
  },
  {
    number: '04',
    title: 'Ejecución de obra',
    description: 'Gestionamos y ejecutamos cada etapa con control, calidad y compromiso. Del papel a la realidad.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Concepto e idea',
    description: 'Escuchamos, analizamos el contexto y desarrollamos la visión inicial que guiará cada decisión del proyecto.',
  },
  {
    number: '02',
    title: 'Diseño y desarrollo',
    description: 'Traducimos la idea en planos, renders y documentación técnica con precisión y creatividad sin concesiones.',
  },
  {
    number: '03',
    title: 'Permisos y licencias',
    description: 'Gestionamos toda la documentación para la aprobación municipal sin demoras ni complicaciones burocráticas.',
  },
  {
    number: '04',
    title: 'Construcción y entrega',
    description: 'Ejecutamos con supervisión continua, garantizando calidad, plazos y el resultado que imaginamos juntos.',
  },
];

export const interiors = [
  {
    title: 'Baño G - Residencial',
    image: interiorPremiumImage,
    alt: 'Baño premium con lavatorio circular, plantas y luz natural',
  },
  {
    title: 'Local SSHH - Comercial',
    image: interiorCommercialImage,
    alt: 'Baño comercial con propuesta de interiorismo contemporáneo',
  },
  {
    title: 'Vista isométrica',
    image: interiorAxonometricImage,
    alt: 'Axonometría técnica de baño comercial',
  },
  {
    title: 'Planta primer nivel',
    image: planKreativaFirstImage,
    alt: 'Plano de planta primer nivel de Kreativa Studio Arq',
  },
  {
    title: 'Planta azotea',
    image: planKreativaRoofImage,
    alt: 'Plano de planta azotea de Kreativa Studio Arq',
  },
  {
    title: 'Planta típica de dormitorios',
    image: planKreativaBedroomsImage,
    alt: 'Plano de planta típica de dormitorios de Kreativa Studio Arq',
  },
];

export const contact = {
  headline: '¿Tienes un proyecto',
  headlineEmphasis: 'en mente?',
  text:
    'Conversemos sobre tu idea. Desde Lima trabajamos proyectos en toda la región con visión contemporánea y ejecución de excelencia.',
  email: 'kreativastudioarq@gmail.com',
  whatsapp: '+51936715570',
  whatsappUrl: 'https://wa.me/51936715570',
  whatsappMessage: 'Hola, quiero conversar sobre un proyecto de arquitectura/interiorismo con Kreativa Studio Arq.',
  instagramHandle: '@kreativastudioarq_pe',
  instagramUrl: 'https://www.instagram.com/kreativastudioarq_pe',
  qr: contactQrImage,
  details: [
    { label: 'Instagram', value: '@kreativastudioarq_pe' },
    { label: 'WhatsApp', value: '(+51) 936715570' },
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
