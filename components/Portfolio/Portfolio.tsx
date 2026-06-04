'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'
import { portfolioData } from './PortfolioData'
import { dualColumnBreakpoints, sliderAutoplay } from '@/lib/swiper'

/** Renders the project carousel and links each slide to its static project page. */
const Portfolio = () => {
  /** Imperative Swiper instance used by the custom carousel buttons. */
  const sliderRef = useRef<SwiperInstance | null>(null)

  return (
    <div id='portfolio' className='section-box'>
      <div className='section-sm bg-dark border-radius-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
              <span className='title-heading text-white-04'>
                {portfolioData.mainData.title}
              </span>
              <h1 className='display-3 fw-medium'>
                {portfolioData.mainData.title2}{' '}
                <span className='text-gradient'>
                  {portfolioData.mainData.title2Span}
                </span>
              </h1>
              <p>{portfolioData.mainData.description}</p>
              <div className='mt-4'>
                <button
                  className='swiper-portfolio-prev button-circle cursor-link'
                  type='button'
                  onClick={() => sliderRef.current?.slidePrev()}
                  aria-label='Prev Slide'
                >
                  <i className='bi bi-arrow-left' />
                  <i className='bi bi-arrow-left' />
                </button>
                <button
                  className='swiper-portfolio-next button-circle cursor-link'
                  type='button'
                  onClick={() => sliderRef.current?.slideNext()}
                  aria-label='Next Slide'
                >
                  <i className='bi bi-arrow-right' />
                  <i className='bi bi-arrow-right' />
                </button>
              </div>
            </div>
          </div>
          <Swiper
            onSwiper={(swiper) => {
              sliderRef.current = swiper
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={dualColumnBreakpoints}
            autoplay={sliderAutoplay}
            modules={[Autoplay]}
            className='portfolio-slider mt-4 mt-lg-5'
          >
            {portfolioData.projects.map((project) => (
              <SwiperSlide key={project.slug}>
                <div className='portfolio-box'>
                  <div className='portfolio-img'>
                    <Link href={`/portfolio/${project.slug}`}>
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        placeholder='blur'
                      />
                    </Link>
                  </div>
                  <div className='pt-4'>
                    <ul className='list-inline-dot sm-heading text-white mb-2'>
                      {project.categories.map((category, index) => (
                        <li key={`${project.slug}-${category.name}-${index}`}>
                          <Link
                            className='link-hover'
                            href={`/portfolio/${project.slug}`}
                          >
                            <span data-text={category.name}>
                              {category.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <h2>
                      <Link
                        className='portfolio-caption'
                        href={`/portfolio/${project.slug}`}
                      >
                        <i className='bi bi-arrow-right' />
                        {project.title}
                      </Link>
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
