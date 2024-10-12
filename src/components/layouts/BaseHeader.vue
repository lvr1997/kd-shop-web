<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
</script>

<template>
  <!-- 学生端前台导航栏 -->
  <header class="bg-white dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-900">
      <div class="container flex flex-col items-center px-6 pt-6 mx-auto">
        <a href="#" class="mx-auto">
          <img class="w-auto h-6 sm:h-7" src="../../assets/images/logo.svg" alt="">
        </a>

        <el-menu class="w-full justify-center" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">公告</el-menu-item>
          <el-menu-item index="3">发布闲置</el-menu-item>
          <el-menu-item h="full" @click="toggleDark()">
            <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
              <i inline-flex i="dark:ep-moon ep-sunny" />
            </button>
          </el-menu-item>
          <el-sub-menu index="4">
            <template #title>{{ userStore.username }}</template>
            <el-menu-item index="4-1">个人中心</el-menu-item>
            <el-menu-item index="4-2">退出登录</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </nav>
  </header>
</template>
