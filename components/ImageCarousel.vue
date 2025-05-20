<template>
  <div class="relative w-full flex items-center gap-2">
    <button
      class="p-1 rounded bg-gray-100 hover:bg-primary-100 focus:outline-none"
      aria-label="Previous image"
      @click="prev"
      :disabled="images.length <= 1"
    >
      &#8592;
    </button>
    <img
      :src="images[current]"
      :alt="`Product image ${current + 1}`"
      class="w-full h-48 object-cover rounded border flex-1"
      v-if="images.length"
    />
    <button
      class="p-1 rounded bg-gray-100 hover:bg-primary-100 focus:outline-none"
      aria-label="Next image"
      @click="next"
      :disabled="images.length <= 1"
    >
      &#8594;
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'
const props = defineProps<{ images: string[] }>();
const current = ref(0);

watch(() => props.images, () => { current.value = 0 }, { immediate: true });

function prev() {
  if (props.images.length > 1) {
    current.value = (current.value - 1 + props.images.length) % props.images.length;
  }
}
function next() {
  if (props.images.length > 1) {
    current.value = (current.value + 1) % props.images.length;
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 12rem;
}
button:focus {
  outline: 2px solid #DB4444;
  outline-offset: 2px;
}
</style>
