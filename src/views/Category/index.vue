<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import GoodsItem from '../Home/components/GoodsItem.vue'
import {useCategory} from './composables/useCategory'
import {useBanner} from './composables/useBanner'

const {categoryData} = useCategory()
const {bannerList} = useBanner()

</script>

<template>
    <div class="container">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="homeBanner">
        <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
        </el-carousel-item>
        </el-carousel>
    </div>
    <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
            <li v-for="i in categoryData.children" :key="i.id">
                <RouterLink :to="`/category/sub/${i.id}`">
                    <img :src="i.picture" />
                    <p>{{ i.name }}</p>
                </RouterLink>
            </li>
        </ul>
    </div>
    <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
            <h3>- {{ item.name }} -</h3>
        </div>
        <div class="body">
            <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.homeBanner {
    width: 100%;
    height: 500px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.sub-list {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin: 20px;

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
    text-align: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    li {
      width: 120px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.3s;
      border-radius: 8px;
      padding: 10px;

      &:hover {
        transform: translateY(-4px);
        background-color: #f9f9f9;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        margin-bottom: 8px;
      }

      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
}

.ref-goods {
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 8px;

  .head {
    text-align: center; 
    margin-bottom: 20px;

    h3 {
      font-size: 20px;
      color: #333;
      display: inline-block;
      padding: 0 10px;
    }
  }

  .body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }
}

</style>
