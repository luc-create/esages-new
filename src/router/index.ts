import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Formations from '../views/Formations.vue'
import ImagerieMedicale from '../views/ImagerieMedicale.vue'
import Admission from '../views/Admission.vue'
import Contact from '../views/Contact.vue'
import Galerie from '../views/Galerie.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/formations',
      name: 'Formations',
      component: Formations
    },
    {
      path: '/formation/imagerie-medicale',
      name: 'ImagerieMedicale',
      component: ImagerieMedicale
    },
    {
      path: '/admission',
      name: 'Admission',
      component: Admission
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/galerie',
      name: 'Galerie',
      component: Galerie
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

