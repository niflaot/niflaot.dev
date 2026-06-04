import HeroAvatar from '@/public/images/profile.jpeg'
import type { IconLink, NamedItem } from '@/types/content'

/** Highlighted profile metric rendered in the right column of the about section. */
type AboutMetric = {
  /** Smaller uppercase label shown above the metric value. */
  label: string
  /** Large metric value shown below the label. */
  value: string
}

/** About section profile content, skills, links, and metrics. */
export type AboutData = {
  /** Primary biography and profile image content. */
  mainData: {
    /** Imported profile image displayed in the about section. */
    heroAvatar: typeof HeroAvatar
    /** Biography paragraphs rendered in order. */
    biographyParagraphs: string[]
  }
  /** Skills rendered as inline labels. */
  skills: NamedItem[]
  /** Social links rendered as icon buttons. */
  connect: IconLink[]
  /** Highlighted professional metrics rendered in the right column. */
  metrics: AboutMetric[]
}

/** Typed about content used by the profile section. */
export const aboutData: AboutData = {
  mainData: {
    heroAvatar: HeroAvatar,
    biographyParagraphs: [
      'I’m a Full Stack Developer focused on building reliable backend services, clean frontend interfaces, and API-driven integrations.',
      'I work with Go, Node.js, TypeScript, React Native, Angular, and Firebase to create digital products that connect systems, improve workflows, and solve real operational problems.',
    ],
  },
  skills: [
    { name: 'Frontend' },
    { name: 'Backend' },
    { name: 'APIs' },
    { name: 'Go' },
    { name: 'Node.js' },
    { name: 'TypeScript' },
    { name: 'React Native' },
    { name: 'Angular' },
    { name: 'Firebase' },
  ],
  connect: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ian-castaño-1711a5190/',
      bootstrapIcon: 'bi bi-linkedin',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/niflaot',
      bootstrapIcon: 'bi bi-github',
    },
    {
      label: 'WhatsApp',
      url: 'https://wa.me/573057901484',
      bootstrapIcon: 'bi bi-whatsapp',
    },
    {
      label: 'Email',
      url: 'mailto:niflaot.dev@gmail.com',
      bootstrapIcon: 'bi bi-envelope',
    },
  ],
  metrics: [
    {
      label: 'Years of Experience',
      value: '4+',
    },
    {
      label: 'Frontend + Backend',
      value: 'Full Stack',
    },
    {
      label: 'Integrations',
      value: 'API-Driven',
    },
  ],
}
