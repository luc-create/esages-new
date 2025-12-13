<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white section-padding overflow-hidden" style="min-height: 300px;">
      <div class="absolute inset-0 z-0">
        <img src="@/assets/hero-bg-3.jpg" alt="Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80"></div>
      </div>
      <div class="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Admission</h1>
        <p class="text-base sm:text-lg md:text-xl text-primary-100">Rejoignez l'ISAGES et commencez votre parcours vers l'excellence</p>
      </div>
    </section>

    <!-- Processus d'admission -->
    <section class="section-padding bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Processus d'Admission</h2>
          
          <div class="space-y-4 md:space-y-6">
            <div v-for="(step, index) in admissionSteps" :key="index" 
                 class="flex gap-4 md:gap-6 p-4 md:p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                  {{ index + 1 }}
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conditions d'admission -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Conditions d'Admission</h2>
          
          <div class="bg-white rounded-xl shadow-md p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Prérequis</h3>
            <ul class="space-y-3">
              <li v-for="requirement in requirements" :key="requirement" 
                  class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">{{ requirement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Documents requis -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Documents Requis</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="doc in documents" :key="doc" 
                 class="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
              <svg class="w-6 h-6 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="text-gray-700">{{ doc }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire de contact pour admission -->
    <section class="section-padding bg-primary-700 text-white">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Prêt à postuler ?</h2>
          <p class="text-xl mb-8 text-primary-100">
            Contactez-nous pour obtenir plus d'informations sur le processus d'admission
          </p>
          <router-link to="/contact" class="btn-secondary bg-white text-primary-700 hover:bg-gray-100 inline-block">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import heroBg from '../assets/hero-admission.jpg'
const admissionSteps = [
  {
    title: 'Consultation des informations',
    description: 'Consultez les informations sur nos formations et les conditions d\'admission sur notre site web ou en nous contactant directement.'
  },
  {
    title: 'Préparation du dossier',
    description: 'Rassemblez tous les documents requis (diplômes, relevés de notes, photos, etc.) et préparez votre dossier de candidature.'
  },
  {
    title: 'Soumission du dossier',
    description: 'Déposez votre dossier complet au secrétariat de l\'ISAGES ou envoyez-le par courrier selon les modalités indiquées.'
  },
  {
    title: 'Examen du dossier',
    description: 'Notre équipe pédagogique examine votre dossier et vérifie que vous remplissez toutes les conditions d\'admission.'
  },
  {
    title: 'Entretien (si requis)',
    description: 'Certains candidats peuvent être convoqués pour un entretien afin d\'évaluer leur motivation et leur projet professionnel.'
  },
  {
    title: 'Notification d\'admission',
    description: 'Vous recevrez une notification par courrier ou email vous informant de la décision concernant votre candidature.'
  }
]

const requirements = [
  'Être titulaire du Baccalauréat ou équivalent',
  'Avoir une moyenne minimale requise selon la formation choisie',
  'Réussir les tests d\'admission (si applicable)',
  'Fournir tous les documents administratifs requis',
  'S\'acquitter des frais d\'inscription'
]

const documents = [
  'Copie certifiée du Baccalauréat',
  'Relevés de notes du Baccalauréat',
  'Copie de la carte d\'identité nationale',
  'Photos d\'identité (4 exemplaires)',
  'Certificat de nationalité',
  'Relevé de notes des classes antérieures',
  'Lettre de motivation',
  'Curriculum vitae'
]
</script>

