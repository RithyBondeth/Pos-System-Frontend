<script lang="ts" setup>
//@ts-nocheck
import CustomInput from "@/components/utilities/input-custom.vue";
import IconButton from "@/components/utilities/icon-button.vue";
import { appLogo } from "@/components/sidebar/data";
</script>

<template>
  <div class="h-screen w-screen flex justify-between items-center">
    <div
      class="w-1/2 h-full flex justify-center items-center bg-primary tablet-lg:w-full"
    >
      <form
        class="p-10 flex flex-col items-stretch gap-8 rounded-xl shadow-md bg-white tablet-xl:mx-10 phone-lg:!mx-5"
      >
        <div class="w-full hidden tablet-lg:flex tablet-lg:justify-center">
          <img :src="appLogo" alt="app logo" class="w-32" />
        </div>
        <p class="w-full text-center text-2xl font-medium tablet-lg:hidden">
          Welcome to Bondeth Mini Mart
        </p>
        <div class="flex flex-col items-start gap-5">
          <div class="w-full flex flex-col items-start gap-2">
            <label for="email">Email</label>
            <CustomInput
              type="email"
              icon="email"
              name="email"
              id="email"
              placeholder="Enter Email..."
            />
          </div>
          <div class="w-full flex flex-col items-start gap-2">
            <label for="email">Password</label>
            <CustomInput
              icon="lock"
              name="password"
              id="password"
              :isPassword="true"
              placeholder="Enter Password..."
            />
            <p class="w-full text-end text-xs cursor-pointer hover:text-primary">
              Forgot Password?
            </p>
          </div>
        </div>
        <IconButton type="submit" class="rounded-xl flex flex-row-reverse" icon="login">
          Sign in
        </IconButton>
      </form>
    </div>
    <div class="w-1/2 h-full flex justify-center items-center bg-white tablet-lg:hidden">
      <div class="flex flex-col justify-center items-center gap-3">
        <img :src="appLogo" alt="app logo" class="w-[60%]" />
        <p class="text-lg text-primary">
          Manage your products securely and confidentially.
        </p>
      </div>
    </div>
  </div>
</template>
