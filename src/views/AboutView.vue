<template>
  <div class="about">
    <h1>{{msg}}</h1>
    <a-button type="primary" @click="startBtn">开始了</a-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

  let msg = ref('This is an about page')
  function startBtn() {
    msg.value = 'Hello!'
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
