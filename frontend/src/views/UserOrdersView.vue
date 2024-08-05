<script setup lang="ts">
import UserNfeTable, { type UserNfeTableContentProp } from '@/components/UserNfeTable.vue'
import icon from '@/assets/handshake_icon.svg'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import formatDate from '@/utils/formatDate'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const content = ref<UserNfeTableContentProp[]>([])
const isLoading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/orders`)
    const mappedData = response.data.map((item: any) => ({
      value: {
        id: item.nNf,
        buyer: item.buyerName,
        provider: item.providerName,
        emission: formatDate(item.emissionDate),
        value: item.value,
        status: item.status,
        button: () => console.log('Dados do cedente!', item.providerName)
      }
    }))
    content.value = mappedData
  } catch (err: any) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="px-12 pt-10">
    <header class="flex flex-col gap-1.5 mb-5">
      <div class="flex gap-2.5">
        <img alt="Handshake icon" :src="icon" />
        <h1 class="text-2xl font-bold leading-7 text-dark-blue">Notas fiscais</h1>
      </div>
      <h3 class="text-n-dark-100">Visualize as notas fiscais que você tem.</h3>
    </header>
    <main>
      <div class="m-auto flex" v-if="isLoading">
        <LoadingSpinner class="m-auto" />
      </div>
      <UserNfeTable :content="content" v-if="!isLoading" />
      <h1 v-if="error != ''" class="text-center text-n-mid-200">{{ error }}</h1>
    </main>
  </div>
</template>
