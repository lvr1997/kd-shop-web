<template>
  <BaseHeader />
  <div class="flex main-container">
    <!-- <BaseSide v-if="userStore.role == 'ADMIN'" /> -->
    <div w="full">
      <RouterView />
    </div>
  </div>
  <BaseFooter/>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user';
import BaseHeader from './BaseHeader.vue';
import BaseSide from './BaseSide.vue';

const userStore = useUserStore();
</script>

<style scoped>
.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>