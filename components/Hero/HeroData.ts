/** Hero section content rendered at the top of the landing page. */
export type HeroData = {
  /** Primary hero copy. */
  mainData: {
    /** Name displayed as the oversized hero heading. */
    name: string
  }
}

/** Typed hero content used by the reusable hero component. */
export const heroData: HeroData = {
  mainData: {
    name: 'Ian Castaño',
  },
}
