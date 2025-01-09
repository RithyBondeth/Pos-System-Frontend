<script lang="ts" setup>
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
});
</script>
<template>
  <button
    :class="`px-2 py-2 rounded-md border-2 border-transparent duration-300 text-sm text-white bg-${color} hover:bg-transparent hover:text-${color} hover:border-${color} hover:scale-105`"
  >
    <slot />
  </button>
</template>
