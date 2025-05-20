<template>
  <table class="w-full border rounded text-sm">
    <tbody>
      <tr v-for="(value, key) in specs" :key="key">
        <th class="text-left font-medium py-2 px-3 bg-gray-50 w-1/3">{{ key }}</th>
        <td class="py-2 px-3">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{ specs: Record<string, string | number> }>()

</script>

<style scoped>
table {
  border-collapse: collapse;
}
th, td {
  border-bottom: 1px solid #eee;
}
th {
  background: #fafafa;
}
</style>
