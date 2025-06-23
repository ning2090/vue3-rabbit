import httpInstance from '@/utils/http.js'

export function getBannerAPI () {
    return httpInstance({
        url:'/home/banner'
    })
}

export const findNewApi = () => {
    return httpInstance({
        url:'/home/new'
    })
}

export const findHotApi = () => {
    return httpInstance({
        url:'/home/hot'
    })
}

export const getGoodsAPI = () => {
    return httpInstance({
        url:'/home/goods'
    })
}