import Link from 'next/link'
import { contactData } from './ContactData'

/** Renders static contact details for the portfolio without any form handling. */
const Contact = () => {
  return (
    <div id='contact' className='section pb-0'>
      <div className='container'>
        <div className='row g-4 g-xl-5 align-items-end'>
          <div className='col-12 col-xl-4'>
            <span className='title-heading text-white-04'>Contact</span>
            <h1 className='display-3 fw-medium mb-0'>
              Let&apos;s <span className='text-gradient'>Talk</span>
            </h1>
          </div>
          <div className='col-12 col-xl-8'>
            <div className='row g-4 g-lg-5 text-xl-end'>
              <div className='col-12 col-md-6'>
                <h6 className='sm-heading'>Email:</h6>
                <h3 className='mb-0'>
                  <Link
                    className='link-hover'
                    href={`mailto:${contactData.mainData.email}`}
                  >
                    <span data-text={contactData.mainData.email}>
                      {contactData.mainData.email}
                    </span>
                  </Link>
                </h3>
              </div>
              <div className='col-12 col-md-6'>
                <h6 className='sm-heading'>WhatsApp:</h6>
                <h3 className='mb-0'>
                  <Link
                    className='link-hover'
                    href={contactData.mainData.whatsappUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span data-text={contactData.mainData.whatsappNumber}>
                      {contactData.mainData.whatsappNumber}
                    </span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
