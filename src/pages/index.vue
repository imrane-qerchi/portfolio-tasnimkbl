<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import { computed } from 'vue'
import CardProject from '@/components/cardProject.vue'
import fondMobile from '@/assets/fond-mobile.svg'
import fondDesktop from '@/assets/fond-desktop.svg'
import photoAccueil from '@/assets/photo-accueil.png'
import boutonImg from '@/assets/votre.png'
import tasnimCercle from '@/assets/tasnim-cercle.svg'

// Récupération de tous les projets depuis PocketBase, triés du plus récent au plus ancien
const mesProjets = await pb.collection('projects').getFullList({
  sort: '-created' // Tri par date décroissante (les plus récents en premier)
})

// Sélectionner les **deux projets les moins récents**
const projetsMoinsRecents = mesProjets.slice(-2)

// Récupération des compétences depuis PocketBase
const skills = await pb.collection('skills').getFullList({
  sort: 'nom' // Trier par ordre alphabétique
})

// **Duplication des compétences** pour un effet de loop infini
const duplicatedSkills = computed(() => [...skills, ...skills])
</script>

<template>
  <!-- Section d'introduction -->
  <section
    class="relative w-full min-h-[600px] flex flex-col items-center justify-center bg-cover bg-center px-6 lg:flex-row lg:gap-12"
  >
    <!-- Fond Mobile (visible uniquement sur mobile) -->
    <img
      :src="fondMobile"
      alt="Fond Mobile"
      class="absolute inset-0 w-full h-full object-cover lg:hidden"
    />
    <!-- Fond Desktop (visible uniquement sur desktop)
    <img
      :src="fondDesktop"
      alt="Fond Desktop"
      class="absolute inset-0 w-full h-fit object-cover hidden lg:block"
    /> -->

<!-- Titre principal --> 
<div class="text-center lg:text-left relative">
  <h1 class="text-3xl md:text-5xl font-semibold relative leading-tight text-center z-10">
    Moi c’est 
    <strong class="relative inline-block">
      <!-- Cercle SVG en arrière-plan -->
      <div class="absolute inset-0 -z-10 w-full h-auto flex justify-center items-center">
        <img src="@/assets/cercle.svg" alt="Cercle autour de Tasnim" class="w-32 md:w-48" />
      </div>
      Tasnim
    </strong>, <br />Graphic & Web Designer
    <!-- Photo en bas à droite du h1 -->
    <img
      :src="photoAccueil"
      alt="Photo de Tasnim"
      class="absolute lg:-bottom-70 -bottom-20 lg:-right-44 -right-3 w-32 md:w-64 lg:w-80"
    />
    <!-- Bouton au milieu à gauche -->
    <div class="absolute top-8 lg:top-1 -left-5 lg:-left-20 -rotate-3 z-0">
      <img :src="boutonImg" alt="Votre" class="w-24 md:w-28 lg:w-42" />
    </div>
  </h1>
</div>
  </section>

  <section class="w-full py-16 px-6 mt-28">
    <!-- Titre non centré en desktop + espace à gauche -->
    <h2
      class="text-2xl md:text-7xl font-oliver font-bold text-black mb-6 underline underline-offset-4 text-center lg:text-left lg:ml-12 mb-16"
    >
      Qui suis-je ?
    </h2>

    <div class="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-60 gap-20">
      <!-- Image avec lettres en collage -->
      <img :src="tasnimCercle" alt="Tasnim en cercle" class="w-40 md:w-52 lg:w-80" />

      <!-- Texte de présentation -->
      <div class="max-w-md text-left">
        <p class="text-base md:text-2xl text-black md:font-bold">
          Je m'appelle Tasnim, j’ai 19 ans, et après avoir obtenu mon bac général, je pensais
          poursuivre des études plutôt classiques mais mon parcours a pris une tournure passionnante
          et inattendue en 2023.
        </p>

        <!-- Bouton "Voir plus" -->
        <button class="mt-6 py-2 px-4">
          <img src="@/assets/voir-plus.png" alt="Votre" class="w-24 md:w-28 lg:w-42" />
        </button>
      </div>
    </div>
  </section>

  <!-- Section "Mes Projets" -->
  <div class="min-h-screen lg:mx-20">
    <section class="w-full py-16 px-6 text-center relative">
      <!-- Conteneur du titre avec positionnement relatif -->
      <div class="relative inline-block mx-auto">
        <h2
          class="text-2xl md:text-7xl font-oliver font-bold text-black mb-6 underline underline-offset-4 text-center"
        >
          Mes projets
        </h2>
        <!-- Bouton "Voir Plus" positionné en bas à droite -->
        <img
          src="@/assets/voir-plus.png"
          alt="Voir Plus"
          class="absolute lg:-bottom-15 lg:-right-30 w-32 md:w-50"
        />
      </div>

      <!-- Liste des projets -->
      <div
        v-if="projetsMoinsRecents.length > 0"
        class="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-20 lg:gap-50 mt-28"
      >
        <CardProject v-for="project in projetsMoinsRecents" :key="project.id" v-bind="project" />
      </div>
      <p v-else class="text-gray-500">Aucun projet trouvé.</p>
    </section>
  </div>

  <!-- Bandeau défilant des compétences -->
  <div class="mt-30 banner-container p-2 lg:p-6">
    <div class="scroll-container">
      <span v-for="(skill, index) in duplicatedSkills" :key="index" class="skill-item">
        <span class="text-black font-normal lg:text-4xl">{{ skill.nom }}</span>
        <span
          v-if="index % skills.length !== skills.length - 1"
          class="separator text-3xl lg:text-5xl text-[#72BF96] lg:text-"
          >&nbsp;&nbsp;&nbsp;&nbsp;✦</span
        >
      </span>
    </div>
  </div>

  <!-- Section de contact -->
  <section class="flex justify-center items-center py-40 px-6 bg-pink-100">
    <div
      class="w-[921px] h-[304px] relative overflow-hidden rounded-sm bg-[#fae4f0] border-[6px] border-[#121420]"
      style="box-shadow: 21px 21px 0px 0 rgba(0, 0, 0, 0.4)"
    >
      <p
        class="w-[691px] h-[43px] absolute left-24 top-[47px] text-[45px] font-medium text-left text-[#121420]"
      >
        Prêt à donner vie à tes idées ?
      </p>
      <p
        class="w-[831px] h-10 absolute left-[34px] top-[116px] text-[25px] font-semibold text-center text-[#121420]"
      >
        Je serais ravie de collaborer !
      </p>
      <div class="w-[339.41px] h-[147.98px] absolute left-[287.2px] top-[111px]"></div>
    </div>
  </section>
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
