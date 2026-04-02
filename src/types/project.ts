export interface ProjectVideo {
  title: string
  type?: 'local' | 'bilibili'
  src?: string
  embedUrl?: string
  poster?: string
  available?: boolean
}

export interface ProjectItem {
  slug: string
  title: string
  subtitle: string
  description: string
  cover: string
  tags: string[]
  gallery: string[]
  videos: ProjectVideo[]
  readmeKey: string
  accent: string
}
