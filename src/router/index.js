// 1. 导入 createRouter 和 createWebHashHistory
// createRouter 创建路由实例
// createWebHashHistory hash 模式的路由

import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '@/views/Layout/Index.vue'
import Login from '@/views/Login/Index.vue'
import Home from '@/views/Home/Index.vue'
import Category from '@/views/Category/Index.vue'

// 2. 定义路由
// 每个路由都需要映射到一个组件。
const route = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    // path 和 component 一一对应
    routes: [
        {   
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home,
                },
                {
                    path: '/category',
                    component: Category,
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
     ]
})

export default route
