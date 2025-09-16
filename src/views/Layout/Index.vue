<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { RouterView } from 'vue-router';


</script>

<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <RouterView/>
    <layout-footer />
</template>