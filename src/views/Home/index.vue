<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';
</script>

<template>
    <div class="allContainer">
        <HomeBanner />
        <HomeCategory />
        <HomeNew />
        <HomeHot />
        <HomeProduct />
    </div>
</template>

<style lang="scss" scoped>
.allContainer {
  max-width: calc(100% - 360px); 
  margin: 0 auto; 
}
</style>
