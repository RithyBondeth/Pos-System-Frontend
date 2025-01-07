<script lang="ts" setup>
//@ts-nocheck
import NormalButton from "@/components/utilities/normal-button.vue";
import Select from "primevue/select";
import Divider from "@/components/utilities/divider.vue";
import { allCategories, alldProducts } from "../product/data";
import { ref } from "vue";
import { ProductStatusE, ProductStockE } from "./type";
import IconButton from "@/components/utilities/icon-button.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";
import CustomInput from "@/components/utilities/input-custom.vue";

const selectedStatus = ref<ProductStatusE>(ProductStatusE.All);
const selectedCategory = ref<String | null>(allCategories[0].label);
const categories = ref(allCategories);

const selectedNewStockCategory = ref<String | null>(allCategories[0].label);
const newStockCategories = ref(allCategories);

const selectedStock = ref<ProductStockE>(ProductStockE.InStock);
const stockStatus = ref([
  { label: ProductStockE.InStock, value: "in stock" },
  { label: ProductStockE.LowStock, value: "low stock" },
  { label: ProductStockE.OutOfStock, value: "out of stock" },
]);

const showAddStockModal = ref<boolean>(false);
const showEditStockModal = ref<boolean>(false);
const showDeleteStockModal = ref<boolean>(false);

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
</script>

