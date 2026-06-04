import type { SwiperOptions } from 'swiper/types'

/** Shared autoplay behavior for carousel components. */
export const sliderAutoplay: NonNullable<SwiperOptions['autoplay']> = {
  delay: 2500,
  disableOnInteraction: false,
}

/** Shared responsive breakpoints for two-column content carousels. */
export const dualColumnBreakpoints: NonNullable<SwiperOptions['breakpoints']> =
  {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }

/** Responsive breakpoints tuned for the client logo carousel. */
export const clientLogoBreakpoints: NonNullable<SwiperOptions['breakpoints']> =
  {
    640: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
