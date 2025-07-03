<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import {getCategoryFilterAPI, getSubCategoryAPI} from '@/apis/category'
import GoodsItem from '../Home/components/GoodsItem.vue'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// 获取面包屑导航数据
const route = useRoute()
const categoryData = ref({})
const getCategoryData = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    console.log('hi')
    categoryData.value = res.result
}
onMounted(() => getCategoryData())

// 获取基础列表数据
const goodList = ref([])
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})
const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.result.items
}
onMounted(() => getGoodList())

// tab切换回调
const tabChange = () => {
    reqData.value.page = 1
    getGoodList()
}

// 列表无限加载
const disabled = ref(false)
const load = async () => {
    // 获取下一页的数据
    reqData.value.page ++
    const res = await getSubCategoryAPI(reqData.value)
    // 新老数据的拼接
    goodList.value = [...goodList.value, ...res.result.items]
    // 加载完毕 停止监听
    if(res.result.items.length === 0){
        disabled.value = true
    }
}
</script>

<template>
    <div class="container">
        <div class="bread-container">
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <GoodsItem v-for="goods in goodList" :key="goods.id" :goods="goods" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bread-container {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.sub-container {
  background-color: #fff;
  padding: 10px 0; 
  margin: 0; 
  border-top: 1px solid #eee; 

  .el-tabs {
    padding: 0 16px;

    .el-tabs__item {
      font-size: 15px;
      color: #555;
    }
  }

  .body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
  }
}

</style>