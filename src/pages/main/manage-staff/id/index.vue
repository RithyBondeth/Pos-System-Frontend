<script lang="ts" setup>
//@ts-nocheck
import IconButton from "@/components/utilities/icon-button.vue";
import ProfileInfoBox from "@/components/profile/profile-infobox/index.vue";
import { ageCalculation } from "@/utils/age-calculation.ts";
import { role } from "@/pages/sub/profile/data.ts";
import { ref } from "vue";

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
  <div class="w-full h-screen flex flex-col items-scretch gap-5 p-5">
    <!-- Header Label -->
    <p class="text-2xl font-bold">Staff Name</p>
    <!-- Staff Information Section -->
    <div class="flex justify-between items-stretch gap-5">
      <!-- Profile Image Section -->
      <div
        class="w-1/3 h-full flex flex-col items-start justify-between gap-5 p-5 rounded-lg bg-white"
      >
        <p class="text-xl font-bold">Profile Image</p>
        <div class="w-full flex flex-col items-center gap-3">
          <div class="size-72 rounded-full bg-light"></div>
          <p class="text-sm underline cursor-pointer">Change Profile Image</p>
        </div>
        <div class="w-full flex flex-col gap-2">
          <IconButton icon="edit" color="success">Edit Profile</IconButton>
          <IconButton icon="delete" color="danger">Delete Profile</IconButton>
        </div>
      </div>
      <!-- Profile Information Section -->
      <div class="w-2/3 flex flex-col items-start gap-5">
        <!-- Personal Information Section -->
        <div class="w-full flex flex-col items-start gap-5">
          <p class="text-xl font-bold">Staff Personal Information</p>
          <div class="w-full flex justify-between p-5 rounded-lg bg-white">
            <div class="w-1/2 flex flex-col gap-5">
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
            <div class="w-1/2 flex flex-col gap-5">
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
          <div class="w-full flex justify-between p-5 rounded-lg bg-white">
            <div class="w-1/2 flex flex-col gap-5">
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
            <div class="w-1/2 flex flex-col gap-5">
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
