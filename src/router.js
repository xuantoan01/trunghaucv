import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from './views/Home/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home_index',
      component: HomeIndex
    },
  ]
})
