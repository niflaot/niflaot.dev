'use client'

import { useEffect, useState, type ReactNode } from 'react'
import {
  Cursor,
  Footer,
  Header,
  LoadingScreen,
  ScrollToTop,
} from '@/components'

/** Props for the client-side application chrome wrapper. */
type AppShellProps = {
  /** Routed page content rendered between header and footer. */
  children: ReactNode
}

/** Mounts browser-only UI around routed page content after hydration. */
const AppShell = ({ children }: AppShellProps) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  if (!isReady) {
    return <LoadingScreen />
  }

  return (
    <>
      <Cursor />
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default AppShell
