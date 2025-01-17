<script setup lang="ts">
//@ts-nocheck
import NormalButton from "@/components/utilities/normal-button.vue";
import IconButton from "@/components/utilities/icon-button.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";
import Divider from "@/components/utilities/divider.vue";
import CustomInput from "@/components/utilities/input-custom.vue";
import { Select } from "primevue";
import { gender, role, shift } from "@/pages/sub/profile/data";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showAddNewStaff = ref<boolean>(false);
const showEditStaffModal = ref<boolean>(false);
const showDeleteStaffModal = ref<boolean>(false);
const showStaffFilterModal = ref<boolean>(false);

const imageFileInput = ref<HTMLInputElement | null>(null);
const imageFileUrl = ref<String | null>(null);

const triggerImageFileInput = (): void => {
  imageFileInput.value?.click();
};

const handleImageFileChange = (e: Event): void => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];

  if (file && file.type.startsWith("image/"))
    imageFileUrl.value = URL.createObjectURL(file);
};

const clearImageFile = (): void => {
  imageFileUrl.value = null;
  imageFileInput.value = null;
};

const selectedGender = ref(gender[0].label);
const genders = ref(gender);

const selectedRole = ref(role[0].label);
const roles = ref(role);

const selectedshift = ref(shift[0].label);
const shifts = ref(shift);

//Filter Modal
const _sortByNames = [
  { label: "From A to Z", value: "az" },
  { label: "From Z to A", value: "za" },
];
const selectedSortByName = ref(_sortByNames[0].label);
const sortByNames = ref(_sortByNames);

const _sortByAges = [
  { label: "From Younger to Older", value: "az" },
  { label: "From Older to Younger", value: "za" },
];
const selectedSortByAge = ref(_sortByAges[0].label);
const sortByAges = ref(_sortByAges);

const _sortByGender = [...gender, { label: "All", value: "all" }];
const selectedSortByGender = ref(_sortByGender[gender.length].label);
const sortByGender = ref(_sortByGender);

const _sortBySalary = [
  { label: "From Low to High", value: "az" },
  { label: "From High to Low", value: "za" },
];
const selectedSortBySalary = ref(_sortBySalary[0].label);
const sortBySalary = ref(_sortBySalary);

const _sortByRoles = [...role, { label: "All", value: "all" }];
const selectedSortByRole = ref(_sortByRoles[role.length].label);
const sortByRoles = ref(_sortByRoles);

const _sortByshift = [...shift, { label: "All", value: "all" }];
const selectedSortByshift = ref(_sortByshift[shift.length].label);
const sortByshift = ref(_sortByshift);
</script>

