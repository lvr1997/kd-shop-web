<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { useUserStore } from "~/store/user";
import Login from "../Login/index.vue";
import { ref } from "vue";

const userStore = useUserStore();

const loginDialoog = ref()

// 打开登录弹窗
const showLoginDialog = () => {
  loginDialoog.value.showModal();
};

const closeLoginModal = () => {
  loginDialoog.value.close();
};
</script>

<template>
  <!-- 学生端前台导航栏 -->
  <header class="bg-white dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-900">
      <div class="container flex flex-col items-center pt-6 lg:px-6 mx-auto">
        <a href="#" class="mx-auto">
          <img class="w-auto h-6 sm:h-7" src="../../assets/images/logo.svg" alt="">
        </a>

        <el-menu class="w-full justify-center" mode="horizontal" router>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/notice">公告</el-menu-item>
          <el-menu-item index="/wanted">求购</el-menu-item>
          <el-menu-item h="full" @click="toggleDark()">
            <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
              <i inline-flex i="dark:ep-moon ep-sunny" />
            </button>
          </el-menu-item>
          <el-sub-menu v-if="userStore.username">
            <template #title>{{ userStore.username }}</template>
            <el-menu-item index="4-1">个人中心</el-menu-item>
            <el-menu-item>退出登录</el-menu-item>
          </el-sub-menu>
          <div class="ep-menu-item" v-else>
            <el-button type="primary" link @click="showLoginDialog">登录</el-button>
          </div>
        </el-menu>
      </div>
    </nav>

    <teleport to="body">
      <dialog ref="loginDialoog" class="relative border-none rounded-md animate-back-in-down ease-in-out">
        <Login />
        <span class="text-gray-500 absolute top-5 right-5 cursor-pointer font-bold" @click="closeLoginModal">🗙</span>
      </dialog>
    </teleport>
  </header>
</template>
<style scoped>
/* .ep-menu--horizontal > .ep-menu-item:nth-child(1) {
  margin-right: auto;
} */
</style>
