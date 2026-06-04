import { footerData } from './FooterData'

/** Renders copyright text with the current year. */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='py-4 py-lg-5 text-center'>
      <p>
        &copy; {currentYear} {footerData.name}. {footerData.copyrightText}
      </p>
    </div>
  )
}

export default Footer
