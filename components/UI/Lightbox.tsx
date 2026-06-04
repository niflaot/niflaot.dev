'use client'

import Image, { type StaticImageData } from 'next/image'

/** Props for rendering an expanded static image preview. */
type LightboxProps = {
  /** Static image displayed in the overlay. */
  image: StaticImageData
  /** Callback that closes the overlay. */
  closeLightbox: () => void
}

/** Renders an image lightbox overlay and close controls. */
const Lightbox = ({ image, closeLightbox }: LightboxProps) => {
  return (
    <div className='mfp-bg mfp-ready' onClick={closeLightbox}>
      <div className='mfp-wrap mfp-close-btn-in mfp-ready'>
        <div className='mfp-container mfp-s-ready mfp-image-holder'>
          <div className='mfp-content'>
            <div className='mfp-figure'>
              <button
                className='mfp-close'
                type='button'
                onClick={closeLightbox}
              >
                ×
              </button>
              <Image
                src={image}
                alt='Expanded lightbox image'
                placeholder='blur'
                style={{ opacity: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
