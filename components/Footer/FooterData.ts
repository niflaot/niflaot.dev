/** Footer copy rendered below every route. */
export type FooterData = {
  /** Brand or author name shown in the footer. */
  name: string
  /** Copyright suffix displayed after the author name. */
  copyrightText: string
}

/** Typed footer content used by the reusable footer component. */
export const footerData: FooterData = {
  name: 'Ian Castaño',
  copyrightText: 'All rights reserved.',
}
