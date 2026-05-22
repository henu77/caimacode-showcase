export interface ProjectVideo {
  title: string
  type: 'bilibili'
  embedUrl: string
  description?: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectLinks {
  demo?: string
  repo?: string
  xianyu?: string
  external: ProjectLink[]
}

export interface ProjectSeo {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

export interface ProjectMetaItem {
  label: string
  value: string
}

export interface ProjectVideoSection {
  title: string
  items: ProjectVideo[]
}

export interface ProjectReadmeSection {
  title: string
  url: string
}

interface PublicProjectVideo {
  title?: string
  type?: 'bilibili'
  embedUrl?: string
  description?: string
}

interface PublicProjectMetaItem {
  label?: string
  value?: string
}

export interface PublicProjectConfig {
  slug?: string
  title?: string
  subtitle?: string
  description?: string
  summary?: string
  year?: string
  role?: string
  accent?: string
  cover?: string
  tags?: string[]
  categories?: string[]
  highlights?: string[]
  meta?: PublicProjectMetaItem[]
  featured?: boolean
  order?: number
  publishedAt?: string
  links?: {
    demo?: string
    repo?: string
    external?: ProjectLink[]
  }
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
  }
  videos?: {
    title?: string
    items?: PublicProjectVideo[]
  }
  readme?: {
    file?: string
    title?: string
  }
}

export interface ProjectItem {
  slug: string
  title: string
  subtitle: string
  description: string
  summary: string
  year: string
  role: string
  cover: string
  tags: string[]
  categories: string[]
  highlights: string[]
  meta: ProjectMetaItem[]
  featured: boolean
  order: number
  publishedAt: string
  accent: string
  links: ProjectLinks
  seo: ProjectSeo
  videos: ProjectVideoSection
  readme: ProjectReadmeSection
}
