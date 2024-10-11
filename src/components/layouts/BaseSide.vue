<template>
  <!-- 后台界面  菜单栏 -->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><House /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>后台数据管理</span>
      </template>
      <el-menu-item index="2-1">轮播图管理</el-menu-item>
      <el-menu-item index="2-2">闲置管理</el-menu-item>
      <el-menu-item index="2-3">分类管理</el-menu-item>
      <el-menu-item index="2-4">举报管理</el-menu-item>
      <el-menu-item index="2-5">留言管理</el-menu-item>
      <el-menu-item index="2-6">订单管理</el-menu-item>
      <el-menu-item index="2-7">公告管理</el-menu-item>
    </el-sub-menu> 
    <el-sub-menu index="4">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="4-1">用户管理</el-menu-item>
      <el-menu-item index="4-2" disabled>角色管理</el-menu-item>
      <el-menu-item index="4-3" disabled>学校管理</el-menu-item>
      <el-menu-item index="4-4">数据字典</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-icon><User /></el-icon>
      <template #title>个人中心</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  House,
  Location,
  Setting,
  User
} from "@element-plus/icons-vue";
import { ref } from "vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
