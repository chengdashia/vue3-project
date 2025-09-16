<script setup lang="ts">
import HomeBanner from './HomeBanner.vue'
import HomeCategory from './HomeCategory.vue'
import HomeHot from './HomeHot.vue'
import HomeNew from './HomeNew.vue'
import HomePanel from './HomePanel.vue'
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
    <!-- 测试 -->
     <HomePanel title="测试标题" subTitle="测试副标题"> 
        <div style="height: 200px; background: #f00">插槽内容</div>

     </HomePanel>

    <HomePanel title="测试标题2" subTitle="测试副标题2"> 
        <div style="height: 200px; background: #0f0">插槽内容2</div>
        
     </HomePanel>
</template>