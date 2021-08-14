# 该目录用于存放样式相关的文件

# index.styl
## VuePress 提供了一种添加额外样式的简便方法。你可以创建一个 .vuepress/styles/index.styl 文件。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法。 
## 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级

# palette.styl 
## 用于重写默认颜色常量，或者设置新的 stylus 颜色常量，或者对默认预设的样式进行简单的替换，或者定义一些变量供以后使用

# Warning 警告
## 由于背后的行为，不论是在 palette.styl 或是 index.styl ，都不能透过 @import / @require (opens new window) 從相对路径引用一般的 .css 样式表，只能通过绝对路径。详见 https://vuepress.vuejs.org/zh/config/#index-styl。
## 为什么不能把 palette.styl 和 index.styl 合并到一个 API? 见 https://vuepress.vuejs.org/zh/faq/#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E6%8A%8A-palette-styl-%E5%92%8C-index-styl-%E5%90%88%E5%B9%B6%E5%88%B0%E4%B8%80%E4%B8%AA-api