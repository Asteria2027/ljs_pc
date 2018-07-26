import Vue from 'vue'
import iView from 'iview'
import { router } from './router/index.js'
import store from './store'
import App from './app'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
})
