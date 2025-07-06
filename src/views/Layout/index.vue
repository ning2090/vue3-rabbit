<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import {useCategoryStore} from '@/stores/categoryStore'
import { onMounted } from 'vue';

// 触发获取导航列表
const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategory()
})
</script>

<template>
    <div>
        <LayoutFixed />
        <LayoutNav />
        <LayoutHeader />
        <div class="allContainer">
            <!-- 二级路由出口 -->
            <RouterView />
        </div>
        <LayoutFooter />
    </div>
</template>

<style lang="scss" scoped>
.allContainer {
  max-width: calc(100% - 360px); 
  margin: 0 auto; 
  margin-bottom: 30px;
}
</style>