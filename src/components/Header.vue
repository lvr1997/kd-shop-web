<template>
  <header class="bg-white dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center p-6 mx-auto">
            <a href="#" class="mx-auto">
                <img class="w-auto h-6 sm:h-7" src="../assets/images/logo.svg" alt="">
            </a>

            <div class="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
                <router-link :to="{name: 'Home'}" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">首页</router-link>

                <router-link :to="{name: 'List'}" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">买闲置</router-link>

                <router-link v-if="userStore.isLogin" :to="{name: 'Shop'}" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">我的小铺</router-link>

                <!-- <router-link :to="{name: '/goods/list'}" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">树洞</router-link> -->
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="link">
                      <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span class="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem @click="mode = 'light'">
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="mode = 'dark'">
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="mode = 'auto'">
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <router-link v-if="!userStore.isLogin" :to="{name: 'Login'}" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">
                    登录→
                </router-link>
            </div>
        </div>
    </nav>
  </header>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import { Icon } from '@iconify/vue';
import { useColorMode } from '@vueuse/core';
import { ref } from "vue";

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
const userStore = useUserStore()

const isOpen = ref(false)

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: 'ChartPieIcon' },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: 'CursorArrowRaysIcon' },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: 'FingerPrintIcon' },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: 'SquaresPlusIcon' },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: 'ArrowPathIcon' },
]
</script>
