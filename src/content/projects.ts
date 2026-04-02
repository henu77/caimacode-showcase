import brandCover from '../assets/projects/brand-showcase/cover.svg'
import brandGallery1 from '../assets/projects/brand-showcase/gallery-1.svg'
import brandGallery2 from '../assets/projects/brand-showcase/gallery-2.svg'
import brandGallery3 from '../assets/projects/brand-showcase/gallery-3.svg'
import teachingCover from '../assets/projects/teaching-demo/cover.svg'
import teachingGallery1 from '../assets/projects/teaching-demo/gallery-1.svg'
import teachingGallery2 from '../assets/projects/teaching-demo/gallery-2.svg'
import type { ProjectItem } from '../types/project'

const readmeModules = import.meta.glob('./readmes/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export const readmeContentByKey = Object.fromEntries(
  Object.entries(readmeModules).map(([path, content]) => {
    const key = path.split('/').pop()?.replace('.md', '') ?? path
    return [key, content]
  }),
)

export const projects: ProjectItem[] = [
  {
    slug: 'brand-showcase',
    title: '品牌展示主站',
    subtitle: 'Brand Showcase',
    description:
      '把菜码编程的品牌介绍、项目预览、README 文档和视频内容整合成统一的展示门户。',
    cover: brandCover,
    tags: ['Vue 3', 'Vite', 'Markdown', 'Showcase'],
    gallery: [brandGallery1, brandGallery2, brandGallery3],
    videos: [
      {
        title: 'public 本地视频示例',
        type: 'local',
        src: '/videos/brand-showcase/demo.mp4',
        poster: brandCover,
        available: false,
      },
      {
        title: 'B 站视频示例',
        type: 'bilibili',
      },
    ],
    readmeKey: 'showcase',
    accent: '#47d7ff',
  },
  {
    slug: 'teaching-demo',
    title: '教学案例作品页',
    subtitle: 'Teaching Demo',
    description:
      '适合把某个编程教学案例拆成可视化作品页，方便展示截图、录屏和项目说明。',
    cover: teachingCover,
    tags: ['Portfolio', 'Video', 'Case Study'],
    gallery: [teachingGallery1, teachingGallery2],
    videos: [
      {
        title: '课堂演示录屏占位',
        src: '/videos/teaching-demo/demo.mp4',
        poster: teachingCover,
        available: false,
      },
    ],
    readmeKey: 'teaching-demo',
    accent: '#8b7bff',
  },
]