<template>
  <div class="h-screen w-full p-5 flex flex-col items-start gap-5 laptop:h-full">
    <!-- Header Label -->
    <h2 class="text-2xl font-bold">Manage Stock</h2>

    <!-- Stock Header -->
    <div class="w-full flex justify-between items-center">
      <div class="flex items-center gap-2">
        <p class="text-xl font-bold">150</p>
        <p>total products</p>
      </div>
      <NormalButton @click="showAddStockModal = true">Add new stock</NormalButton>
    </div>

    <!-- Manage Stock Section -->
    <div
      class="size-full overflow-x-scroll flex justify-between items-scretch gap-5 laptop:flex-col"
    >
      <!-- Left Side Section -->
      <form class="w-[30%] rounded-lg flex flex-col gap-5 p-5 bg-white laptop:w-full">
        <!-- Product Status Section -->
        <div class="space-y-3">
          <p class="font-bold">Product Status</p>
          <div class="grid grid-cols-2 gap-2">
            <div
              v-for="item in [
                ProductStatusE.All,
                ProductStatusE.Active,
                ProductStatusE.Inactive,
                ProductStatusE.Draft,
              ]"
              :key="item"
              :class="[
                'p-2 flex justify-between items-center rounded-lg cursor-pointer border-2 border-transparent bg-light duration-300',
                selectedStatus == item && 'border-2 !border-primary bg-white',
              ]"
              @click="selectedStatus = item"
            >
              <p class="text-sm">{{ item }}</p>
              <p
                :class="[
                  'px-2 py-1 rounded-lg text-sm bg-white',
                  selectedStatus == item && '!bg-primary text-white',
                ]"
              >
                150
              </p>
            </div>
          </div>
        </div>
        <!-- Category Section -->
        <div class="space-y-3">
          <p class="font-bold">Category</p>
          <div class="flex justify-center custom-input">
            <Select
              v-model="selectedCategory"
              :options="categories"
              optionLabel="label"
              :placeholder="selectedCategory"
              :default-value="selectedCategory"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <!-- Stock Section -->
          <div class="w-1/2 space-y-3">
            <p class="font-bold">Stock</p>
            <div class="flex justify-center custom-input">
              <Select
                v-model="selectedStock"
                :options="stockStatus"
                optionLabel="label"
                :placeholder="selectedStock"
                :default-value="selectedStock"
                class="w-full"
              />
            </div>
          </div>
          <!-- Quantity Section -->
          <div class="w-1/2 space-y-3">
            <p class="font-bold">Quantity</p>
            <input type="number" class="custom-input" value="1" />
          </div>
        </div>
        <!-- Price Section -->
        <div class="space-y-3">
          <p class="font-bold">Price</p>
          <div class="flex items-center gap-2">
            <input type="number" class="custom-input" placeholder="Minimum" value="0" />
            <input type="number" class="custom-input" placeholder="Maximum" value="100" />
          </div>
        </div>
        <!-- Filter Buttton Section -->
        <IconButton icon="filter_alt" type="reset">Reset Filter</IconButton>
      </form>

      <!-- Right Side Section -->
      <div
        class="w-[70%] overflow-y-scroll no-scrollbar rounded-lg bg-white laptop:w-full"
      >
        <table class="w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Product</th>
              <th>Product Name</th>
              <th>ItemID</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <!-- body -->
          <tbody>
            <!-- Row 1 -->
            <tr v-for="item in alldProducts" :key="item.id">
              <td>
                <div
                  class="h-20 w-28 bg-accent-light bg-center bg-cover bg-no-repeat"
                  :style="{ backgroundImage: `url(${item.image})` }"
                />
              </td>
              <td>
                <div>
                  <div class="font-bold">{{ item.name }}</div>
                  <div class="text-sm text-accent-light">{{ item.category }}</div>
                </div>
              </td>
              <td>{{ item.id }}</td>
              <td>{{ item.stock }}</td>
              <td>{{ item.category }}</td>
              <td>${{ item.price }}</td>
              <td :class="item.isOutStock && 'text-red-500'">
                {{ item.isOutStock ? "Out of Stock" : "In Stock" }}
              </td>
              <td>
                <div class="flex flex-col items-scretch gap-2">
                  <IconButton
                    color="success"
                    icon="edit"
                    class="text-xs"
                    @click="showEditStockModal = true"
                    >Edit</IconButton
                  >
                  <IconButton
                    color="danger"
                    icon="delete"
                    class="text-xs"
                    @click="showDeleteStockModal = true"
                    >Delete</IconButton
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Add New Stock Modal -->
  <div class="modal-background" v-if="showAddStockModal">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Product Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Add New Stock</h2>
            <GoogleIcon icon="close" @click="showAddStockModal = false" />
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
              Upload Product Image
            </p>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Product Name Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-name" class="text-[15px]">Name</label>
              <CustomInput
                type="text"
                id="product-name"
                name="product-name"
                placeholder="Enter Product Name"
              />
            </div>
            <!--  Product Category Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="category" class="text-[15px]">Category</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedNewStockCategory"
                  :options="newStockCategories"
                  optionLabel="label"
                  placeholder="Select Category"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Product Price Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-price" class="text-[15px]">Price</label>
              <CustomInput
                type="text"
                id="product-price"
                name="product-price"
                placeholder="Enter Product Price"
              />
            </div>
            <!-- Product Stock Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-stock" class="text-[15px]">Stock</label>
              <CustomInput
                type="number"
                id="product-stock"
                name="product-stock"
                placeholder="Enter Product Stock"
              />
            </div>
          </div>
          <!-- Description Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="product-description" class="text-[15px]">Description</label>
            <textarea
              name="product-description"
              id="product-description"
              placeholder="Write your product description here"
              rows="5"
              class="custom-input"
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

  <!-- Edit New Stock Modal -->
  <div class="modal-background" v-if="showEditStockModal">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Product Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Edit Stock</h2>
            <GoogleIcon icon="close" @click="showEditStockModal = false" />
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
              Upload Product Image
            </p>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Product Name Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-name" class="text-[15px]">Name</label>
              <CustomInput
                type="text"
                id="product-name"
                name="product-name"
                placeholder="Enter Product Name"
              />
            </div>
            <!--  Product Category Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="category" class="text-[15px]">Category</label>
              <div
                class="flex justify-center custom-input [&>div>span]:!text-accent-light [&>div>div>svg]:!text-accent-light"
              >
                <Select
                  v-model="selectedNewStockCategory"
                  :options="newStockCategories"
                  optionLabel="label"
                  placeholder="Select Category"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Product Price Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-price" class="text-[15px]">Price</label>
              <CustomInput
                type="text"
                id="product-price"
                name="product-price"
                placeholder="Enter Product Price"
              />
            </div>
            <!-- Product Stock Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-stock" class="text-[15px]">Stock</label>
              <CustomInput
                type="number"
                id="product-stock"
                name="product-stock"
                placeholder="Enter Product Stock"
              />
            </div>
          </div>
          <!-- Description Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="product-description" class="text-[15px]">Description</label>
            <textarea
              name="product-description"
              id="product-description"
              placeholder="Write your product description here"
              rows="5"
              class="custom-input"
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

  <!-- Delete Stock Modal Section -->
  <div class="modal-background" v-if="showDeleteStockModal">
    <div class="modal rounded-xl p-5 bg-white">
      <form class="flex flex-col items-start gap-5">
        <p class="text-md">Are you sure you want to delete this stock?</p>
        <div class="w-full flex items-center justify-end gap-2">
          <NormalButton color="danger" class="px-3" @click="showDeleteStockModal = false">
            No
          </NormalButton>
          <NormalButton color="success" class="px-3" type="submit">Yes</NormalButton>
        </div>
      </form>
    </div>
  </div>
</template>
