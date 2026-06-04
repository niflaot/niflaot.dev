import { educationData } from './EducationData'

/** Renders education history from typed education data. */
const Education = () => {
  return (
    <div id='education' className='section pb-0'>
      <div className='container'>
        <div className='row g-4 g-xl-5'>
          <div className='col-12 col-xl-4'>
            <span className='title-heading text-white-04'>
              {educationData.mainData.title}
            </span>
            <h1 className='display-3 fw-medium mb-0'>
              {educationData.mainData.title2}
              <span className='text-gradient'>
                {educationData.mainData.title2Span}
              </span>
            </h1>
          </div>
          <div className='col-12 col-xl-8'>
            <div className='row g-4'>
              {educationData.education.map((item, index) => (
                <div key={`${item.title}-${index}`} className='col-12 col-md-6'>
                  <div className='fancy-box'>
                    <h4>{item.title}</h4>
                    <h6 className='sm-heading text-white-04 mb-2'>
                      {item.period}
                    </h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
