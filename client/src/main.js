import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入ElementUI
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

<<<<<<< HEAD
Vue.config.productionTip = false
//使用UI
Vue.use(ElementUI);
=======

Vue.config.productionTip = false
//使用UI
Vue.use(ElementUI,);
>>>>>>> d6801fe (create and delete)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
