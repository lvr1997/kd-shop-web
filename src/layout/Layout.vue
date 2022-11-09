<template>
    <MyHeader />
    <RouterView />
    <a-back-top>
        <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    <MyFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
</script>

<style lang="less">
.ant-back-top {
  right: 10px;
}
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

</style>