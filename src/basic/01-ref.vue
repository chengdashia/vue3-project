<script setup>
// // 导入函数
// import { reactive } from 'vue';

// // 执行函数 传入一个对象类型的参数 变量接收
// const state = reactive({
//     count: 0
// })

// const setCount = () => {
//     state.count++
// }

// 导入函数
import { ref } from 'vue';

// 执行函数  传入参数 [简单类型 + 对象类型] 变量接收
const count = ref(0)
console.log(count);

const setCount = () => {
    // 脚本区域修改ref 产生的响应式对象数据 必须通过 .value 属性
    count.value++
}

</script>

<template>
    <div>
        <button @click="setCount">{{ count }}</button>
    </div>
</template>

<style>
</style>