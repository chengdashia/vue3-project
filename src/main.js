import { createApp } from 'vue'
import App from './App.vue'
// 导入createPinia
import { createPinia } from 'pinia'
import router from './router/index.js'

// 引入初始化样式文件
import '@/styles/element/common.scss'

// 引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives' 

//执行方法得到实例
const pinia = createPinia()

// 把pinia 实例加入到app应用中
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

// 

