<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white section-padding overflow-hidden" :style="{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80"></div>
      </div>
      <div class="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in-up">À propos de l'ISAGES</h1>
        <p class="text-base sm:text-lg md:text-xl text-primary-100 animate-fade-in-up-delay">Notre mission, notre vision et nos valeurs</p>
      </div>
    </section>

    <!-- Mission et Vision -->
    <section class="section-padding bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6 md:gap-12">
          <div class="bg-primary-50 p-6 md:p-8 rounded-xl">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Notre Mission</h2>
            <p class="text-gray-700 leading-relaxed">
              L'ISAGES a pour mission de former des cadres compétents dans les domaines de 
              l'administration, des sciences économiques et de la gestion. Nous nous engageons 
              à offrir une éducation de qualité qui combine théorie et pratique, préparant nos 
              étudiants à exceller dans leur carrière professionnelle et à contribuer au 
              développement économique du Togo.
            </p>
          </div>

          <div class="bg-gray-50 p-6 md:p-8 rounded-xl">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Notre Vision</h2>
            <p class="text-gray-700 leading-relaxed">
              Devenir un établissement d'enseignement supérieur de référence en Afrique de l'Ouest, 
              reconnu pour l'excellence de ses formations et la qualité de ses diplômés. Nous 
              aspirons à être un catalyseur du développement économique et social, en formant des 
              leaders capables d'innover et de transformer leur environnement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="bg-white p-6 rounded-xl shadow-md">
            <div class="text-primary-600 mb-4">
              <component :is="value.icon" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Historique -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Notre Histoire</h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              L'Institut Supérieur d'Administration, Sciences Economiques et de Gestion (ISAGES) 
              a été créé avec l'ambition de répondre aux besoins croissants en formation de cadres 
              compétents dans les domaines de l'administration, de l'économie et de la gestion au Togo.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Depuis sa création, l'ISAGES s'est imposé comme un établissement de référence, 
              formant des générations d'étudiants qui contribuent aujourd'hui au développement 
              économique et social du pays. Notre engagement envers l'excellence académique et 
              la formation professionnelle continue de guider notre mission.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Aujourd'hui, l'ISAGES continue d'évoluer et de s'adapter aux défis du monde moderne, 
              en proposant des formations innovantes et en maintenant des partenariats solides 
              avec le secteur privé et les institutions publiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import heroBg from '../assets/hero-about.jpg'

const ExcellenceIcon = () => h('svg', {
  class: 'w-12 h-12',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  })
])

const IntegrityIcon = () => h('svg', {
  class: 'w-12 h-12',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  })
])

const InnovationIcon = () => h('svg', {
  class: 'w-12 h-12',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  })
])

const values = [
  {
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans tous les aspects de notre mission éducative, en maintenant les plus hauts standards académiques.',
    icon: ExcellenceIcon
  },
  {
    title: 'Intégrité',
    description: 'Nous agissons avec intégrité et transparence, en respectant les valeurs éthiques et professionnelles dans toutes nos actions.',
    icon: IntegrityIcon
  },
  {
    title: 'Innovation',
    description: 'Nous encourageons l\'innovation et la créativité, en adaptant nos méthodes pédagogiques aux évolutions du monde moderne.',
    icon: InnovationIcon
  }
]
</script>

