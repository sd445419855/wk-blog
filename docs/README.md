---
# 该目录是 targetDir，所有的“文件的相对路径”都是相对于该 docs 目录的
# 该 README.md 当中可写配置
# 
# 一、官方文档用法摘录
# 1、默认的页面路由
# |文件的相对路径       |页面路由地址      |   
# |--------------------|:---------------:|
# | /README.md	       | /               |
# | /guide/README.md   | /guide/         |
# | /config.md	       | /config.html    |
#
# 2、VuePress 术语 
# 详见 https://vuepress.vuejs.org/zh/miscellaneous/glossary.html#layout

########## 分割线 ##########

# 第三方主题的配置
home: true                                            # 是否启用午后南杂的首页
# heroText: "banner 大标题"                            # banner 大标题文字。无效
heroImage: /img/banner-background-title.png            # banner 上的图片
heroImageStyle: {
  maxWidth: '888px',                                  
  # maxHeight: '100px',
  width: '100%',
  display: block,
  margin: '9rem auto 2rem',
  borderRadius: '1rem', 
}
bgImage: /img/banner-background-image.jpg             # banner 背景图
bgImageStyle: {
  height: '450px'
}
isShowTitleInHome: false                              # 是否在首页显示标题

--- 
