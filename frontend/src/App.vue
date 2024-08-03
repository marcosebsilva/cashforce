<script setup lang="ts">
  import UserNfeTable from './components/UserNfeTable.vue';
  import NavBarItem from './components/NavBarItem.vue';
  import icon from './assets/handshake_icon.svg';

  const content = [
    {
      value: {
        nota_fiscal: '1234',
        sacado: 'Sacado 001',
        cedente: 'Cedente 002',
        emissao: '12/10/2020',
        valor: 'R$ 49.725,00',
        status: 'Recebido',
        button: 'Dados do cedente'
      },
    },
    {
      value: {
        nota_fiscal: '1234',
        sacado: 'Sacado 002',
        cedente: 'Cedente 003',
        emissao: '12/10/2020',
        valor: 'R$ 49.725,00',
        status: 'Recebido',
        button: 'Dados do cedente'
      },
    },
    {
      value: {
        nota_fiscal: '1234',
        sacado: 'Sacado 003',
        cedente: 'Cedente 004',
        emissao: '12/10/2020',
        valor: 'R$ 49.725,00',
        status: 'Recebido',
        button: 'Dados do cedente'
      },
    }
  ]
</script>

<template>
  <div class="flex h-screen w-screen">
    <div class="bg-sideslider-grey min-w-72">
      <div class="py-[25px] px-6">
        <img alt="Cashforce logo" src="./assets/logo_full.svg" width="160" />
      </div>
      <nav>
        <NavBarItem :icon="icon" title="Home" selected />
      </nav>
    </div>
    <div class="w-full bg-white shadow-xl rounded-l-xl divide-y divide-solid divide-n-mid">
      <div class="h-16"></div>
      <div class="px-12 pt-10">
        <header class="flex flex-col gap-1.5 mb-5">
          <div class="flex gap-2.5">
            <img alt="Handshake icon" src="./assets/handshake_icon.svg">
            <h1 class="text-2xl font-bold leading-7 text-dark-blue">Notas fiscais</h1>
          </div>
          <h3 class="text-n-dark-100">Visualize as notas fiscais que você tem.</h3>
        </header>
        <main>
          <UserNfeTable :content="content" />
        </main>
      </div>
    </div>
  </div>
</template>
