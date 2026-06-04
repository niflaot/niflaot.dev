'use client'

import { useEffect, useState, type MouseEvent } from 'react'

/** Renders a scroll-to-top control after the page is scrolled. */
const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 700)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`scrolltotop ${showScroll ? 'show' : ''}`}>
      <a
        className='button-circle'
        href='#'
        onClick={scrollToTop}
        aria-label='Scroll to top'
      >
        <i className='bi bi-arrow-up' />
        <i className='bi bi-arrow-up' />
      </a>
    </div>
  )
}

export default ScrollToTop
