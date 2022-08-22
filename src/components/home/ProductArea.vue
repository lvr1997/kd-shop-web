<template>
    <div class="product-area section">
        <div class="container">
            <a-row>
                <a-col :span="24">
                    <div class="section-title">
                        <h2>Trending Item</h2>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="product-info">
                        <div class="nav-main">
                            <!-- Tab Nav -->
                            <ul class="nav nav-tabs" id="myTab">
                                <li class="nav-item" v-for="item in popularCategory" :key="item.id"><a class="nav-link"
                                        :class="{ 'active': activeKey === item.id }" @click="tabClick(item.id)">{{
                                                item.name
                                        }}</a></li>
                            </ul>
                            <!--/ End Tab Nav -->
                        </div>

                        <div class="tab-content">
                            <div class="tab-pane fade show active">
                                <div class="tab-single">
                                    <div class="tab-col" v-for="good in goodsCate" :key="good.goodId" >
                                        <ProductItem :goodImg="good.goodImg"
                                        :goodName="good.goodName" :goodPrice="good.goodPrice" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import ProductItem from '../ProductItem.vue';

import p5 from '../../assets/images/goods/p5.jpg';
import p7 from '../../assets/images/goods/p7.jpg';
import p9 from '../../assets/images/goods/p9.jpg';
import p11 from '../../assets/images/goods/p11.jpg';
import p13 from '../../assets/images/goods/p13.jpg';
import p15 from '../../assets/images/goods/p15.jpg';
import p17 from '../../assets/images/goods/p17.jpg';
import p31 from '../../assets/images/goods/p31.jpg';

// 静态数据
const popularCategory = reactive([{ id: 1, name: '衣服' }, { id: 2, name: '鞋' }, { id: 3, name: '配饰' }, { id: 4, name: '裤子' }, { id: 5, name: '包' }])
const goods = ref([
    {
        goodId: 1,
        goodName: '包包',
        goodPrice: 99,
        goodImg: p5,
        categoryId: 5
    },
    {
        goodId: 2,
        goodName: '裤子',
        goodPrice: 88,
        goodImg: p7,
        categoryId: 4
    },
    {
        goodId: 3,
        goodName: '手提包',
        goodPrice: 77,
        goodImg: p9,
        categoryId: 5
    },
    {
        goodId: 4,
        goodName: '帽子',
        goodPrice: 66,
        goodImg: p11,
        categoryId: 3
    },
    {
        goodId: 5,
        goodName: '大衣',
        goodPrice: 55,
        goodImg: p13,
        categoryId: 1
    },
    {
        goodId: 6,
        goodName: '眼镜',
        goodPrice: 77,
        goodImg: p15,
        categoryId: 3
    },
    {
        goodId: 7,
        goodName: '上衣',
        goodPrice: 76,
        goodImg: p17,
        categoryId: 1
    },
    {
        goodId: 5,
        goodName: '鞋',
        goodPrice: 73,
        goodImg: p31,
        categoryId: 2
    }
])
const goodsCate = ref()

//控制交互
const activeKey = ref(1)

onMounted(() => {
    goodsCate.value = goods.value.filter(item => {
        return item.categoryId == activeKey.value
    })
})

function tabClick(cid: number) {
    // console.log("点击了"+cid);
    activeKey.value = cid;
    goodsCate.value = goods.value.filter(item => {
        return item.categoryId === cid
    })
}

</script>

<style lang="less" scoped>
// 分类tab
.product-area .nav-tabs {
    text-align: center;
    display: inline-block;
    width: 100%;
    border: none;
}

.product-area .nav-tabs .nav-item {
    margin-bottom: -1px;
    display: inline-block;
}

.product-area .nav-tabs li a {
    color: #333;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    margin-right: 5px;
    font-weight: 500;
    background: #fff;
    color: #333;
    padding: 3px 14px;
    border-radius: 3px;
    font-size: 13px;
}

.product-area .nav-tabs li:last-child a {
    border-color: transparent;
}

.product-area .nav-tabs li a i {
    margin-right: 10px;
}

.product-area .nav-tabs li a.active,
.product-area .nav-tabs li:hover a {
    background: @primary-color;
    color: #fff;
    border-color: transparent;
}

.tab-single {
    display: flex;
    flex-flow: row wrap;
    .tab-col {
        width: 25%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

// tab content
.tab-content>.tab-pane {
    display: none;
}

.tab-content>.active {
    display: block;
}

.fade.show {
    opacity: 1;
}

.fade {
    opacity: 0;
    transition: opacity .15s linear;
}
</style>