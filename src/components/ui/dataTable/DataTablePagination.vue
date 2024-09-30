<template>
    <div class="flex items-center justify-end py-4 space-x-2">
        <!-- 显示 选中行数 -->
        <div class="flex-1 text-sm text-muted-foreground">
            已选中
            {{ table.getFilteredSelectedRowModel().rows.length }} /
            {{ table.getFilteredRowModel().rows.length }} 条记录
        </div>
        <!-- 分页 -->
        <div class="flex items-center space-x-6 lg:space-x-8">
            <div class="flex items-center space-x-2">
                <p class="text-sm font-medium">
                    每页显示
                </p>
                <Select :model-value="`${table.getState().pagination.pageSize}`" @update:model-value="table.setPageSize">
                    <SelectTrigger class="h-8 w-[70px]">
                        <SelectValue :placeholder="`${table.getState().pagination.pageSize}`" />
                    </SelectTrigger>
                    <SelectContent side="top">
                        <SelectItem v-for="pageSize in [10, 20, 30, 40, 50]" :key="pageSize" :value="`${pageSize}`">
                            {{ pageSize }}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div class="flex w-[100px] items-center justify-center text-sm font-medium">
                第 {{ table.getState().pagination.pageIndex + 1 }} /
                {{ table.getPageCount() }} 页
            </div>
            <div class="flex items-center space-x-2">
                <Button variant="outline" class="hidden w-8 h-8 p-0 lg:flex" :disabled="!table.getCanPreviousPage()" @click="table.setPageIndex(0)">
                    <span class="sr-only">Go to first page</span>
                    <Icon icon="mdi:chevron-double-left" class="w-4 h-4"/>
                </Button>
                <Button variant="outline" class="w-8 h-8 p-0" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">
                    <span class="sr-only">Go to previous page</span>
                    <Icon icon="mdi:chevron-left" class="w-4 h-4"/>
                </Button>
                <Button variant="outline" class="w-8 h-8 p-0" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
                    <span class="sr-only">Go to next page</span>
                    <Icon icon="mdi:chevron-right" class="w-4 h-4"/>
                </Button>
                <Button variant="outline" class="hidden w-8 h-8 p-0 lg:flex" :disabled="!table.getCanNextPage()" @click="table.setPageIndex(table.getPageCount() - 1)">
                    <span class="sr-only">Go to last page</span>
                    <Icon icon="mdi:chevron-double-right" class="w-4 h-4"/>
                </Button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from '@/components/ui/select';
import { Icon } from "@iconify/vue";
defineProps({ table: Object })
</script>

<style scoped></style>
