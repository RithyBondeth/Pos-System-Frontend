<script lang="ts" setup>
// @ts-nocheck
import NormalButton from "@/components/utilities/normal-button.vue";
import CategoryCard from "@/components/category-card/index.vue";
</script>

<template>
  <div class="p-5 flex flex-col items-start gap-5">
    <!-- Header Label -->
    <h1 class="text-2xl font-bold">Product</h1>

    <!-- Category -->
    <div class="w-full flex flex-col items-start gap-5">
      <div class="w-full flex items-center justify-between">
        <p class="text-xl font-bold">Categories</p>
        <NormalButton>Add New Category</NormalButton>
      </div>
      <div class="w-full flex items-center gap-5 overflow-x-scroll no-scrollbar">
        <CategoryCard v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="item" />
      </div>
    </div>

    <div class="w-full">
      <div class="w-full flex items-center justify-between">
        <p class="text-xl font-bold">Products</p>
        <NormalButton>Add New Product</NormalButton>
      </div>
      <!-- Table -->
      <div class="w-full">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr class="[&>th]:text-start [&>th]:p-5">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
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
          <tbody class="text-center">
            <!-- row 1 -->
            <tr class="[&>th]:text-start [&>th]:p-5 [&>td]:p-5 [&>td]:text-start">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td><div class="size-12 bg-primary" /></td>
              <td>
                <div class="flex items-center gap-3">
                  <div class="flex flex-col items-start">
                    <div class="font-bold">Hart Hagerty</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>#12345</td>
              <td>120 items</td>
              <td>Smartphone</td>
              <td>$1350.00</td>
              <td>In Stock</td>
              <th class="flex items-center gap-1">
                <NormalButton color="success">Edit</NormalButton>
                <NormalButton color="danger">Delete</NormalButton>
              </th>
            </tr>
            <!-- row 2 -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
