<script setup>
// 原始响应式数组
import { ref } from 'vue'
// 导入 computed
import { computed } from 'vue'
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])

// 执行函数 return 计算之后的值 变量接收
const computedList = computed(() => {
    return list.value.filter(item => item > 2)
})


setTimeout(() => {
    list.value.push(9, 10)
}, 3000);

</script>


<template>
    <div>
        原始响应式数组-{{ list }}
    </div>

    <div>
        计算属性数组-{{ computedList }}
    </div>
</template>


<style>

</style>