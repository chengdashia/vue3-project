import { createApp } from 'vue'
import App from './App.vue'
// 导入createPinia
import { createPinia } from 'pinia'
import router from './router/index.js'

// 引入初始化样式文件
import '@/styles/element/common.scss'

//执行方法得到实例
const pinia = createPinia()

// 把pinia 实例加入到app应用中
createApp(App).use(pinia).use(router).mount('#app')

