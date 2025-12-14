<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <!-- Barre supérieure avec contacts -->
    <div class="bg-primary-700 text-white py-2 hidden sm:block">
      <div class="container-custom">
        <div class="flex flex-wrap justify-between items-center text-xs sm:text-sm px-4 sm:px-0">
          <div class="flex items-center gap-2 sm:gap-4">
            <a href="mailto:contact@isagestogo.com" class="hover:text-primary-200 transition-colors">
              <span class="flex items-center gap-1 sm:gap-2">
                <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="hidden md:inline">contact@isagestogo.com</span>
                <span class="md:hidden">contact@isages...</span>
              </span>
            </a>
          </div>
          <div class="flex items-center gap-3 sm:gap-4">
            <a href="https://www.facebook.com/isagestogo" target="_blank" rel="noopener noreferrer" class="hover:text-primary-200 transition-colors" aria-label="Facebook">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@goafricaonline7712" target="_blank" rel="noopener noreferrer" class="hover:text-primary-200 transition-colors" aria-label="YouTube">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation principale -->
    <nav class="container-custom px-4 sm:px-0">
      <div class="flex items-center justify-between py-3 md:py-4">
        <router-link to="/" class="flex items-center gap-2 sm:gap-3">
          <img 
            :src="logoImage" 
            alt="ISAGES Logo" 
            class="h-10 sm:h-12 w-auto object-contain"
          />
          <div>
            <h1 class="text-lg sm:text-xl font-bold text-gray-900">ISAGES</h1>
            <p class="text-xs text-gray-600 hidden sm:block">Institut Supérieur d'Administration</p>
          </div>
        </router-link>

        <!-- Menu mobile -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Menu desktop -->
        <ul class="hidden md:flex items-center gap-4 lg:gap-8">
          <li v-for="item in menuItems" :key="item.path">
            <router-link 
              :to="item.path" 
              class="text-sm lg:text-base text-gray-700 hover:text-primary-600 font-medium transition-colors"
              active-class="text-primary-600"
            >
              {{ item.label }}
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="btn-primary text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3">
              Contact
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Menu mobile déroulant -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4">
        <ul class="flex flex-col gap-4">
          <li v-for="item in menuItems" :key="item.path">
            <router-link 
              :to="item.path" 
              @click="mobileMenuOpen = false"
              class="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
              active-class="text-primary-600"
            >
              {{ item.label }}
            </router-link>
          </li>
          <li>
            <router-link to="/contact" @click="mobileMenuOpen = false" class="btn-primary inline-block">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logoImage from '../assets/logo.jpg'

const mobileMenuOpen = ref(false)

const menuItems = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/formations', label: 'Formations' },
  { path: '/admission', label: 'Admission' },
  { path: '/galerie', label: 'Galerie' },
  { path: '/contact', label: 'Contact' },
]
</script>

