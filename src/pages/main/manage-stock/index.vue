<script lang="ts" setup>
//@ts-nocheck
import NormalButton from "@/components/utilities/normal-button.vue";
import Select from "primevue/select";
import { alldProducts } from "../product/data";
import { ref } from "vue";
import { ProductStatusE, ProductStockE } from "./type";
import IconButton from "@/components/utilities/icon-button.vue";

const selectedStatus = ref<ProductStatusE>(ProductStatusE.All);
const selectedCategory = ref<String | null>("Mobile Phone");
const categories = ref([
  { label: "Mobile Phone", value: "mobile" },
  { label: "Tablet", value: "tablet" },
  { label: "Laptop", value: "laptop" },
]);

const selectedStock = ref<ProductStockE>(ProductStockE.InStock);
const stockStatus = ref([
  { label: ProductStockE.InStock, value: "in stock" },
  { label: ProductStockE.LowStock, value: "low stock" },
  { label: ProductStockE.OutOfStock, value: "out of stock" },
]);
</script>

<template>
  <div class="h-screen w-full p-5 flex flex-col items-start gap-5">
    <!-- Header Label -->
    <h2 class="text-2xl font-bold">Manage Stock</h2>

    <!-- Stock Header -->
    <div class="w-full flex justify-between items-center">
      <div class="flex items-center gap-2">
        <p class="text-xl font-bold">150</p>
        <p>total products</p>
      </div>
      <NormalButton>Add new stock</NormalButton>
    </div>

    <!-- Manage Stock Section -->
    <div class="size-full overflow-x-scroll flex justify-between items-scretch gap-5">
      <!-- Left Side Section -->
      <form class="w-[30%] rounded-lg flex flex-col gap-5 p-5 bg-white">
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
      <div class="w-[70%] overflow-y-scroll no-scrollbar rounded-lg bg-white">
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
</template>
