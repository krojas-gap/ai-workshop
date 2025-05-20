<template>
  <div class="bg-white rounded-lg shadow p-4 flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow">
    <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded mb-4" v-if="product.image" />
    <div class="flex-1 flex flex-col">
      <h3 class="text-lg font-semibold mb-1">{{ product.name }}</h3>
      <p class="text-gray-500 text-sm mb-2 line-clamp-2">{{ product.description }}</p>
      <div class="mt-auto flex items-center justify-between">
        <span class="text-primary-600 font-bold text-xl">{{ formatPrice(product.price) }}</span>
        <NuxtLink :to="`/product/${product.id}`" class="text-blue-500 hover:underline text-sm">View</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ product: {
  id: number|string,
  name: string,
  description?: string,
  price: number,
  image?: string
} }>();

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}
</style>
