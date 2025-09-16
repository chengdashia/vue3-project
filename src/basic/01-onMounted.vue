<script setup>
// 生命周期函数的使用

//1 引入函数
import { onMounted } from 'vue'

// 2 执行函数 传入回调
onMounted(() => {
    console.log('组件挂载完毕 mounted 执行了1')
    // 好多逻辑
})

onMounted(() => {
    console.log('组件挂载完毕 mounted 执行了3')
    // 补充逻辑
})

onMounted(() => {
    console.log('组件挂载完毕 mounted 执行了2')
})

</script>

<template>
    <div>

    </div>
</template>


<style>

</style>