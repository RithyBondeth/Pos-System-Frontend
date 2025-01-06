<script lang="ts" setup>
//@ts-nocheck
import GoogleIcon from "@/components/utilities/google-icon.vue";
import CustomInput from "@/components/utilities/input-custom.vue";
import { profileMenus } from "./data";
import { ref } from "vue";
import { ProfileNavigatorE } from "./type";
import SwitchButton from "@/components/utilities/switch-button.vue";
import NormalButton from "@/components/utilities/normal-button.vue";
import IconButton from "@/components/utilities/icon-button.vue";

const profileNavigator = ref<ProfileNavigatorE>(ProfileNavigatorE.MyProfile);
const editProfile = ref<boolean>(false);
const dashboardAccess = ref<boolean>(false);
const accessOptions = ref({
  dashboardAccess: true,
  productAccess: false,
  stockAccess: false,
  customerAccess: true,
  reportAccess: true,
  settingAccess: false,
});
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
      <form
        class="h-full w-2/3 flex flex-col items-start p-5 gap-5 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.MyProfile"
      >
        <!-- Header Label -->
        <p class="text-2xl font-bold">Personal Information</p>
        <!-- Profile Image Section -->
        <div class="w-full flex justify-between items-center">
          <div class="flex items-center gap-5">
            <div class="size-36 rounded-full bg-light"></div>
            <div class="flex flex-col items-start gap-1">
              <p class="text-lg font-bold">Hem Rithybondeth</p>
              <p class="text-md text-primary">Manager</p>
            </div>
          </div>
          <NormalButton @click="editProfile = true" v-if="!editProfile">
            Edit Profile
          </NormalButton>
        </div>
        <!-- Profile Info Section -->
        <div class="w-full flex flex-col gap-5">
          <!-- Firstname and Lastname Section -->
          <div class="w-full flex items-center justify-between gap-5">
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="fname">Firstname</label>
              <CustomInput
                type="text"
                icon="person"
                id="fname"
                name="fname"
                placeholder="Firstname"
              />
            </div>
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="lname">Lastname</label>
              <CustomInput
                type="text"
                icon="person"
                id="lname"
                name="lname"
                placeholder="Lastname"
              />
            </div>
          </div>
          <!-- Email and Phonenumber Section -->
          <div class="w-full flex items-center justify-between gap-5">
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="phonenumber">Phone Number</label>
              <CustomInput
                type="number"
                icon="phone"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
              />
            </div>
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="address">Address</label>
              <CustomInput icon="map" id="address" name="address" placeholder="Address" />
            </div>
          </div>
          <!-- Email Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="email">Email</label>
            <CustomInput
              type="email"
              icon="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <!-- Password Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="password">Password</label>
            <CustomInput
              icon="lock"
              id="password"
              name="password"
              placeholder="Password"
              :isPassword="true"
            />
          </div>
          <!-- Confirm Password Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="confirm-password">Confirm Password</label>
            <CustomInput
              icon="lock"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              :isPassword="true"
            />
          </div>
          <div class="flex items-center justify-end gap-2" v-if="editProfile">
            <NormalButton type="reset" color="danger" @click="editProfile = false">
              Discard Changes
            </NormalButton>
            <NormalButton type="submit" color="success">Save Changes</NormalButton>
          </div>
        </div>
      </form>

      <!-- Manage Access Section -->
      <div
        class="h-full w-2/3 flex flex-col items-start gap-5 p-5 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.ManageAccess"
      >
        <!-- Header Label -->
        <p class="text-2xl font-bold">Manage Access</p>
        <!-- Access Section -->
        <div class="w-full flex flex-col items-start gap-5">
          <!-- Infomation Section -->
          <div class="w-full flex justify-between items-center">
            <div class="flex items-center gap-2">
              <div class="size-20 rounded-full bg-light" />
              <div class="flex flex-col items-start gap-2">
                <div class="flex items-center gap-2">
                  <p class="text-md font-bold">Seng Meyhorng</p>
                  <p class="px-2 py-1 rounded-md text-xs text-white bg-primary">Admin</p>
                </div>
                <p class="text-sm">sengmeyhorng123@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <IconButton icon="edit" color="success" />
              <IconButton icon="delete" color="danger" />
            </div>
          </div>
          <!-- Option Access Section -->
          <div class="w-full flex items-center gap-8">
            <!-- Dashboard Access -->
            <div class="flex flex-col items-center gap-2">
              <p class="text-xs">Dashboard</p>
              <SwitchButton v-model="accessOptions.dashboardAccess" />
            </div>
            <!-- Product Access -->
            <div class="flex flex-col items-center gap-2">
              <p class="text-xs">Product</p>
              <SwitchButton v-model="accessOptions.productAccess" />
            </div>
            <!-- Stock Access -->
            <div class="flex flex-col items-center gap-2">
              <p class="text-xs">Stock</p>
              <SwitchButton v-model="accessOptions.stockAccess" />
            </div>
            <!-- Customer Access -->
            <div class="flex flex-col items-center gap-2">
              <p class="text-xs">Customer</p>
              <SwitchButton v-model="accessOptions.customerAccess" />
            </div>
            <!-- Report Access -->
            <div class="flex flex-col items-center gap-2">
              <p class="text-xs">Report</p>
              <SwitchButton v-model="accessOptions.reportAccess" />
            </div>
            <!-- Setting Access -->
            <div class="flex flex-col items-center gap-2">
              <p class="text-xs">Setting</p>
              <SwitchButton v-model="accessOptions.settingAccess" />
            </div>
          </div>
        </div>
      </div>

      <!-- Logout Section -->
      <div
        class="h-full w-2/3 p-5 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.Logout"
      >
        Logout
      </div>
    </div>
  </div>
</template>
