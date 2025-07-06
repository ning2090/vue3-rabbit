// axios基础封装
import axios from "axios"
import { useUserStore } from '@/stores/userStore'
import router from "@/router";

const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // 设置请求超时时间
    timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 获取token并按要求拼接token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器
httpInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    const userStore = useUserStore()
    // 统一错误提示
    const message = error.response?.data?.message || '请求失败'
    ElMessage.error(message)
    // 401token失效处理
    if(error.response.status === 401){
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(error);
});

export default httpInstance