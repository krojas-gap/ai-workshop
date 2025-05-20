<template>
  <div class="flex items-center gap-2">
    <button
      class="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-primary-100 focus:outline-none"
      aria-label="Decrease quantity"
      @click="decrement"
      :disabled="modelValue <= 1"
    >
      -
    </button>
    <input
      type="number"
      class="w-12 text-center border rounded focus:outline-none"
      :value="modelValue"
      @input="onInput"
      min="1"
      aria-label="Quantity"
    />
    <button
      class="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-primary-100 focus:outline-none"
      aria-label="Increase quantity"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: number }>();
const emit = defineEmits(['update:modelValue']);

function decrement() {
  if (props.modelValue > 1) emit('update:modelValue', props.modelValue - 1);
}
function increment() {
  emit('update:modelValue', props.modelValue + 1);
}
function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) emit('update:modelValue', Number(target.value));
}
</script>

<style scoped>
input:focus,
button:focus {
  outline: 2px solid #db4444;
  outline-offset: 2px;
}
</style>
