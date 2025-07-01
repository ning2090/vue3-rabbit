# vue3-rabbit

Vue3 + Vite + Element Plus + Vue Router + Pinia + sass + axios + VueUse
优化：图片懒加载

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 优化笔记
路由缓存优化：
原因：路由只有参数变化时，会复用组件示例，这也意味着组件生命周期函数不会被调用
解决方法：
1. 给RouterView添加key，破坏复用机制，强制销毁重建 `RouterView :key="$route.fullPath"`
2. 使用onBeforeRouteUpdate导航钩子，可以在每次路由更新之前执行，在回调中执行需要数据更新的业务逻辑
    ```js
    onBeforeRouteUpdate((to,from) => {
        getCategory(to.params.id)
    })
    ```
