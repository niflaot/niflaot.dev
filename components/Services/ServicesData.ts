/** Service card rendered in the technical focus section. */
export type Service = {
  /** Two-digit display order. */
  number: string
  /** Bootstrap icon class names shown beside the title. */
  bootstrapIcon: string
  /** Service title. */
  title: string
  /** Short service description. */
  description: string
}

/** Technical focus section heading and capability cards. */
export type ServicesData = {
  /** Section heading copy. */
  mainData: {
    /** Eyebrow heading. */
    title: string
    /** Heading prefix. */
    title2: string
    /** Highlighted heading suffix. */
    title2Span: string
  }
  /** Ordered capability cards. */
  services: Service[]
}

/** Typed technical focus content used by the portfolio section. */
export const servicesData: ServicesData = {
  mainData: {
    title: 'Technical Focus',
    title2: 'What I',
    title2Span: 'Build',
  },
  services: [
    {
      number: '01',
      bootstrapIcon: 'bi bi-hdd-network',
      title: 'Backend Engineering',
      description:
        'I build the logic, structure, and services behind digital products, focusing on reliable systems that support real business workflows.',
    },
    {
      number: '02',
      bootstrapIcon: 'bi bi-window',
      title: 'Frontend Development',
      description:
        'I create web and mobile interfaces that are clear, responsive, and connected to meaningful product experiences.',
    },
    {
      number: '03',
      bootstrapIcon: 'bi bi-diagram-3',
      title: 'Product-Oriented Development',
      description:
        'I turn ideas and requirements into functional software, balancing technical decisions, user needs, and practical execution.',
    },
  ],
}
