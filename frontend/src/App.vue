<script setup lang="ts">
  import icon from '@/assets/handshake_icon.svg';
  import NavBarItem from '@/components/NavBarItem.vue';
  import { computed } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';

  const route = useRoute();
  const path = computed<string>(() => route.path);
</script>

<template>
  <div class="flex w-screen max-h-screen overflow-hidden">
    <div class="bg-sideslider-grey min-w-72">
      <RouterLink to="/">
        <div class="py-[25px] px-6">
          <img alt="Cashforce logo" src="./assets/logo_full.svg" width="160" />
        </div>
      </RouterLink>
      <nav>
        <RouterLink to="/orders">
          <NavBarItem :icon="icon" title="Notas fiscais" :selected="path === '/orders'"/>
        </RouterLink>
      </nav>
    </div>
    <div class="w-full overflow-hideen h-screen bg-white shadow-xl rounded-l-xl divide-y divide-solid divide-n-mid">
      <div class="h-16"></div>
      <RouterView></RouterView>
    </div>
  </div>
</template>
