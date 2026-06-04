import CoccoImage from '@/public/images/portfolio/cocco.png'
import AstrocubeImage from '@/public/images/portfolio/ac.png'
import GobernemosImage from '@/public/images/portfolio/gobernemos.jpg'
import OrviboImage from '@/public/images/portfolio/orvibo.png'
import PixelServerImage from '@/public/images/portfolio/pixel-server.jpeg'
import type { Project } from '@/types/content'

/** Portfolio section heading and static project collection. */
type PortfolioData = {
  /** Section heading copy shown above the portfolio carousel. */
  mainData: {
    /** Eyebrow heading. */
    title: string
    /** Heading prefix. */
    title2: string
    /** Highlighted heading suffix. */
    title2Span: string
    /** Introductory paragraph. */
    description: string
  }
  /** Ordered projects used by the carousel and static project routes. */
  projects: Project[]
}

/** Typed portfolio content used by the project carousel and generated project pages. */
export const portfolioData: PortfolioData = {
  mainData: {
    title: 'Case Studies',
    title2: 'Selected',
    title2Span: 'Work',
    description:
      'A focused collection of product, platform, and interface work where I connected design decisions with functional software delivery.',
  },
  projects: [
    {
      title: 'Pixel Server',
      slug: 'pixel-server',
      description:
        'A Go backend and public packet-protocol specification for Nitro-based virtual-world clients, focused on structured networking and maintainable realtime infrastructure.',
      keywords:
        'go backend, packet protocol, websocket server, realtime infrastructure',
      services: [
        { name: 'Go Backend' },
        { name: 'Protocol Design' },
        { name: 'Realtime Systems' },
      ],
      client: 'Own project',
      projectLinks: [
        {
          title: 'Server Repository',
          url: 'https://github.com/niflaot/pixel-server',
        },
        {
          title: 'Protocol Repository',
          url: 'https://github.com/niflaot/pixel-protocol',
        },
      ],
      content:
        '<p>Pixel Server is a personal backend engineering project for realtime virtual-world infrastructure built around Nitro-based game clients. The implementation separates the server runtime from the protocol specification so packet behavior, connection flows, and message definitions can be maintained with a clearer source of truth.</p><p>The server side focuses on Go, WebSocket communication, persistence, configuration, and operational building blocks for a scalable networked experience. The protocol side documents packet definitions through a generated specification workflow, making the project easier to reason about, test, and extend over time.</p>',
      mainImage: PixelServerImage,
      mainImageWide: PixelServerImage,
      images: [],
      categories: [{ name: 'Go Backend' }, { name: 'Protocol' }],
    },
    {
      title: 'Cocco Panel',
      slug: 'cocco-panel',
      description:
        'An internal production platform designed to organize product data, technical sheets, materials, imagery, and cost information for a children\u0027s accessories brand.',
      keywords:
        'operations platform, product data, dashboard, production management',
      services: [
        { name: 'Operations Platform' },
        { name: 'Dashboard UX' },
        { name: 'Data Workflows' },
      ],
      client: 'Cocco',
      content:
        '<p>Cocco Panel was created to bring production knowledge into one structured workspace. The platform focused on product records, material usage, molds, design references, images, technical sheets, and cost visibility for daily operational decisions.</p><p>My work translated real production requirements into a clean interface and reusable workflows, making the system easier to understand for non-technical users while keeping the underlying information structured for future backend growth.</p>',
      mainImage: CoccoImage,
      mainImageWide: CoccoImage,
      images: [],
      categories: [{ name: 'Operations Platform' }, { name: 'Dashboard' }],
    },
    {
      title: 'Astrocube Network',
      slug: 'astrocube-network',
      description:
        'A former online game community whose archived GitHub organization now works as a public showcase of the platform, backend, and integration work built around the project.',
      keywords:
        'backend systems, community platform, github showcase, integrations',
      services: [
        { name: 'Platform Engineering' },
        { name: 'Backend Systems' },
        { name: 'API Integrations' },
      ],
      client: 'Former community',
      projectLinks: [
        {
          title: 'GitHub Organization',
          url: 'https://github.com/astrocube',
        },
      ],
      content:
        '<p>Astrocube Network was a former online game community with multiple connected software pieces behind its operations. After the community closed, its public GitHub organization remained useful as a portfolio showcase for the workers and contributors who built its systems.</p><p>My work focused on the engineering side of that ecosystem: a frontend experience for community members, backend services for operational workflows, and integrations between web accounts, permissions, penalties, appeals, forums, store features, and player profiles.</p>',
      mainImage: AstrocubeImage,
      mainImageWide: AstrocubeImage,
      images: [],
      categories: [{ name: 'Platform Engineering' }, { name: 'Backend' }],
    },
    {
      title: 'Gobernemos',
      slug: 'gobernemos',
      description:
        'A civic participation product concept for Colombia built around proposals, discussion, voting, and the operational flow needed to surface relevant community ideas.',
      keywords: 'civic platform, mobile app, product flow, code quality',
      services: [
        { name: 'Civic Platform' },
        { name: 'Mobile Features' },
        { name: 'Code Quality' },
      ],
      client: 'Gobernemos',
      content:
        '<p>Gobernemos explored how a mobile product could make civic participation more practical. The experience centered on creating proposals, discussing public needs, voting on ideas, and organizing the strongest requests so they could be evaluated with more context.</p><p>My role combined implementation support, product supervision, code-quality review, and feature integration. The focus was not only building screens, but keeping the product logic understandable, consistent, and aligned with the participation workflow.</p>',
      mainImage: GobernemosImage,
      mainImageWide: GobernemosImage,
      images: [],
      categories: [{ name: 'Civic Platform' }, { name: 'Mobile Product' }],
    },
    {
      title: 'Orvibo Revolution',
      slug: 'orvibo-revolution',
      description:
        'A smart-home ecosystem concept exploring how third-party devices, mobile onboarding, provider tools, and learning flows could connect into one product experience.',
      keywords: 'smart home concept, product strategy, ui design, mobile app',
      services: [
        { name: 'Product Strategy' },
        { name: 'Interface Design' },
        { name: 'Ecosystem Concept' },
      ],
      client: 'Orvibo concept',
      content:
        '<p>Orvibo Revolution was a product concept for expanding a smart-home ecosystem beyond first-party devices. The idea connected compatible providers, configuration support, mobile onboarding, and educational content into a clearer path for users and partners.</p><p>The work focused on product structure and interface direction: a provider-facing web experience, a mobile app evolution for device control, and a learning flow that explained how connected devices could become part of a broader home automation experience.</p>',
      mainImage: OrviboImage,
      mainImageWide: OrviboImage,
      images: [],
      categories: [{ name: 'Product Strategy' }, { name: 'Smart Home' }],
    },
  ],
}
