<script setup>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue';
import {useCategoryStore} from '@/stores/category'

// 获取 scrollY（垂直滚动距离）
const { y } = useScroll(window)
// 显示 header 的条件
const isVisible = computed(() => y.value >= 300)

const categoryStore = useCategoryStore()

</script>

<template>
    <div class="app-fixed"  v-show="isVisible">
        <div class="container">
            <ul  class="nav-list">
                <li>
                  <RouterLink to="/">首页</RouterLink>
                </li>
                <li v-for="item in categoryStore.categoryList" :key="item.id">
                  <RouterLink :to="`/category/${item.id}`">{{item.name}}</RouterLink>
                </li>
            </ul>
            <div class="search">
                <input type="text" placeholder="搜一搜">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 10px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-list {
    display: flex;
    gap: 50px;
    list-style: none;
    padding: 0;
    margin: 0;

    li a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 16px;

      &:hover {
        color: $xtxColor;
      }
    }
  }

  .search {
    input {
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;

      &:focus {
        outline: none;
        border-color: $xtxColor;
      }
    }
  }
}
</style>
