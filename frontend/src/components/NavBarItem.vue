<script setup lang="ts">
    defineProps<{
        icon: string,
        title: string,
        selected: boolean,
    }>()
</script>
<template>
    <div class="flex w-full cursor-pointer hover:bg-gray-100">
        <div class="w-1 h-20 bg-cash-green rounded-xl"></div>
        <div class="flex py-6 pl-5 gap-4 w-full items-center">
            <img :src="icon" class="green_filter">
            <h1 class="w-fit text-nowrap text-md p-0 font-medium text-cash-green">Notas fiscais</h1>
        </div>
    </div>
</template>

<style scoped>
    .green_filter {
        filter: invert(49%) sepia(68%) saturate(3433%) hue-rotate(139deg) brightness(95%) contrast(101%);
    }
</style>