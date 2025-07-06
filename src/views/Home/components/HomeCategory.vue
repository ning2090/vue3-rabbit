<script setup>
import { useCategoryStore } from '@/stores/categoryStore'
import { ref, computed, watchEffect } from 'vue'

const categoryStore = useCategoryStore()

// 当前选中分类 ID
const activeId = ref('')

// 默认选中第一个分类
watchEffect(() => {
  if (categoryStore.categoryList.length && !activeId.value) {
    activeId.value = String(categoryStore.categoryList[0].id)
  }
})

// 当前选中的分类对象
const activeCategory = computed(() =>
  categoryStore.categoryList.find(item => String(item.id) === activeId.value)
)

// 处理菜单点击事件
const handleSelect = (index) => {
  activeId.value = index
}
</script>

<template>
  <el-row class="menu-wrapper">
    <!-- 左侧菜单 -->
    <el-col :span="5">
      <el-menu
        :default-active="activeId"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="item in categoryStore.categoryList"
          :key="item.id"
          :index="String(item.id)"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-col>

    <!-- 右侧内容 -->
    <el-col :span="19">
      <div class="layer" v-if="activeCategory">
        <ul>
          <li v-for="i in activeCategory.goods" :key="i.id">
            <img :src="i.picture" alt="" />
            <div class="info">
              <p class="name">{{ i.name }}</p>
              <p class="desc">{{ i.desc }}</p>
              <p class="price">{{ i.price }}</p>
            </div>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.menu-wrapper {
  width: 100%;
}

.el-menu-vertical-demo .el-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-menu-vertical-demo .el-menu-item.is-active {
  background-color: #27ba9b !important;
  color: #fff !important;
}

.layer {
  min-height: 300px;
  padding: 10px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    padding: 0;
    padding-top: 15px;
    margin: 0;
  }

  li {
    list-style: none;
    text-align: center;
  }

  img {
    width: 120px;
    border-radius: 6px;
    border: 1px solid #eee;
    margin-bottom: 8px;
  }

  .info {
    padding: 0 5px;
  }

  .name {
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
  }

  .desc {
    font-size: 12px;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    color: $priceColor;
  }
}


</style>
