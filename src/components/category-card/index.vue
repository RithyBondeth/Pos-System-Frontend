<script lang="ts" setup>
// @ts-nocheck
import GoogleIcon from "@/components/utilities/google-icon.vue";
</script>

<template>
  <div
    class="h-40 min-w-40 p-3 relative flex items-end shadow-md rounded-md cursor-pointer duration-300 hover:scale-105 bg-white"
  >
    <div class="flex flex-col items-start text-sm">
      <p class="font-bold">Pizza</p>
      <p class="text-accent-light">120 Items</p>
    </div>
    <div
      class="absolute size-10 top-3 right-3 p-3 flex justify-center items-center rounded-full text-white bg-primary"
    >
      <GoogleIcon icon="widgets" />
    </div>
  </div>
</template>
