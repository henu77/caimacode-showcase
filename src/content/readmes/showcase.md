# 菜码编程展示站

## 项目定位

这是一个纯前端的项目展示网站，用来集中展示图片、视频和 README 内容，适合作为工作室、小店或个人品牌的线上作品集。

## 页面结构

- 首页：品牌介绍、作品精选、展示说明
- 项目详情页：项目封面、图集、视频和完整 README

## 视频支持

### 1. public 本地视频

把 mp4 放到：

- `public/videos/项目目录/xxx.mp4`

然后在 `src/content/projects.ts` 里这样配：

```ts
{
  title: '项目演示',
  type: 'local',
  src: '/videos/brand-showcase/demo.mp4',
  poster: brandCover,
  available: true,
}
```

### 2. B 站视频

在 `src/content/projects.ts` 里这样配：

```ts
{
  title: 'B站视频演示',
  type: 'bilibili',
  embedUrl: 'https://player.bilibili.com/player.html?bvid=你的BVID&page=1',
}
```

建议使用 B 站播放器嵌入地址，不要直接填普通视频页链接。

## 后续扩展

1. 继续追加新项目配置
2. 替换示例图片与视频为真实素材
3. 接入自定义域名后用于正式展示
