<template>
  <nav aria-label="Product categories" class="space-y-2">
    <button
      v-for="cat in categories"
      :key="cat.id"
      :class="[
        'w-full text-left px-4 py-2 rounded transition',
        selectedCategory === cat.slug
          ? 'bg-primary-600 text-white font-semibold'
          : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
      ]"
      @click="selectCategory(cat.slug)"
      :aria-pressed="selectedCategory === cat.slug"
    >
      {{ cat.name }}
    </button>
    <button
      class="w-full text-left px-4 py-2 rounded transition bg-gray-50 text-gray-500 hover:bg-primary-100"
      @click="selectCategory('')"
      :aria-pressed="selectedCategory === ''"
    >
      All Categories
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'
// @ts-ignore
import categoriesData from '../mock/categories.json'

interface Category {
  id: number | string
  name: string
  slug: string
}

const categories = ref<Category[]>(categoriesData)
const selectedCategory = ref('')

const emit = defineEmits(['update:category'])

function selectCategory(slug: string) {
  selectedCategory.value = slug
  emit('update:category', slug)
}
</script>

<style scoped>
button:focus {
  outline: 2px solid #DB4444;
  outline-offset: 2px;
}
</style>
