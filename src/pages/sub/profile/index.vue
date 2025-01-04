<script lang="ts" setup>
//@ts-nocheck
import GoogleIcon from "@/components/utilities/google-icon.vue";
import { profileMenus } from "./data";
import { ref } from "vue";
import { ProfileNavigatorE } from "./type";

const profileNavigator = ref<ProfileNavigatorE>(ProfileNavigatorE.MyProfile);
</script>

<template>
  <div class="h-screen w-full p-5 flex flex-col items-start gap-5">
    <!-- Header Label -->
    <p class="text-2xl font-bold">Profile</p>

    <!-- Profile Section -->
    <div class="size-full flex justify-between items-start gap-5">
      <!-- Left Side Section -->
      <div class="w-1/3 flex flex-col gap-3 p-3 rounded-lg shadow-md bg-white">
        <div
          v-for="item in profileMenus"
          :key="item"
          :class="[
            'flex items-center rounded-lg gap-2 px-3 py-4 cursor-pointer',
            profileNavigator == item.navigator && 'duration-300 text-white bg-primary',
          ]"
          @click="profileNavigator = item.navigator"
        >
          <GoogleIcon :icon="item.icon" />
          <p class="text-sm">{{ item.label }}</p>
        </div>
      </div>

      <!-- Right Side Section -->
      <!-- My Profile Section -->
      <div
        class="h-full w-2/3 p-3 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.MyProfile"
      >
        My Profile
      </div>

      <!-- Manage Access Section -->
      <div
        class="h-full w-2/3 p-3 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.ManageAccess"
      >
        Manage Access
      </div>

      <!-- Logout Section -->
      <div
        class="h-full w-2/3 p-3 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.Logout"
      >
        Logout
      </div>
    </div>
  </div>
</template>
