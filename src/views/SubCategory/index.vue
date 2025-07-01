<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import {getCategoryFilterAPI} from '@/apis/category'
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
            <el-tabs>
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body">

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
</style>