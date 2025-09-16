import { createApp } from 'vue'
import App from './App.vue'
// 导入createPinia
import { createPinia } from 'pinia'
import router from './router/index.js'

// 引入初始化样式文件
import '@/styles/element/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

//执行方法得到实例
const pinia = createPinia()

// 把pinia 实例加入到app应用中
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        // el 代表指令所绑定的元素 img
        // binding binding.value 代表指令等于号后面的属性值 图片url
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value
                }
            }
        )
    }
})

