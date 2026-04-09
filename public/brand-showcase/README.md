# 品牌展示主站

## 项目定位

这是一个 Vue + Vite 的纯前端项目展示站，用来集中展示图片、B 站视频和 README 内容，适合作为工作室、小店或个人品牌的线上作品集。

## 页面结构

- 首页：品牌介绍、作品精选、展示说明
- 项目详情页：项目封面、图集、B 站视频和完整 README

## 内容目录化

当前项目内容已经迁移到 `public/brand-showcase/` 目录中：

- `project.json`：项目展示配置
- `README.md`：详情页说明文档
- `cover.svg`：项目封面
- `gallery/*`：项目图片

## 视频支持

仅支持 B 站播放器嵌入地址，在 `project.json` 中这样配置：

```json
{
  "title": "B站视频演示",
  "type": "bilibili",
  "embedUrl": "https://player.bilibili.com/player.html?bvid=你的BVID&page=1"
}
```

建议使用 B 站播放器嵌入地址，不要直接填普通视频页链接。
