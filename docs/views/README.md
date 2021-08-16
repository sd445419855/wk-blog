# 该目录用于存放网站要展示的各种文档，如前端技术、LeetCode等等





# 一、官方文档用法摘录

## Markdown 扩展

## Header Anchors
所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 markdown.anchor 来配置。

## 链接
### 内部链接
网站内部的链接，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 README.md 或者 index.md 文件都会被自动编译为 index.html，对应的链接将被视为 /。

### 链接的重定向
VuePress 支持重定向到干净链接。如果一个链接 `/foo` 找不到，VuePress 会自行寻找一个可用的 `/foo/` 或 `/foo.html`。反过来，当 `/foo/` 或 `/foo.html` 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 `vuepress-plugin-clean-urls` 定制你的网站路径。

### Page Suffix 页面前缀
Pages and internal links get generated with the .html suffix by default.

### 外部链接
外部的链接将会被自动地设置为 target="_blank" rel="noopener noreferrer"

### Front Matter（前事）
``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```
这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。更多，请移步 Front Matter：https://vuepress.vuejs.org/zh/guide/frontmatter.html#%E5%85%B6%E4%BB%96%E6%A0%BC%E5%BC%8F%E7%9A%84-front-matter

### Emoji（表情）
输入：
```
:tada: :100:
```
:tada: :100:
更多 Emoji 详见：https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json

### 目录（ToC：Table of Contents）
输入 
```
[[toc]]
```
输出
[[toc]]
目录（Table of Contents）的渲染可以通过 markdown.toc 选项来配置，详见 https://vuepress.vuejs.org/zh/config/#markdown-toc

### 自定义容器
详见 https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8

### 代码块中的语法高亮
VuePress 使用了 Prism (opens new window) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：
```` js
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

### 代码块中的行高亮
```` js
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

除了单行以外，你也可指定多行，行数区间，或是两者都指定。
数区间: 例如 {5-8}, {3-10}, {10-17}
个单行: 例如 {4,7,9}
数区间与多个单行: 例如 {4,7-13,16,23-27,40}

### 导入代码段
你可以通过下述的语法导入已经存在的文件中的代码段：
`<<< @/filepath`

### 进阶配置
VuePress 使用 markdown-it 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 .vuepress/config.js 的 markdown 选项，来对当前的 markdown-it 实例做一些自定义的配置：
``` js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

### 在 Markdown 中 使用 Vue
略

# 
# 
# 


# 二、午后牛杂主题配置方法摘录
## 分类和标签
### 写文章时添加分类和标签
``` yaml
---
title: 【vue】跨域解决方案之proxyTable
date: 2017-12-28
categories:
 - frontEnd
tags:
 - vue
---
```

::: tip
请注意， categories 和 tags 要以数组的方式填写。数组的写法可用yaml的，也可用js的
:::

## Front Matter（前事）
一个基本完整的 Front Matter 案例：
``` yaml
---
title: 烤鸭的做法        # 文章标题，放弃通过一级目录定义标题的方式，改在 Front Matter 中定义
date: 2019-08-08        # 文章创建日期，格式 2019-08-08 或 2019-08-08 08:08:08。
sidebar: 'auto'         # 是否开启侧边栏。
categories:             # 所属分类
 - 烹饪 
 - 爱好
tags:                   # 所属标签
 - 烤
 - 鸭子
keys:                   # 文章加密密码
 - '123456'
publish: false          # 文章是否发布
sticky: 999             # 文章置顶，值为number类型，降序排序
---
```

其他 Vuepress 默认主题的变量例如 prev, next，请移步 官方文档：https://vuepress.vuejs.org/zh/guide/frontmatter.html#%E5%85%B6%E4%BB%96%E6%A0%BC%E5%BC%8F%E7%9A%84-front-matter