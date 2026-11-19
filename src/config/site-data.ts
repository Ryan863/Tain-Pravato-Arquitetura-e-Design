export const SITE_URL = 'https://tainapravato.com.br';

export const WHATSAPP_NUMBER = '5549984112121';

/** Monta um link wa.me com texto pré-preenchido e corretamente codificado. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_CONFIG = {
  brandName: 'Tainá Pravato Arquitetura e Design',
  legalName: 'Taina Pravato Arquitetura Ltda',
  shortName: 'TAINÁ PRAVATO',
  tagline: 'ARQUITETURA & DESIGN',
  cnpj: '55.032.246/0001-37',
  foundedYear: 2019,
  phoneDisplay: '(49) 98411-2121',
  phoneE164: '+5549984112121',
  email: 'tainapravato.arq@gmail.com',
  instagramHandle: '@tainapravatoarquitetura',
  instagramUrl: 'https://www.instagram.com/tainapravatoarquitetura/',
  linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Tain%C3%A1%20Pravato',
  whatsappUrl:
    'https://wa.me/5549984112121?text=Ol%C3%A1%2C+Tain%C3%A1%21+Visitei+o+site+do+escrit%C3%B3rio+e+gostaria+de+conversar+sobre+um+projeto.',
  address: {
    street: 'R. Quintino Bocaiúva, 459D - Sala 02',
    district: 'Centro',
    city: 'Chapecó',
    state: 'SC',
    postalCode: '89801-112',
    full: 'R. Quintino Bocaiúva, 459D - Sala 02 - Centro, Chapecó - SC, CEP 89801-112',
  },
  mapsRouteUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('R. Quintino Bocaiúva, 459D - Sala 02 - Centro, Chapecó - SC, 89801-112'),
  rating: { value: '5.0', count: 13 },
} as const;

export const NAV_LINKS = [
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Premiações', href: '#premiacoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
] as const;

export const HERO = {
  eyebrow: 'ARQUITETURA CONTEMPORÂNEA & INTERIORES • CHAPECÓ - SC & SÃO PAULO',
  titleStart: 'Arquitetura para quem entende que luxo é viver em espaços feitos',
  titleEmphasis: 'exclusivamente',
  titleEnd: 'para você.',
  subheadline:
    'Projetos residenciais e corporativos sob medida que unem minimalismo contemporâneo, traços industriais e materiais naturais. Assinados por Tainá Pravato em Santa Catarina e São Paulo.',
  primaryCta: 'Iniciar Conversa de Projeto',
  secondaryCta: 'Explorar áreas de atuação',
  imageAlt:
    'Residência contemporânea com concreto aparente, brises de madeira natural e piscina ao entardecer, projeto de Tainá Pravato Arquitetura',
} as const;

export const CREDIBILITY = [
  { icon: 'star', label: '5.0 no Google (13 Avaliações)' },
  { icon: 'landmark', label: 'CASACOR SC 2025 & Núcleo D' },
  { icon: 'map-pin', label: 'Atuação em SC e SP' },
] as const;

export const PRESS_SECTION = {
  eyebrow: 'Autoridade premiada e publicada',
  title: 'Reconhecimento que nasce do rigor, não do ruído.',
  intro:
    'Premiada em concurso técnico, presente na CASACOR e publicada em veículos nacionais e internacionais de arquitetura e decoração.',
  casacor: {
    label: 'Participação oficial',
    title: 'CASACOR Santa Catarina 2025',
    text: 'Participação oficial na mostra de referência em arquitetura, design de interiores e paisagismo, com o olhar autoral de Tainá Pravato.',
  },
  contest: {
    label: 'Concurso Técnico Núcleo D',
    results: [
      { place: '1º', category: 'Living, Sala de Jantar e Home' },
      { place: '2º', category: 'Suíte / Dormitório' },
    ],
  },
  publications: {
    label: 'Publicações na imprensa',
    items: ['Casa e Jardim', 'CASA (Abril)', 'PLNDesign (internacional)'],
  },
} as const;

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  highlights: readonly string[];
  whatsappMessage: string;
}

export const SERVICES_SECTION = {
  eyebrow: 'Áreas de atuação',
  title: 'Do primeiro traço à entrega, cada decisão é desenhada para uma única pessoa: você.',
} as const;

export const SERVICES: readonly ServiceItem[] = [
  {
    number: '01',
    title: 'Arquitetura Residencial Sob Medida',
    description:
      'Residências contemporâneas concebidas do zero, onde conforto térmico, iluminação natural e conexão com a paisagem orientam cada implantação e cada abertura.',
    highlights: ['Estudo preliminar e 3D', 'Projeto executivo completo', 'Integração à paisagem'],
    whatsappMessage:
      'Olá, Tainá! Gostaria de conversar sobre Arquitetura Residencial Sob Medida. Pode me explicar como funciona o processo?',
  },
  {
    number: '02',
    title: 'Design de Interiores & Materialidade Natural',
    description:
      'Apartamentos e casas planejados em detalhe: livings, suítes e áreas sociais com marcenaria autoral e curadoria de madeira, pedra e concreto que envelhecem com dignidade.',
    highlights: ['Marcenaria autoral', 'Curadoria de materiais', 'Iluminação cênica'],
    whatsappMessage:
      'Olá, Tainá! Gostaria de conversar sobre Design de Interiores & Materialidade Natural para o meu espaço.',
  },
  {
    number: '03',
    title: 'Arquitetura Corporativa & Escritórios',
    description:
      'Escritórios e espaços comerciais de alto padrão que traduzem o posicionamento da marca em arquitetura, sem abrir mão da funcionalidade do dia a dia.',
    highlights: ['Identidade da marca no espaço', 'Fluxo e funcionalidade', 'Acabamento de alto padrão'],
    whatsappMessage:
      'Olá, Tainá! Gostaria de conversar sobre Arquitetura Corporativa & Escritórios para a minha empresa.',
  },
  {
    number: '04',
    title: 'Projetos à Distância & Atendimento SC / SP',
    description:
      'Metodologia estruturada de apresentação em 3D e detalhamento executivo que permite decidir com segurança, mesmo a centenas de quilômetros de Chapecó.',
    highlights: ['Apresentações em 3D', 'Reuniões online', 'Detalhamento executivo'],
    whatsappMessage:
      'Olá, Tainá! Gostaria de conversar sobre Projetos à Distância & Atendimento SC / SP. Moro fora de Chapecó.',
  },
];

export const ABOUT = {
  eyebrow: 'A arquiteta & a filosofia',
  title: 'Concreto, madeira e paisagem em equilíbrio, com precisão em cada detalhe.',
  paragraphs: [
    'Tainá Pravato atua desde 2019 com uma convicção simples: um projeto só é de alto padrão quando é feito sob medida para quem vai habitá-lo. Por isso, cada pessoa e cada terreno recebem um projeto próprio, nunca uma fórmula repetida.',
    'Sua assinatura equilibra linhas puras, concreto aparente, madeira natural, iluminação cênica e integração à paisagem. O resultado são ambientes atemporais, que continuam bonitos depois que a tendência passa.',
    'O acompanhamento é próximo e técnico, do estudo preliminar ao projeto executivo. Clientes descrevem essa postura com as mesmas palavras: criatividade e precisão nos detalhes.',
  ],
  principles: [
    { number: '2019', label: 'Atuação consolidada' },
    { number: 'SC · SP', label: 'Projetos residenciais e corporativos' },
    { number: '100%', label: 'Sob medida, sem projeto de catálogo' },
  ],
  imageAlt:
    'Fachada de concreto aparente com brises de madeira e iluminação interna acesa ao entardecer',
} as const;

export const REVIEWS = {
  eyebrow: 'Prova social verificada',
  title: 'Quem vive os projetos descreve em poucas palavras.',
  badge: '5.0 ★★★★★ (13 avaliações no Google)',
  items: [
    {
      quote: 'Tainá fez o projeto do meu Escritório, do meu lar.',
      context: 'Cliente de projeto corporativo',
    },
    {
      quote:
        'Arquiteta maravilhosa, extremamente profissional, criativa e impecável em cada detalhe!!! Fizemos o projeto do meu apartamento, ficou lindo demais...',
      context: 'Cliente de projeto residencial',
    },
  ],
  portfolioInvite:
    'Veja o portfólio completo e os bastidores dos projetos no Instagram e acompanhe a trajetória profissional no LinkedIn.',
} as const;

export const FAQ_SECTION = {
  eyebrow: 'Perguntas frequentes',
  title: 'Dúvidas comuns antes de começar um projeto.',
} as const;

export const FAQ_ITEMS = [
  {
    question: 'O escritório atende projetos fora de Chapecó, como em São Paulo?',
    answer:
      'Sim. Nossa sede fica no Centro de Chapecó, mas atendemos projetos residenciais e corporativos em toda Santa Catarina e em São Paulo, com apresentações em 3D e detalhamento executivo estruturados para o atendimento à distância.',
  },
  {
    question: 'Vocês desenvolvem tanto projetos residenciais quanto comerciais e escritórios?',
    answer:
      'Sim. Atuamos na arquitetura completa, do zero, e no design de interiores, tanto para residências e apartamentos quanto para escritórios corporativos e espaços comerciais.',
  },
  {
    question: 'Qual é a assinatura estética do escritório Tainá Pravato?',
    answer:
      'Combinamos minimalismo contemporâneo, traços industriais elegantes e materiais naturais como madeira e concreto, criando ambientes atemporais, com luz bem desenhada e integração à paisagem.',
  },
  {
    question: 'Como funciona o acompanhamento e o detalhamento do projeto?',
    answer:
      'Trabalhamos com acompanhamento próximo e precisão técnica em cada etapa, desde o estudo preliminar e as imagens em 3D até o projeto executivo, para que o que foi aprovado seja exatamente o que será construído.',
  },
  {
    question: 'O escritório possui estacionamento e acessibilidade para atendimento presencial?',
    answer:
      'Sim. Nossa sala na R. Quintino Bocaiúva, 459D - Sala 02, conta com entrada e estacionamento acessíveis para cadeirantes.',
  },
] as const;

export const LOCATION = {
  eyebrow: 'Localização, horários & canais diretos',
  title: 'Venha conhecer o escritório ou converse agora pelo WhatsApp.',
  accessibility: 'Entrada e estacionamento acessíveis para cadeirantes.',
  routeCta: 'Traçar Rota no Google Maps',
  hours: [
    { day: 'Segunda a Sexta', time: '08:00–12:00 e 13:30–18:30' },
    { day: 'Sábado', time: '09:00–12:00' },
    { day: 'Domingo', time: 'Fechado' },
  ],
} as const;

export const CLOSING = {
  title: 'Vamos projetar um espaço atemporal pensado exclusivamente para você',
  text: 'Conte o que você imagina. Na primeira conversa, entendemos o seu momento, o terreno ou o espaço e o caminho mais claro para o projeto.',
  cta: 'Agendar conversa pelo WhatsApp',
} as const;

export const JSON_LD_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Architect', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_CONFIG.brandName,
  legalName: SITE_CONFIG.legalName,
  url: SITE_URL,
  image: `${SITE_URL}/images/hero.jpg`,
  telephone: SITE_CONFIG.phoneE164,
  email: SITE_CONFIG.email,
  foundingDate: String(SITE_CONFIG.foundedYear),
  taxID: SITE_CONFIG.cnpj,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Quintino Bocaiúva, 459D - Sala 02 - Centro',
    addressLocality: 'Chapecó',
    addressRegion: 'SC',
    postalCode: '89801-112',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '13:30',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00',
    },
  ],
  openingHours: ['Mo-Fr 08:00-12:00 13:30-18:30', 'Sa 09:00-12:00'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '13',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'State', name: 'Santa Catarina' },
    { '@type': 'State', name: 'São Paulo' },
  ],
  sameAs: [SITE_CONFIG.instagramUrl, SITE_CONFIG.linkedinUrl],
  priceRange: '$$$',
  amenityFeature: {
    '@type': 'LocationFeatureSpecification',
    name: 'Entrada e estacionamento acessíveis para cadeirantes',
    value: true,
  },
};
