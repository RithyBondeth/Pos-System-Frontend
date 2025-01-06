<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <div
    class="relative w-14 p-1 inline-flex items-center cursor-pointer rounded-full transition-colors shadow-md"
    :class="modelValue ? 'bg-success' : 'bg-danger'"
    @click="!disabled && emit('update:modelValue', !modelValue)"
  >
    <div
      class="size-6 rounded-full transform transition-transform flex items-center justify-center uppercase text-[8px] bg-white"
      :class="modelValue ? 'translate-x-6' : 'translate-x-0'"
    >
      {{ modelValue ? "On" : "Off" }}
    </div>
  </div>
</template>
