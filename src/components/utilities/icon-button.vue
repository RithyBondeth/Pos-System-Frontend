<script lang="ts" setup>
// @ts-nocheck
import GoogleIcon from "./google-icon.vue";
defineProps({
  color: {
    type: String,
    required: false,
    default: "primary",
    validator: (value: string) =>
      ["primary", "secondary", "success", "warning", "danger", "light", "dark"].includes(
        value
      ),
  },
  icon: {
    type: String || null,
    required: false,
    default: null,
  },
});
</script>
<template>
  <button
    :class="[
      `px-2 py-2 rounded-md border-2 border-transparent duration-300 flex justify-center items-center text-sm text-white bg-${color} hover:bg-transparent hover:text-${color} hover:border-${color} hover:scale-105`,
      icon && 'flex items-center gap-1',
    ]"
  >
    <slot />
    <GoogleIcon :icon="icon" v-if="icon != null" class="text-[20px]" />
  </button>
</template>