<template>
  <div
    :class="[
      'w-full h-screen flex flex-col items-start gap-5 p-5',
      (showAddNewStaff ||
        showEditStaffModal ||
        showDeleteStaffModal ||
        showStaffFilterModal) &&
        'fixed',
    ]"
  >
    <!-- Header Label -->
    <p class="text-2xl font-bold">Staff Management</p>
    <!-- Menu Section -->
    <div class="w-full flex justify-between items-center">
      <p class="text-lg font-bold">Staff (22)</p>
      <div class="flex items-center gap-2">
        <NormalButton @click="showAddNewStaff = true">Add New Staff</NormalButton>
        <IconButton icon="arrow_drop_down_circle" @click="showStaffFilterModal = true">
          Sort By
        </IconButton>
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
            <th>shift</th>
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
                <IconButton
                  color="primary"
                  icon="visibility"
                  @click="router.push('/managestaff/1')"
                />
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
        <!-- Information Form Section -->
        <form action="" class="w-full flex flex-col items-start gap-5 mt-2">
          <!-- Image Upload Section -->
          <div class="flex flex-col items-center gap-2">
            <div
              :class="[
                'relative size-36 flex justify-center items-center rounded-xl bg-center bg-cover bg-no-repeat',
                imageFileUrl == null && 'bg-light',
              ]"
              :style="{ backgroundImage: `url(${imageFileUrl})` }"
            >
              <GoogleIcon
                icon="close"
                :class="[
                  'absolute top-1 right-1 cursor-pointer',
                  imageFileUrl == null && 'hidden',
                ]"
                @click="clearImageFile"
              />
              <input
                type="file"
                class="hidden"
                @change="handleImageFileChange"
                accept="image/*"
                ref="imageFileInput"
              />
              <GoogleIcon icon="photo" :class="imageFileUrl && 'hidden'" />
            </div>
            <p class="text-xs underline cursor-pointer" @click="triggerImageFileInput">
              Upload Staff Profile
            </p>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff Firstname Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="fname" class="text-[15px]">Firstname</label>
              <CustomInput
                icon="person"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Firstname"
              />
            </div>
            <!-- Staff Lastname Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="lname" class="text-[15px]">Lastname</label>
              <CustomInput
                icon="person"
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter Lastname"
              />
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff Gender Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="gender" class="text-[15px]">Gender</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedGender"
                  :options="genders"
                  optionLabel="label"
                  placeholder="Select Gender"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Staff Date Of Birth number Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="dob" class="text-[15px]">Date Of Birth</label>
              <CustomInput icon="cake" type="date" id="dob" name="dob" />
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff Phone number Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="phonenumber" class="text-[15px]">Phone Nmber</label>
              <CustomInput
                icon="phone"
                type="number"
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter Phone Number"
              />
            </div>
            <!-- Staff Address Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="address" class="text-[15px]">Address</label>
              <CustomInput
                icon="location_on"
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff shift Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="shift" class="text-[15px]">Shift Time</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedshift"
                  :options="shifts"
                  optionLabel="label"
                  :placeholder="selectedshift"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Staff Role Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="role" class="text-[15px]">Role</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedRole"
                  :options="roles"
                  optionLabel="label"
                  placeholder="Select Role"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Staff Salary Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="salary" class="text-[15px]">Salary</label>
              <CustomInput
                icon="paid"
                type="text"
                id="salary"
                name="salary"
                placeholder="Enter Salary"
              />
            </div>
          </div>
          <!-- Email Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="email" class="text-[15px]">Email</label>
            <CustomInput
              icon="email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <!-- Password Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="password" class="text-[15px]">Password</label>
            <CustomInput
              icon="lock"
              id="password"
              name="password"
              placeholder="Enter Password"
              :isPassword="true"
            />
          </div>
          <!-- Confirm Password Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="confirm-password" class="text-[15px]">Confirm Password</label>
            <CustomInput
              icon="lock"
              id="confirm-password"
              name="sconfirm-password"
              placeholder="Enter Confirm Password"
              :isPassword="true"
            />
          </div>
          <!-- Group Button Section -->
          <div class="w-full flex justify-end gap-2">
            <NormalButton color="dark" type="reset">Cancel</NormalButton>
            <NormalButton type="submit">Save</NormalButton>
          </div>
        </form>
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
        <!-- Information Form Section -->
        <form action="" class="w-full flex flex-col items-start gap-5 mt-2">
          <!-- Image Upload Section -->
          <div class="flex flex-col items-center gap-2">
            <div
              :class="[
                'relative size-36 flex justify-center items-center rounded-xl bg-center bg-cover bg-no-repeat',
                imageFileUrl == null && 'bg-light',
              ]"
              :style="{ backgroundImage: `url(${imageFileUrl})` }"
            >
              <GoogleIcon
                icon="close"
                :class="[
                  'absolute top-1 right-1 cursor-pointer',
                  imageFileUrl == null && 'hidden',
                ]"
                @click="clearImageFile"
              />
              <input
                type="file"
                class="hidden"
                @change="handleImageFileChange"
                accept="image/*"
                ref="imageFileInput"
              />
              <GoogleIcon icon="photo" :class="imageFileUrl && 'hidden'" />
            </div>
            <p class="text-xs underline cursor-pointer" @click="triggerImageFileInput">
              Upload Staff Profile
            </p>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff Firstname Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="fname" class="text-[15px]">Firstname</label>
              <CustomInput
                icon="person"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Firstname"
              />
            </div>
            <!-- Staff Lastname Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="lname" class="text-[15px]">Lastname</label>
              <CustomInput
                icon="person"
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter Lastname"
              />
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff Gender Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="gender" class="text-[15px]">Gender</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedGender"
                  :options="genders"
                  optionLabel="label"
                  placeholder="Select Gender"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Staff Date Of Birth number Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="dob" class="text-[15px]">Date Of Birth</label>
              <CustomInput icon="cake" type="date" id="dob" name="dob" />
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff Phone number Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="phonenumber" class="text-[15px]">Phone Nmber</label>
              <CustomInput
                icon="phone"
                type="number"
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter Phone Number"
              />
            </div>
            <!-- Staff Address Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="address" class="text-[15px]">Address</label>
              <CustomInput
                icon="location_on"
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Staff shift Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="shift" class="text-[15px]">Shift Time</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedshift"
                  :options="shifts"
                  optionLabel="label"
                  :placeholder="selectedshift"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Staff Role Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="role" class="text-[15px]">Role</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedRole"
                  :options="roles"
                  optionLabel="label"
                  placeholder="Select Role"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Staff Salary Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="salary" class="text-[15px]">Salary</label>
              <CustomInput
                icon="paid"
                type="text"
                id="salary"
                name="salary"
                placeholder="Enter Salary"
              />
            </div>
          </div>
          <!-- Email Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="email" class="text-[15px]">Email</label>
            <CustomInput
              icon="email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <!-- Password Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="password" class="text-[15px]">Password</label>
            <CustomInput
              icon="lock"
              id="password"
              name="password"
              placeholder="Enter Password"
              :isPassword="true"
            />
          </div>
          <!-- Confirm Password Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="confirm-password" class="text-[15px]">Confirm Password</label>
            <CustomInput
              icon="lock"
              id="confirm-password"
              name="sconfirm-password"
              placeholder="Enter Confirm Password"
              :isPassword="true"
            />
          </div>
          <!-- Group Button Section -->
          <div class="w-full flex justify-end gap-2">
            <NormalButton color="dark" type="reset">Cancel</NormalButton>
            <NormalButton type="submit">Save</NormalButton>
          </div>
        </form>
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

  <!-- Filter Modal Section -->
  <div class="modal-background" v-if="showStaffFilterModal">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Filter Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Filter Staff</h2>
            <GoogleIcon icon="close" @click="showStaffFilterModal = false" />
          </div>
          <Divider />
        </div>
        <!-- Filter Information Section -->
        <form action="" class="w-full flex flex-col gap-5 mt-3">
          <div class="flex items-center gap-2">
            <!-- Sort By Name Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="sortby-name" class="text-[15px]">Sort By Name</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedSortByName"
                  :options="sortByNames"
                  optionLabel="label"
                  :placeholder="selectedSortByName"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Sort By Age Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="sortby-age" class="text-[15px]">Sort By Age</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedSortByAge"
                  :options="sortByAges"
                  optionLabel="label"
                  :placeholder="selectedSortByAge"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Sort By Gender Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="sortby-gender" class="text-[15px]">Sort By Gender</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedSortByGender"
                  :options="sortByGender"
                  optionLabel="label"
                  :placeholder="selectedSortByGender"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Sort By Salary Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="sortby-salary" class="text-[15px]">Sort By Salary</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedSortBySalary"
                  :options="sortBySalary"
                  optionLabel="label"
                  :placeholder="selectedSortBySalary"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Sort By Role Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="sortby-role" class="text-[15px]">Sort By Role</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedSortByRole"
                  :options="sortByRoles"
                  optionLabel="label"
                  :placeholder="selectedSortByRole"
                  class="w-full"
                />
              </div>
            </div>
            <!-- Sort By shift Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="sortby-shift" class="text-[15px]">Sort By Shift</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedSortByshift"
                  :options="sortByshift"
                  optionLabel="label"
                  :placeholder="selectedSortByshift"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <!-- Group Button Section -->
          <div class="w-full flex justify-end gap-2">
            <NormalButton color="dark" type="reset">Cancel</NormalButton>
            <NormalButton type="submit">Save</NormalButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
