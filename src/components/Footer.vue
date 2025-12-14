<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container-custom section-padding px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- À propos -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h3 class="text-white font-bold text-base md:text-lg mb-3 md:mb-4">ISAGES</h3>
          <p class="text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
            Institut Supérieur d'Administration, Sciences Economiques et de Gestion du Togo.
            Excellence académique et professionnelle depuis notre création.
          </p>
          <div class="flex gap-3 md:gap-4">
            <a href="https://www.facebook.com/isagestogo" target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-colors" aria-label="Facebook">
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@goafricaonline7712" target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-colors" aria-label="YouTube">
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Liens rapides</h3>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item.path">
              <router-link :to="item.path" class="hover:text-primary-400 transition-colors text-xs md:text-sm">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Formations -->
        <div>
          <h3 class="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Formations</h3>
          <ul class="space-y-2">
            <li v-for="formation in formations" :key="formation" class="text-xs md:text-sm">
              {{ formation }}
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Contact</h3>
          <ul class="space-y-3 text-xs md:text-sm">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div class="flex flex-col gap-1">
                <a href="tel:+22822515657" class="hover:text-primary-400 transition-colors">+228 22 51 56 57</a>
                <a href="tel:+22891785014" class="hover:text-primary-400 transition-colors">+228 91 78 50 14</a>
                <a href="tel:+22897372328" class="hover:text-primary-400 transition-colors">+228 97 37 23 28</a>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@isagestogo.com" class="hover:text-primary-400 transition-colors">
                contact@isagestogo.com
              </a>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Lomé, Togo</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        <p>&copy; {{ currentYear }} ISAGES Togo. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/formations', label: 'Formations' },
  { path: '/admission', label: 'Admission' },
  { path: '/galerie', label: 'Galerie' },
  { path: '/contact', label: 'Contact' },
]

const formations = [
  'Administration',
  'Sciences Economiques',
  'Gestion',
]
</script>

