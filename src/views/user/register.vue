<template>
<div class="relative py-3 sm:max-w-xl sm:mx-auto my-20 ">
    <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
    <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5 justify-center">
        <img src="../../assets/images/logo.svg" alt="logo_kdshop">
        </div>
        <AutoForm 
        class="space-y-6 mt-5" 
        :schema="schema" 
        :field-config="fieldConfig" 
        @submit="onSubmit">
        <div class="text-right mb-4">
            <a
            class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
            href="#"
            >
            Forgot Password?
            </a>
        </div>
        
        <div class="mt-5">
            <Button
            class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="submit"
            >
            Log in
            </Button>
        </div>
        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <a
            class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            href="javascript:;"
            >Already account? sign in</a
            >
            <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
        </div>
        </AutoForm>
    </div>
</div>
</div>

</template>
    
<script setup>
import { AutoForm } from '@/components/ui/auto-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast/use-toast';
import * as z from 'zod';
// API
// import { GetCode } from "@/api";

const { toast } = useToast()

//字段配置
const fieldConfig = {
    phone: {
        description: '手机号作为找回密码的重要凭证',
        inputProps: {
            placeholder: '手机号',
        }
    },
    password: {
        inputProps: {
            type: 'password',
            placeholder: '密码',
        },
    },
    confirm: {
        inputProps: {
            type: 'password',
            placeholder: '确认密码',
        },
    }
}

const schema = z.object({
    phone: z.string({
        required_error: '手机号不能为空！',
        invalid_type_error: "请输入正确的手机号",
    }).regex(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/),
    password: z.string({
        required_error: '密码不能为空！',
        invalid_type_error: "密码长度在8~16个字符"
    }).min(8, {
      message: '密码长度在8~16个字符',
    }).max(16, {
        message: '密码长度在8~16个字符',
    }),
    confirm: z.string({
        required_error: '确认密码不能为空！',   
    }),
}).refine(data => data.password === data.confirm, {
    message: '两次密码必须一致！',
    path: ['confirm'],
})

function onSubmit(values) {  
    toast({
        title: 'You submitted the following values:',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    })
}
</script>

<style scoped>
</style>
    