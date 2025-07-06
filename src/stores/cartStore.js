import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])

    // 获取最新购物车列表
    const updateNewList = async() => {
        const res = await findNewCartListAPI()
        cartList.value = res.result        
    }
    const addCart = async (goods) => {
        // 登录的话走接口购物车列表逻辑 (调用加入购物车接口，再获取购物车列表接口，最后覆盖本地购物车列表)，未登录走本地购物车列表逻辑
        const {skuId,count} = goods
        if(isLogin.value){
            await insertCartAPI({skuId,count})
            updateNewList()
        }else{
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if(item){
                item.count += goods.count
            }else{
                cartList.value.push(goods)
            }
        }
    }
    const delCart = async (skuId) => {
        if(isLogin.value){
            await delCartAPI([skuId])
            updateNewList()
        }else{
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }
    }

    // 清除购物车
    const clearCart = () => {
        cartList.value = []
    }

    // 单选功能
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    const allCount = computed(() => {
        return cartList.value.reduce((a,c) => a + c.count, 0)
    })
    const allPrice = computed(() => {
        return cartList.value.reduce((a,c) => a + c.count * c.price, 0)
    })

    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a,c) => a + c.count, 0))
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a,c) => a + c.count * c.price, 0))

    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart,
        updateNewList
    }
},{persist: true})