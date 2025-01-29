<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import fondMobile from '@/assets/fond-mobile.svg';
import photoAccueil from '@/assets/photo-accueil.png';
import boutonImg from '@/assets/bouton.png';
</script>

<template>
  <section 
    class="relative w-full h-[600px] flex flex-col items-center justify-center bg-cover bg-center px-6"
    :style="{ backgroundImage: `url(${fondMobile})` }"
  >

    <!-- Titre principal -->
    <h1 class="text-3xl font-semibold text-center relative leading-tight">
      Moi c’est <strong class="relative">Tasnim</strong>,
      <br />Graphic & Web Designer
    </h1>

    <!-- Bouton "VOTRE" superposé sur l'image -->
    <div class="relative mt-4">
      <img :src="photoAccueil" alt="Photo de Tasnim" class="w-48 md:w-64 lg:w-80" />
      
      <!-- Image "bouton.png" pour le mot "VOTRE" -->
      <img :src="boutonImg" alt="Votre" class="absolute -top-6 -left-6 w-20 md:w-28 lg:w-32" />
    </div>
  </section>
</template>
