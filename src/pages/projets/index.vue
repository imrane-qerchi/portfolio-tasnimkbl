<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import CardProject from '@/components/cardProject.vue'
import soulignerSvg from '@/assets/souligner.svg'

// Récupération des projets depuis PocketBase
const mesProjets = await pb.collection('projects').getFullList({
  sort: '-created' // Tri du plus récent au plus ancien
})
</script>

<template>
  <div class="min-h-screen px-6 py-12 flex flex-col items-center text-center">
    <!-- Titre -->
    <h1
      class="text-3xl lg:text-7xl font-oliver font-bold tracking-wide text-black uppercase relative text-center"
    >
      Mes projets
      <img
        :src="soulignerSvg"
        alt="Soulignement"
        class="absolute -bottom-3 lg:-bottom-8 right-0 w-28 lg:w-68 -rotate-3"
      />
    </h1>

    <!-- Paragraphe d'introduction -->
    <p class="mt-12 lg:mt-30 text-xs lg:text-2xl font-semibold max-w-4xl">
      Bienvenue dans mon atelier virtuel ! Un espace où ma passion pour le design prend vie et
      chaque réalisation raconte sa propre histoire...
    </p>

    <!-- Grid des projets -->
    <div class="my-10 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 place-items-center">
      <CardProject v-for="project in mesProjets" :key="project.id" v-bind="project" />
    </div>
  </div>
</template>
