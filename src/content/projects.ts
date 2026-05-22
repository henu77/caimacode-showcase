import type {
  ProjectItem,
  ProjectLinks,
  ProjectMetaItem,
  ProjectSeo,
  PublicProjectConfig,
} from '../types/project'

interface ProjectIndexFile {
  projects: string[]
}

const baseUrl = import.meta.env.BASE_URL

function withBase(path: string) {
  return `${baseUrl}${path.replace(/^\//, '')}`
}

function isAbsoluteUrl(path: string) {
  return /^https?:\/\//.test(path)
}

function resolveProjectAsset(slug: string, value?: string) {
  if (!value) {
    return ''
  }

  if (isAbsoluteUrl(value) || value.startsWith('/')) {
    return value
  }

  const normalized = value.replace(/^\.\//, '').replace(/^\//, '')
  return withBase(`${slug}/${normalized}`)
}

function normalizeLinks(links?: PublicProjectConfig['links']): ProjectLinks {
  return {
    demo: links?.demo,
    repo: links?.repo,
    xianyu: links?.xianyu,
    external: links?.external ?? [],
  }
}

function normalizeSeo(raw: PublicProjectConfig, slug: string, title: string, description: string): ProjectSeo {
  return {
    title: raw.seo?.title ?? title,
    description: raw.seo?.description ?? description,
    keywords: raw.seo?.keywords ?? raw.tags ?? [],
    ogImage: resolveProjectAsset(slug, raw.seo?.ogImage ?? raw.cover),
  }
}

function normalizeMeta(raw: PublicProjectConfig): ProjectMetaItem[] {
  const meta = raw.meta
    ?.filter((item): item is { label?: string; value?: string } => Boolean(item?.label && item?.value))
    .map((item) => ({
      label: item.label!.trim(),
      value: item.value!.trim(),
    }))

  if (meta?.length) {
    return meta
  }

  const fallbackMeta = [
    raw.year ? { label: '年份', value: raw.year } : null,
    raw.role ? { label: '角色', value: raw.role } : null,
    raw.categories?.[0] ? { label: '类别', value: raw.categories[0] } : null,
  ].filter((item): item is ProjectMetaItem => Boolean(item))

  return fallbackMeta
}

function normalizeProject(raw: PublicProjectConfig, slug: string): ProjectItem {
  const title = raw.title?.trim() || slug
  const description = raw.description?.trim() || '项目说明暂未提供。'

  return {
    slug,
    title,
    subtitle: raw.subtitle?.trim() || title,
    description,
    summary: raw.summary?.trim() || description,
    year: raw.year?.trim() || raw.publishedAt?.slice(0, 4) || '',
    role: raw.role?.trim() || '独立设计与前端实现',
    cover: resolveProjectAsset(slug, raw.cover),
    tags: raw.tags ?? [],
    categories: raw.categories ?? [],
    highlights: (raw.highlights ?? []).filter(Boolean),
    meta: normalizeMeta(raw),
    featured: raw.featured ?? false,
    order: raw.order ?? Number.MAX_SAFE_INTEGER,
    publishedAt: raw.publishedAt ?? '',
    accent: raw.accent ?? '#2563eb',
    links: normalizeLinks(raw.links),
    seo: normalizeSeo(raw, slug, title, description),
    videos: {
      title: raw.videos?.title?.trim() || '演示片段',
      items: (raw.videos?.items ?? [])
        .filter((item): item is { title?: string; type?: 'bilibili'; embedUrl: string; description?: string } =>
          item?.type === 'bilibili' && Boolean(item.embedUrl),
        )
        .map((item) => ({
          title: item.title?.trim() || '演示视频',
          type: 'bilibili',
          embedUrl: item.embedUrl,
          description: item.description?.trim() || '',
        })),
    },
    readme: {
      title: raw.readme?.title?.trim() || '项目说明',
      url: resolveProjectAsset(slug, raw.readme?.file ?? './README.md'),
    },
  }
}

function compareProjects(a: ProjectItem, b: ProjectItem) {
  if (a.featured !== b.featured) {
    return Number(b.featured) - Number(a.featured)
  }

  if (a.order !== b.order) {
    return a.order - b.order
  }

  return (b.publishedAt || '').localeCompare(a.publishedAt || '')
}

async function fetchJson<T>(url: string) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`)
  }

  return (await response.json()) as T
}

async function fetchText(url: string) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`)
  }

  return response.text()
}

export async function loadProjectIndex() {
  return fetchJson<ProjectIndexFile>(withBase('projects.json'))
}

export async function loadProjectBySlug(slug: string) {
  const raw = await fetchJson<PublicProjectConfig>(withBase(`${slug}/project.json`))
  return normalizeProject(raw, slug)
}

export async function loadProjects() {
  const index = await loadProjectIndex()
  const results = await Promise.allSettled(index.projects.map((slug) => loadProjectBySlug(slug)))

  return results
    .filter((result): result is PromiseFulfilledResult<ProjectItem> => result.status === 'fulfilled')
    .map((result) => result.value)
    .sort(compareProjects)
}

export async function loadProjectReadme(project: ProjectItem) {
  try {
    return await fetchText(project.readme.url)
  } catch {
    return '# README 暂未提供'
  }
}
