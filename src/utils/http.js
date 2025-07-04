// axios基础封装
import axios from "axios"

const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // 设置请求超时时间
    timeout: 5000
})

// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    const message = error.response?.data?.message || '请求失败'
    ElMessage.error(message)
    return Promise.reject(error);
});

export default httpInstance