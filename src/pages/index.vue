<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import { computed } from 'vue'
import CardProject from '@/components/cardProject.vue'
import fondMobile from '@/assets/fond-mobile.svg'
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
    class="relative w-full min-h-[600px] flex flex-col items-center justify-center bg-cover bg-center px-6 md:flex-row md:gap-12"
  >
    <!-- Fond Mobile (visible uniquement sur mobile) -->
    <img
      :src="fondMobile"
      alt="Fond Mobile"
      class="absolute inset-0 w-full h-full object-cover md:hidden"
    />
    <!-- Fond Desktop (visible uniquement sur desktop)
    <img
      :src="fondDesktop"
      alt="Fond Desktop"
      class="absolute inset-0 w-full h-fit object-cover hidden md:block"
    /> -->

    <!-- Titre principal -->
    <div class="text-center md:text-left relative">
      <h1 class="text-3xl md:text-5xl font-semibold relative leading-tight text-center z-10">
        Moi c’est
        <strong class="relative inline-block">
          <!-- Cercle SVG en arrière-plan -->
          <div class="absolute inset-0 -z-10 w-full h-auto flex justify-center items-center">
            <img src="@/assets/cercle.svg" alt="Cercle autour de Tasnim" class="w-32 md:w-48" />
          </div>
          Tasnim </strong
        >, <br />Graphic & Web Designer
        <!-- Photo en bas à droite du h1 -->
        <img
          :src="photoAccueil"
          alt="Photo de Tasnim"
          class="absolute md:-bottom-70 -bottom-20 md:-right-44 -right-3 w-32 md:w-64 md:w-80"
        />
        <!-- Bouton au milieu à gauche -->
        <div class="absolute top-8 md:top-1 -left-5 md:-left-20 -rotate-3 z-0">
          <img :src="boutonImg" alt="Votre" class="w-24 md:w-28 md:w-42" />
        </div>
      </h1>
    </div>
  </section>

  <!-- Section "Qui suis-je ?" -->
  <section class="w-full py-16 px-6 md:mt-28 relative">
    <!-- Titre non centré en desktop + espace à gauche -->
    <h2
      class="text-2xl md:text-7xl font-oliver font-bold text-black mb-6 text-center md:text-left md:ml-12 mb-16 relative"
    >
      Qui suis-je ?
      <img
        src="@/assets/souligner.svg"
        alt="Soulignement"
        class="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bottom-[-13px] md:-bottom-7 w-30 md:w-72 -rotate-3"
      />
    </h2>

    <div class="flex flex-col items-center md:flex-row md:justify-center md:gap-60 gap-20 relative">
      <!-- Image avec lettres en collage -->
      <img :src="tasnimCercle" alt="Tasnim en cercle" class="w-40 md:w-52 md:w-80" />

      <!-- Texte de présentation -->
      <div class="max-w-md text-left">
        <p class="text-base md:text-2xl text-black md:font-bold">
          Je m'appelle Tasnim, j’ai 19 ans, et après avoir obtenu mon bac général, je pensais
          poursuivre des études plutôt classiques mais mon parcours a pris une tournure passionnante
          et inattendue en 2023.
        </p>
      </div>
      <!-- Bouton "Voir plus" positionné en bas à droite en mobile et desktop -->
      <router-link
        to="/about"
        class="absolute -bottom-10 right-20 md:-bottom-4 md:right-20 py-2 px-4"
      >
        <img
          src="@/assets/voir-plus.png"
          alt="Voir Plus"
          class="w-24 md:w-28 md:w-42 transition-transform duration-300 hover:scale-110"
        />
      </router-link>
    </div>
  </section>

  <!-- Section "Mes Projets" -->
  <div class="min-h-screen md:mx-20">
    <section class="w-full py-16 px-6 text-center relative">
      <!-- Conteneur du titre avec positionnement relatif -->
      <div class="relative inline-block mx-auto">
        <h2 class="text-2xl md:text-7xl font-oliver font-bold text-black mb-6 text-center relative">
          Mes projets
          <img
            src="@/assets/souligner.svg"
            alt="Soulignement"
            class="absolute left-10 md:left-28 bottom-[-10px] md:-bottom-10 -rotate-3 w-24 md:w-72"
          />
        </h2>
        <!-- Bouton "Voir Plus" positionné en bas à droite du titre -->
        <router-link to="/projects" class="absolute -bottom-6 md:-bottom-18 -right-10 md:-right-30">
          <img
            src="@/assets/voir-plus.png"
            alt="Voir Plus"
            class="w-24 md:w-50 transition-transform duration-300 hover:scale-110"
          />
        </router-link>
      </div>

      <!-- Liste des projets -->
      <div
        v-if="projetsMoinsRecents.length > 0"
        class="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-20 md:gap-50 mt-10 md:mt-28"
      >
        <CardProject v-for="project in projetsMoinsRecents" :key="project.id" v-bind="project" />
      </div>
      <p v-else class="text-gray-500">Aucun projet trouvé.</p>
    </section>
  </div>

  <!-- Bandeau défilant des compétences -->
  <div class="mt-10 md:mt-30 banner-container p-2 md:p-6">
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

  <!-- Section de contact responsive -->
  <section class="flex justify-center items-center py-20 px-6">
    <div
      class="relative overflow-hidden rounded-sm bg-[#fae4f0] border-[6px] border-[#121420] shadow-[20px_20px_0px_rgba(0,0,0,0.4)] w-full max-w-[921px] p-6 md:p-12"
    >
      <p
        class="text-[#121420] font-medium text-left md:text-center text-lg md:text-4xl whitespace-nowrap"
      >
        Prêt à donner vie à tes idées ?
      </p>
      <p class="text-[#121420] font-semibold text-center text-sm md:text-2xl mt-2 md:mt-4">
        Je serais ravie de collaborer !
      </p>
      <div class="flex justify-center mt-4 md:mt-6">
        <router-link to="/contact">
          <img
            src="@/assets/contacte-moi.png"
            class="w-36 md:w-96 h-auto object-cover transition-transform duration-300 hover:scale-110"
            alt="Contacte-moi"
          />
        </router-link>
      </div>
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
