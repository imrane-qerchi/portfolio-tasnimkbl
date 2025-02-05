<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LinkedinIcon from '@/assets/Linkedin.svg'
</script>

<template>
  <footer class="bg-[#C36E9A] text-white py-10 px-6 mt-auto w-full">
    <div class="relative flex items-center w-full">
      <!-- Icône LinkedIn -->
      <a href="https://www.linkedin.com/in/tasnim-kebaili/" target="_blank" class="absolute left-0">
        <img :src="LinkedinIcon" alt="LinkedIn" class="h-6 w-6 md:h-8 md:w-8" />
      </a>

      <!-- Liens du menu -->
      <nav class="mx-auto flex space-x-8 md:space-x-40 text-xs md:text-lg">
        <RouterLink to="/a-propos">À PROPOS</RouterLink>
        <RouterLink to="/projets">PROJETS</RouterLink>
        <RouterLink to="/contact">CONTACT</RouterLink>
      </nav>
    </div>

    <!-- Ligne blanche -->
    <div class="w-full border-t border-[#FAE4F0] my-4 md:my-6"></div>

    <!-- Texte de Copyright -->
    <p class="text-xs md:text-sm text-white text-center font-light">
      Tasnim Kebaili 2025 Tous droits réservés.
    </p>
  </footer>
</template>
