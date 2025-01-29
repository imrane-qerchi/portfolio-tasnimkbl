<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineProps } from 'vue';
import boutonImg from '@/assets/bouton.png';
import soulignerSvg from '@/assets/souligner.svg';

defineProps<{ text: string }>(); // ✅ Permet de passer le texte dynamiquement
</script>

<template>
  <button class="relative inline-block w-fit">
    <!-- Image de fond -->
    <img :src="boutonImg" alt="Bouton" class="w-48 " />

    <!-- Texte avec soulignement -->
    <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-sm">
      {{ text }}
      <img :src="soulignerSvg" alt="Soulignement" class="w-full h-auto mt-[-5px]" />
    </span>
  </button>
</template>
