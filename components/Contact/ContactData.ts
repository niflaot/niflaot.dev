/** Contact section content and display labels. */
export type ContactData = {
  /** Primary contact details shown in the portfolio contact section. */
  mainData: {
    /** Section label. */
    title: string
    /** Heading prefix. */
    title2: string
    /** Highlighted heading suffix. */
    title2Span: string
    /** Email address displayed to visitors. */
    email: string
    /** WhatsApp number displayed to visitors. */
    whatsappNumber: string
    /** WhatsApp click-to-chat URL. */
    whatsappUrl: string
  }
}

/** Typed contact content used by the contact section. */
export const contactData: ContactData = {
  mainData: {
    title: 'Contact',
    title2: 'Let\u0027s',
    title2Span: 'Talk',
    email: 'niflaotdev@gmail.com',
    whatsappNumber: '+57 305 790 1484',
    whatsappUrl: 'https://wa.me/573057901484',
  },
}
