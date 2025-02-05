<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import envoyerIcon from '@/assets/envoyer.png' // Import de l'image
import soulignerSvg from '@/assets/souligner.svg' // Import de l'image

const nom = ref('')
const prenom = ref('')
const email = ref('')
const projet = ref('')
const sending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Fonction d'envoi du formulaire à Web3Forms
const envoyerMessage = async () => {
  if (!nom.value || !prenom.value || !email.value || !projet.value) {
    errorMessage.value = 'Merci de remplir tous les champs.'
    return
  }

  sending.value = true
  successMessage.value = ''
  errorMessage.value = ''

  const formData = new FormData()
  formData.append('access_key', '77434fcc-c88c-4236-97c3-9db6d359f155') // Votre clé Web3Forms
  formData.append('name', `${prenom.value} ${nom.value}`)
  formData.append('email', email.value)
  formData.append('message', projet.value)
  formData.append('botcheck', '') // Protection anti-bot

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (result.success) {
      successMessage.value = 'Message envoyé avec succès !'
      nom.value = ''
      prenom.value = ''
      email.value = ''
      projet.value = ''
    } else {
      errorMessage.value = result.message || 'Une erreur est survenue.'
    }
  } catch (error) {
    errorMessage.value = 'Erreur lors de l\'envoi du message.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center py-12 px-6 md:px-32 -mb-38 md:mb-40">
    <!-- Titre -->
    <h1
      class="text-3xl md:text-7xl font-oliver font-bold tracking-wide text-black uppercase relative text-center"
    >
      Contacte moi
      <img
        :src="soulignerSvg"
        alt="Soulignement"
        class="absolute -bottom-3 md:-bottom-8 left-0 w-28 md:w-84 -rotate-3"
      />
    </h1>

    <!-- Messages de confirmation/erreur -->
    <p v-if="successMessage" class="text-green-600 mt-4">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-600 mt-4">{{ errorMessage }}</p>

    <!-- Formulaire -->
    <form @submit.prevent="envoyerMessage" class="mt-12 md:mt-30 w-full max-w-lg md:max-w-3xl relative">
      <!-- NOM -->
      <div class="flex items-center mb-8 md:mb-10">
        <label
          class="text-sm md:text-3xl font-oliver font-bold uppercase bg-[#72BF96] text-black px-4 w-48 md:w-64 text-left border-l-2"
        >
          Nom
        </label>
        <input
          v-model="nom"
          type="text"
          placeholder="DUPONT"
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none text-lg md:text-xl"
        />
      </div>

      <!-- PRENOM -->
      <div class="flex items-center mb-8 md:mb-10">
        <label
          class="text-sm md:text-3xl font-oliver font-bold uppercase bg-[#72BF96] text-black px-4 w-48 md:w-64 text-left border-l-2"
        >
          Prenom
        </label>
        <input
          v-model="prenom"
          type="text"
          placeholder="Pierre"
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none text-lg md:text-xl"
        />
      </div>

      <!-- EMAIL -->
      <div class="flex items-center mb-8 md:mb-10">
        <label
          class="text-sm md:text-3xl font-oliver font-bold uppercase bg-[#72BF96] text-black px-4 w-48 md:w-64 text-left border-l-2"
        >
          Ton Email
        </label>
        <input
          v-model="email"
          type="email"
          placeholder="pierre.dupont@gmail.com"
          required
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none text-lg md:text-xl"
        />
      </div>

      <!-- PROJET -->
      <div class="flex items-start mb-8 md:mb-12">
        <label
          class="text-sm md:text-3xl font-oliver font-bold uppercase bg-[#72BF96] text-black px-4 w-48 md:w-64 text-left border-l-2"
        >
          Ton Projet
        </label>
        <textarea
          v-model="projet"
          placeholder="Je voulais te faire part de mon projet de marque ......."
          rows="5"
          class="border-b-2 border-black w-full bg-transparent ml-6 focus:outline-none resize-none text-lg md:text-xl"
        ></textarea>
      </div>

      <!-- Bouton Envoyer -->
<button type="submit" :disabled="sending" class="mt-6 absolute right-4 md:-bottom-34 lg-right-50 mb-4 mr-4">
        <img
          :src="envoyerIcon"
          alt="Envoyer"
          class="w-48 h-auto md:w-80 md:h-auto transition-transform duration-300 hover:scale-110"
          :class="{ 'opacity-50 cursor-not-allowed': sending }"
        />
      </button>
    </form>
  </div>
</template>
