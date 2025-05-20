<template>
  <header class="w-full bg-white border-b border-gray-200 py-4 shadow-sm">
    <div class="container mx-auto px-4 flex items-center justify-between gap-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-primary-600 focus:outline-none">
        <span aria-label="AI Workshop Logo" class="sr-only">AI Workshop</span>
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="16" fill="#DB4444" />
          <text x="16" y="22" text-anchor="middle" font-size="16" fill="#fff" font-family="Arial, sans-serif">AI</text>
        </svg>
        <span class="hidden sm:inline">AI Shop</span>
      </NuxtLink>
      <!-- Search Bar -->
      <div class="flex-1 max-w-md mx-4">
        <SearchBar />
      </div>
      <!-- Cart Icon & Account -->
      <nav class="flex items-center gap-4">
        <button
          class="relative p-2 rounded hover:bg-primary-100 focus:outline-none"
          aria-label="Open cart drawer"
          @click="$emit('open-cart')"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6h15l-1.5 9h-13z" stroke="#DB4444" stroke-width="2" fill="none"/>
            <circle cx="9" cy="21" r="1" fill="#DB4444"/>
            <circle cx="18" cy="21" r="1" fill="#DB4444"/>
          </svg>
          <!-- Cart count badge (optional, for future state) -->
          <!-- <span class="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full px-1.5">2</span> -->
        </button>
        <NuxtLink to="/account" class="text-gray-700 hover:text-primary-600 font-medium focus:outline-none">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4" stroke="#DB4444" stroke-width="2" fill="none"/>
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="#DB4444" stroke-width="2" fill="none"/>
          </svg>
          <span class="sr-only">My Account</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'
</script>

<style scoped>
header:focus-within {
  outline: 2px solid #DB4444;
  outline-offset: 2px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
