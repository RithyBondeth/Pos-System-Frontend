<script lang="ts" setup>
//@ts-nocheck
import GoogleIcon from "@/components/utilities/google-icon.vue";
import CustomInput from "@/components/utilities/input-custom.vue";
import Select from "primevue/select";
import { gender, profileMenus } from "./data";
import { ref } from "vue";
import { ProfileNavigatorE } from "./type";
import SwitchButton from "@/components/utilities/switch-button.vue";
import NormalButton from "@/components/utilities/normal-button.vue";
import IconButton from "@/components/utilities/icon-button.vue";

const profileNavigator = ref<ProfileNavigatorE>(ProfileNavigatorE.MyProfile);

const selectedGender = ref(gender[0].label);
const genders = ref(gender);

const editProfile = ref<boolean>(false);
const showDeleteUserModal = ref<boolean>(false);
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
  <div class="h-screen w-full overflow-y-hidden p-5 flex flex-col items-start gap-5">
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
        class="h-fit w-2/3 flex flex-col items-start p-5 gap-5 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.MyProfile"
      >
        <!-- Header Label -->
        <p class="text-2xl font-bold">Personal Information</p>
        <!-- Profile Image Section -->
        <div class="w-full flex justify-between items-center">
          <div class="flex items-center gap-5">
            <div class="size-28 rounded-full bg-light"></div>
            <div class="flex flex-col items-start gap-1">
              <p class="text-lg font-bold">Hem Rithybondeth</p>
              <p class="text-md text-primary">Manager</p>
            </div>
          </div>
          <NormalButton @click="editProfile = true" v-if="!editProfile">
            Edit Profile
          </NormalButton>
          <!-- Group Buttons Section -->
          <div class="flex items-center justify-end gap-2" v-if="editProfile">
            <NormalButton type="reset" color="danger" @click="editProfile = false">
              Discard Changes
            </NormalButton>
            <NormalButton type="submit" color="success">Save Changes</NormalButton>
          </div>
        </div>
        <!-- Profile Info Section -->
        <div class="w-full flex flex-col gap-3">
          <!-- Firstname and Lastname Section -->
          <div class="w-full flex items-center justify-between gap-5">
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="fname" class="text-sm">Firstname</label>
              <CustomInput
                type="text"
                icon="person"
                id="fname"
                name="fname"
                placeholder="Firstname"
              />
            </div>
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="lname" class="text-sm">Lastname</label>
              <CustomInput
                type="text"
                icon="person"
                id="lname"
                name="lname"
                placeholder="Lastname"
              />
            </div>
          </div>
          <!-- Gender, Phonenumber and Address Section -->
          <div class="w-full flex items-center justify-between gap-5">
            <div class="w-[30%] flex flex-col items-start gap-2">
              <label for="gender" class="text-sm">Gender</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedGender"
                  :options="genders"
                  optionLabel="label"
                  :placeholder="selectedGender"
                  class="w-full"
                />
              </div>
            </div>
            <div class="w-[35%] flex flex-col items-start gap-2">
              <label for="phonenumber" class="text-sm">Phone Number</label>
              <CustomInput
                type="number"
                icon="phone"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
              />
            </div>
            <div class="w-[35%] flex flex-col items-start gap-2">
              <label for="address" class="text-sm">Address</label>
              <CustomInput
                icon="location_on"
                id="address"
                name="address"
                placeholder="Address"
              />
            </div>
          </div>
          <!-- Timing and Salary Section -->
          <div class="w-full flex items-center justify-between gap-5">
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="timing" class="text-sm">Timing</label>
              <CustomInput
                type="text"
                icon="alarm"
                id="timing"
                name="timing"
                placeholder="Timing"
                disabled
              />
            </div>
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="salary" class="text-sm">Salary</label>
              <CustomInput
                type="text"
                icon="paid"
                id="salary"
                name="salary"
                placeholder="Salary"
                disabled
              />
            </div>
          </div>
          <!-- Email Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="email" class="text-sm">Email</label>
            <CustomInput
              type="email"
              icon="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <!-- Password and Confirm Password Section -->
          <div class="w-full flex items-center justify-between gap-5">
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="password" class="text-sm">Password</label>
              <CustomInput
                icon="lock"
                id="password"
                name="password"
                placeholder="Password"
                :isPassword="true"
              />
            </div>
            <div class="w-1/2 flex flex-col items-start gap-2">
              <label for="confirm-password" class="text-sm">Confirm Password</label>
              <CustomInput
                icon="lock"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm Password"
                :isPassword="true"
              />
            </div>
          </div>
        </div>
      </form>

      <!-- Manage Access Section -->
      <div
        class="h-[95%] w-2/3 flex flex-col items-start gap-5 overflow-y-scroll overflow-x-hidden no-scrollbar"
        v-if="profileNavigator === ProfileNavigatorE.ManageAccess"
      >
        <!-- Header Label -->
        <p class="text-2xl font-bold">Manage Access</p>
        <div
          v-for="item in [1, 2, 3, 4, 5, 6]"
          :key="item"
          class="w-full rounded-lg shadow-md px-8 py-5 bg-white"
        >
          <!-- Access Section -->
          <div class="w-full flex flex-col items-start gap-5">
            <!-- Infomation Section -->
            <div class="w-full flex justify-start items-center gap-2">
              <div
                class="size-20 rounded-full bg-center bg-cover bg-no-repeat bg-light"
                :style="{ backgroundImage: `url(${''})` }"
              />
              <div class="flex flex-col items-start gap-2">
                <div class="flex items-center gap-2">
                  <p class="text-md font-bold">Seng Meyhorng</p>
                  <p class="px-2 py-1 rounded-md text-xs text-white bg-primary">Admin</p>
                </div>
                <p class="text-sm">sengmeyhorng123@gmail.com</p>
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
      </div>

      <!-- Delete User Modal -->
      <div class="modal-background" v-if="showDeleteUserModal">
        <div class="modal rounded-xl p-5 bg-white">
          <form class="flex flex-col items-start gap-5">
            <p class="text-md">Are you sure you want to delete this user?</p>
            <div class="w-full flex items-center justify-end gap-2">
              <NormalButton
                color="danger"
                class="px-3"
                @click="showDeleteUserModal = false"
              >
                No
              </NormalButton>
              <NormalButton color="success" class="px-3" type="submit">Yes</NormalButton>
            </div>
          </form>
        </div>
      </div>
      <!-- Logout Section -->
      <div
        class="h-fit w-2/3 p-5 flex flex-col items-start gap-5 rounded-lg shadow-md bg-white"
        v-if="profileNavigator === ProfileNavigatorE.Logout"
      >
        <!-- Header Label -->
        <p class="text-2xl font-bold">Logout</p>
        <!-- Description -->
        <p>Are you sure you want to logout from your account?</p>
        <!-- Logout Button -->
        <IconButton icon="logout" class="flex-row-reverse">Logout</IconButton>
      </div>
    </div>
  </div>
</template>
