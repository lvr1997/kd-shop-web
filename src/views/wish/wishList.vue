<template>
  <!-- breadcrumb-area-start -->
  <Breadcrumb :title="title" :nav="nav"></Breadcrumb>
  <!-- breadcrumb-area-end -->

</template>

<script setup lang="ts">
import Breadcrumb from "@/components/Breadcrumbs.vue";
import { CloseCircleFilled } from '@ant-design/icons-vue'
import { ref } from 'vue'

const title = "心愿单";
const nav = ["Home", "Wishlist"];

</script>

<style lang="less" scoped>

</style>