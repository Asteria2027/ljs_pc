import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import {routers} from './router'
import { getStore } from '@/libs/mUtils.js'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (!getStore('token') && to.path.indexOf('memberCentre') != -1) { // 判断是否已经登录且前往的页面不是登录页
    next({
      name: 'login'
    })
  } else if (getStore('token') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
    next({
      name: 'home_index'
    })
  }else {
    next();
  } 
})

router.afterEach((to) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
})