'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { Lightbox } from '@/components'
import type { Project } from '@/types/content'

/** Props required to render a portfolio project detail page. */
type ProjectPageProps = {
  /** Portfolio project being rendered. */
  project: Project
  /** Previous project in the static project order, if any. */
  prevProject: Project | null
  /** Next project in the static project order, if any. */
  nextProject: Project | null
}

/** Extracts the final word so headings can emphasize it with gradient styling. */
const getLastWord = (value: string) => {
  const words = value.trim().split(' ')
  return words[words.length - 1] ?? value
}

/** Detects whether a project link should open outside the portfolio site. */
const isExternalUrl = (value: string) => value.startsWith('http')

/** Renders a project with service metadata, media lightbox, and navigation. */
const ProjectPage = ({
  project,
  prevProject,
  nextProject,
}: ProjectPageProps) => {
  const [lightboxImage, setLightboxImage] = useState<StaticImageData | null>(
    null
  )
  const lastWord = getLastWord(project.title)
  const serviceSummary = project.services.map((item) => item.name).join(' / ')
  const projectLinks = project.projectLinks ?? []

  return (
    <main>
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
              <h1 className='display-3 fw-medium'>
                {project.title.replace(lastWord, '')}{' '}
                <span className='text-gradient'>{lastWord}</span>
              </h1>
              <p>{project.description}</p>
            </div>
          </div>
          <div className='row g-4 mt-5 justify-content-between'>
            <div className='col-12 col-md-4'>
              <div className='fancy-box'>
                <h6 className='sm-heading mb-1'>Services:</h6>
                <p>{serviceSummary}</p>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='fancy-box'>
                <h6 className='sm-heading mb-1'>Client:</h6>
                <p>{project.client}</p>
              </div>
            </div>
            {projectLinks.length > 0 ? (
              <div className='col-12 col-md-4'>
                <div className='fancy-box'>
                  <h6 className='sm-heading mb-1'>Project links:</h6>
                  {projectLinks.map((item) => {
                    const opensInNewTab = isExternalUrl(item.url)

                    return (
                      <p key={`${project.slug}-${item.title}`}>
                        <Link
                          className='link-hover'
                          href={item.url}
                          target={opensInNewTab ? '_blank' : undefined}
                          rel={opensInNewTab ? 'noreferrer' : undefined}
                        >
                          <span data-text={item.title}>{item.title}</span>
                        </Link>
                      </p>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className='section-box'>
        <div className='section-sm bg-dark border-radius-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </div>
            <div className='row g-4 g-lg-5 mt-1'>
              <div className='col-12'>
                <div className='project-image-ratio border-radius'>
                  <Image
                    src={project.mainImageWide}
                    alt={project.title}
                    placeholder='blur'
                  />
                </div>
              </div>
              {project.images.map((item, index) => (
                <div
                  key={`${project.slug}-image-${index}`}
                  className='col-12 col-md-6'
                >
                  <button
                    type='button'
                    className='lightbox-trigger'
                    onClick={() => setLightboxImage(item.image)}
                  >
                    <span className='lightbox-image-box border-radius'>
                      <Image
                        src={item.image}
                        alt={project.title}
                        placeholder='blur'
                      />
                      <span className='lightbox-icon'>
                        <i className='bi bi-arrows-fullscreen' />
                      </span>
                    </span>
                  </button>
                </div>
              ))}
              <div className='row mt-5'>
                <div className='col-6'>
                  {prevProject ? (
                    <Link
                      href={`/portfolio/${prevProject.slug}`}
                      className='button'
                    >
                      <span data-text='Prev Project'>Prev Project</span>
                    </Link>
                  ) : (
                    <button
                      className='button btn-disabled'
                      type='button'
                      disabled
                    >
                      <span data-text='Prev Project'>Prev Project</span>
                    </button>
                  )}
                </div>
                <div className='col-6 text-end'>
                  {nextProject ? (
                    <Link
                      href={`/portfolio/${nextProject.slug}`}
                      className='button'
                    >
                      <span data-text='Next Project'>Next Project</span>
                    </Link>
                  ) : (
                    <button
                      className='button btn-disabled'
                      type='button'
                      disabled
                    >
                      <span data-text='Next Project'>Next Project</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {lightboxImage ? (
        <Lightbox
          image={lightboxImage}
          closeLightbox={() => setLightboxImage(null)}
        />
      ) : null}
    </main>
  )
}

export default ProjectPage
