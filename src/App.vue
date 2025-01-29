<script setup lang="ts">
import { RouterView } from 'vue-router/auto'
import HeaderPortfolio from './components/headerPortfolio.vue'
import FooterPortfolio from './components/footerPortfolio.vue'
</script>

<template>
  <div class="min-h-screen bg-[#FAE4F0] font-sans">
    <HeaderPortfolio />

    <main>
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
        </Suspense>
      </RouterView>
    </main>

    <FooterPortfolio />
  </div>
</template>
