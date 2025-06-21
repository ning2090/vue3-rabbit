<script setup>
import {getBannerAPI} from '@/apis/home'
import { onMounted, ref } from 'vue';

const bannerList = ref([])

const getBanner = async () => {
    const res = await getBannerAPI()
    bannerList.value = res.result
}

onMounted(() => getBanner())
</script>

<template>
  <div class="homeBanner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.homeBanner {
  width: 100%;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
