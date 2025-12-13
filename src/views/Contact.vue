<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white section-padding overflow-hidden" :style="{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80"></div>
      </div>
      <div class="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Contactez-nous</h1>
        <p class="text-base sm:text-lg md:text-xl text-primary-100">Nous sommes là pour répondre à toutes vos questions</p>
      </div>
    </section>

    <!-- Formulaire de contact et informations -->
    <section class="section-padding bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          <!-- Formulaire -->
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Envoyez-nous un message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="+228 XX XX XX XX"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="admission">Admission</option>
                  <option value="formation">Formation</option>
                  <option value="information">Demande d'information</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button type="submit" class="btn-primary w-full">
                Envoyer le message
              </button>
            </form>

            <div v-if="submitted" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p class="text-green-800">Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          </div>

          <!-- Informations de contact -->
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Informations de contact</h2>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p class="text-gray-600">Lomé, Togo</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:contact@isagestogo.com" class="text-primary-600 hover:text-primary-700">
                    contact@isagestogo.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p class="text-gray-600">Contactez-nous pour obtenir notre numéro</p>
                </div>
              </div>
            </div>

            <!-- Horaires -->
            <div class="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 class="font-semibold text-gray-900 mb-4">Horaires d'ouverture</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span class="font-medium">8h00 - 17h00</span>
                </div>
                <div class="flex justify-between">
                  <span>Samedi</span>
                  <span class="font-medium">8h00 - 12h00</span>
                </div>
                <div class="flex justify-between">
                  <span>Dimanche</span>
                  <span class="font-medium">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import heroBg from '../assets/hero-contact.jpg'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // Ici vous pouvez ajouter la logique pour envoyer le formulaire
  console.log('Formulaire soumis:', form.value)
  submitted.value = true
  
  // Réinitialiser le formulaire après 3 secondes
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    submitted.value = false
  }, 5000)
}
</script>

