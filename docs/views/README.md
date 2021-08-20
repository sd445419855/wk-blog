---
title: docs/views 目录使用说明
date: 2019-08-08                    # 文章创建日期，格式 2019-08-08 或 2019-08-08 08:08:08。
sidebar: 'auto'                     # 是否开启侧边栏。
categories:
  - 使用说明                         # FrontMatter专属数组写法
tags:
  ['使用说明', 'views']                           # 普通数组写法
publish: false                      # 文章是否发布（出版、发布、发表），  这里不是 public
# keys:                             # 文章加密密码
#  - '123456'
# sticky: 999                       # 文章置顶，值为number类型，降序排序
---



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
常用容器名：`theorem、tip、warning、danger、detail`

**输入**
``` md
::: <容器名> <容器标题>
<容器内容>
:::
```
**效果**
::: tip 容器标题
容器内容
:::

详见 [官方说明文档](https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8) 和 [牛杂主题官方说明文档](https://vuepress-theme-reco.recoluan.com/views/1.x/syntax.html)

### 代码块中的语法高亮
VuePress 使用了 Prism (opens new window) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

**输入**
```` js
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**效果**
``` js
export default {
  name: 'MyComponent',
  // ...
}
```


### 代码块中的行高亮
**输入**
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
**效果**
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

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

::: danger
请注意， categories 和 tags 要以数组的方式填写。数组的写法可用yaml的，也可用js的
:::

## Front Matter（前事）
一个基本完整的拥有常用的变量的 Front Matter 案例：
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





## 添加时间轴
在 1.1.0 版本之后，对时间轴进行了重构，优化配置，用户无需额外添加相关文件，其他配置不变。

### 添加导航

``` js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date'
      }
    ]
  }
}
```

### 添加所需的文件和配置
::: danger
注意：1.1.0+ 版本不要配置此项和建立此目录以及文件，否则显示该空白内容的 md。
:::
`/docs/timeLine/README.md`

``` yaml
---
isTimeLine: true
sidebar: false
isComment: false
---
## Time Line
```

### 写文章时添加日期
::: tip
日期是可以填写时分秒的，格式为 `2021-08-18 10:24:00`
:::

``` yaml
---
title: 【vue】跨域解决方案之proxyTable
date: 2017-12-28
tags: 
  - vue
  - webpack
---
```



## 评论
主题内置评论插件 `@vuepress-reco/vuepress-plugin-comments`，可以根据自己的喜好选择 `Valine` 或者 `Vssue`；
由于用得少，更多配置见文档：https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html


## 多语言配置
如果你需要支持不同语言，需要设置`locales`：
``` js
// config.js
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  }
  themeConfig: {
    locales: {
      '/': {
        valineConfig: {
          // ...
        }
      },
      '/en/': {
        valineConfig: {
          // ...
        }
      }
    }
  }
}
```


## 加密功能
### 项目加密
略
### 文章加密
略
::: tip
详见 https://vuepress-theme-reco.recoluan.com/views/1.x/password.html
:::


## Config.js 配置
### 移动端优化
移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元`meta`来优化。
``` js
// .vuepress/config.js
module.exports = {
  head: [
    // 移动端优化，解决搜索框的放大、滚动问题
    [
      'meta', 
      { 
        name: 'viewport', 
        content: 'width=device-width,initial-scale=1,user-scalable=no' 
      }
    ]
  ]
}  
```
### 图标
您可以在导航菜单中使用主题的内置图标，如下所示
``` js
nav: [
  { 
    text: 'Tags', 
    link: '/tags/', 
    icon: 'reco-tag' 
  }
]
```
本主题有以下内置图标供您选择
  <ul data-v-3f33465a="" class="icon-wrapper">
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-faq"></i>
      <p data-v-3f33465a="" class="icon-name">FAQ</p>
      <p data-v-3f33465a="" class="icon-name">reco-faq</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-sticky"></i>
      <p data-v-3f33465a="" class="icon-name">置顶</p>
      <p data-v-3f33465a="" class="icon-name">reco-sticky</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-lock"></i>
      <p data-v-3f33465a="" class="icon-name">加密</p>
      <p data-v-3f33465a="" class="icon-name">reco-lock</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-mail"></i>
      <p data-v-3f33465a="" class="icon-name">Email</p>
      <p data-v-3f33465a="" class="icon-name">reco-mail</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-douban"></i>
      <p data-v-3f33465a="" class="icon-name">豆瓣</p>
      <p data-v-3f33465a="" class="icon-name">reco-douban</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-wechat"></i>
      <p data-v-3f33465a="" class="icon-name">微信</p>
      <p data-v-3f33465a="" class="icon-name">reco-wechat</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-color"></i>
      <p data-v-3f33465a="" class="icon-name">颜色板</p>
      <p data-v-3f33465a="" class="icon-name">reco-color</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-sf"></i>
      <p data-v-3f33465a="" class="icon-name">思否</p>
      <p data-v-3f33465a="" class="icon-name">reco-sf</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-message"></i>
      <p data-v-3f33465a="" class="icon-name">消息</p>
      <p data-v-3f33465a="" class="icon-name">reco-message</p>
    </li>
    <li data-v-3f33465a="">
      <i data-v-3f33465a="" class="iconfont reco-eye"></i>
      <p data-v-3f33465a="" class="icon-name">眼睛</p>
      <p data-v-3f33465a="" class="icon-name">reco-eye</p>
    </li>
  </ul>
  <style type="text/css">
    li[data-v-3f33465a] {
      display: inline-block;
      width: 119px;
      border-bottom: 1px solid var(--border-color);
      text-align: center;
    }
  </style>

更多图标见主题文档 [Config.js配置之图标](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html)

### 备案信息和项目开始时间
略
### 设置作者姓名
#### 1.设置全局作者姓名
略
#### 2.为单篇文章设置作者姓名
略
### 华为文案
首页可以显示 “华为” 文案，需要以下配置。
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 首页显示华为文案
    huawei: true
  }
}
```
效果如下：
<img src="/img/HuaWeiWenAnEffect.png">

### Logo （标识、标志、徽标）
导航栏左侧可以显示logo, 需要以下配置。
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```
### Avatar 头像
1.2.0 后（含）使用 themeConfig.authorAvatar 替换首页的 faceImage 来设置头像
``` js
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.png'
  }  
}  
```
::: tip
Config.js 配置更多详细内容见 https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html
:::

