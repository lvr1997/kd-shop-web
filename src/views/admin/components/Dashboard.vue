<template>
  <PageHeader :title="route.meta.title"></PageHeader>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <section class="Home">
      Home
    </section>
  </div>
</template>

<script setup>
import PageHeader from "./PageHeader.vue";

const route = useRoute();
</script>

<style scoped>

</style>
