<template>
  <div class="page-breadcrumb">
    <a-breadcrumb separator="→">
      <a-breadcrumb-item v-for="(item,index) in nav" :key="index">{{item}}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
  
</template>

<script setup>
defineProps({
  title: {
    type: String
  },
  nav: {
    type: Array
  }
})
</script>

<style lang="less" scoped>
.page-breadcrumb {
  background-color: #F6F7FB;
  position: relative;
  padding: 30px 0px;
  .ant-breadcrumb {
    max-width: 1120px;
    margin: 0 auto;
  }
}
</style>
