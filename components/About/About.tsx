import Image from 'next/image'
import Link from 'next/link'
import { aboutData } from './AboutData'

/** Renders biography, skills, social links, and summary metrics. */
const About = () => {
  return (
    <div className='container'>
      <div className='row g-4 g-md-5'>
        <div className='col-12 col-lg-4 order-lg-2 text-center'>
          <div className='hero-avatar'>
            <Image
              src={aboutData.mainData.heroAvatar}
              alt='hero avatar'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='col-12 col-lg-4 order-lg-1'>
          <div className='row g-4 g-lg-5'>
            <div className='col-12 col-md-4 col-lg-12'>
              <h6 className='sm-heading'>Biography</h6>
              {aboutData.mainData.biographyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className='col-6 col-md-4 col-lg-12'>
              <h6 className='sm-heading'>Skills</h6>
              <ul className='list-inline-dot'>
                {aboutData.skills.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className='col-6 col-md-4 col-lg-12'>
              <h6 className='sm-heading'>Connect</h6>
              <ul className='list-inline'>
                {aboutData.connect.map((item) => (
                  <li key={item.label}>
                    <Link
                      className='button-circle button-circle-sm'
                      href={item.url}
                      aria-label={item.label}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className={item.bootstrapIcon} />
                      <i className={item.bootstrapIcon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-12 col-lg-4 order-lg-3 text-lg-end'>
          <div className='row g-4 g-lg-5'>
            {aboutData.metrics.map((metric) => (
              <div key={metric.label} className='col-4 col-lg-12'>
                <h6 className='sm-heading'>{metric.label}</h6>
                <h1 className='fw-light display-4 mb-0 line-height-110'>
                  {metric.value}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
