<template>
  <aside
    class="fixed top-0 right-0 w-80 max-w-full h-full bg-white shadow-lg z-50 flex flex-col transition-transform duration-300"
    role="complementary"
    aria-label="Shopping cart drawer"
  >
    <header class="flex items-center justify-between p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold">Your Cart</h2>
      <button
        class="text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close cart drawer"
        @click="$emit('close')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </header>
    <section class="flex-1 overflow-y-auto p-4">
      <div v-if="cartItems.length === 0" class="text-gray-500 text-center py-8">
        Your cart is empty.
      </div>
      <ul v-else class="space-y-4">
        <li v-for="item in cartItems" :key="item.id" class="flex items-center gap-3">
          <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded border" v-if="item.image" />
          <div class="flex-1">
            <div class="font-medium">{{ item.name }}</div>
            <div class="text-sm text-gray-500">Qty: {{ item.quantity }}</div>
            <div class="text-primary-600 font-semibold">{{ formatPrice(item.price * item.quantity) }}</div>
          </div>
          <button
            class="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
            aria-label="Remove from cart"
            @click="removeFromCart(item.id)"
          >
            &times;
          </button>
        </li>
      </ul>
    </section>
    <footer v-if="cartItems.length > 0" class="p-4 border-t border-gray-200">
      <div class="flex items-center justify-between mb-4">
        <span class="font-medium">Total</span>
        <span class="text-primary-600 font-bold text-lg">{{ formatPrice(cartTotal) }}</span>
      </div>
      <button class="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition" aria-label="Checkout">
        Checkout
      </button>
    </footer>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface CartItem {
  id: number | string
  name: string
  price: number
  quantity: number
  image?: string
}

// For PoC, use local state. Replace with Pinia or composable for real app.
const cartItems = ref<CartItem[]>([
  // Example item for demo/testing. Replace with real state.
  // { id: 1, name: 'Sample Product', price: 99.99, quantity: 2, image: 'https://via.placeholder.com/64' }
])

const cartTotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}

function removeFromCart(id: number | string) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>

<style scoped>
/* Add focus ring for accessibility */
button:focus {
  outline: 2px solid #DB4444;
  outline-offset: 2px;
}
</style>
