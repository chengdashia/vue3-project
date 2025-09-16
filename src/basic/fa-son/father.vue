<script setup>
// setup 语法糖下的局部组件无需注册直接可以使用
import SonCom from './son.vue';
import { ref } from 'vue';
const count = ref(100)


setTimeout(() => {
    count.value ++
}, 3000);
</script>

<template>
    <div class="father">
        <h2>父组件 App</h2>
        <!-- 绑定属性 -->
        <SonCom message="father message" :count="count"/>
    </div>
</template>


<style>

</style>