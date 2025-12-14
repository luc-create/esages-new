<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white overflow-hidden hero-section">

      <!-- Carousel d'images de fond -->
      <div class="absolute inset-0 z-0">
        <div v-for="(image, index) in heroImages" :key="index"
          class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
          :style="{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }">
        </div>
      </div>

      <!-- Overlay sombre pour la lisibilité -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80 z-10">
      </div>

      <div class="relative z-20 container-custom section-padding pb-20 sm:pb-16 md:pb-12 lg:pb-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
            Institut Supérieur d'Administration<br class="hidden sm:block" />
            <span class="block sm:inline">Sciences Economiques et de Gestion</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-primary-100 px-4">
            Excellence académique et professionnelle au service du développement du Togo
          </p>
          <div
            class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-12">
            <router-link to="/admission"
              class="bg-white text-primary-700 hover:bg-gray-100 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base shadow-lg cursor-pointer">
              S'inscrire maintenant
            </router-link>
            <router-link to="/formations"
              class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base shadow-lg cursor-pointer">
              Découvrir nos formations
            </router-link>
          </div>
        </div>
      </div>

      <!-- Wave separator -->
      <div class="absolute bottom-0 left-0 right-0 w-full h-12 sm:h-16 md:h-20 lg:h-16 xl:h-12 overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"
          preserveAspectRatio="none">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white" />
        </svg>
      </div>
    </section>

    <!-- Vidéo Section -->
    <section class="section-padding bg-gray-900 pt-16 sm:pt-20 md:pt-16 lg:pt-12">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-6 md:mb-8">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
              Rentrée Académique 2024-2025
            </h2>
            <p class="text-gray-300 text-xs sm:text-sm md:text-base">
              Découvrez notre institut en vidéo
            </p>
          </div>
          <div class="relative rounded-lg md:rounded-xl overflow-hidden shadow-2xl bg-black"
            style="padding-bottom: 56.25%; height: 0; position: relative;">
            <!-- YouTube Embed -->
            <iframe v-if="useYouTubeEmbed" :src="videoSrc" class="absolute top-0 left-0 w-full h-full" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen loading="lazy"></iframe>
            <!-- Direct Video -->
            <video v-else class="absolute top-0 left-0 w-full h-full" controls preload="metadata" playsinline>
              <source :src="videoSrc" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>
    </section>

    <!-- À propos (résumé) -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div class="order-2 lg:order-1">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bienvenue à l'ISAGES
            </h2>
            <div class="w-24 h-1 bg-primary-600 mb-6"></div>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              L'Institut Supérieur d'Administration, Sciences Economiques et de Gestion (ISAGES)
              est un établissement d'enseignement supérieur dédié à la formation d'excellence
              dans les domaines de l'administration, des sciences économiques et de la gestion.
            </p>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
              Nous préparons nos étudiants à devenir des professionnels compétents et des leaders
              capables de contribuer au développement économique du Togo et de l'Afrique.
            </p>
          </div>
          <div class="order-1 lg:order-2">
            <div class="relative rounded-xl overflow-hidden shadow-xl">
              <img :src="bienvenueImage" alt="ISAGES - Institut Supérieur d'Administration"
                class="w-full h-full object-cover aspect-video" />
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div v-for="(feature, index) in features" :key="index"
            class="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <div class="w-14 h-14 md:w-16 md:h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <component :is="feature.icon" class="w-7 h-7 md:w-8 md:h-8 text-primary-600" />
            </div>
            <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{{ feature.title }}</h3>
            <p class="text-sm md:text-base text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Formations -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Formations
          </h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
            Des programmes académiques de qualité adaptés aux besoins du marché
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="formation in formations" :key="formation.id"
            class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="relative h-48 overflow-hidden">
              <img v-if="formation.image" :src="formation.image" :alt="formation.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                @error="handleImageError" />
              <div v-else
                class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <component :is="formation.icon"
                  class="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-5 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">{{ formation.title }}</h3>
              <p class="text-sm md:text-base text-gray-600 mb-4">{{ formation.description }}</p>
              <router-link to="/formations"
                class="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2 text-sm md:text-base">
                En savoir plus
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/formations" class="btn-primary">
            Voir toutes les formations
          </router-link>
        </div>
      </div>
    </section>

    <!-- Statistiques -->
    <section class="section-padding bg-primary-700 text-white">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label" class="p-4 md:p-6">
            <div class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-sm md:text-base text-primary-200">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Prêt à commencer votre parcours académique ?
        </h2>
        <p class="text-xl mb-8 text-primary-100">
          Rejoignez l'ISAGES et faites partie de la prochaine génération de leaders
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/admission"
            class="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg cursor-pointer">
            Postuler maintenant
          </router-link>
          <router-link to="/contact"
            class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg cursor-pointer">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h, ref, onMounted, onUnmounted } from 'vue'
