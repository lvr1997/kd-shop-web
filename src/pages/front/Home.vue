<template>
  <section class="Home">
    <div class="block text-center">
      <el-carousel height="400px" motion-blur>
        <el-carousel-item class="bg-blue-2" v-for="item in 4" :key="item">
          <h3 class="small justify-center leading-9" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
