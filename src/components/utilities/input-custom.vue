<script lang="ts" setup>
//@ts-nocheck
import GoogleIcon from "./google-icon.vue";
import { ref } from "vue";
defineProps({
  type: {
    type: String,
    required: false,
    default: "text",
    enum: ["text", "email", "number", "password"],
  },
  icon: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
});
defineOptions({
  inheritAttrs: false,
});

const visibility = ref<boolean>(false);
</script>
<template>
  <div class="w-full flex justify-between items-center gap-4 p-4 rounded-3xl bg-light">
    <GoogleIcon :icon="icon" v-if="icon" />
    <input
      v-bind="$attrs"
      :type="isPassword ? (visibility ? 'text' : 'password') : type"
      :placeholder="placeholder"
      class="w-full outline-none bg-transparent text-sm"
    />
    <GoogleIcon
      :icon="visibility ? 'visibility_off' : 'visibility'"
      v-if="isPassword"
      @click="visibility = !visibility"
    />
  </div>
</template>
