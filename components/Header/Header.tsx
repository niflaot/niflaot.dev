'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { headerData } from './HeaderData'

/** Renders the fixed header and client-side navigation menu. */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='header'>
      <div className='container-fluid'>
        <div className='header-wrapper'>
          <div className='header-logo'>
            <h2>
              <Link href='/'>{headerData.logo}</Link>
            </h2>
          </div>
          <div className='header-nav'>
            <Link
              className='button button-sm button-dot me-2 me-lg-3'
              href={headerData.cvHref}
              download
            >
              <span data-text='Download CV'>Download CV</span>
            </Link>
            <button
              type='button'
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className='button button-sm button-dot button-white'
            >
              <span data-text='Menu'>Menu</span>
            </button>
            <div
              ref={menuRef}
              className={`nav-box ${isMenuOpen ? 'show' : ''}`}
            >
              <ul className='nav'>
                {headerData.navigation.map((item) => (
                  <li className='nav-item' key={item.href}>
                    <Link
                      className='nav-link'
                      href={item.href}
                      onClick={closeMenu}
                    >
                      <i className='bi bi-arrow-right' />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
