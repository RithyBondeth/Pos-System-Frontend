<script lang="ts" setup>
//@ts-nocheck
import Sidebar from "@/components/sidebar/index.vue";
</script>

<template>
  <div class="flex items-start">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Main Content -->
    <main class="overflow-x-hidden w-full">
      <router-view />
    </main>
  </div>
</template>
