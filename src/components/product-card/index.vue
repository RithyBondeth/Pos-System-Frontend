<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isOutStock: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="w-full flex items-center justify-between gap-5 rounded-lg p-1 bg-light">
    <div class="flex items-center gap-2">
      <div
        class="h-24 min-w-32 rounded-lg bg-center bg-cover bg-no-repeat bg-white"
        :style="{ backgroundImage: `url(${image})` }"
      />
      <div class="flex flex-col gap-1 items-start">
        <p class="text-sm font-semibold line-clamp-2">{{ name }}</p>
        <p class="text-xs">Orders: {{ order }} order</p>
      </div>
    </div>
    <div class="flex flex-col items-end gap-1 px-2">
      <p
        :class="[
          'text-sm font-semibold line-clamp-2',
          isOutStock && 'text-red-500 text-sm font-semibold',
        ]"
      >
        {{ isOutStock ? "Out of Stock" : "In Stock" }}
      </p>
      <p class="text-xs">${{ price }}</p>
    </div>
  </div>
</template>
