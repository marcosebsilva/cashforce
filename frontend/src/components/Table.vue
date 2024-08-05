<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  headers: string[]
  content: { value: object; style?: string }[]
}>()

// Ensure that the number of headers matches the number of columns in the content
if (props.content.some((item) => Object.keys(item.value).length !== props.headers.length)) {
  throw new Error('The number of headers must match the number of columns in the content.')
}
</script>

<template>
  <table class="table-auto w-full border-separate border-spacing-y-3">
    <thead class="ml-2">
      <tr>
        <th
          class="text-start text-n-mid-1 pl-8 text-xs text-n-mid-200"
          v-for="header in props.headers"
        >
          {{ header.toUpperCase() }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot
        name="row"
        v-for="(item, keyIndex) in Object.values(props.content)"
        :value="item.value"
        :key-index="keyIndex"
      />
    </tbody>
  </table>
</template>
