export const WHATSAPP_LINK = "https://wa.me/558694383365?text=Olá%2C%20gostaria%20de%20agendar%20um%20atendimento%20com%20a%20fisioterapeuta%20Joselma%20de%20Sousa";

export interface Specialty {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  text: string;
  rating: number;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const specialties: Specialty[] = [
  {
    id: "neurofuncional",
    title: "Neurofuncional",
    description: "Recuperação de funções neurológicas após AVC, traumatismos ou doenças degenerativas.",
    benefits: [
      "Recuperação de movimentos",
      "Melhora do equilíbrio",
      "Reabilitação da marcha",
      "Ganho de independência"
    ],
    image: "FISIO_NEURO_6"
  },
  {
    id: "traumato-ortopedica",
    title: "Traumato-Ortopédica",
    description: "Tratamento de lesões musculares, articulares e ósseas para recuperação completa.",
    benefits: [
      "Alívio de dores crônicas",
      "Recuperação pós-cirúrgica",
      "Fortalecimento muscular",
      "Retorno às atividades"
    ],
    image: "FISIO_OMBRO_7"
  },
  {
    id: "saude-idoso",
    title: "Saúde do Idoso",
    description: "Cuidado especializado para promover qualidade de vida e autonomia na terceira idade.",
    benefits: [
      "Prevenção de quedas",
      "Melhora da mobilidade",
      "Fortalecimento ósseo",
      "Qualidade de vida"
    ],
    image: "IDOSO_FISIO_2"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    condition: "Recuperação de AVC",
    text: "Após o AVC, achei que nunca mais conseguiria andar normalmente. Com o tratamento da Joselma, recuperei minha independência e hoje caminho sem auxílio. Sou muito grata!",
    rating: 5
  },
  {
    id: "2",
    name: "João Santos",
    condition: "Dor crônica no ombro",
    text: "Sofria com dores no ombro há anos. O atendimento humanizado e as técnicas aplicadas pela Joselma me devolveram a qualidade de vida. Recomendo de olhos fechados!",
    rating: 5
  },
  {
    id: "3",
    name: "Ana Costa",
    condition: "Reabilitação pós-cirúrgica",
    text: "A dedicação e o cuidado da Joselma foram fundamentais na minha recuperação após a cirurgia no joelho. Hoje estou sem dores e voltei às minhas atividades normais.",
    rating: 5
  }
];

export const differentials: Differential[] = [
  {
    id: "1",
    title: "Atendimento Individualizado",
    description: "Cada paciente é único. Desenvolvemos um plano de tratamento personalizado para suas necessidades específicas.",
    icon: "user"
  },
  {
    id: "2",
    title: "Foco na Qualidade de Vida",
    description: "Nosso objetivo vai além da recuperação física: buscamos devolver sua autonomia e bem-estar completo.",
    icon: "heart"
  },
  {
    id: "3",
    title: "Recuperação Funcional Real",
    description: "Trabalhamos com metas concretas e mensuráveis para que você volte a realizar suas atividades do dia a dia.",
    icon: "target"
  },
  {
    id: "4",
    title: "Cuidado Humanizado",
    description: "Acolhimento, empatia e respeito em cada sessão. Você não é apenas um paciente, é parte de uma jornada de transformação.",
    icon: "handshake"
  }
];