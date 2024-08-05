<script lang="ts">
export const activeColor = 'rgb(0, 173, 140)'
export const inactiveColor = 'rgb(161, 168, 184)'
</script>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  icon: string
  title: string
  selected: boolean
}>()

const color = computed(() => (props.selected ? activeColor : inactiveColor))
</script>

<template>
  <div class="flex w-full cursor-pointer hover:bg-gray-100">
    <div
      id="nav_bar_item--bar"
      class="w-1 h-20 rounded-xl transition-all self-center"
      :style="{ backgroundColor: color }"
    ></div>
    <div class="flex py-6 pl-5 gap-4 w-full items-center">
      <img :src="icon" :class="`${selected ? 'green_filter' : 'gray_filter'}`" />
      <h1
        id="nav_bar_item--text"
        class="w-fit text-nowrap text-md p-0 font-medium"
        :style="{ color: color }"
      >
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
/* both generated from https://codepen.io/sosuke/pen/Pjoqqp */
.green_filter {
  filter: invert(49%) sepia(68%) saturate(3433%) hue-rotate(139deg) brightness(95%) contrast(101%);
}

.gray_filter {
  filter: invert(74%) sepia(22%) saturate(179%) hue-rotate(184deg) brightness(88%) contrast(86%);
}
</style>
