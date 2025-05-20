<template>
  <div v-if="product" class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <aside class="w-full md:w-1/3 flex flex-col items-center">
        <img :src="product.image" :alt="product.name" class="w-full h-80 object-cover rounded mb-4" />
        <ImageCarousel v-if="product.images && product.images.length" :images="product.images" />
      </aside>
      <section class="flex-1 flex flex-col gap-4">
        <h1 class="text-2xl font-bold">{{ product.name }}</h1>
        <div class="text-xl text-primary-600 font-semibold">${{ formatPrice(product.price) }}</div>
        <div v-if="product.colours && product.colours.length" class="flex gap-2 items-center">
          <span class="font-medium">Colors:</span>
          <span v-for="color in product.colours" :key="color" class="w-6 h-6 rounded-full border border-gray-300" :style="{ background: color }"></span>
        </div>
        <p class="text-gray-600">{{ product.description }}</p>
        <SpecsTable v-if="product.specs" :specs="product.specs" />
        <div class="flex items-center gap-4 mt-4">
          <QuantitySelector v-model="quantity" />
          <button class="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700 transition" @click="addToCart">Add to Cart</button>
        </div>
      </section>
    </div>
    <div class="mt-12">
      <h2 class="text-xl font-semibold mb-4">Other Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="other in otherProducts"
          :key="other.id"
          :to="`/product/${other.id}`"
          class="block h-full"
        >
          <ProductCard :product="other" />
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto px-4 py-8 text-center text-gray-500">
    Product not found.
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '~/components/ProductCard.vue'
import SpecsTable from '~/components/SpecsTable.vue'
import QuantitySelector from '~/components/QuantitySelector.vue'
import ImageCarousel from '~/components/ImageCarousel.vue'
// @ts-ignore
import allProductsData from '../../mock/products.json'

const route = useRoute()
const allProducts = ref(allProductsData)
const product = computed(() => allProducts.value.find(p => String(p.id) === route.params.id))
const quantity = ref(1)

const otherProducts = computed(() => {
  if (!product.value) return []
  return allProducts.value.filter(p => product.value && p.id !== product.value.id).slice(0, 4)
})

function addToCart() {
  // TODO: Implement cart logic
  alert('Added to cart!')
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price).replace('$', '')
}
</script>
