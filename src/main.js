//导入vue的包，得到vue的构造函数
import Vue from 'vue'
//导入App.vue根组件，将来要把App.vue中的模板结构渲染到HTML页面之中
import App from './App.vue'
import Right from '@/components/Right.vue'


Vue.component('MyRight',Right)
//隐藏控制台vue提示警告信息
Vue.config.productionTip = false

new Vue({
  //把render函数指定的组件中，渲染HTMl页面中
  //.$mount('#app') == el:'#app'
  render: h => h(App),
}).$mount('#app')

