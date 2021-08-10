const themeConfig = require('./config/theme/')

module.exports = {
  title: "午后南杂",
  base: '/',      // 解决 build 后的样式失效问题，末尾需带 /
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'build',   // public
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  