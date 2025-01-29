<script setup lang="ts">
import underlineSvg from '@/assets/souligner.svg';
</script>

<template>
  <span class="relative inline-block">
    <slot />
    <img
      :src="underlineSvg"
      alt="Soulignement"
      class="absolute left-0 bottom-0 w-full h-auto"
    />
  </span>
</template>
