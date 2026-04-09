import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const outputFile = path.join(publicDir, 'projects.json')

async function isDirectory(targetPath) {
  const stats = await fs.stat(targetPath)
  return stats.isDirectory()
}

async function exists(targetPath) {
  try {
    await fs.access(targetPath)
    return true
  } catch {
    return false
  }
}

async function collectProjectSlugs() {
  const entries = await fs.readdir(publicDir, { withFileTypes: true })
  const slugs = []

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue
    }

    if (entry.name.startsWith('.')) {
      continue
    }

    const projectDir = path.join(publicDir, entry.name)
    const projectConfig = path.join(projectDir, 'project.json')

    if (!(await exists(projectConfig))) {
      continue
    }

    if (!(await isDirectory(projectDir))) {
      continue
    }

    slugs.push(entry.name)
  }

  return slugs.sort((a, b) => a.localeCompare(b, 'en'))
}

async function main() {
  const projects = await collectProjectSlugs()
  const content = `${JSON.stringify({ projects }, null, 2)}\n`
  await fs.writeFile(outputFile, content, 'utf8')
  console.log(`Generated ${path.relative(rootDir, outputFile)} with ${projects.length} projects.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
