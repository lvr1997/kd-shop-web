<template>
  <!-- 首页：
    轮播最新的公告和图片
   -->
  <!-- Banner start -->
  <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
              <button class="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          </div>

          <div class="max-w-lg lg:mx-12 lg:order-2">
              <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">The best Apple Watch apps</h1>
              <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
              <div class="mt-6">
                  <router-link to="/goods/publish" class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">去发布我的闲置</router-link>
              </div>
          </div>
      </div>

      <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo">
      </div>
  </div>
  </section>
  
  <!-- Banner end -->
  <!-- 最新发布  start  -->
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Latest Work</h1>

      <div class="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
          <button class="item" :class="{ active: activeKey == item.id}" v-for="item in categoryList" :key="item.id" @click="activeKey = item.id">{{ item.name }}</button>
      </div>

      <!-- new goods -->
      <section class="mt-8 space-y-8 lg:mt-12">
        <div class="flex flex-wrap -m-4">
          <ProductItem v-for="item in 8" :key="item"></ProductItem>
        </div>

        <button
          class="flex mx-auto mt-10 text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-400 rounded text-lg"
        >
          More...
        </button>
      </section>
    </div>
  </section>

  <!-- 最新发布  end  -->
</template>

<script setup>
//分类选择
const activeKey = ref(1);
const categoryList = [
  {
    id: 1,
    name: 'Animation'
  },
  {
    id: 2,
    name: 'Web design'
  },
  {
    id: 3,
    name: 'App design'
  },
  {
    id: 4,
    name: 'Branding'
  }
]
</script>

<style scoped>
.item {
  @apply h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400;
}
.active {
  @apply text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 hover:border-blue-500;
}
</style>
