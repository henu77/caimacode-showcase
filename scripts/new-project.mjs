import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')

function slugToTitle(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function ensureValidSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
}

async function exists(targetPath) {
  try {
    await fs.access(targetPath)
    return true
  } catch {
    return false
  }
}

async function writeFileIfMissing(filePath, content) {
  if (await exists(filePath)) {
    return false
  }

  await fs.writeFile(filePath, content, 'utf8')
  return true
}

function runGenerateProjects() {
  return new Promise((resolve, reject) => {
    const child = spawn('npm', ['run', 'generate:projects'], {
      cwd: rootDir,
      stdio: 'inherit',
      shell: true,
    })

    child.on('exit', (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`generate:projects failed with code ${code ?? 'unknown'}`))
    })

    child.on('error', reject)
  })
}

async function main() {
  const slug = process.argv[2]?.trim()

  if (!slug) {
    console.error('Usage: npm run new:project -- <slug>')
    process.exit(1)
  }

  if (!ensureValidSlug(slug)) {
    console.error('Slug must use lowercase letters, numbers, and hyphens only.')
    process.exit(1)
  }

  const projectDir = path.join(publicDir, slug)

  if (await exists(projectDir)) {
    console.error(`Project directory already exists: public/${slug}`)
    process.exit(1)
  }

  const galleryDir = path.join(projectDir, 'gallery')
  const title = slugToTitle(slug)

  await fs.mkdir(galleryDir, { recursive: true })

  await writeFileIfMissing(
    path.join(projectDir, 'project.json'),
    `${JSON.stringify(
      {
        slug,
        title,
        subtitle: '请写一句能概括项目定位的副标题。',
        description: '请写一段用于详情页开头的项目说明，交代背景、目标和核心价值。',
        summary: '请写一句用于首页卡片展示的短摘要。',
        year: new Date().getFullYear().toString(),
        role: '请填写你在项目中的角色，例如：界面设计 / 前端实现',
        accent: '#3b82f6',
        cover: './cover.svg',
        tags: ['请填写标签 1', '请填写标签 2'],
        categories: ['案例项目'],
        highlights: ['请补充案例亮点一', '请补充案例亮点二'],
        meta: [
          { label: '年份', value: new Date().getFullYear().toString() },
          { label: '角色', value: '请填写你的角色' },
          { label: '交付', value: '请填写交付内容，例如：展示站、案例页、组件库' },
          { label: '场景', value: '请填写项目使用场景或项目类型' },
        ],
        featured: false,
        order: 999,
        publishedAt: new Date().toISOString().slice(0, 10),
        links: {
          demo: undefined,
          repo: undefined,
          xianyu: undefined,
          external: [],
        },
        seo: {
          title: `${title}｜菜码编程`,
          description: '请填写 SEO 描述，概括项目内容与关键词。',
          keywords: [title, '菜码编程', '项目展示'],
          ogImage: './cover.svg',
        },
        gallery: {
          title: '关键画面',
          images: [
            {
              src: './gallery/01.svg',
              alt: `${title} 项目截图`,
              caption: '请补充这张画面的说明，包括它展示的页面、模块或交互。',
            },
          ],
        },
        videos: {
          title: '演示片段',
          items: [
            {
              title: '请填写视频标题',
              type: 'bilibili',
              embedUrl: 'https://player.bilibili.com/player.html?bvid=请替换为你的BVID&page=1&autoplay=0',
              description: '请补充这个视频展示的内容。',
            },
          ],
        },
        readme: {
          file: './README.md',
          title: '项目说明',
        },
      },
      null,
      2,
    )}\n`,
  )

  await writeFileIfMissing(
    path.join(projectDir, 'README.md'),
    `# ${title}\n\n## 项目定位\n\n请写清楚这个项目是做什么的、面向谁、解决什么问题。\n\n## 背景与目标\n\n说明项目背景、业务目标或练习目标，以及为什么要做这个项目。\n\n## 方案与实现\n\n整理页面结构、交互方式、设计思路和前端实现重点。\n\n## 关键亮点\n\n- 亮点一\n- 亮点二\n- 亮点三\n\n## 复盘\n\n总结项目中做得好的地方、不足之处，以及后续还能怎么优化。\n`,
  )

  await writeFileIfMissing(
    path.join(projectDir, 'cover.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">\n  <rect width="1200" height="900" rx="36" fill="#F8FAFC"/>\n  <rect x="72" y="72" width="1056" height="756" rx="32" fill="#FFFFFF" stroke="#D7E3F4"/>\n  <rect x="132" y="148" width="280" height="36" rx="18" fill="#DBEAFE"/>\n  <rect x="132" y="220" width="520" height="84" rx="24" fill="#E2E8F0"/>\n  <rect x="132" y="336" width="400" height="26" rx="13" fill="#CBD5E1"/>\n  <rect x="132" y="390" width="360" height="26" rx="13" fill="#CBD5E1"/>\n  <rect x="764" y="168" width="296" height="420" rx="28" fill="#EFF6FF"/>\n  <rect x="812" y="228" width="200" height="156" rx="20" fill="#BFDBFE"/>\n  <text x="132" y="620" fill="#0F172A" font-size="48" font-family="Arial, sans-serif" font-weight="700">${title}</text>\n  <text x="132" y="676" fill="#475569" font-size="28" font-family="Arial, sans-serif">请替换为你的真实封面</text>\n</svg>\n`,
  )

  await writeFileIfMissing(
    path.join(galleryDir, '01.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">\n  <rect width="1200" height="900" rx="36" fill="#F1F5F9"/>\n  <rect x="88" y="88" width="1024" height="724" rx="28" fill="#FFFFFF" stroke="#E2E8F0"/>\n  <rect x="140" y="140" width="360" height="520" rx="24" fill="#DBEAFE"/>\n  <rect x="540" y="140" width="520" height="120" rx="24" fill="#E0F2FE"/>\n  <rect x="540" y="296" width="520" height="364" rx="24" fill="#F8FAFC" stroke="#D7E3F4"/>\n  <text x="140" y="742" fill="#475569" font-size="28" font-family="Arial, sans-serif">请替换为你的真实项目截图</text>\n</svg>\n`,
  )

  console.log(`Created project scaffold at public/${slug}`)
  await runGenerateProjects()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
