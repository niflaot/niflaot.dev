/** Single education entry rendered in the education section. */
export type EducationEntry = {
  /** Institution, program, or learning track title. */
  title: string
  /** Display date range for the education entry. */
  period: string
  /** Short explanation of the learning focus. */
  description: string
}

/** Education section copy and card collection. */
export type EducationData = {
  /** Section heading copy. */
  mainData: {
    /** Eyebrow heading. */
    title: string
    /** Heading prefix. */
    title2: string
    /** Highlighted heading suffix. */
    title2Span: string
  }
  /** Ordered education cards. */
  education: EducationEntry[]
}

/** Typed education content used by the education section. */
export const educationData: EducationData = {
  mainData: {
    title: 'Education',
    title2: 'Learning',
    title2Span: ' Path',
  },
  education: [
    {
      title: 'Jorge Tadeo Lozano University',
      period: '2018 - 2022',
      description:
        'Interactive Design degree focused on experience design through technological products, digital interfaces, and structured product thinking.',
    },
    {
      title: 'Advanced CSS Bootcamp',
      period: '2019',
      description:
        'Specialized training in visual implementation, responsive layouts, and frontend styling for more polished digital product interfaces.',
    },
    {
      title: 'MEAN Stack Bootcamp',
      period: '2017',
      description:
        'Early full-stack web development training that introduced application structure, JavaScript, backend logic, and database-driven product development.',
    },
  ],
}
