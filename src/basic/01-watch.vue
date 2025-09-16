<script setup>
import { ref, watch } from 'vue';
const count = ref(0)
const name = ref('cp')
const setCount = () => {
    count.value++
}

const setName = () => {
    name.value += '1'
}

//TODO: watch 侦听单个数据源
// ref 对象不需要加 .value
watch(count, (newVal, oldVal) => {
    console.log('count 变化了', newVal, oldVal)
})


//TODO: watch 侦听多个数据源
watch(
    [count, name], 
    ([newCount, newName], [oldCount, oldName]) => {
    console.log('count 变化了', newCount, oldCount)  
    console.log('name 变化了', newName, oldName) 
})

//TODO : 立即执行
watch(count, () => {
    console.log('count 变化了')
},{
    immediate: true
})

const state2 = ref({ count:0})
const changeStateByCount = () => {
    state2.value.count++
}
//TODO : deep 深度监听
watch(state2, () => {
    console.log('count 变化了')
},{
    deep: true
})

//TODO : 精确监听

const info = ref({ 
    count:0,
    name: 'zjy'
})
const changeName = () => {
    info.value.name+='1'
}
watch(
    () => info.value.name,
    () => {
        console.log('age 变化了');
        
    }
)
// deep 有性能损耗 尽量不开启
</script>

<template>
    <div>
        <button @click="setCount">{{ count }}</button>

        <button @click="setName">{{ name }}</button>

        <button @click="changeStateByCount">{{ state2.count }}</button>
        <button @click="changeName">{{ info.name }}</button>
    </div>
</template>


<style>

</style>