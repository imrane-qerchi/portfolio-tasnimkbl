import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import autoEffects from './plugins/autoEffects' // ✅ Ajout du plugin autoEffects

const app = createApp(App)

// ✅ Assurer que le router est bien initialisé
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

app.use(router)
app.use(autoEffects) // ✅ Ajout du plugin global pour les effets `<strong>` et `<span>`

app.mount('#app')
