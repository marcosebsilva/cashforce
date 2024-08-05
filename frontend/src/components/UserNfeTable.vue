<script lang="ts">
  export type UserNfeTableData = {
    id: number;
    buyer: string;
    provider: string;
    emission: string;
    value: number;
    status: string;
    button: () => void;
  };

  export type UserNfeTableContentProp = {
    value: UserNfeTableData;
    style?: string;
  };

  export type UserNfeTableProps = {
    content: UserNfeTableContentProp[];
  };
</script>
<script setup lang="ts">
  import Table from './Table.vue';
  import DefaultTableRow from './DefaultTableRow.vue';
  import { getOrderStatusColor} from '@/utils/orderStatusColorMap';
  
  const headers = ['Nota fiscal', 'Sacado', 'Cedente', 'Emissão', 'Valor', 'Status', ''];
  const isButtonCell = (keyIndex: number) => keyIndex === 6;
  const isValueCell = (keyIndex: number) => keyIndex === 4;
  const isStatusCell = (keyIndex: number) => keyIndex === 5;
 

  defineProps<UserNfeTableProps>();
</script>

<template>
  <Table :headers="headers" :content="content">
    <template #row="{ value, keyIndex }">
      <DefaultTableRow :value="value" :key-index="keyIndex">
          <template #cell="{ value, keyIndex }">
            <div v-if="isButtonCell(keyIndex)" class="flex w-full pe-1">
              <button @click="value" class="rounded-3xl border-solid border hover:bg-p-blue border-p-blue px-7 py-2 text-n-dark-400 ms-auto font-bold text-sm leading-4">
                Dados do cedente
              </button>
            </div>
            <span v-else-if="isValueCell(keyIndex)" class="text-cash-green font-medium">{{ value }}</span>
            <span
              v-else-if="isStatusCell(keyIndex)"
              class="font-bold text-xs"
              :style="{ color: getOrderStatusColor(value) }"
            >
              {{ value }}
            </span>
            <span v-else>{{ value }}</span>
          </template>
        </DefaultTableRow>
    </template>
  </Table>
</template>