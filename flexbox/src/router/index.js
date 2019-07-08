import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/html',
      name: 'html',
      component: () => import( /* webpackChunkName: "html" */ '../components/HtmlCss.vue')
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: () => import( /* webpackChunkName: "html" */ '../components/VueTify')
    }
  ]
})