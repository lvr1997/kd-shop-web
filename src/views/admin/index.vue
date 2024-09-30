<template>
  <div class="min-h-full">
    <div class="shadow bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.href === route.path ? 'text-white' : 'text-gray-300 hover:text-white', 'text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- <Button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <Icon icon="mdi-light:bell" />
              </Button> -->

              <!-- Profile dropdown -->
              <DropdownMenu class="relative ml-3">
                <DropdownMenuTrigger as-child>
                  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem v-for="item in userNavigation">
                    <RouterLink :to="item.href">{{ item.name }}</RouterLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <main class="bg-gray-100">
      <RouterView/>
    </main>
  </div>
</template>

<script setup>
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


const route = useRoute();


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', current: true },
  { name: 'Users', href: '/admin/users', current: false },
  { name: 'Goods', href: '/admin/goods', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '/admin/profile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>