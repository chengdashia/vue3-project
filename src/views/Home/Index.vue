<script setup lang="ts">
import HomeBanner from './HomeBanner.vue'
import HomeCategory from './HomeCategory.vue'
import HomeHot from './HomeHot.vue'
import HomeNew from './HomeNew.vue'
import HomeProduct from './HomeProduct.vue'


</script>

<template>
    <div class="container">
        <HomeCategory/>
        <HomeBanner/>
    </div>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct/>
</template>+