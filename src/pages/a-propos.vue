<script setup lang="ts">
import aProposImage from '@/assets/a-propos1.png'
import skillsImage from '@/assets/skills.png'
import teus from '@/assets/teus.png'
import soulignerSvg from '@/assets/souligner.svg'
</script>

<template>
  <div class="flex flex-col items-center py-8 lg:py-12 px-6 lg:px-32">
    <!-- Titre -->
    <h1
      class="text-3xl lg:text-7xl font-oliver font-bold tracking-wide text-black uppercase relative text-center"
    >
      A PROPOS DE MOI
      <img
        :src="soulignerSvg"
        alt="Soulignement"
        class="absolute -bottom-3 lg:-bottom-8 left-2 lg:left-4 w-28 lg:w-68 -rotate-2"
      />
    </h1>

    <!-- Image et Lettres -->
    <div class="md:hidden relative flex justify-center mt-12">
      <img :src="aProposImage" alt="Tasnim" class="w-80 md:w-80 lg:w-[500px] rounded-lg z-10" />
    </div>

    <!-- Texte de présentation -->
    <div class="mt-12 lg:mt-40 font-bold text-left text-xs lg:text-2xl text-black leading-relaxed px-6">
      <p>
        Moi c’est Tasnim et j’ai 19 ans. Après un bac général en HGGSP et SES, j'étais partie pour
        continuer dans une voie assez classique… jusqu'à ce que je découvre le BUT MMI pendant ma
        terminale. Ça a été une numérique et du web m'a attirée, et je n’ai pas hésité longtemps
        avant de plonger.
      </p>

      <!-- Image des compétences (Skills) -->
      <div class="hidden w-full md:flex justify-center py-10">
        <img :src="teus" alt="Compétences" class="w-4/6 mx-auto" />
      </div>

      <br />

      <p>
        En première année, je ne savais pas vraiment ce qui m’attendait. Mais très vite, le design
        et le graphisme sont devenus une vraie passion. J’aime imaginer et créer des projets de A à
        Z, c’est pourquoi j’ai choisi le parcours Création Numérique pour ma deuxième année.
      </p>
    </div>
  </div>

  <!-- Image des compétences (Skills) -->
  <div class="w-full flex justify-center md:my-12">
    <img :src="skillsImage" alt="Compétences" class="w-full mx-auto" />
  </div>

  <div class="flex flex-col items-center py-12 px-6 lg:px-32">
    <!-- Texte d'invitation -->
    <div class="md:my-12 text-left text-xs lg:text-2xl text-black font-bold leading-relaxed px-6">
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
