<script lang="ts" setup>
// @ts-nocheck
import NormalButton from "@/components/utilities/normal-button.vue";
import IconButton from "@/components/utilities/icon-button.vue";
import CategoryCard from "@/components/category-card/index.vue";
import { alldProducts } from "./data";
import { ref } from "vue";
import Divider from "@/components/utilities/divider.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";
import Select from "primevue/select";
import { reduceEachLeadingCommentRange } from "typescript";

const showAddProductModal = ref<boolean>(false);
const showCategoryModal = ref<boolean>(false);
const showEditProductModal = ref<boolean>(false);
const showDeleteProductModal = ref<boolean>(false);

const selectedCategory = ref<String | null>(null);
const categories = ref([
  { label: "Mobile Phone", value: "mobile" },
  { label: "Tablet", value: "tablet" },
  { label: "Laptop", value: "laptop" },
]);

const imageFileInput = ref<HTMLInputElement | null>(null);

const imageFileUrl = ref<String | null>(null);

// Trigger file input dialog when the buton is clicked
const triggerImageFileInput = (): void => {
  imageFileInput.value?.click();
};

// Handle image file change via input
const handleImageFileChange = (e: Event): void => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];

  if (file && file.type.startsWith("image/"))
    imageFileUrl.value = URL.createObjectURL(file);
};

//Clear Image File
const clearImageFile = (): void => {
  imageFileUrl.value = null;
  imageFileInput.value = null;
};

// Add new product
</script>

<template>
  <div
    :class="[
      'p-5 flex flex-col items-start gap-8',
      (showAddProductModal ||
        showCategoryModal ||
        showEditProductModal ||
        showDeleteProductModal) &&
        'fixed',
    ]"
  >
    <!-- Header Label -->
    <h1 class="text-2xl font-bold">Manage Product</h1>

    <!-- Category -->
    <div class="w-full flex flex-col items-start gap-5">
      <div
        class="w-full flex items-center justify-between gap-3 phone-xl:flex-col phone-xl:items-start"
      >
        <p class="text-xl font-bold">Categories</p>
        <NormalButton @click="showCategoryModal = true" class="tablet-lg:text-xs"
          >Add New Category</NormalButton
        >
      </div>
      <div class="w-full flex items-center gap-5 py-1 overflow-x-scroll no-scrollbar">
        <CategoryCard v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="item" />
      </div>
    </div>

    <div class="w-full flex flex-col gap-5">
      <div
        class="w-full flex items-center justify-between gap-3 phone-xl:flex-col phone-xl:items-start"
      >
        <p class="text-xl font-bold">Products</p>
        <NormalButton @click="showAddProductModal = true" class="tablet-lg:text-xs">
          Add New Product
        </NormalButton>
      </div>
      <!-- Table -->
      <div class="w-full overflow-x-scroll">
        <table class="w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Index</th>
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
              <td>{{ item.id }}</td>
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
                <div class="flex items-center gap-2">
                  <IconButton
                    color="success"
                    icon="edit"
                    @click="showEditProductModal = true"
                    >Edit</IconButton
                  >
                  <IconButton
                    color="danger"
                    icon="delete"
                    @click="showDeleteProductModal = true"
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

  <!-- Add Category Modal -->
  <div class="modal-background" v-if="showCategoryModal">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Category Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Add New Category</h2>
            <GoogleIcon icon="close" @click="showCategoryModal = false" />
          </div>
          <Divider />
        </div>
        <!-- Information Form Section -->
        <form action="" class="w-full flex flex-col items-start gap-5 mt-2">
          <!-- Image Upload Section -->
          <div class="flex flex-col items-center gap-2">
            <div
              :class="[
                'relative size-36 flex justify-center items-center bg-center bg-cover bg-no-repeat',
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
              Upload Catagory Icon
            </p>
          </div>
          <!-- Category Name Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="category-name" class="text-[15px]">Name</label>
            <input
              type="text"
              name="category-name"
              id="category-name"
              class="custom-input"
              placeholder="Enter Category Name"
            />
          </div>
          <!-- Description Section -->
          <div class="w-full flex flex-col items-start gap-2">
            <label for="category-description" class="text-[15px]">Description</label>
            <textarea
              name="category-description"
              id="category-description"
              placeholder="Write your category description here..."
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

  <!-- Add Product Modal -->
  <div class="modal-background" v-if="showAddProductModal">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Product Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Add New Product</h2>
            <GoogleIcon icon="close" @click="showAddProductModal = false" />
          </div>
          <Divider />
        </div>
        <!-- Information Form Section -->
        <form action="" class="w-full flex flex-col items-start gap-5 mt-2">
          <!-- Image Upload Section -->
          <div class="flex flex-col items-center gap-2">
            <div
              :class="[
                'relative size-36 flex justify-center items-center bg-center bg-cover bg-no-repeat',
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
              <input
                type="text"
                name="product-name"
                id="product-name"
                class="custom-input"
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
                  v-model="selectedCategory"
                  :options="categories"
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
              <input
                type="text"
                name="product-price"
                id="product-price"
                class="custom-input"
                placeholder="Enter Product Price"
              />
            </div>
            <!-- Product Stock Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-stock" class="text-[15px]">Stock</label>
              <input
                type="number"
                name="product-stock"
                id="product-stock"
                class="custom-input"
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

  <!-- Edit Product Modal -->
  <div class="modal-background" v-if="showEditProductModal">
    <div class="modal modal-width rounded-xl p-5 bg-white">
      <div class="flex flex-col items-start gap-2">
        <!-- Product Header Section -->
        <div class="w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-xl font-bold">Edit Product</h2>
            <GoogleIcon icon="close" @click="showEditProductModal = false" />
          </div>
          <Divider />
        </div>
        <!-- Information Form Section -->
        <form action="" class="w-full flex flex-col items-start gap-5 mt-2">
          <!-- Image Upload Section -->
          <div class="flex flex-col items-center gap-2">
            <div
              :class="[
                'relative size-36 flex justify-center items-center bg-center bg-cover bg-no-repeat',
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
              Change Product Image
            </p>
          </div>
          <div class="w-full flex items-center justify-between gap-2">
            <!-- Product Name Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-name" class="text-[15px]">Name</label>
              <input
                type="text"
                name="product-name"
                id="product-name"
                class="custom-input"
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
                  v-model="selectedCategory"
                  :options="categories"
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
              <input
                type="text"
                name="product-price"
                id="product-price"
                class="custom-input"
                placeholder="Enter Product Price"
              />
            </div>
            <!-- Product Stock Section -->
            <div class="w-full flex flex-col items-start gap-2">
              <label for="product-stock" class="text-[15px]">Stock</label>
              <input
                type="number"
                name="product-stock"
                id="product-stock"
                class="custom-input"
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

  <!-- Delete Product Modal Section -->
  <div class="modal-background" v-if="showDeleteProductModal">
    <div class="modal rounded-xl p-5 bg-white">
      <form class="flex flex-col items-start gap-5">
        <p class="text-md">Are you sure you want to delete this product?</p>
        <div class="w-full flex items-center justify-end gap-2">
          <NormalButton
            color="danger"
            class="px-3"
            @click="showDeleteProductModal = false"
            >No</NormalButton
          >
          <NormalButton color="success" class="px-3" type="submit">Yes</NormalButton>
        </div>
      </form>
    </div>
  </div>
</template>
