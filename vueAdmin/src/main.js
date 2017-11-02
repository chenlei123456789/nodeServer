// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import NProgress from 'nprogress' // 可以让用户在加载页面的时候不会对着完全空白的页面发呆，提升用户体验但是从开发角度讲，这种进度条在真实性上确实很难把握
// import 'nprogress/nprogress.css'  // 这个样式必须引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import IconSvg from 'components/Icon-svg' // svg组件

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('icon-svg', IconSvg)

// router.beforeEach((to, from, next) => {
//   // next('/login')
//   NProgress.start()  // 开启进度条
// })
// router.afterEach(() => {
//   NProgress.done() // 结束进度条
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
