<template>
  <!-- 商品列表 -->
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">List</h1>

        <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div class="lg:mx-12">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Category</h1>

                <div class="mt-4 space-y-4 lg:mt-8">
                    <a href="#" class="block text-blue-500 dark:text-blue-400 hover:underline">电子数码</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">书籍刊物</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">日用品</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">生活日用</a>
                </div>
            </div>

            <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 ">
                    <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div class="px-4 py-2">
                            <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>

                        <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR">

                        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 class="text-lg font-bold text-white">$129</h1>
                            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                        </div>
                    </div>

                    <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div class="px-4 py-2">
                            <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>

                        <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR">

                        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 class="text-lg font-bold text-white">$129</h1>
                            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                        </div>
                    </div>

                    <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div class="px-4 py-2">
                            <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>

                        <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR">

                        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 class="text-lg font-bold text-white">$129</h1>
                            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                        </div>
                    </div>

                    <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div class="px-4 py-2">
                            <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>

                        <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR">

                        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 class="text-lg font-bold text-white">$129</h1>
                            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue'
</script>