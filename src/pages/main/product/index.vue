<script lang="ts" setup>
// @ts-nocheck
import NormalButton from "@/components/utilities/normal-button.vue";
import IconButton from "@/components/utilities/icon-button.vue";
import CategoryCard from "@/components/category-card/index.vue";
import { alldProducts } from "./data";
import { ref } from "vue";
import Divider from "@/components/utilities/divider.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";

const showProductModal = ref<boolean>(false);
const showCategoryModal = ref<boolean>(false);
</script>

<template>
  <div
    :class="[
      'p-5 flex flex-col items-start gap-8',
      (showProductModal || showCategoryModal) && 'fixed',
    ]"
  >
    <!-- Header Label -->
    <h1 class="text-2xl font-bold">Manage Product</h1>

    <!-- Category -->
    <div class="w-full flex flex-col items-start gap-5">
      <div class="w-full flex items-center justify-between">
        <p class="text-xl font-bold">Categories</p>
        <NormalButton @click="showCategoryModal = true">Add New Category</NormalButton>
      </div>
      <div class="w-full flex items-center gap-5 py-1 overflow-x-scroll no-scrollbar">
        <CategoryCard v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="item" />
      </div>
    </div>

    <div class="w-full flex flex-col gap-5">
      <div class="w-full flex items-center justify-between">
        <p class="text-xl font-bold">Products</p>
        <NormalButton @click="showProductModal = true"> Add New Product </NormalButton>
      </div>
      <!-- Table -->
      <div class="w-full">
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
                  <IconButton color="success" icon="edit">Edit</IconButton>
                  <IconButton color="danger" icon="delete">Delete</IconButton>
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
    <div class="modal w-1/2 rounded-lg p-5 bg-white">
      <form class="flex flex-col items-start gap-2">
        <div class="w-full flex justify-between items-center">
          <h2 class="text-xl font-bold">Add New Category</h2>
          <GoogleIcon icon="close" @click="showCategoryModal = false" />
        </div>
        <Divider />
        <!-- Image Upload Section -->
        <div class="flex flex-col items-center gap-1">
          <div class="size-40 flex justify-center items-center bg-light">
            <GoogleIcon icon="photo" />
          </div>
          <p class="text-sm underline">Change Icon</p>
        </div>
        <!-- Information Section -->
        <div class="flex flex-col items-start">
          <label for="name">Category Name</label>
          <input type="text" name="name" id="name" placeholder="Enter Category Name..." />
        </div>
      </form>
    </div>
  </div>

  <!-- Add Product Modal -->
  <div class="modal-background" v-if="showProductModal" @click="showProductModal = false">
    <div class="modal size-1/2 rounded-lg p-5 bg-white">
      <h2 class="text-2xl font-bold">Add New Product</h2>
      <Divider />
    </div>
  </div>
</template>
