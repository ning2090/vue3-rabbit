import httpInstance from '@/utils/http.js'

export function getBannerAPI (params = {}) {
    const {distributionSite = '1'} = params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
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