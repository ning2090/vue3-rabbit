<script setup>
import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue';
import {findNewApi} from '@/apis/home';

const newList = ref([])

const getNewList = async () => {
    const res = await findNewApi()
    newList.value = res.result
}

onMounted(() => getNewList())
</script>

<template>
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <ul class="goods-list">
            <li v-for="item in newList" :key="item.id">
                <img v-img-lazy="item.picture" alt="" />
                <p class="name">{{ item.name }}</p>
                <p class="price">&yen;{{ item.price }}</p>
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

        .price {
            color: $priceColor;
        }
    }
}
</style>