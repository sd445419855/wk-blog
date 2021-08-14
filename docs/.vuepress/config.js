/**
 * function: 
 *      配置文件的入口文件，也可以是 YML 或 toml
 * detail: 
 *      一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象
 *      不可用 ES6 的导出语法
 *      所有可配置的选项的文档：https://vuepress.vuejs.org/zh/config/
 */
module.exports = {
    /**
     * 1、基本配置
     */
    // 网站的标题                       它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    title: 'VuePress Title 123',
    // 网站的描述                       它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    description: 'VuePress Description 123',
    // 网站的基础路径                   以斜杠开始，并以斜杠结束。.vuepress/public 中的图片，你需要使用这样路径：/base路径/image.png。一个 base 路径一旦被设置，它将会自动地作为前缀插入到 .vuepress/config.js 中所有以 / 开始的资源路径中。
    base: '/',
    // dev server 主机名                默认值: '0.0.0.0'
    host: '0.0.0.0',
    // dev server 的端口                默认值 8080
    port: 8080,
    // 客户端文件的临时目录              默认值 /path/to/@vuepress/core/.temp
    temp: undefined,
    // vuepress build 的输出目录        如果传相对路径，则会基于 process.cwd() 进行解析。默认值: .vuepress/dist
    dest: undefined,
    // 多语言支持的语言配置              默认值: undefined
    locales: undefined,
    // prefetch 资源提示                一个函数，用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的。默认值: () => true
    shouldPrefetch: () => true,
    // VuePress 缓存                    VuePress 默认使用了 cache-loader (opens new window) 来大大地加快 webpack 的编译速度。默认值: true
    cache: true,
    // 额外监听文件                     你可以监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新。默认值: []
    extraWatchFiles: [],
    // 需要被解析的文件的匹配模式         Specify which pattern of files you want to be resolved.（制定想要解析的文件的匹配模式）。默认值：['**/*.md', '**/*.vue']
    patterns: [
        '**/*.md', 
        '**/*.vue'
    ],
    // 永久链接全局配置
    permalink: undefined,

    /**
     * 2、主题配置
     */
    // 指定主题                         当你使用自定义主题的时候，需要指定它。默认值：undefined。参考：https://vuepress.vuejs.org/zh/theme/using-a-theme.html
    theme: undefined,
    // 主题明细配置                     为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。默认值：undefined。参考：https://vuepress.vuejs.org/zh/theme/default-theme-config.html
    themeConfig: {
    },

    /**
     * 3、插件配置
     */
    // 插件配置                         请参考 plugin > Using a plugin 来使用一个插件。默认值：undefined
    Pluggable: undefined,

    /**
     * 4、markdown 配置
     */
    markdown: {
        // 显示行号                     是否在每个代码块的左侧显示行号。参考：https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7
        lineNumbers: true,
        // slug 化                      一个将标题文本转换为 slug 的函数。修改它会影响 标题、目录、以及侧边栏链接的 id 和 链接。默认值 source。
        slugify: undefined,     
        // markdown-it-anchor 的配置项   默认值: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' } 。markdown-it-anchor 文档：https://github.com/valeriangalliat/markdown-it-anchor
        anchor: {
            permalink: true,
            permalinkBefore: true, 
            permalinkSymbol: '#'
        },
        // 页面后缀                      Option to customize internal links to be compatible when using the vuepress-plugin-clean-urls. 使用 vuepress-plugin-clean-urls 时自定义内部链接以兼容的选项。默认值：".html"。
        pageSuffix: ".html",
        // 外部链接                      这个键值对将会作为特性被增加到是外部链接的 <a> 标签上，默认的选项将会在新窗口中打开一个该外部链接。默认值: { target: '_blank', rel: 'noopener noreferrer' }
        externalLinks: {
            target: '_blank', 
            rel: 'noopener noreferrer' 
        },                
        // 目录                          ToC，Table of Contents。插件 markdown-it-table-of-contents 的选项。默认值: { includeLevel: [2, 3] }
        toc: {
            includeLevel: [2, 3]
        },
        // 安装 markdown-it 插件         你可以使用 markdown.plugins 来安装 markdown-it 插件。它的使用方法与安装一个 VuePress 插件类似。
        plugins: [],
        // 扩展 Markdown                 一个用于修改当前的 markdown-it (opens new window) 实例的默认配置，或者应用额外的插件的函数。默认值: undefined
        extendMarkdown: undefined,
        // 提取标题                       Markdown 文件的 headers (标题 & 小标题) 会在准备阶段被提取出来，并存储在 this.$page.headers 中。默认情况下，VuePress 会提取 h2 和 h3 标题。你可以通过这个选项来修改提取出的标题级别。默认值: ['h2', 'h3']
        extractHeaders: [
            'h2',
            'h3'
        ]

    },

    /**
     * 5、构建流程配置
     */
    // postcss-loader 配置                 请注意，指定这个值，将会覆盖内置的 autoprefixer，所以你需要自己将它加进去。默认值: { plugins: [require('autoprefixer')] }
    postcss: { 
        plugins: [
            require('autoprefixer')
        ] 
    },
    // stylus-loader 配置                   默认值: { preferPathResolver: 'webpack' }
    stylus: { 
        preferPathResolver: 'webpack' 
    },
    // scss-loader 配置                     加载 *.scss 文件的 sass-loader 的配置项。默认值: {}
    scss: {
    },
    // sass-loader 配置                     加载 *.sass 文件的 sass-loader 的配置项。默认值: { indentedSyntax: true }
    sass: { 
        // 缩进的语法
        indentedSyntax: true 
    },
    // less-loader 配置                     默认值: {}   
    less: {
    },
    // Webpack 配置                         修改内部的 Webpack 配置，默认值: undefined
    configureWebpack: undefined,
    // webpack-chain 配置                   通过 webpack-chain 来修改内部的 Webpack 配置。默认值: undefined
    chainWebpack: undefined,

    /**
     * 6、浏览器兼容性配置
     */
    // 只兼容常青树浏览器                   如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 true，这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，同时会带来更快的构建速度和更小的文件体积。默认值: false
    evergreen: false
}