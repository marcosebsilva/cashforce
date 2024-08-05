<script setup lang="ts">
  defineProps<{
    value: object,
    style?: string,
  }>();

  const defaultContentStyle = 'text-n-dark-300 font-medium text-sm';
</script>

<template>
  <tr class="hover:bg-gray-100 cursor-pointer">
    <td v-for="(item, keyIndex) in Object.values(value)"
      :class="'pl-8 py-2.5 border-y first:border-l first:rounded-l-lg last:rounded-r-lg last:border-r self-end ' + (style || defaultContentStyle)"
      :key="keyIndex">
      <slot name="cell" :value=item :key-index="keyIndex">
        {{ item }}
      </slot>
    </td>
  </tr>
</template>