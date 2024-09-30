<template>
  <PageHeader :title="route.meta.title">
    <template #actions>
      <Button>
        <Icon icon="mdi:add" /> Add
      </Button>
    </template>
  </PageHeader>
  <div class="bg-white mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <DataTable :columns="columns" :data="data" searchColumn="username"/>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTable, DataTableRowActions } from '@/components/ui/dataTable';
import { Icon } from "@iconify/vue";
import { h } from 'vue';
import PageHeader from "./PageHeader.vue";

const route = useRoute();
const data = ref([])

const columns = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
        'checked': table.getIsAllPageRowsSelected(),
        'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
        'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => h(Checkbox, {
        'checked': row.getIsSelected(),
        'onUpdate:checked': (value) => row.toggleSelected(!!value),
        'ariaLabel': 'Select row',
    }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'userId',
    header: () => h('div', 'ID'),
  },
  {
    accessorKey: 'phone',
    header: () => h('div', 'Phone')
  },
  {
    accessorKey: 'username',
    header: () => h('div', 'Username')
  },
  {
    accessorKey: 'birthday',
    header: () => h('div', '生日')
  },
  {
    accessorKey: 'sex',
    header: () => h('div', '性别')
  },
  {
    accessorKey: 'imgUrl',
    header: () => h('div', '头像')
  },
  {
    accessorKey: 'status',
    header: () => h('div', 'Status')
  },
  {
    accessorKey: 'lastLogin',
    header: () => h('div', '最后登录时间')
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
        return h(Button, {
            variant: 'ghost',
            onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        }, () => ['创建时间', h(Icon, { icon: 'basil:sort-outline', class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('createdAt')),
  },
  {
    accessorKey: 'amount', //字段名
    header: () => h('div', { class: 'text-right' }, '金额'), //表头
    cell: ({ row }) => { // 单元格
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const recard = row.original // 使用 row.original 访问行数据
      
      return h(DataTableRowActions, { 
        recard,
        onEdit(data) {
          console.log("edit！！！", data)
        },
        onDelete(data) {
          console.log("delete！！！", data)
        }
       })
    },
  }
]

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52d',
      amount: 100,
      status: 'pending',
      email: 'zhagsan@example.com',
    },
    {
      id: '728ed52s',
      amount: 100,
      status: 'pending',
      email: 'alien@example.com',
    },
  ]
}

onMounted(async () => {
  data.value = await getData()
})

</script>

<style scoped></style>
