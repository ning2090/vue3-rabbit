<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const confirm = () => {
    userStore.clearUserInfo()
    router.push('/login')
}
</script>

<template>
    <div class="breadcrumb-wrapper">
        <el-breadcrumb separator="|">
            <template v-if="userStore.userInfo.token">
                <el-breadcrumb-item><i class="iconfont icon-user"></i><a href="javascript:;">{{ userStore.userInfo.account }}</a></el-breadcrumb-item>
                <el-breadcrumb-item>
                    <el-popconfirm title="确认退出吗？" @confirm="confirm" confirm-button-text="确认" cancel-button-text="取消">
                        <template #reference>
                            <a href="javascript:;">退出登录</a>
                        </template>
                    </el-popconfirm>
                </el-breadcrumb-item>
                <el-breadcrumb-item><a href="javascript:;">我的订单</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="javascript:;">会员中心</a></el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
            </template>
            <template v-else>
                <el-breadcrumb-item><a href="javascript:;" @click="$router.push('/login')">请先登录</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="javascript:;">帮助中心</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="javascript:;">关于我们</a></el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<style scoped lang="scss">
.breadcrumb-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;

    a:hover {
      color: $xtxColor; 
    }

}
</style>