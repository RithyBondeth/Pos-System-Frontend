<script setup>
import GoogleIcon from "@/components/utilities/google-icon.vue";
defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="flex items-center gap-3 m-3 py-3 px-5 rounded-3xl text-sm cursor-pointer duration-200 hover:text-white hover:bg-primary"
  >
    <GoogleIcon :icon="icon" />
    <p>{{ label }}</p>
  </div>
</template>
