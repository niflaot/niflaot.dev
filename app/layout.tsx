import type { Metadata, Viewport } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/theme.scss'
import '@/styles/all.min.css'
import AppShell from '@/components/AppShell/AppShell'
import { mainData } from '@/lib/data'

/** Global metadata shared by every App Router route. */
export const metadata: Metadata = {
  title: mainData.websiteTitle,
  description: mainData.description,
  keywords: mainData.keywords,
  icons: {
    icon: mainData.favicon,
    shortcut: mainData.favicon,
  },
}

/** Viewport configuration for responsive rendering. */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

/** Props passed to the root layout by the App Router. */
type RootLayoutProps = {
  /** Routed page content rendered inside the global shell. */
  children: React.ReactNode
}

/** Wraps all routes with global styles, metadata, and shared app chrome. */
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}

export default RootLayout
