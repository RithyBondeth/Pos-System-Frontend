<script lang="ts" setup>
// @ts-nocheck
import Divider from "@/components/utilities/divider.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";
import SidebarMenu from "@/components/sidebar/sidebar-menu/index.vue";
import { sidebarMenu, appLogo, avatar } from "./data.ts";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

// Sidebar toggle state
const closeSidebar = ref(false);
const toggleSidebar = () => (closeSidebar.value = !closeSidebar.value);

// Router utilities
const router = useRouter();
const route = useRoute();

// Window width and responsive handling
const windowWidth = ref(window.innerWidth);
const handleSidebarResponsive = () => (closeSidebar.value = windowWidth.value <= 750);

// Listen to window resize
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  handleSidebarResponsive();
};

// Check responsive state on initial load and resize
onMounted(() => {
  handleSidebarResponsive(); // Check on mount
  window.addEventListener("resize", updateWindowWidth); // Add listener
});
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth); // Remove listener
});
</script>

<template>
  <div
    :class="[
      closeSidebar ? 'min-w-fit' : 'min-w-72 laptop:min-w-60',
      'h-screen sticky top-0 left-0 shadow-sm duration-300 transition-all bg-white',
    ]"
  >
    <!-- Sidebar Title -->
    <Divider />
    <div class="h-20 p-5 flex items-center justify-between">
      <img
        :src="appLogo"
        class="w-24 transition-all duration-300 cursor-pointer"
        v-if="!closeSidebar"
        @click="router.push('/')"
      />
      <GoogleIcon
        :icon="closeSidebar ? 'left_panel_open' : 'left_panel_close'"
        :class="closeSidebar && 'ml-6'"
        @click="toggleSidebar"
        aria-label="Toggle-Sidebar"
      />
    </div>
    <Divider />

    <!-- Sidebar Menu -->
    <div v-for="item in sidebarMenu" :key="item.id">
      <router-link :to="{ name: item.route[0] }">
        <SidebarMenu
          :label="item.label"
          :icon="item.icon"
          :class="[
            closeSidebar && '!text-[0px] [&>span]:ml-3',
            'h-12 duration-300 transition-all overflow-hidden',
            item.route.includes(route.name) && 'bg-primary text-white',
          ]"
        />
      </router-link>
    </div>
    <Divider />

    <!-- Profile Section -->
    <div
      :class="[
        closeSidebar
          ? 'p-2 mt-2 mx-5'
          : 'p-2 m-5 flex items-center justify-between rounded-2xl custom-border',
        'cursor-pointer',
      ]"
      @click="router.push('/profile')"
    >
      <div class="flex items-center gap-2">
        <div
          class="size-12 min-w-12 rounded-full bg-center bg-cover bg-no-repeat"
          :style="{ backgroundImage: `url(${avatar})` }"
        />
        <div>
          <p
            :class="[
              closeSidebar && '!text-[0px]',
              'text-sm transition-all duration-200 flex flex-col items-start',
            ]"
          >
            Rithy Bondeth
          </p>
          <p
            :class="[
              closeSidebar && '!text-[0px]',
              'text-accent-light text-xxs transition-all duration-200 flex flex-col items-start',
            ]"
          >
            Admin
          </p>
        </div>
      </div>
      <GoogleIcon icon="arrow_drop_down" v-if="!closeSidebar" />
    </div>
  </div>
</template>
