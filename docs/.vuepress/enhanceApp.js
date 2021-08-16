/**
 * function:客户端应用的增强
 * detail:
 *      由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 .vuepress/enhanceApp.js 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。enhanceApp.js 应该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等
 *      插件 API 中的 enhanceApp：enhanceAppFiles 官方文档：https://vuepress.vuejs.org/zh/plugin/option-api.html#enhanceappfiles
 *      页面每次F5刷新时都会执行一遍这里的代码
 */







// 使用异步函数也是可以的
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
// ...做一些其他的应用级别的优化

  /**
   * description: 新增代码1：解决中文路径问题
   */ 
  /* head */
  // 拿到 Router 对象，以便控制路由的跳转
  // import Router from 'vue-router';
  // 自定义解码方法
  // function decode (str) {
  //   try {
  //     return decodeURIComponent(str);
  //   } catch (err) {
  //     if (process.env.NODE_ENV !== 'production') {
  //       warn(false, ("Error decoding \"" + str + "\". Leaving it intact."));
  //     }
  //   }
  //   return str
  // }

  // window.alert('enhance!');

  // 调整路由匹配规则（Router 原型上的 match 方法），使用解码一次后的路由进行匹配
  // const VueRouterMatch = router.matcher.match;
  // router.matcher.match = function match (raw, currentRoute, redirectedFrom) {
  //   if (typeof raw === 'string') {
  //     console.info('raw before decode', raw);
  //     raw = decode(raw);
  //     console.info('raw after decode', raw);
  //   }
  //   return VueRouterMatch.call(this, raw, currentRoute, redirectedFrom);
  // }

  // console.info('router', router);
  // console.info('router.matcher.match', router.matcher.match);
  /* tail */

  // console.info('enhanceApp =========');
  // console.info('router =========', router);
  // console.info('options =========', options);

  /* head 2 */
  // router.beforeEach((to, from, next) => {
  //   // 解决非ASCII文件名的路由, 防止 404
  //   // const decodedPath = decodeURIComponent(to.fullPath);
  //   const decodedPath = to.fullPath;
  //   console.info('decodeURIComponent(to.fullPath) outside if', decodeURIComponent(to.fullPath));
  //   if (decodedPath !== to.path) {
  //     console.info('decodeURIComponent(to.fullPath) inside if', decodeURIComponent(to.fullPath));
  //     console.info('to.path', to.path);
      
  //     next(Object.assign({}, to, {
  //       fullPath: decodeURIComponent(to.fullPath),
  //       path: decodedPath
  //     }))
  //   } else {
  //     next()
  //   }
  // });
  /* tail 2 */


}