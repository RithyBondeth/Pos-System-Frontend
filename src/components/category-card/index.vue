<script lang="ts" setup>
// @ts-nocheck
import GoogleIcon from "@/components/utilities/google-icon.vue";
defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "smartphone",
  },
  item: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    class="h-40 min-w-40 p-3 relative flex items-end shadow-md rounded-md cursor-pointer duration-300 hover:scale-105 bg-white"
  >
    <div class="flex flex-col items-start text-sm">
      <p class="font-bold text-md">{{ label }}</p>
      <p class="text-accent-light">{{ item }} {{ item <= 1 ? "Item" : "Items" }}</p>
    </div>
    <div
      class="absolute size-10 top-3 right-3 p-3 flex justify-center items-center rounded-full text-white bg-primary"
    >
      <GoogleIcon :icon="icon" />
    </div>
  </div>
</template>
