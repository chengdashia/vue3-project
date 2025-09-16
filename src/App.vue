<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <!-- 一级路由出口组件 -->
    <RouterView />

    <div class="test">测试颜色</div>
</template>

<style lang="scss">
.test{
    color: $priceColor;
}
</style>