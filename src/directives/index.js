// 定义懒加载插件
// 引入VueUse中判断图片是否进入视口的工具
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install (app) {
        // 定义全局指令——图片懒加载
        app.directive('img-lazy',{
            mounted(el,binding) {
                // el是绑定的哪个元素，binding.value等于号后面绑定的表达式的值
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        // console.log(isIntersecting)
                        if(isIntersecting){
                            // 进入视口区域
                            el.src = binding.value
                            // 对于元素监听一直存在，需在图片第一次完成加载后停止监听，防止内存浪费
                            stop()
                        }
                    },
                )
            }
        })
    }
}