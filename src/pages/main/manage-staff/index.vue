<script setup>
import NormalButton from "@/components/utilities/normal-button.vue";
import IconButton from "@/components/utilities/icon-button.vue";
</script>

<template>
  <div class="w-full h-screen flex flex-col items-start gap-5 p-5">
    <!-- Header Label -->
    <p class="text-2xl font-bold">Staff Management</p>
    <!-- Menu Section -->
    <div class="w-full flex justify-between items-center">
      <p class="text-lg font-bold">Staff (22)</p>
      <div class="flex items-center gap-2">
        <NormalButton>Add Staff</NormalButton>
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
                <IconButton color="success" icon="edit" />
                <IconButton color="danger" icon="delete" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
