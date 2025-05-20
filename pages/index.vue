<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <main class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row gap-8">
        <aside class="w-full md:w-1/4">
          <CategoryFilter @update:category="onCategoryChange" />
        </aside>
        <section class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Example: Render product cards from mock data -->
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card-link"
            @click="goToProduct(product)"
          >
            <ProductCard :product="product" />
          </div>
        </section>
      </div>
    </main>
    <CartDrawer />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ProductCard from '~/components/ProductCard.vue'
import CategoryFilter from '~/components/CategoryFilter.vue'
import CartDrawer from '~/components/CartDrawer.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import productsData from '../mock/products.json'

const productsRaw = ref(productsData)
const selectedCategory = ref<number | ''>('')

const products = computed(() => {
  if (selectedCategory.value === '') return productsRaw.value
  console.log(productsRaw.value, selectedCategory.value);
  
  return productsRaw.value.filter((p: any) => p.categoryId === selectedCategory.value)
})

function onCategoryChange(category: string | number) {
  if (category === '' || category === 'all') {
    selectedCategory.value = ''
  } else if (!isNaN(Number(category)) && category !== null && category !== undefined) {
    selectedCategory.value = Number(category)
  } else {
    selectedCategory.value = ''
  }
}

const router = useRouter()

function goToProduct(product: any) {
  router.push(`/product/${product.id}`)
}
</script>

<style scoped>
.product-card-link {
  display: block;
  height: 100%;
}
</style>
