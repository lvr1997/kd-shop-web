<template>
   <div class="w-full bg-center bg-cover h-[12rem] md:h-[38rem] lg:h-[38rem]" style="background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');">
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
                <h1 class="text-3xl font-semibold text-white lg:text-4xl">{{'zhangsan'}}'s <span class="text-blue-400">Shop</span> </h1>
                <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
        </div>
    </div>

    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">{{'zhangsan'}}</h1>
        
        <div class="md:mt-8 lg:mt-8 xl:mt-16 md:flex lg:flex lg:-mx-12">
            <div class="hidden md:block lg:block mx-6 lg:mx-12">
                <h1 class="text-xl hidden font-semibold text-gray-800 dark:text-white lg:block">Table of Content</h1>

                <div class="mt-4 space-y-4 lg:mt-8">
                    <a href="#" class="block text-blue-500 dark:text-blue-400 hover:underline">个人信息</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">钱包管理</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">我卖出的</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">我发布的</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">Animation</a>
                </div>
            </div>

            <div class="md:w-2/3 mx-6 lg:flex-1 lg:mx-12 lg:mt-0">
                <!-- pc 商品展示 -->
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div class="group relative">
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="../../assets/images/goods/p11.jpg"
                            alt="">
                        
                        <div class="w-full h-full text-center bg-black bg-opacity-50 absolute left-0 top-0 hidden group-hover:block pt-6">
                            <h2 class="mt-4 text-xl font-semibold text-white capitalize dark:text-white">Best website
                            collections</h2>
                            <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">擦亮</p>
                        </div>
                    </div>

                    <div class="group relative">
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="../../assets/images/goods/p11.jpg"
                            alt="">
                        
                        <div class="w-full h-full text-center bg-black bg-opacity-50 absolute left-0 top-0 hidden group-hover:block pt-6">
                            <h2 class="mt-4 text-xl font-semibold text-white capitalize dark:text-white">Best website
                            collections</h2>
                            <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">擦亮</p>
                        </div>
                    </div>
                    <div class="group relative">
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="../../assets/images/goods/p11.jpg"
                            alt="">
                        
                        <div class="w-full h-full text-center bg-black bg-opacity-50 absolute left-0 top-0 hidden group-hover:block pt-6">
                            <h2 class="mt-4 text-xl font-semibold text-white capitalize dark:text-white">Best website
                            collections</h2>
                            <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">擦亮</p>
                        </div>
                    </div>
                </div>

                 <!-- 移动端 -->
                 '<div class="grid grid-cols-1 gap-8 lg:hidden">
                    <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                        <div class="w-1/3 bg-cover">
                            <img src="../../assets/images/goods/p13.jpg" alt="">
                        </div>

                        <div class="w-2/3 p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum</p>

                            <div class="flex mt-2 item-center">
                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>

                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                        <div class="w-1/3 bg-cover">
                            <img src="../../assets/images/goods/p13.jpg" alt="">
                        </div>

                        <div class="w-2/3 p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum</p>

                            <div class="flex mt-2 item-center">
                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                            </div>

                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>


                    <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                        <div class="w-1/3 bg-cover">
                            <img src="../../assets/images/goods/p13.jpg" alt="">
                        </div>

                        <div class="w-2/3 p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum</p>

                            <div class="flex mt-2 item-center">
                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>

                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>


                    <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                        <div class="w-1/3 bg-cover">
                            <img src="../../assets/images/goods/p13.jpg" alt="">
                        </div>

                        <div class="w-2/3 p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum</p>

                            <div class="flex mt-2 item-center">
                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>

                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                            </div>
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
