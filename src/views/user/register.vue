<template>
<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="../../assets/images/logo.svg" alt="logo_kdshop">
        <h2 class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
    </div>
    
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <AutoForm 
            v-if="schema"
            class="space-y-6 mt-5" 
            :schema="schema" 
            :field-config="fieldConfig" 
            @submit="onSubmit">

        <template #acceptTerms="slotProps">
            <AutoFormField v-bind="slotProps" />
            <div class="!mt-2 text-sm">
                I agree to the <button class="text-primary underline">
                terms and conditions
                </button>.
            </div>
        </template>
        
            <div class="mt-5">
                <Button class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    type="submit">Sign up
                </Button>
            </div>
            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <a class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                    href="/login">Already account? sign in</a>
                <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
        </AutoForm>
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

const schema = ref(null)

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => {
        schema.value = z.object({
            school: z.enum(data.map(user => user.name)),
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
            acceptTerms: z.boolean().refine(value => value, {
                message: 'You must accept the terms and conditions.',
                path: ['acceptTerms'],
            }),
            }).refine(data => data.password === data.confirm, {
            message: '两次密码必须一致！',
            path: ['confirm'],
        })
    })
})

//字段配置
const fieldConfig = {
    school: {
        inputProps: {
            placeholder: 'Choose your school.',
        }
    },
    phone: {
        description: '手机号作为找回密码的重要凭证',
        inputProps: {
            placeholder: 'Input your phone number.',
        }
    },
    password: {
        inputProps: {
            type: 'password',
            placeholder: 'Input your password.',
        },
    },
    confirm: {
        inputProps: {
            type: 'password',
            placeholder: 'Confirm password',
        },
    },
    acceptTerms: {
        label: 'Accept terms and conditions.',
        inputProps: {
            required: true,
        },
    },
}

function onSubmit(values) {  
    toast({
        title: 'You submitted the following values:',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    })
}
</script>

<style scoped>
</style>
    