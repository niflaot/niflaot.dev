/** Single menu item rendered by the header navigation. */
export type HeaderNavigationItem = {
  /** Visible menu label. */
  label: string
  /** Section anchor href. */
  href: string
}

/** Header copy and brand data rendered by the navigation component. */
export type HeaderData = {
  /** Text used as the header logo and home link label. */
  logo: string
  /** Download URL for the public CV file. */
  cvHref: string
  /** Ordered navigation items for active landing-page sections. */
  navigation: HeaderNavigationItem[]
}

/** Typed header content used by the reusable header component. */
export const headerData: HeaderData = {
  logo: 'niflaot.dev',
  cvHref: '/ian-castano-cv.pdf',
  navigation: [
    {
      label: 'About',
      href: '/#about',
    },
    {
      label: 'Focus',
      href: '/#services',
    },
    {
      label: 'Work',
      href: '/#portfolio',
    },
    {
      label: 'Education',
      href: '/#education',
    },
    {
      label: 'Contact',
      href: '/#contact',
    },
  ],
}
