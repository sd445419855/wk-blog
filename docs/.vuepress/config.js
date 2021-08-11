/**
 *  配置文件
 */ 

// 午后牛腩主题配置，没有他，就变成最原始的博客配置了。
const themeConfig = require('./config/theme/')

module.exports = {
  title: "Life is Wanwan",
  base: '/',      // 解决 build 后的样式失效问题，末尾需带 /
  description: '耐得住寂寞，才能守得住繁华，不忘初心，方得始终',    // banner 的小标题
  dest: 'build',   // public
  head: [
    [
      'link', 
      { 
        rel: 'icon', href: '/favicon.ico' 
      }
    ],
    [
      'meta', 
      { 
        name: 'viewport', 
        content: 'width=device-width,initial-scale=1,user-scalable=no' 
      }
    ]
  ],
  // 主题 reco
  theme: 'reco',
  // 主题配置
  themeConfig: {
    // 模板自带的午后牛腩主题配置
    ...themeConfig
    // 类型
    // type: 'blog',
    // 头像
    // authorAvatar: 'https://avatars.githubusercontent.com/u/58387070?s=400&u=b1794932734cf193cb7139dbeddef7f8fab4ff46&v=4',
    // 404 腾讯公益
    // noFoundPageByTencent: true,
    // 博客配置
    // blogConfig: {
    //   // 导航 - category
    //   category: {
    //     location: 2,     // 在导航栏菜单中所占的位置，默认2
    //     text: 'My Category' // 默认文案 “分类”
    //   },
    //   // 导航 - tag
    //   tag: {
    //     location: 3,     // 在导航栏菜单中所占的位置，默认3
    //     text: 'My Tag'      // 默认文案 “标签”
    //   }
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  