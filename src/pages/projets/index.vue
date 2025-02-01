<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import CardProject from '@/components/cardProject.vue'

// Récupération des projets depuis PocketBase
const mesProjets = await pb.collection('projects').getFullList({
  sort: '-created' // Tri du plus récent au plus ancien
})
</script>

<template>
  <div class="min-h-screen px-6 py-12 flex flex-col items-center text-center">
    <!-- Titre -->
    <h1 class="text-3xl lg:text-5xl font-oliver text-black underline underline-offset-8">
      Mes projets
    </h1>

    <!-- Paragraphe d'introduction -->
    <p class="mt-12 text-lg font-semibold mt-4 max-w-2xl">
      Bienvenue dans mon atelier virtuel ! Un espace où ma passion pour le design prend vie et
      chaque réalisation raconte sa propre histoire...
    </p>

    <!-- Grid des projets -->
    <div class="mt-16 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-40 place-items-center">
      <CardProject v-for="project in mesProjets" :key="project.id" v-bind="project" />
    </div>
  </div>
</template>
