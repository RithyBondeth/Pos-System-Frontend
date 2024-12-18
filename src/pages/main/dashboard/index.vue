<script lang="ts" setup>
//@ts-nocheck
import InformationCard from "@/components/information-card/index.vue";
import ProductCard from "@/components/product-card/index.vue";
import GoogleIcon from "@/components/utilities/google-icon.vue";
import { popularProducts } from "./data.ts";
import { ref } from "vue";

const lists = ref([1, 2, 3, 4, 5]);
</script>

<template>
  <div class="p-5 flex flex-col items-start gap-5">
    <!-- Header Label -->
    <h2 class="text-2xl font-bold">Dashboard</h2>

    <!-- Information Card List -->
    <div class="w-full flex items-center gap-5 overflow-x-scroll no-scrollbar">
      <div v-for="item in lists" :key="item">
        <InformationCard
          title="Daily Sales"
          description="$20K"
          icon="price_change"
          date="10 May 2024"
        />
      </div>
    </div>

    <!-- Product Card List -->
    <div class="w-full flex items-start justify-between gap-5 my-3">
      <!-- Left Side -->
      <div class="w-1/2 p-5 shadow-md rounded-lg bg-white">
        <!-- Header Label -->
        <div class="flex items-center justify-between">
          <p class="text-lg font-bold">Popular Products</p>
          <div class="flex items-center cursor-pointer">
            <p class="text-sm underline">See All</p>
            <GoogleIcon icon="arrow_forward" class="text-sm" />
          </div>
        </div>
        <!-- Product Card -->
        <div class="mt-5 flex flex-col items-start gap-3">
          <ProductCard
            v-for="item in popularProducts"
            :key="item"
            :image="item.image"
            :name="item.name"
            :order="item.order"
            :price="item.price"
            :isOutStock="item.isOutStock"
          />
        </div>
      </div>
      <!-- Right Side -->
      <div class="w-1/2 p-5 shadow-md rounded-lg bg-white">
        <!-- Header Label -->
        <div class="flex items-center justify-between">
          <p class="text-lg font-bold">Most Ordered Products</p>
          <div class="flex items-center cursor-pointer">
            <p class="text-sm underline">See All</p>
            <GoogleIcon icon="arrow_forward" class="text-sm" />
          </div>
        </div>
        <!-- Product Card -->
        <div class="mt-5 flex flex-col items-start gap-3">
          <ProductCard
            v-for="item in popularProducts"
            :key="item"
            :image="item.image"
            :name="item.name"
            :order="item.order"
            :price="item.price"
            :isOutStock="item.isOutStock"
          />
        </div>
      </div>
    </div>

    <!--  -->
  </div>
</template>
