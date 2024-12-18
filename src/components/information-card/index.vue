<script lang="ts" setup>
// @ts-nocheck
import GoogleIcon from "@/components/utilities/google-icon.vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { ref } from "vue";
import { Bar } from 'vue-chartjs';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  }
})

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement);

// Minimal Chart Data
const chartData = ref({
  labels: ["", "", "", "", "", ""], // Empty labels
  datasets: [
    {
      backgroundColor: "#0A47B6",
      borderWidth: 0,
      data: [10, 20, 30, 10, 20, 50], // Small bar values
    },
  ],
});

// Chart Options with Fixed Bar Thickness
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // Hide legend
    tooltip: { enabled: false }, // Disable tooltips
  },
  scales: {
    x: {
      display: false, // Hide X-axis
      barThickness: 20, // Explicit bar thickness in pixels
    },
    y: { display: false }, // Hide Y-axis
  },
});
</script>

<template>
  <div class="h-40 w-80 p-3 flex flex-col justify-between rounded-md shadow-md bg-white relative">
    <div class="flex flex-col items-start gap-1">
        <p class="text-sm">{{ title }}</p>
        <p class="text-xl font-bold">{{ description }}</p>
    </div>
    <div class="flex justify-between items-end">
        <p class="text-sm text-accent-light">{{ date }}</p>
        <div class="w-1/3 h-14">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>
    <div class="absolute size-10 top-3 right-3 p-3 flex justify-center items-center rounded-full text-white bg-primary">
        <GoogleIcon :icon="icon"/>
    </div>
  </div>
</template>
