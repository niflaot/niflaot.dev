import {
  About,
  Contact,
  Education,
  Hero,
  Portfolio,
  Services,
} from '@/components'

/** Renders the portfolio landing page sections in their intended order. */
const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Education />
      <Contact />
    </main>
  )
}

export default HomePage
