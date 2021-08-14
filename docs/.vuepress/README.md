# 该目录用于用于存放全局的配置、组件、静态资源等，所有 VuePress 相关的文件都将会被放在这里。
# 一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象
# 另个一重要的配置文件是与 .vuepress 处于同级目录的 README.md，在里面书写 Front Matter 来增加配置

## Front Matter
### 任何包含 YAML front matter 的 Markdown 文件都将由 gray-matter (opens new window) 处理。front matter 必须是 markdown 文件中的第一部分，并且必须采### 用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：
### 
### ---
### title: Blogging Like a Hacker
### lang: en-US
### ---
### 
### 在这些三条虚线之间，你可以设置预定义变量（参见下面），甚至可以创建自己的自定义变量。 然后，您可以使用 $frontmatter 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。
### 不过，在 VuePress 中，Front matter 是 可选的。
### 在 README.md中写 Front matter 不是必须的，这么的目的是定义一些变量，供其他页面、组件来使用，比如午后牛杂的主题组件。这个组件是不可能去 config.js 里读自定义变量的。另外，可以通过预定义变量给自己的文章页面设置标题、作者等信息。
### 简单理解，就是 config.js 是 VuePress 的配置，README.md 中的 Front Matter 是 VuePress主题插件的配置。

## 其他格式的 Front Matter
### 除了 YAML 之外，VuePress 也支持 JSON 或者 TOML (opens new window) 格式的 front matter。
### JSON front matter 需要以花括号开头和结尾：
### 
### ---
### {
###   "title": "Blogging Like a Hacker",
###   "lang": "en-US"
### }
### ---

## 预定义变量
### title、lang、description、layout、permalink、metaTitle、meta
### permalink：permanent link 永久链接，详见 https://vuepress.vuejs.org/zh/guide/permalinks.html

## 默认主题的预定义变量
### navbar、sidebar、prev、next、search、tags


## 永久链接
### 永久链接相当于页面路由，作用是使文章的链接更加灵活，而不是局限于目录结构

## 配置永久链接
### 全局、局部皆可配置，配置项名称为 permalink。

## 模板变量
| 变量	        |    介绍                                          |    
|---------------|-------------------------------------------------:|                                
| :year	        | 文章发布的年份 (4数字)                           |
| :month	    | 文章发布的月份 (2数字)                           |
| :i_month	    | 文章发布的月份 (前面不带0)                       |    
| :day	        | 文章发布的日份 (2数字)                           |
| :i_day	    | 文章发布的日份 (前面不带0)                       |    
| :slug	        | 蛞蝓化文件路径 (不带扩展名)                      |    
| :regular	    | VuePress默认的生成永久链接的方式                 |    
### 这些模板变量主要用于给永久路径添加文章的年月日
### VuePress默认的生成永久链接的方式，具体实现看 https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts

## Markdown 插槽
### 略

## 全局计算属性
### 在 VuePress 中，内置了一些核心的计算属性，以供默认主题 或自定义主题使用。
### 全局计算属性有：$site、$page、$frontmatter、$lang、$localePath、$title、$description、$themeConfig
