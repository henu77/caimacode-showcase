请根据以下项目信息，生成 `project.json`，直接输出 JSON 代码块。

---

## 项目信息（用户填写）

- slug（英文标识，用小写字母和连字符）：
- 标题：
- 副标题（一句话概括，控制在10字左右）：
- 描述（详情页开头说明，2-3句）：
- 摘要（首页卡片展示，一句话）：
- 年份：
- 角色（你在项目中的角色）：
- 主题色（十六进制，如 #3b82f6）：
- 标签（3-6个关键词）：
- 分类（1-3个类目）：
- 亮点（4条，每条不超过16字）：

| 亮点 | 描述 |
|------|------|
| 1    |      |
| 2    |      |
| 3    |      |
| 4    |      |

- 项目类型（如：课程设计 / 本科毕设）：
- 技术栈（如：PyTorch / TorchAudio / PyQt5）：
- 公众号文章链接（有则填）：
- 视频 BVID（有则填）：
- SEO 关键词（4个以内）：

---

## 生成规则

1. 字段用双引号，2空格缩进
2. `accent` 填主题色；`cover` 固定为 `"./cover-home.png"`
3. `featured` 默认 `false`，`order` 默认 `999`
4. `publishedAt` 用 `"2026-04-10"` 格式
5. `links.xianyu` 为空字符串，`links.external` 包含公众号文章（若提供）
6. 视频 `type` 固定 `"bilibili"`，`embedUrl` 格式为 `https://player.bilibili.com/player.html?bvid=<BVID>&page=1&autoplay=0`
7. `seo.ogImage` 同 `cover`
8. `readme` 对象固定为 `{ "file": "./README.md", "title": "项目说明" }`
9. 不要 gallery 字段——关键画面统一写到 README.md 中
10. 描述、摘要、亮点用中文，表述自然克制，不要 AI 腔

---

## 示例

输入：
> slug: speech-emotion-recognition
> 标题: 基于深度学习的语音情感识别系统
> 副标题: 六分类语音情感识别课程设计项目
> ...

输出：

```json
{
  "slug": "speech-emotion-recognition",
  "title": "基于深度学习的语音情感识别系统",
  "subtitle": "六分类语音情感识别课程设计项目",
  "description": "一个基于 PyTorch 的语音情感识别项目，覆盖数据集划分、模型训练、评估可视化与 PyQt5 实时预测界面。",
  "summary": "包含六分类实验流程、训练评估可视化和 PyQt5 桌面演示界面的课程设计项目。",
  "year": "2026",
  "role": "课程设计 / 深度学习项目实现",
  "accent": "#3b82f6",
  "cover": "./cover-home.png",
  "tags": ["PyTorch", "语音情感识别", "音频分类", "MFCC", "ResNet", "PyQt5"],
  "categories": ["人工智能", "深度学习", "课程设计"],
  "highlights": [
    "完整的数据处理、训练、评估流程",
    "波形与频谱图两种建模方案对比",
    "多维度评估指标与可视化图表",
    "PyQt5 桌面交互界面演示"
  ],
  "meta": [
    { "label": "项目类型", "value": "课程设计 / 本科毕设" },
    { "label": "技术栈", "value": "PyTorch / TorchAudio / PyQt5" }
  ],
  "featured": false,
  "order": 999,
  "publishedAt": "2026-04-10",
  "links": {
    "xianyu": "",
    "external": [
      { "label": "公众号文章", "url": "https://mp.weixin.qq.com/s/xxx" }
    ]
  },
  "seo": {
    "title": "基于深度学习的语音情感识别系统",
    "description": "展示一个基于 PyTorch 的六分类语音情感识别课程设计项目，包含数据处理、模型训练、评估可视化与桌面交互界面。",
    "keywords": ["PyTorch", "语音情感识别", "深度学习", "课程设计"],
    "ogImage": "./cover-home.png"
  },
  "videos": {
    "title": "演示片段",
    "items": [
      {
        "title": "系统演示视频",
        "type": "bilibili",
        "embedUrl": "https://player.bilibili.com/player.html?bvid=BV1Lt5MzTEaz&page=1&autoplay=0",
        "description": "展示系统主界面、功能流程以及项目实现细节。"
      }
    ]
  },
  "readme": {
    "file": "./README.md",
    "title": "项目说明"
  }
}
```
