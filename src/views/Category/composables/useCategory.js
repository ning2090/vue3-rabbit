import { ref, onMounted } from 'vue'
import { useRoute,onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category.js'

// 封装分类数据业务相关代码
export function useCategory(){
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result  
    }
    onMounted(() => {
        getCategory()
    })

    // 路由参数变化时，把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}