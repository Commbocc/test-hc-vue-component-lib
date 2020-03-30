import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(App)

new Vue({
  data: () => ({
    showAsyncComp: false
  })
}).$mount('#app')
