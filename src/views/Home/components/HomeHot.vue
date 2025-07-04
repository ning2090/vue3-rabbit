<script setup>
import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue';
import {findHotApi} from '@/apis/home';

const hotList = ref([])

const getHotList = async () => {
    const res = await findHotApi()
    hotList.value = res.result
}

onMounted(() => getHotList())
</script>

<template>
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
        <ul class="goods-list">
            <li v-for="item in hotList" :key="item.id">
                <img v-img-lazy="item.picture" alt="" />
                <p class="title">{{ item.title }}</p>
                <p class="alt"><small>{{ item.alt }}</small></p>
            </li>
        </ul>
    </HomePanel>
</template>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 280px;
        height: 280px;
        background-color: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0,-3px,0);
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
        }

        img {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 20px;
            padding-top: 6px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .alt {
            color: #999999;
        }

    }
}
</style>