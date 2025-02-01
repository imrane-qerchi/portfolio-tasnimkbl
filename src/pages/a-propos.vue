<script setup lang="ts">
import aProposImage from '@/assets/a-propos1.png'
import skillsImage from '@/assets/skills.png'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center py-12 px-6 lg:px-32">
    <!-- Titre -->
    <h1
      class="text-3xl lg:text-5xl font-oliver font-bold tracking-wide text-black uppercase relative text-center"
    >
      A PROPOS DE MOI
      <span class="block mx-auto mt-1 w-24 h-1 bg-pink-400"></span>
    </h1>

    <!-- Image et Lettres -->
    <div class="relative flex justify-center mt-12">
      <img :src="aProposImage" alt="Tasnim" class="w-80 md:w-80 lg:w-[500px] rounded-lg z-10" />
    </div>

    <!-- Texte de présentation -->
    <div class="mt-12 text-left text-xs lg:text-2xl text-black leading-relaxed px-6">
      <p>
        Moi c’est <strong>Tasnim</strong> et j’ai 19 ans. Après un bac général en
        <strong>HGGSP</strong> et <strong>SES</strong>, j'étais partie pour continuer dans une voie
        assez classique… jusqu'à ce que je découvre le <strong>BUT MMI</strong> pendant ma
        terminale. Ça a été une
        <span class="underline decoration-pink-400 font-bold">révélation</span> ! Le monde du
        <span class="text-blue-600 font-semibold">numérique</span> et du
        <span class="text-blue-600 font-semibold">web</span> m'a attirée, et je n’ai pas hésité
        longtemps avant de plonger.
      </p>

      <br />

      <p>
        En première année, je ne savais pas vraiment ce qui m’attendait. Mais très vite, le
        <span class="text-pink-600 font-semibold">design</span> et le
        <span class="text-purple-600 font-semibold">graphisme</span> sont devenus une vraie passion.
        J’aime imaginer et créer des projets de A à Z, c’est pourquoi j’ai choisi le parcours
        <strong>Création Numérique</strong> pour ma deuxième année.
      </p>
    </div>
  </div>

  <!-- Image des compétences (Skills) -->
  <div class="w-full flex justify-center">
    <img :src="skillsImage" alt="Compétences" class="w-full mx-auto" />
  </div>

  <div class="min-h-screen flex flex-col items-center py-12 px-6 lg:px-32">
    <!-- Texte d'invitation -->
    <div class="mt-12 text-left text-xs lg:text-2xl text-black leading-relaxed px-6">
      <p>
        Que vous soyez à la recherche d’un talent créatif pour votre projet ou simplement curieux de
        découvrir mon univers, je vous invite à explorer mon site et à me contacter pour toute
        collaboration ou opportunité professionnelle.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Soulignement du titre */
h1 span {
  height: 4px;
  background: #e87ea1;
  display: block;
  margin-top: 5px;
}
</style>
