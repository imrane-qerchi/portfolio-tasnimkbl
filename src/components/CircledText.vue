<script setup lang="ts">
import circleSvg from '@/assets/cercle.svg'
</script>

<template>
  <strong class="relative inline-block font-bold">
    <slot />
    <img
      :src="circleSvg"
      alt="Cercle"
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto"
    />
  </strong>
</template>
