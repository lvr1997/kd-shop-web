<template>
    <header class="bg-white shadow">
        <div class="flex items-center max-w-7xl mx-auto mb-6 px-8 py-6">
            <div class="flex-1">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h1>
            </div>
            <div class="flex-none gap-2">
                <slot name="actions"></slot>
            </div>
        </div>
    </header>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style scoped></style>