// Video URL - YouTube embed
const videoSrc = 'https://www.youtube.com/embed/DL5vY1HVq1k'
const useYouTubeEmbed = true
import bienvenueImage from '../assets/opticien-lunetier-isages.png'
import flyerSanteVisuelle from '../assets/flyer_sante_visuelle.jpeg'
import flyerSanteVisuelleScience from '../assets/flyer_sante_visuelle_science_paramedicale.jpeg'
import flyerScienceParamedicale from '../assets/flyer_science_paramedicale.jpeg'
import flyerScienceParamedicale2 from '../assets/flyer_science_paramedicale_2.jpeg'
import heroBg1 from '../assets/hero-bg-1.jpg'
import heroBg2 from '../assets/hero-bg-2.jpg'
import heroBg3 from '../assets/hero-bg-3.jpg'

// Images du carousel
const heroImages = [heroBg1, heroBg2, heroBg3]
const currentImageIndex = ref(0)
let carouselInterval: ReturnType<typeof setInterval> | null = null

// Fonction pour changer d'image
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
}

// Démarrer le carousel au montage du composant
onMounted(() => {
  carouselInterval = setInterval(nextImage, 5000) // Change d'image toutes les 5 secondes
})

// Nettoyer l'intervalle au démontage
onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})

// Composants SVG simples
const AcademicIcon = () => h('svg', {
  class: 'w-8 h-8',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 14l9-5-9-5-9 5 9 5z'
  }),
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
  })
])

const UsersIcon = () => h('svg', {
  class: 'w-8 h-8',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  })
])

const TrophyIcon = () => h('svg', {
  class: 'w-8 h-8',
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

const BookIcon = () => h('svg', {
  class: 'w-16 h-16',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  })
])

const ChartIcon = () => h('svg', {
  class: 'w-16 h-16',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  })
])

const BriefcaseIcon = () => h('svg', {
  class: 'w-16 h-16',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  })
])

const features = [
  {
    title: 'Excellence académique',
    description: 'Des programmes de formation de haut niveau reconnus et adaptés aux réalités du marché.',
    icon: AcademicIcon
  },
  {
    title: 'Corps professoral qualifié',
    description: 'Des enseignants expérimentés et des professionnels du secteur pour une formation de qualité.',
    icon: UsersIcon
  },
  {
    title: 'Reconnaissance professionnelle',
    description: 'Des diplômes reconnus qui ouvrent les portes du marché de l\'emploi.',
    icon: TrophyIcon
  }
]

const formations = [
  {
    id: 1,
    title: 'Administration',
    description: 'Formation complète en administration publique et privée pour devenir un gestionnaire compétent.',
    icon: BriefcaseIcon,
    image: flyerSanteVisuelle
  },
  {
    id: 2,
    title: 'Sciences Economiques',
    description: 'Maîtrisez les concepts économiques et les outils d\'analyse pour comprendre les enjeux économiques.',
    icon: ChartIcon,
    image: flyerSanteVisuelleScience
  },
  {
    id: 3,
    title: 'Gestion',
    description: 'Développez vos compétences en gestion d\'entreprise et en management pour exceller dans votre carrière.',
    icon: BookIcon,
    image: flyerScienceParamedicale2
  },
  {
    id: 4,
    title: 'Imagerie Médicale',
    description: 'Master en Génie Biomédical - Formation d\'experts en techniques d\'imagerie médicale.',
    icon: null,
    image: flyerScienceParamedicale
  }
]

const stats = [
  { value: '500+', label: 'Étudiants' },
  { value: '50+', label: 'Enseignants' },
  { value: '10+', label: 'Années d\'expérience' },
  { value: '90%', label: 'Taux de réussite' }
]

const handleImageError = (event: Event) => {
  console.error('Erreur de chargement d\'image:', event)
}
</script>

<style scoped>
.hero-section {
  min-height: 70vh;
  display: flex;
  align-items: center;
}
</style>
