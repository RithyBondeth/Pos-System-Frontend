<script lang="ts" setup>
//@ts-nocheck
import IconButton from "@/components/utilities/icon-button.vue";
import ProfileInfoBox from "@/components/profile/profile-infobox/index.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";
import { useRouter } from "vue-router";
import { ageCalculation } from "@/utils/age-calculation.ts";
import { role } from "@/pages/sub/profile/data.ts";
import { ref } from "vue";

const router = useRouter();

const staffInfo = ref({
  firstName: "Hem",
  lastName: "RithyBondeth",
  email: "rithybondeth999@gmail.com",
  role: role,
  salary: "500$",
  shift: {
    shiftTime: "6AM - 12AM",
    shiftDay: "Morning",
  },
  phoneNumber: "(+855) 85872582",
  gender: "male",
  dob: "07-May-2002",
  address: "907, Toul Sangke, Phnom Penh",
});
</script>

<template>
  <div class="size-full flex flex-col items-scretch gap-5 p-5">
    <!-- Header Label -->
    <div class="flex items-center gap-2 text-2xl">
      <GoogleIcon icon="arrow_back" @click="router.push('/managestaff')" />
      <p class="font-bold">Staff Name</p>
    </div>
    <!-- Staff Information Section -->
    <div class="flex justify-between items-stretch gap-5 laptop:flex-col">
      <!-- Profile Image Section -->
      <div
        class="w-1/3 h-full flex flex-col items-start justify-between gap-5 p-5 rounded-lg bg-white laptop:w-full"
      >
        <p class="text-xl font-bold">Profile Image</p>
        <div class="w-full flex flex-col items-center gap-3">
          <div
            class="size-64 rounded-full bg-center bg-cover bg-no-repeat bg-light laptop:size-80 tablet-lg:size-60 phone-xl:!size-40"
            :style="{ backgroundImage: `url(${''})` }"
          >
            <input type="file" name="" id="" class="hidden" />
          </div>
          <p class="text-sm underline cursor-pointer">Change Profile Image</p>
        </div>
        <div
          class="w-full flex flex-col gap-2 laptop:flex-row laptop:[&>button]:w-1/2 laptop:[&>button]:text-xs phone-xl:!flex-col phone-xl:[&>button]:!w-full"
        >
          <IconButton icon="edit" color="success">Edit Profile</IconButton>
          <IconButton icon="delete" color="danger">Delete Profile</IconButton>
        </div>
      </div>
      <!-- Profile Information Section -->
      <div class="w-2/3 flex flex-col items-start gap-5 laptop:w-full">
        <!-- Personal Information Section -->
        <div class="w-full flex flex-col items-start gap-5">
          <p class="text-xl font-bold">Staff Personal Information</p>
          <div
            class="w-full flex justify-between p-5 rounded-lg bg-white tablet-lg:flex-col tablet-lg:gap-5"
          >
            <div class="w-1/2 flex flex-col gap-5 tablet-lg:w-full">
              <!-- Full Name Section -->
              <ProfileInfoBox
                label="Full Name"
                :info="staffInfo.firstName + ' ' + staffInfo.lastName"
                icon="account_circle"
              />
              <!-- Email Section -->
              <ProfileInfoBox label="Email" :info="staffInfo.email" icon="email" />
              <!-- Phone Number Section -->
              <ProfileInfoBox
                label="Phone Number"
                :info="staffInfo.phoneNumber"
                icon="phone"
              />
              <!-- Address Section -->
              <ProfileInfoBox
                label="Address"
                :info="staffInfo.address"
                icon="location_on"
              />
            </div>
            <div class="w-1/2 flex flex-col gap-5 tablet-lg:w-full">
              <!-- Gender Section -->
              <ProfileInfoBox
                label="Gender"
                :info="staffInfo.gender"
                :icon="staffInfo.gender"
              />
              <!-- Age Section -->
              <ProfileInfoBox
                label="Age"
                :info="ageCalculation(staffInfo.dob)"
                icon="person"
              />
              <!-- Date Of Birth Section -->
              <ProfileInfoBox label="Date Of Birth" info="07-May-2002" icon="cake" />
            </div>
          </div>
        </div>
        <!-- Job Information Section -->
        <div class="w-full flex flex-col items-start gap-5">
          <p class="text-xl font-bold">Staff Job Information</p>
          <div
            class="w-full flex justify-between p-5 rounded-lg bg-white phone-xl:flex-col phone-xl:gap-5"
          >
            <div class="w-1/2 flex flex-col gap-5 phone-xl:w-full">
              <!-- Role Section -->
              <ProfileInfoBox
                label="Role"
                :info="staffInfo.role[0].label"
                icon="person"
              />
              <!-- Shift Day Section -->
              <ProfileInfoBox
                label="Shift"
                :info="staffInfo.shift.shiftDay"
                icon="alarm"
              />
            </div>
            <div class="w-1/2 flex flex-col gap-5 phone-xl:w-full">
              <!-- Salary Section Section -->
              <ProfileInfoBox label="Salary" :info="staffInfo.salary" icon="paid" />
              <!-- Shift Time Section -->
              <ProfileInfoBox
                label="Shift Time"
                :info="staffInfo.shift.shiftTime"
                icon="alarm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
