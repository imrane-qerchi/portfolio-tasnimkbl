<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import { pb } from '@/backend'; // Pour l'enregistrement dans PocketBase

// Références pour les champs du formulaire
const nom = ref('');
const prenom = ref('');
const email = ref('');
const projet = ref('');

// Fonction pour envoyer le formulaire
const envoyerMessage = async () => {
  if (!nom.value || !prenom.value || !email.value || !projet.value) {
    alert('Merci de remplir tous les champs.');
    return;
  }

  try {
    await pb.collection('contacts').create({
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      projet: projet.value
    });

    alert('Message envoyé avec succès !');
    nom.value = '';
    prenom.value = '';
    email.value = '';
    projet.value = '';
  } catch (error) {
    alert('Erreur lors de l\'envoi du message.');
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center py-12 px-6 lg:px-32">
    <!-- Titre -->
    <h1 class="text-3xl lg:text-5xl font-bold tracking-wide text-black uppercase">Contact moi</h1>

    <!-- Formulaire -->
    <form @submit.prevent="envoyerMessage" class="mt-12 w-full max-w-lg lg:max-w-3xl">
      <!-- NOM -->
      <div class="flex items-center mb-8 lg:mb-10">
        <label class="text-sm lg:text-lg font-bold uppercase bg-[#72BF96] text-black px-4 py-2 w-48 lg:w-64 text-left border-l-3">
          Nom
        </label>
        <input v-model="nom" type="text" placeholder="DUPONT"
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none text-lg lg:text-xl" />
      </div>

      <!-- PRENOM -->
      <div class="flex items-center mb-8 lg:mb-10">
        <label class="text-sm lg:text-lg font-bold uppercase bg-[#72BF96] text-black px-4 py-2 w-48 lg:w-64 text-left border-l-3">
          Prénom
        </label>
        <input v-model="prenom" type="text" placeholder="Pierre"
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none text-lg lg:text-xl" />
      </div>

      <!-- EMAIL -->
      <div class="flex items-center mb-8 lg:mb-10">
        <label class="text-sm lg:text-lg font-bold uppercase bg-[#72BF96] text-black px-4 py-2 w-48 lg:w-64 text-left border-l-3">
          Ton Email
        </label>
        <input v-model="email" type="email" placeholder="pierre.dupont@gmail.com" required
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none text-lg lg:text-xl" />
      </div>

      <!-- PROJET -->
      <div class="flex items-start mb-8 lg:mb-12">
        <label class="text-sm lg:text-lg font-bold uppercase bg-[#72BF96] text-black px-4 py-2 w-48 lg:w-64 text-left border-l-3">
          Ton Projet
        </label>
        <textarea v-model="projet" placeholder="Je voulais te faire part de mon projet de marque  ......." rows="5"
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none resize-none text-lg lg:text-xl"></textarea>
      </div>

      <!-- Bouton Envoyer -->
      <div class="flex justify-center">
        <button type="submit"
          class="bg-black text-white text-lg lg:text-xl py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition">
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input,
textarea {
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
}

button {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
