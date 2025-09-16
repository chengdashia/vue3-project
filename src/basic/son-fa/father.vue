<script setup>
// setup 语法糖下的局部组件无需注册直接可以使用
import SonCom from './son-com.vue'
const getMessage = (msg) => {
    console.log(msg)
    
}


setTimeout(() => {
    count.value ++
}, 3000);
</script>

<template>
    <div class="father">
        <h2>父组件 App</h2>
        <!-- 绑定属性 -->
        <SonCom @get-message="getMessage"/>
    </div>
</template>


<style>

</style>