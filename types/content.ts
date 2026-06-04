import type { StaticImageData } from 'next/image'

/** Reusable named label used by tags, services, skills, and categories. */
export type NamedItem = {
  /** Human-readable label shown in section lists. */
  name: string
}

/** Reusable social or icon-backed link used by profile sections. */
export type IconLink = {
  /** Accessible label describing the external profile. */
  label: string
  /** Destination URL for the link. */
  url: string
  /** Bootstrap icon class names rendered for the link. */
  bootstrapIcon: string
}

/** Reusable static image wrapper used by lightbox galleries. */
export type ImageItem = {
  /** Imported Next.js static image asset. */
  image: StaticImageData
}

/** Reusable titled link shown in project metadata. */
export type LinkItem = {
  /** Text displayed for the link. */
  title: string
  /** Destination URL for the link. */
  url: string
}

/** Site-level metadata consumed by the App Router layout. */
export type SiteMetadata = {
  /** Browser and search title for the website. */
  websiteTitle: string
  /** Search description shared by the home page. */
  description: string
  /** Comma-separated search keywords. */
  keywords: string
  /** Public favicon URL. */
  favicon: string
}

/** Fully typed portfolio project model used by list and detail routes. */
export type Project = {
  /** Project title. */
  title: string
  /** Stable URL segment for the project. */
  slug: string
  /** Search and hero summary for the project. */
  description: string
  /** Comma-separated search keywords for the project. */
  keywords: string
  /** Services delivered for the project. */
  services: NamedItem[]
  /** Client display name. */
  client: string
  /** Optional external project links shown in project metadata. */
  projectLinks?: LinkItem[]
  /** HTML content rendered in the project body. */
  content: string
  /** Card image shown in the portfolio carousel. */
  mainImage: StaticImageData
  /** Wide image shown in the project detail page. */
  mainImageWide: StaticImageData
  /** Gallery images available to the lightbox. */
  images: ImageItem[]
  /** Category labels shown on the project card. */
  categories: NamedItem[]
}
