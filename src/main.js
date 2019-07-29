/* eslint-disable */

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

const Vue = window.Vue
import App from './pages/App'
import router from './router'
import store from './store'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import { plugin } from "vue-function-api";

Vue.use(plugin)
Vue.use(PerfectScrollbar)
Vue.config.silent = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi'
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#4267b2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252'
        },
        light: {
          primary: '#4267b2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252'
        }
      }
    }
  }),
  router,
  store,
  render: h => h(App),
}).$mount('#app')
