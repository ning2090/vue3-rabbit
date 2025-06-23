<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { getCategoryAPI } from '@/apis/category.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const categoryData = ref({})
const route = useRoute()
const getCategory = async () => {
    const res = await getCategoryAPI(route.params.id)
    categoryData.value = res.result  
}
onMounted(() => {
    getCategory()
})
</script>

<template>
    <div class="container">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style lang="scss" scoped>
.container {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
