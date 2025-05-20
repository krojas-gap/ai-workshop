<template>
  <footer class="w-full bg-gray-100 border-t border-gray-200 py-6 mt-8">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-gray-500 text-sm">&copy; {{ year }} AI Workshop. All rights reserved.</div>
      <nav class="flex gap-6 text-sm">
        <NuxtLink to="/account" class="text-blue-500 hover:underline focus:outline-none">My Account</NuxtLink>
        <a href="mailto:support@example.com" class="text-blue-500 hover:underline focus:outline-none">Support</a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
footer:focus-within {
  outline: 2px solid #DB4444;
  outline-offset: 2px;
}
</style>
