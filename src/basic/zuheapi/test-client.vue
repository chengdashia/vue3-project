<script setup>
import { onMounted, ref } from 'vue'
import testCom from './zuheapi/test-com.vue'
import TestCom from './zuheapi/test-com.vue'

// 调用ref函数 -> ref 对象
const h1Ref = ref(null)
const comRef = ref(null)

// 组件挂载完毕后才能获取
onMounted(() => {
    console.log(h1Ref.value)
    console.log(comRef.value)
    
})
</script>

<template>
    <!-- 通过ref标识 绑定ref对象 -->
    <h1 ref="h1Ref">我是dom 标签h1</h1>
    <TestCom ref="comRef"/>
</template>


<style>

</style>