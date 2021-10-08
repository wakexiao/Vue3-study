// 引入的不是 Vue 构造函数了，引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
// console.log(app)
const vm = app.mount('#app');
// console.log(vm)

// createApp(App).mount('#app')


// new Vue({
//     render: h => h(App)
// }).$mount('#app')