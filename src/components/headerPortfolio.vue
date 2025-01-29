<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// État pour ouvrir/fermer le menu en mobile
const isMenuOpen = ref(false);

// Fonction pour basculer le menu en mobile
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <!-- Version Mobile -->
  <header class="bg-[#FAE4F0] py-4 px-6 flex justify-between items-center md:hidden">
    <!-- Logo -->
    <img src="/logo-kbl.svg" alt="Logo" class="h-10" />

    <!-- Bouton Menu -->
    <button @click="toggleMenu" class="focus:outline-none">
      <div class="space-y-1">
        <span class="block w-6 h-0.5 bg-[#72BF96]"></span>
        <span class="block w-6 h-0.5 bg-[#72BF96]"></span>
        <span class="block w-6 h-0.5 bg-[#72BF96]"></span>
      </div>
    </button>

    <!-- Modal Menu (petit espace en haut à droite) -->
    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 w-36 h-48 bg-[#72BF96] rounded-2xl shadow-lg flex flex-col justify-center items-center mr-3 mt-3"
    >
      <!-- Bouton de fermeture -->
      <button @click="toggleMenu" class="absolute top-3 right-4">
        <span class="text-[#FAE4F0] text-2xl font-bold">×</span>
      </button>

      <!-- Liens du menu -->
      <nav class="flex flex-col items-center space-y-4 text-white text-base">
        <RouterLink to="/a-propos" @click="toggleMenu">À PROPOS</RouterLink>
        <RouterLink to="/projets" @click="toggleMenu">PROJETS</RouterLink>
        <RouterLink to="/contact" @click="toggleMenu">CONTACT</RouterLink>
      </nav>
    </div>
  </header>

  <!-- Version Desktop (Barre latérale fixée à droite) -->
  <aside class="hidden md:flex fixed right-0 h-screen max-h-[calc(100vh-100px)] w-32 bg-[#72BF96] flex-col justify-center items-center space-y-10 text-[#FAE4F0] text-2xl font-semibold">
  <div class="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-36 whitespace-nowrap">
    <RouterLink to="/a-propos" class="rotate-90">À PROPOS</RouterLink>
    <RouterLink to="/projets" class="rotate-90">PROJETS</RouterLink>
    <RouterLink to="/contact" class="rotate-90">CONTACT</RouterLink>
  </div>
</aside>
</template>
