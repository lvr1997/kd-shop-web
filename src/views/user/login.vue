<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="../../assets/images/logo.svg" alt="logo_kdshop">
      <h2 class="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
        
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <AutoForm class="space-y-6 mt-5" :schema="schema" :field-config="fieldConfig" @submit="onSubmit">
          <template #verifyCode="slotProps">
            <div class="flex items-end space-x-2">
              <AutoFormField v-bind="slotProps" class="w-full" />
              <Button type="button">
                Check
              </Button>
            </div>
          </template>
          <div class="text-right mb-4">
            <a class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer" href="#">
              Forgot Password?
            </a>
          </div>

          <div class="mt-5">
            <Button class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    type="submit">
              Sign in
            </Button>
          </div>

          <div class="flex items-center justify-between mt-4">
              <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                  href="/register">Not Account? sign up</a>
              <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </AutoForm>
    </div>
  </div>

</template>

<script setup>
import { AutoForm } from '@/components/ui/auto-form';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
// API
import { useUserStore } from "@/store/user";
import { api } from '../../api';

const userStore = useUserStore()

//字段配置
const fieldConfig = {
  phone: {
    hideLabel: true,
    inputProps: {
      placeholder: 'Your phone number.',
    }
  },
  password: {
    hideLabel: true,
    inputProps: {
      type: 'password',
      placeholder: '******',
    },
  }
}

//表单校验
const schema = z.object({
  phone: z.string({
    required_error: '手机号不能为空！',
  }),
  password: z.string({
    required_error: '密码不能为空！',
  })
})

//提交
function onSubmit(values) {
  api.login(values).then(res => {
    userStore.isLogin = true
    userStore.userInfo = res.data
    router.push('/')
  })
}
</script>

<style scoped></style>