## 首页配置
主题的主页的默认风格偏文档，并不像一个博客，所以从 `vuepress-theme-reco@1.0.0-alpha.25` 开始，增加博客风格首页布局。

### Option API
#### Home `默认风格首页`
``` yaml
# 这是你的主页
---
home: true                                  # 使用牛杂首页
heroText: null                              # heroImage 上显示的标题，null为不显示
heroImage: /hero.png                        # 指定 banner 图片
heroImageStyle: {                           # 指定 banner 图片的样式，实现你想要的效果
  maxHeight: '200px',         
  display: block,
  margin: '6rem auto 1.5rem',
  borderRadius: '50%',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
---
```

#### Home-Blog `博客风格首页`
`heroImage` 在此模式下仍然有效。

**使用博客风格首页的步骤：**
1. `config.js`中指定 `type: 'blog'`
属性名`themeConfig.type`
``` js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog'
  }
}
```

2. `docs/README.md` 中设置`背景图片`及其样式
属性名`bgImage`、`bgImageStyle`
``` yaml
# 这是你的主页
---
home: true
bgImage: '/bg.png'
bgImageStyle: {
  height: '350px'
}
---
```

3. `config.js`中设置右侧信息栏的`头像`
属性名`themeConfig.authorAvatar`
::: tip
1.2.0 后（含）使用 themeConfig.authorAvatar 替换首页的 faceImage 来设置头像
:::
``` js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.png' //设置头像  
  }
}
```


4. 添加友链
属性名`themeConfig.friendLink`
``` js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    // 添加友链
    friendLink: [
      // 友链1
      {
        title: 'vuepress-theme-reco',                                               // 友链标题
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',                  // 友链描述
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",    // 友链 LOGO（本地图片或网络图片）
        email: 'recoluan@qq.com',                                                   // email，如果没有设置 logo，将通过 Email获取到的 `Gravatar` 头像来设置 LOGO
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
      // ...
    ]
  }
}
```

##### 汇总
``` js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog',                           // 使用博客风格首页
    navbar: false,                          // 显示 navbar 导航栏
    authorAvatar: '/avatar.png'             // 设置头像  
    friendLink: [                           // 添加友链
      {                                     // 友链1
        title: 'vuepress-theme-reco',                                               // 友链标题
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',                  // 友链描述
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",    // 友链 LOGO（本地图片或网络图片）
        email: 'recoluan@qq.com',                                                   // email，如果没有设置 logo，将通过 Email获取到的 `Gravatar` 头像来设置 LOGO
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
      // ...
    ]
  }
}
```


