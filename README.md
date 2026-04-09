# 菜码编程 Showcase

这是一个基于 Vue 3 + Vite 的纯前端项目展示站。

项目内容采用 **`public/<slug>/` 目录驱动** 的方式组织，每个项目都可以独立维护自己的配置、README、图片和视频资源。

## 项目结构

```text
public/
  projects.json
  brand-showcase/
    project.json
    README.md
    cover.svg
    gallery/
  teaching-demo/
    project.json
    README.md
    cover.svg
    gallery/
```

---

## 如何新增一个项目

### 方式 1：使用脚手架命令

直接执行：

```bash
npm run new:project -- my-demo
```

这个命令会自动：

1. 创建 `public/my-demo/`
2. 创建 `project.json`
3. 创建 `README.md`
4. 创建 `cover.svg`
5. 创建 `gallery/01.svg`
6. 自动重新生成 [public/projects.json](public/projects.json)

然后你只需要把占位内容替换成真实项目内容即可。

### 方式 2：手工新增

假设你要新增一个项目 `my-demo`，按下面步骤操作。

#### 1. 新建项目目录

在 [public/](public/) 下新增：

```text
public/my-demo/
  project.json
  README.md
  cover.png
  gallery/
```

#### 2. 编写 `project.json`

最少需要这些字段：

```json
{
  "slug": "my-demo",
  "title": "我的项目",
  "subtitle": "My Demo",
  "description": "这是一个新的展示项目。",
  "cover": "./cover.png",
  "tags": ["Vue 3", "Demo"],
  "gallery": {
    "title": "项目图片",
    "images": [
      { "src": "./gallery/01.png", "alt": "首页截图" }
    ]
  },
  "videos": {
    "title": "视频展示",
    "items": [
      {
        "title": "B 站视频",
        "type": "bilibili",
        "embedUrl": "https://player.bilibili.com/player.html?bvid=你的BVID&page=1"
      }
    ]
  },
  "readme": {
    "file": "./README.md",
    "title": "项目说明"
  }
}
```

#### 3. 编写项目说明

把项目说明写到：

- `public/my-demo/README.md`

详情页会自动读取并渲染它。

#### 4. 放入图片资源

例如：

- `public/my-demo/cover.png`
- `public/my-demo/gallery/01.png`

#### 5. 在 B 站上传视频并填写嵌入地址

在 `project.json` 里填写播放器嵌入地址：

```json
{
  "title": "B 站视频",
  "type": "bilibili",
  "embedUrl": "https://player.bilibili.com/player.html?bvid=你的BVID&page=1"
}
```

#### 6. 本地生成项目索引

执行：

```bash
npm run generate:projects
```

这个命令会自动扫描 `public/*/project.json`，重新生成 [public/projects.json](public/projects.json)。

#### 7. 推送前本地检查

执行：

```bash
npm run prepush
```

这个命令会串联执行：

1. 生成 `public/projects.json`
2. 运行构建检查

---

## 自动生成 `projects.json`

项目已经配置了 GitHub Actions：

- [scripts/generate-projects-index.mjs](scripts/generate-projects-index.mjs)
- [.github/workflows/generate-projects-index.yml](.github/workflows/generate-projects-index.yml)

当你 push 到 `main` 或 `master` 时，GitHub 会：

1. 扫描 `public/` 下所有包含 `project.json` 的目录
2. 自动生成 [public/projects.json](public/projects.json)
3. 如果文件内容有变化，自动提交回仓库

---

## 常用命令

```bash
npm install
npm run dev
npm run new:project -- my-demo
npm run generate:projects
npm run build
npm run prepush
```
