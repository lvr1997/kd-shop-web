<script setup>
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Icon } from "@iconify/vue";

defineProps({
  recard: Object,
})

const emits = defineEmits(['edit', 'delete']);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <Icon icon="eva:more-horizontal-outline" class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="emits('edit', recard)">编辑</DropdownMenuItem>
      <DropdownMenuItem @click="emits('delete', recard)">删除</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>