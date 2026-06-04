import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectPage from '@/components/Portfolio/ProjectPage'
import { portfolioData } from '@/components/Portfolio/PortfolioData'

/** Route props delivered by the App Router for a static portfolio page. */
type PortfolioRouteProps = {
  /** Promise-wrapped dynamic route parameters supplied by Next. */
  params: Promise<{
    /** Portfolio project slug from the URL. */
    slug: string
  }>
}

/** Finds a portfolio project by its stable URL slug. */
const getProjectBySlug = (slug: string) =>
  portfolioData.projects.find((project) => project.slug === slug)

/** Builds the static portfolio routes from the typed project data. */
export const generateStaticParams = () =>
  portfolioData.projects.map((project) => ({ slug: project.slug }))

/** Creates metadata for each generated portfolio project route. */
export const generateMetadata = async ({
  params,
}: PortfolioRouteProps): Promise<Metadata> => {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
  }
}

/** Renders the static portfolio project route and adjacent project navigation. */
const PortfolioProjectRoute = async ({ params }: PortfolioRouteProps) => {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = portfolioData.projects.findIndex(
    (item) => item.slug === slug
  )
  const prevProject =
    currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < portfolioData.projects.length - 1
      ? portfolioData.projects[currentIndex + 1]
      : null

  return (
    <ProjectPage
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  )
}

export default PortfolioProjectRoute