#### 自定义首页
首页会自动添加 `header` 和 `footer`，因此自定义部分**无需**考虑添加头部和脚部内容。
##### 操作步骤：
将你自定义的首页样式封装成 vue 组件，封装成插件或者 `@vuepress/plugin-register-components` 插件全局注册，然后`config.js`中配置 `themeConfig.type`
``` js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'your vue component name'
  }
}
```
如果你的首页并不希望显示 `navbar`，你可以在首页文件`docs/README.md`里设置 `front-matter`：`themeConfig.navbar: false`。


## 404 腾讯公益
显示儿童的寻人启事信息
开关：`themeConfig.noFoundPageByTencent`，值为 `boolean` 类型。


## 插件、组件在暗色模式下的颜色适配
主题从 1.2.0 之后，适配系统的暗色主题模式，如果你有一些关于本主题的插件或者自定义的组件的话，你需要对暗色模式进行适配。
### 指定颜色模式：
`config.js`中配置`themeConfig.mode`，值为 `dark、light、auto`，默认 `auto`
``` js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    mode: 'dark', // 主题颜色模式，默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false // 是否显示主题颜色模式切换按钮，即调色盘图标的按钮，默认 true
  }
}  
```

### 使用颜色变量指定颜色
**颜色变量有16个，如下所示**：
|颜色变量名称            | 亮色模式下实际颜色	              | 暗色模式下实际颜色                |
|:---------------------:|:-------------------------------:|:-------------------------------:|
|--default-color-10	    | rgba(0, 0, 0, 1)	              | rgba(255, 255, 2 55, 1)         |
|--default-color-9	    | rgba(0, 0, 0, .9)	              | rgba(255, 255, 255, .9)         |
|--default-color-8	    | rgba(0, 0, 0, .8)	              | rgba(255, 255, 255, .8)         |
|--default-color-7	    | rgba(0, 0, 0, .7)	              | rgba(255, 255, 255, .7)         |
|--default-color-6	    | rgba(0, 0, 0, .6)	              | rgba(255, 255, 255, .6)         |
|--default-color-5	    | rgba(0, 0, 0, .5)	              | rgba(255, 255, 255, .5)         |
|--default-color-4	    | rgba(0, 0, 0, .4)	              | rgba(255, 255, 255, .4)         |
|--default-color-3	    | rgba(0, 0, 0, .3)	              | rgba(255, 255, 255, .3)         |
|--default-color-2	    | rgba(0, 0, 0, .2)	              | rgba(255, 255, 255, .2)         |
|--default-color-1	    | rgba(0, 0, 0, .1)	              | rgba(255, 255, 255, .1)         |
|--background-color	    | #fff	                          | #25272a                         |
|--box-shadow	          | 0 1px 6px 0 rgba(0, 0, 0, 0.2)	| 0 1px 6px 0 rgba(0, 0, 0, .9)   |
|--text-color	          | #2c3e50	                        | #aaa                            |
|--border-color	        | #eaecef	                        | rgba(0, 0, 0, .3)               |
|--code-color	          | rgba(27, 31, 35, 0.05)	        | rgba(0, 0, 0, .3)               |
|--mask-color	          | #888	                          | #000                            |

**使用方法是：**
.vuepress/styles 目录下的任意 styl 文件中直接用 css 写样式，用 `var()` 取颜色变量的值。
``` css
/* .vuepress/styles/ 下的 index.styl 或 palette.styl */
.title {
  color: var(--text-color)
}
```



