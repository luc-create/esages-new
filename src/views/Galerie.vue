<template>
    <div>
        <!-- Hero Section -->
        <section class="relative text-white section-padding overflow-hidden"
            :style="{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }">
            <div class="absolute inset-0 z-0">
                <div
                    class="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80">
                </div>
            </div>
            <div class="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in-up">Galerie Photo</h1>
                <p class="text-base sm:text-lg md:text-xl text-primary-100 animate-fade-in-up-delay">Découvrez les moments forts de l'ISAGES</p>
            </div>
        </section>

        <!-- Galerie Photo -->
        <section class="section-padding bg-white">
            <div class="container-custom px-4 sm:px-6 lg:px-8">
                <!-- Visite des Agents de pharmacie en laboratoire de Tongmei -->
                <div class="mb-12 md:mb-16">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                        Visite des Agents de pharmacie en laboratoire de Tongmei
                    </h2>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div v-for="(image, index) in visiteTongmeiImages" :key="index"
                            class="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                            @click="openLightbox(visiteTongmeiImages, index)">
                            <div class="relative h-64 overflow-hidden">
                                <img :src="image" :alt="`Visite Tongmei ${index + 1}`"
                                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy" @error="handleImageError" />
                                <div
                                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Remise de diplômes -->
                <div class="mb-12 md:mb-16">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                        Remise de diplômes
                    </h2>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div v-for="(image, index) in remiseDiplomeImages" :key="index"
                            class="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                            @click="openLightbox(remiseDiplomeImages, index)">
                            <div class="relative h-64 overflow-hidden">
                                <img :src="image" :alt="`Remise de diplôme ${index + 1}`"
                                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy" @error="handleImageError" />
                                <div
                                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lightbox Modal -->
        <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            @click="closeLightbox">
            <button @click="closeLightbox"
                class="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
                aria-label="Fermer">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <button v-if="lightboxImages.length > 1" @click.stop="previousImage"
                class="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
                aria-label="Image précédente">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button v-if="lightboxImages.length > 1" @click.stop="nextImage"
                class="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
                aria-label="Image suivante">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div class="max-w-7xl max-h-full" @click.stop>
                <img :src="lightboxImages[lightboxIndex]" :alt="`Image ${lightboxIndex + 1}`"
                    class="max-w-full max-h-[90vh] object-contain rounded-lg" />
            </div>
            <div v-if="lightboxImages.length > 1"
                class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {{ lightboxIndex + 1 }} / {{ lightboxImages.length }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import heroBg from '../assets/hero-galerie.jpg'

// Images de visite Tongmei
import visiteTongmei1 from '../assets/galerie/visite-Tongmei-min.jpg'
import visiteTongmei2 from '../assets/galerie/visite-Tongmei-2-min.jpg'
import visiteTongmei3 from '../assets/galerie/visite-Tongmei-3-min.jpg'
import visiteTongmei4 from '../assets/galerie/visite-Tongmei-4-min.jpg'

// Images de remise de diplômes
import remiseDiplome2 from '../assets/galerie/remise_diplome2.jpg'
import remiseDiplome3 from '../assets/galerie/remise_diplome3.jpg'
import remiseDiplome4 from '../assets/galerie/remise_diplome4.jpg'
import remiseDiplome5 from '../assets/galerie/remise_diplome5.jpg'
import remiseDiplome7 from '../assets/galerie/remise_diplome7.jpg'
import remiseDiplome8 from '../assets/galerie/remise_diplome8.jpg'
import remiseDiplome9 from '../assets/galerie/remise_diplome9.jpg'
import remiseDiplome10 from '../assets/galerie/remise_diplome10.jpg'
import remiseDiplome11 from '../assets/galerie/remise_diplome11.jpg'
import remiseDiplome12 from '../assets/galerie/remise_diplome12.jpg'
import remiseDiplome13 from '../assets/galerie/remise_diplome13.jpg'
import remiseDiplome14 from '../assets/galerie/remise_diplome14.jpg'
import remiseDiplome15 from '../assets/galerie/remise_diplome15.jpg'
import remiseDiplome16 from '../assets/galerie/remise_diplome16.jpg'
import remiseDiplome17 from '../assets/galerie/remise_diplome17.jpg'
import remiseDiplome18 from '../assets/galerie/remise_diplome18.jpg'
import remiseDiplome19 from '../assets/galerie/remise_diplome19.jpg'
import remiseDiplome20 from '../assets/galerie/remise_diplome20.jpg'

const visiteTongmeiImages = [
    visiteTongmei1,
    visiteTongmei2,
    visiteTongmei3,
    visiteTongmei4
]

const remiseDiplomeImages = [
    remiseDiplome2,
    remiseDiplome3,
    remiseDiplome4,
    remiseDiplome5,
    remiseDiplome7,
    remiseDiplome8,
    remiseDiplome9,
    remiseDiplome10,
    remiseDiplome11,
    remiseDiplome12,
    remiseDiplome13,
    remiseDiplome14,
    remiseDiplome15,
    remiseDiplome16,
    remiseDiplome17,
    remiseDiplome18,
    remiseDiplome19,
    remiseDiplome20
]

const lightboxOpen = ref(false)
const lightboxImages = ref<string[]>([])
const lightboxIndex = ref(0)

const openLightbox = (images: string[], index: number) => {
    lightboxImages.value = images
    lightboxIndex.value = index
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    lightboxOpen.value = false
    document.body.style.overflow = ''
}

const nextImage = () => {
    lightboxIndex.value = (lightboxIndex.value + 1) % lightboxImages.value.length
}

const previousImage = () => {
    lightboxIndex.value = lightboxIndex.value === 0 ? lightboxImages.value.length - 1 : lightboxIndex.value - 1
}

const handleImageError = (e: Event) => {
    const target = e.target as HTMLImageElement
    if (target) {
        target.style.display = 'none'
    }
}

// Navigation au clavier
import { onMounted, onUnmounted } from 'vue'

const handleKeyPress = (event: KeyboardEvent) => {
    if (!lightboxOpen.value) return

    if (event.key === 'Escape') {
        closeLightbox()
    } else if (event.key === 'ArrowRight') {
        nextImage()
    } else if (event.key === 'ArrowLeft') {
        previousImage()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyPress)
    document.body.style.overflow = ''
})
</script>
