<script lang="ts" setup>
//@ts-nocheck
import GoogleIcon from "@/components/utilities/google-icon.vue";
defineProps({
  label: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <div class="flex flex-col items-start gap-1">
    <p class="text-sm text-primary phone-xl:text-xs">{{ label }}</p>
    <div class="flex items-center gap-1">
      <GoogleIcon :icon="icon" class="phone-xl:text-xs" />
      <p class="phone-xl:text-xs">{{ info }}</p>
    </div>
  </div>
</template>