## 多语言配置
config.js中配置locales属性
详见文档 [多语言配置](https://vuepress-theme-reco.recoluan.com/views/1.x/local.html)



## 代码主题设置
### 主题样式
默认支持的样式有：`'default'、'funky'、'okaidia'、'solarizedlight'、'tomorrow'`
更多样式请移步 prismjs 官网 <https://prismjs.com/> 。

### 设置方法
`config.js` 中设置 `themeConfig.codeTheme`，默认`"tomorrow"`
``` js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    codeTheme: 'tomorrow' // 设置代码的主题，即高亮样式、容器样式等
  }
}
```


## 文章的侧边栏
从 1.5.6 之后，主题将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在页面的右侧。左边的侧边栏只有在自定义的侧边栏时才会出现，用于展示多篇文章的集合，而子侧边栏专注于当前文章的多级标题。
### 子侧边栏是否打开
略，详见[主题文档](https://vuepress-theme-reco.recoluan.com/views/1.x/sidebar.html)




## 文章中添加摘要
就是在文章开头添加一个容器 tip，容器 tip 的内容将显示在列表页面上的文章摘要中。
``` markdown
---
title: webpack多版本
tags: 
  - webpack
  - node
---

::: tip
摘要的内容
:::
```

**首页文章列表摘要效果：**
<img src="/img/add-summary-effect.png"/>





## Markdown 中支持的语法

### 原生的 Markdown 语法
你可以在 Markdown 中使用所有原生语法，如果一些内容无法用原生语法实现，那么你可以写 `HTML` 来实现。

### VuePress 默认的 Markdown 扩展语法
VuePress 内置了一些比较易用的语法特性，这使得你可以更加容易地书写文章，这里简单列举下支持的语法，具体特性请前往 `VuePress Markdown` 扩展语法 查看 <https://v1.vuepress.vuejs.org/zh/guide/markdown.html>
* GitHub 风格的表格(Table)
* Table of Contents(ToC) 目录
* Emoji 表情
* 代码块相关
  * 显示行号
  * 代码块的语法高亮、行高亮
  * 代码段的导入

### markdown-it 的插件的 Markdown 扩展语法
开启扩展：
使用 `markdown-it` 的插件对 Markdown 语法进行扩展
``` js
// .vuepress/config.js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    // 扩展 Markdown
    extendMarkdown: md => { 
      // 使用 markdown-it 的插件 xxx
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

### 在 Markdown 中使用 Vue
你甚至可以在 Markdown 中直接使用 `Vue` 以及 `Vue 组件`，就像这个主题内置的徽章`Badge [图]`
更多示例请见：VuePress 官网在 Markdown 中使用 Vue <https://vuepress.vuejs.org/zh/guide/using-vue.html>

### 使用其他插件的扩展语法
还有一些 VuePress 插件可以提升你的 Markdown 语法，你可以参考插件的使用来添加你自己想要的插件。下面简单介绍两个比较实用的插件

#### 容器
`vuepress-plugin-container`允许你可以使用来自定义一个容器，主题利用该插件内置了三个简单易用的块容器，你可以通过以下方式来启用

**输入：**
``` markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**效果：**
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

#### 流程图
`vuepress-plugin-flowchart` 可以让你在 Markdown 中直接绘制`流程图`，就像这样

**输入：**
``` markdown
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```

**效果：**
<img src="/img/flowchart-effect.png" />






## 定制样式与脚本
如果你不满足于主题提供的默认样式，VuePress 提供了一些简单的接口文件，可以让你能够很方便地定制你自己想要的效果。

### 修改主题的颜色
你可以通过配置样式文件 `.vuepress/styles/palette.styl` 来快速修改主题的一些颜色属性。
``` stylus
// 默认值
$accentColor = #3eaf7c                      // 主题颜色
$textColor = #2c3e50                        // 文本颜色
$borderColor = #eaecef                      // 边框线颜色
$codeBgColor = #282c34                      // 代码块背景色
$backgroundColor = #ffffff                  // 悬浮块背景色
```

### 修改或添加主题的样式
你可以创建一个样式文件 `.vuepress/styles/index.styl` 以方便地添加额外样式。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法。

::: tip 是否可以将颜色与样式写在同一个文件？
不可以将颜色与样式写在同一个文件中，VuePress 会先解析 palette.styl 中的全局变量，之后作用于主题的各个样式中，最后才解析 index.styl ，以覆盖主题默认的样式。
:::



### 在 Head 中引用脚本（js）与样式（css）
你可以通过配置 `.vuepress/config.js` 中的 `head` 来引入脚本（js）与样式（css），它将会被编译为 `<head>` 中的一项。
``` js
// .vuepress/config.js
module.exports = {
  head: [             // 定制 head 标签的内容
    [
      "link",         // link 标签
      { 
        rel: "stylesheet",      // 标签属性 rel="stylesheet"
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"  // 引入 css 文件
      }
    ],[
      "script",       // script 标签
      { 
        src: "scripts/demo.js"    // 引入 js 文件
      }
    ]
  ]
}
```

上面的配置会被解析为：
``` html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css">
  <script src="scripts/demo.js"></script>
</head>
```

关于 head 的详细配置说明请参考[官方文档 head 配置](https://v1.vuepress.vuejs.org/zh/config/#head)


### 在单独页面中应用样式（css）和脚本（js）
有时，你可以只想在当前页面应用一些 `JavaScript` 或者 `CSS`，在这种情况下，你可以直接在 `Markdown 文件`中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 `HTML` 文件中提取出来，并作为生成的 Vue `单文件组件`的 `<script>` 和 `<style>` 标签。

**输入：**
``` markdown
<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>
```

**输出：**

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>