<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import { computed } from 'vue'
import CardProject from '@/components/cardProject.vue'
import soulignerSvg from '@/assets/souligner.svg'


// Récupération des projets depuis PocketBase
const mesProjets = await pb.collection('projects').getFullList({
  sort: '-created' // Tri du plus récent au plus ancien
})

// Récupération des compétences depuis PocketBase
const skills = await pb.collection('skills').getFullList({
  sort: 'nom' // Trier par ordre alphabétique
})

// **Duplication des compétences** pour un effet de loop infini
const duplicatedSkills = computed(() => [...skills, ...skills])
</script>

<template>
  <div class="min-h-screen px-6 py-12 flex flex-col items-center text-center">
    <!-- Titre -->
    <h1
      class="text-3xl md:text-7xl font-oliver font-bold tracking-wide text-black uppercase relative text-center"
    >
      Mes projets
      <img
        :src="soulignerSvg"
        alt="Soulignement"
        class="absolute -bottom-3 md:-bottom-8 right-0 w-28 md:w-68 -rotate-3"
      />
    </h1>

    <!-- Paragraphe d'introduction -->
    <p class="mt-12 md:mt-30 text-xs md:text-2xl font-semibold max-w-4xl">
      Bienvenue dans mon atelier virtuel ! Un espace où ma passion pour le design prend vie et
      chaque réalisation raconte sa propre histoire...
    </p>

    <!-- Grid des projets -->
    <div class="my-10 md:mb-30 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 place-items-center">
      <CardProject v-for="project in mesProjets" :key="project.id" v-bind="project" />
    </div>

    <!-- Bandeau défilant des compétences -->
  <div class="mt-10 mb-10 md:mb-20 md:mt-30 banner-container p-2 md:p-6">
    <div class="scroll-container">
      <span v-for="(skill, index) in duplicatedSkills" :key="index" class="skill-item">
        <span class="text-black font-normal md:text-4xl">{{ skill.nom }}</span>
        <span
          v-if="index % skills.length !== skills.length - 1"
          class="separator text-3xl md:text-5xl text-[#72BF96] md:text-"
          >&nbsp;&nbsp;&nbsp;&nbsp;✦</span
        >
      </span>
    </div>
  </div>
  </div>
</template>

<style>
/* Inclinaison et largeur fixe du bandeau */
.banner-container {
  position: relative;
  width: 100vw;
  overflow: hidden;
  transform: rotate(-3deg);
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  background: #c36e9a;
  z-index: 10; /* Met un z-index plus bas */
}

/* Scroll infini fluide */
.scroll-container {
  display: flex;
  min-width: 200%;
  animation: scroll 10s linear infinite;
}

/* Animation infinie */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* Style des compétences */
.skill-item {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  white-space: nowrap;
  margin: 0 20px;
}

/* Style du séparateur ✦ */
.separator {
  margin-left: 10px;
  color: #72bf96;
  /* Vert pour se démarquer */
}
</style>
