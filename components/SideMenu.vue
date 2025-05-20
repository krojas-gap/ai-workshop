<template>
  <aside class="w-full bg-white rounded shadow p-4">
    <nav aria-label="Categories" class="flex flex-col gap-2">
      <slot />
      <!-- You can add category links here if needed -->
    </nav>
  </aside>
</template>

<script setup lang="ts">
// This is a presentational wrapper for the category filter/navigation.
</script>

<style scoped>
nav:focus-within {
  outline: 2px solid #DB4444;
  outline-offset: 2px;
}
</style>
