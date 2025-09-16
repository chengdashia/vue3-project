<script setup>
//1.导入use打头的方法
import { onMounted } from 'vue';
import { useCounterStore } from './stores/counter'
import { storeToRefs } from 'pinia'

//2.执行方法得到store实例对象
const counterStore = useCounterStore()

// 直接解构赋值（响应式丢失）
// const {count, doubleCount} = counterStore

// 方法包裹 (保持响应式更新)
const {count, doubleCount} = storeToRefs(counterStore)

//方法直接从原来的counterStore中解构赋值
const {ncrement}=counterStore

onMounted(() => {
    counterStore.getList()
})

</script>

<template>
    <div>
        <button @click="counterStore.increment"> {{ count }} </button>
        {{ doubleCount }}
    </div>
    <ul>
        <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
</template>


<style>

</style>