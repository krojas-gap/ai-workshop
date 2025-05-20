<template>
  <form class="flex items-center gap-2 w-full" role="search" @submit.prevent="onSearch">
    <input
      v-model="query"
      type="search"
      class="flex-1 border rounded px-3 py-2 focus:outline-none"
      placeholder="Search products..."
      aria-label="Search products"
    />
    <button type="submit" class="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition focus:outline-none" aria-label="Search">
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="#fff" stroke-width="2" fill="none"/>
        <path d="M15 15l-3-3" stroke="#fff" stroke-width="2"/>
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['search'])
const query = ref('')

function onSearch() {
  emit('search', query.value)
}
</script>

<style scoped>
input:focus, button:focus {
  outline: 2px solid #DB4444;
  outline-offset: 2px;
}
</style>
