<script setup lang="ts">
//@ts-nocheck
import NormalButton from "@/components/utilities/normal-button.vue";
import IconButton from "@/components/utilities/icon-button.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";
import Divider from "@/components/utilities/divider.vue";
import { ref } from "vue";

const showAddNewStaff = ref<boolean>(false);
const showEditStaffModal = ref<boolean>(false);
const showDeleteStaffModal = ref<boolean>(false);
</script>

<template>
  <div class="w-full h-screen flex flex-col items-start gap-5 p-5">
    <!-- Header Label -->
    <p class="text-2xl font-bold">Staff Management</p>
    <!-- Menu Section -->
    <div class="w-full flex justify-between items-center">
      <p class="text-lg font-bold">Staff (22)</p>
      <div class="flex items-center gap-2">
        <NormalButton @click="showAddNewStaff = true">Add New Staff</NormalButton>
        <IconButton icon="arrow_drop_down_circle">Sort By</IconButton>
      </div>
    </div>
    <!-- Table Section -->
    <div class="w-full overflow-scroll no-scrollbar bg-white">
      <table class="w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Timing</th>
            <th></th>
          </tr>
        </thead>
        <!-- body -->
        <tbody>
          <!-- Row 1 -->
          <tr v-for="item in [1, 2, 3]" :key="item.id">
            <td>1</td>
            <td>
              <div class="flex items-center gap-2">
                <div
                  class="size-16 rounded-full bg-center bg-cover bg-no-repeat bg-light"
                  :style="{ backgroundImage: `url(${''})` }"
                />
                <div class="flex flex-col items-start">
                  <div class="font-bold">Seng Meyhorng</div>
                  <div class="text-sm text-accent-light">sengmeyhorng123@gmail.com</div>
                </div>
              </div>
            </td>
            <td>Staff</td>
            <td>06132432</td>
            <td>21</td>
            <td>Female</td>
            <td>$350.00</td>
            <td>8am - 5pm</td>
            <td>
              <div class="flex items-center gap-2">
                <IconButton color="primary" icon="visibility" />
                <IconButton
                  color="success"
                  icon="edit"
                  @click="showEditStaffModal = true"
                />
                <IconButton
                  color="danger"
                  icon="delete"
                  @click="showDeleteStaffModal = true"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Add New Staff Modal -->
  <div class="modal-background" v-if="showAddNewStaff">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Staff Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Add New Staff</h2>
            <GoogleIcon icon="close" @click="showAddNewStaff = false" />
          </div>
          <Divider />
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Staff Modal -->
  <div class="modal-background" v-if="showEditStaffModal">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Staff Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Edit Staff</h2>
            <GoogleIcon icon="close" @click="showEditStaffModal = false" />
          </div>
          <Divider />
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Staff Modal Section -->
  <div class="modal-background" v-if="showDeleteStaffModal">
    <div class="modal rounded-xl p-5 bg-white">
      <form class="flex flex-col items-start gap-5">
        <p class="text-md">Are you sure you want to delete this staff?</p>
        <div class="w-full flex items-center justify-end gap-2">
          <NormalButton color="danger" class="px-3" @click="showDeleteStaffModal = false">
            No
          </NormalButton>
          <NormalButton color="success" class="px-3" type="submit">Yes</NormalButton>
        </div>
      </form>
    </div>
  </div>
</template>
