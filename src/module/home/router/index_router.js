import Vue from 'vue'
import Router from 'vue-router'
import Main from './Main.vue'
import Demo from '../index/demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Main
    },
    {
      path: '/Demo',
      name: 'demo',
      component: Demo
    }
  ]
})
