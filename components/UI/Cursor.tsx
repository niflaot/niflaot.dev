'use client'

import { useEffect, useRef } from 'react'

/** Renders and manages the custom cursor used across interactive elements. */
const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current

    if (!cursor) {
      return undefined
    }

    const mouseElements = document.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, .cursor-link'
    )

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.pageX}px`
      cursor.style.top = `${event.pageY}px`
    }

    const handleMouseEnter = () => {
      cursor.classList.add('scale-cursor')
    }

    const handleMouseLeave = () => {
      cursor.classList.remove('scale-cursor')
    }

    document.addEventListener('mousemove', handleMouseMove)
    mouseElements.forEach((mouseElement) => {
      mouseElement.addEventListener('mouseenter', handleMouseEnter)
      mouseElement.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      mouseElements.forEach((mouseElement) => {
        mouseElement.removeEventListener('mouseenter', handleMouseEnter)
        mouseElement.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return <div id='cursor' ref={cursorRef} />
}

export default Cursor
