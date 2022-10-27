<template>
    <section class="shop-services section home">
        <div class="container">
            <a-row>
                <a-col :lg="6" :md="12">
                    <div class="single-service">
                        <rocket-outlined />
                        <h4>免费送货</h4>
                        <p>满 ￥100 包邮</p>
                    </div>
                </a-col>
                <a-col :lg="6" :md="12">
                    <div class="single-service">
                       <interaction-outlined />
                        <h4>循环交易</h4>
                        <p>让您的闲置不再闲置</p>
                    </div>
                </a-col>
                <a-col :lg="6" :md="12">
                    <div class="single-service">
                        <lock-outlined />
                        <h4>交易安全</h4>
                        <p>100%资金安全</p>
                    </div>
                </a-col>
                <a-col :lg="6" :md="12">
                    <div class="single-service">
                       <tag-outlined />
                        <h4>最优价格</h4>
                        <p>不花冤枉钱</p>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>

<script setup lang="ts">
import { RocketOutlined,InteractionOutlined, LockOutlined, TagOutlined } from '@ant-design/icons-vue'

</script>

<style lang="less" scoped>
.shop-services.section {
    padding: 80px 0 0px 0;
    background: #fff;
}

.shop-services.home {
    padding: 60px 0;
    background: #F6F7FB;
}

.shop-services .single-service {
    position: relative;
    padding-left: 65px;
}

.shop-services .single-service span {
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    color: #333;
    background: transparent;
    border-radius: 100%;
    display: block;
    font-size: 32px;
    position: absolute;
    left: 0;
    top: 0;
}

.shop-services .single-service h4 {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 22px;
    color: #333;
}

.shop-services .single-service p {
    color: #898989;
    line-height: 28px;
    font-size: 14px;
}
</style>