<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white section-padding overflow-hidden" :style="{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80"></div>
      </div>
      <div class="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in-up">Nos Formations</h1>
        <p class="text-base sm:text-lg md:text-xl text-primary-100 animate-fade-in-up-delay">Des programmes académiques adaptés à vos ambitions</p>
      </div>
    </section>

    <!-- Formations détaillées par catégories -->
    <section class="section-padding bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <!-- Sciences de santé visuelle et technologie médicale -->
        <div v-for="category in formationsByCategory" :key="category.name" class="mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">{{ category.name }}</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div v-for="formation in category.formations" :key="formation.id"
              class="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div class="h-40 md:h-48 overflow-hidden">
                <img v-if="formation.image" :src="formation.image" :alt="formation.title"
                  class="w-full h-full object-cover" @error="handleImageError" />
                <div v-else
                  class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <component :is="formation.icon" class="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
              <div class="p-5 md:p-6">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{{ formation.title }}</h3>
                <p class="text-gray-600 mb-4 text-sm md:text-base">{{ formation.description }}</p>

                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2 text-sm md:text-base">Durée :</h4>
                  <p class="text-gray-600 text-sm md:text-base">{{ formation.duree }}</p>
                </div>

                <div class="mb-4" v-if="formation.debouches && formation.debouches.length > 0">
                  <h4 class="font-semibold text-gray-900 mb-2 text-sm md:text-base">Débouchés :</h4>
                  <ul class="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                    <li v-for="debouche in formation.debouches.slice(0, 3)" :key="debouche">{{ debouche }}</li>
                    <li v-if="formation.debouches.length > 3" class="text-primary-600 font-medium">+ {{
                      formation.debouches.length - 3 }} autres...</li>
                  </ul>
                </div>

                <router-link v-if="formation.path" :to="formation.path"
                  class="btn-secondary w-full text-center block mb-2 text-sm md:text-base">
                  En savoir plus
                </router-link>
                <router-link to="/admission" class="btn-primary w-full text-center block text-sm md:text-base">
                  S'inscrire
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processus de formation -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Approche Pédagogique</h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="(step, index) in steps" :key="index" class="text-center">
            <div
              class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              {{ index + 1 }}
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import heroBg from '../assets/hero-formations.jpg'
import flyerSanteVisuelle from '../assets/flyer_sante_visuelle.jpeg'
import flyerSanteVisuelleScience from '../assets/flyer_sante_visuelle_science_paramedicale.jpeg'
import flyerScienceParamedicale from '../assets/flyer_science_paramedicale.jpeg'
import flyerScienceParamedicale2 from '../assets/flyer_science_paramedicale_2.jpeg'

const BookIcon = () => h('svg', {
  class: 'w-20 h-20',
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
  class: 'w-20 h-20',
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
  class: 'w-20 h-20',
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

const MedicalIcon = () => h('svg', {
  class: 'w-20 h-20',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  })
])

// Icônes supplémentaires
const GlassesIcon = () => h('svg', { class: 'w-20 h-20', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' })
])

const PharmacyIcon = () => h('svg', { class: 'w-20 h-20', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
])

const HospitalIcon = () => h('svg', { class: 'w-20 h-20', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
])

const formationsByCategory = [
  {
    name: 'Licences et Masters en Sciences de santé visuelle et technologie médicale',
    formations: [
      {
        id: 1,
        title: 'Imagerie Médicale',
        description: 'Master en Génie Biomédical - Formation d\'experts en techniques d\'imagerie médicale, traitement d\'images et recherche.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Technicien en imagerie médicale',
          'Chercheur en imagerie',
          'Expert en dispositifs médicaux',
          'Formateur en imagerie',
          'Prise en charge des patients',
          'Interprétation des images',
          'Collaboration avec les équipes médicales'
        ],
        icon: MedicalIcon,
        path: '/formation/imagerie-medicale',
        image: flyerScienceParamedicale
      },
      {
        id: 2,
        title: 'Optique - Lunetterie',
        description: 'Formation complète en optique et lunetterie pour devenir un professionnel de la santé visuelle.',
        duree: 'Licence (BAC+3) / Master (BAC+5)',
        debouches: [
          'Optométriste',
          'Lunetier',
          'Responsable de magasin d\'optique',
          'Conseiller en optique',
          'Technicien en verres optiques'
        ],
        icon: GlassesIcon,
        path: null,
        image: null
      }
    ]
  },
  {
    name: 'Licences et Masters en Marketing de la Santé',
    formations: [
      {
        id: 3,
        title: 'Délégation médicale / Visite médicale',
        description: 'Formation spécialisée en délégation médicale et visite médicale pour les professionnels de la santé.',
        duree: 'Licence (BAC+3) / Master (BAC+5)',
        debouches: [
          'Délégué médical',
          'Visiteur médical',
          'Responsable commercial santé',
          'Chargé de communication médicale'
        ],
        icon: MedicalIcon,
        path: null,
        image: null
      },
      {
        id: 4,
        title: 'Auxiliaires en Pharmacie',
        description: 'Formation pour devenir auxiliaire en pharmacie, assistant pharmaceutique qualifié.',
        duree: 'Licence (BAC+3)',
        debouches: [
          'Auxiliaire en pharmacie',
          'Assistant pharmaceutique',
          'Préparateur en pharmacie',
          'Conseiller en pharmacie'
        ],
        icon: PharmacyIcon,
        path: null,
        image: null
      },
      {
        id: 5,
        title: 'Kinésithérapie',
        description: 'Formation en kinésithérapie pour devenir un professionnel de la rééducation et du traitement par le mouvement.',
        duree: 'Licence (BAC+3) / Master (BAC+5)',
        debouches: [
          'Kinésithérapeute',
          'Rééducateur fonctionnel',
          'Thérapeute en réadaptation',
          'Spécialiste en rééducation'
        ],
        icon: MedicalIcon,
        path: null,
        image: null
      }
    ]
  },
  {
    name: 'Licences et Masters en Sciences Administratives et de Gestion',
    formations: [
      {
        id: 6,
        title: 'Gestion et Administration des Structures Sanitaires et Hospitalières',
        description: 'Formation spécialisée en gestion et administration des établissements de santé et hôpitaux.',
        duree: 'Licence (BAC+3) / Master (BAC+5)',
        debouches: [
          'Directeur d\'établissement de santé',
          'Gestionnaire hospitalier',
          'Administrateur de structure sanitaire',
          'Responsable administratif hospitalier'
        ],
        icon: HospitalIcon,
        path: null,
        image: null
      },
      {
        id: 7,
        title: 'Assistant de direction',
        description: 'Formation en assistant de direction avec spécialités : médicale, juridique, Entreprises et Administration.',
        duree: 'Licence (BAC+3)',
        debouches: [
          'Assistant de direction médicale',
          'Assistant de direction juridique',
          'Assistant de direction en entreprise',
          'Secrétaire de direction',
          'Assistant administratif'
        ],
        icon: BriefcaseIcon,
        path: null,
        image: flyerSanteVisuelle
      },
      {
        id: 8,
        title: 'Gestion des Collectivités locales',
        description: 'Formation en gestion des collectivités locales avec spécialités : Suivi et Évaluation des Projets, Planification, Projet de développement local.',
        duree: 'Licence (BAC+3)',
        debouches: [
          'Gestionnaire de collectivité locale',
          'Chargé de suivi et évaluation',
          'Planificateur de développement',
          'Chef de projet local',
          'Administrateur territorial'
        ],
        icon: BriefcaseIcon,
        path: null,
        image: null
      },
      {
        id: 9,
        title: 'Assistant de direction administratif',
        description: 'Formation complète pour devenir assistant de direction dans le secteur administratif.',
        duree: 'Licence (BAC+3)',
        debouches: [
          'Assistant de direction',
          'Secrétaire administratif',
          'Assistant administratif',
          'Chargé de secrétariat'
        ],
        icon: BriefcaseIcon,
        path: null,
        image: null
      },
      {
        id: 10,
        title: 'Comptabilité Contrôle Audit et Gestion des Ressources humaines',
        description: 'Formation complète en comptabilité, contrôle, audit et gestion des ressources humaines.',
        duree: 'Licence (BAC+3) / Master (BAC+5)',
        debouches: [
          'Comptable',
          'Contrôleur de gestion',
          'Auditeur',
          'Gestionnaire RH',
          'Responsable paie',
          'Chargé de recrutement'
        ],
        icon: ChartIcon,
        path: null,
        image: flyerSanteVisuelleScience
      },
      {
        id: 11,
        title: 'Administration',
        description: 'Formation complète en administration publique et privée, gestion des ressources humaines, et management organisationnel.',
        duree: 'Licence (BAC+3)',
        debouches: [
          'Administrateur public',
          'Gestionnaire RH',
          'Chef de service',
          'Directeur administratif'
        ],
        icon: BriefcaseIcon,
        path: null,
        image: flyerSanteVisuelle
      },
      {
        id: 12,
        title: 'Sciences Economiques',
        description: 'Maîtrise des concepts économiques, analyse des politiques économiques, et compréhension des enjeux macroéconomiques.',
        duree: 'Licence (BAC+3)',
        debouches: [
          'Économiste',
          'Analyste économique',
          'Conseiller économique',
          'Chercheur en économie'
        ],
        icon: ChartIcon,
        path: null,
        image: flyerSanteVisuelleScience
      },
      {
        id: 13,
        title: 'Gestion',
        description: 'Développement des compétences en gestion d\'entreprise, comptabilité, finance, et stratégie d\'entreprise.',
        duree: 'Licence (BAC+3)',
        debouches: [
          'Gestionnaire d\'entreprise',
          'Comptable',
          'Responsable financier',
          'Directeur général'
        ],
        icon: BookIcon,
        path: null,
        image: flyerScienceParamedicale2
      }
    ]
  },
  {
    name: 'Masters professionnels (BAC+5)',
    formations: [
      {
        id: 14,
        title: 'Sciences économiques et de Gestion',
        description: 'Master professionnel approfondi en sciences économiques et de gestion pour des postes de direction.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Directeur financier',
          'Directeur économique',
          'Consultant en gestion',
          'Chef de projet économique'
        ],
        icon: ChartIcon,
        path: null,
        image: null
      },
      {
        id: 15,
        title: 'Sciences et technologie',
        description: 'Master professionnel en sciences et technologie pour les secteurs innovants.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Ingénieur de recherche',
          'Chef de projet technologique',
          'Consultant en innovation',
          'Directeur technique'
        ],
        icon: MedicalIcon,
        path: null,
        image: null
      },
      {
        id: 16,
        title: 'Sciences de la santé',
        description: 'Master professionnel en sciences de la santé pour des postes d\'expertise et de direction dans le secteur sanitaire.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Expert en santé publique',
          'Directeur de structure sanitaire',
          'Consultant en santé',
          'Chercheur en santé'
        ],
        icon: MedicalIcon,
        path: null,
        image: null
      }
    ]
  },
  {
    name: 'Double diplomation en MASTER avec SUP\'MANAGEMENT BURKINA',
    formations: [
      {
        id: 17,
        title: 'Gestion des projets',
        description: 'Master en double diplomation en gestion des projets avec SUP\'MANAGEMENT BURKINA.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Chef de projet',
          'Gestionnaire de projets',
          'Directeur de projets',
          'Consultant en gestion de projets'
        ],
        icon: BriefcaseIcon,
        path: null,
        image: null
      },
      {
        id: 18,
        title: 'Management environnemental / Eco-Management',
        description: 'Master en double diplomation en management environnemental et éco-management.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Responsable environnement',
          'Consultant en éco-management',
          'Chef de projet environnemental',
          'Directeur développement durable'
        ],
        icon: ChartIcon,
        path: null,
        image: null
      },
      {
        id: 19,
        title: 'Management des Ressources humaines',
        description: 'Master en double diplomation en management des ressources humaines.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Directeur RH',
          'Responsable RH',
          'Consultant en RH',
          'Chef de service RH'
        ],
        icon: BriefcaseIcon,
        path: null,
        image: null
      },
      {
        id: 20,
        title: 'Management global Approfondi',
        description: 'Master en double diplomation en management global approfondi.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Directeur général',
          'Directeur d\'entreprise',
          'Consultant en management',
          'Chef d\'entreprise'
        ],
        icon: BriefcaseIcon,
        path: null,
        image: null
      },
      {
        id: 21,
        title: 'Ingénierie Financière Comptabilité Contrôle Audit',
        description: 'Master en double diplomation en ingénierie financière, comptabilité, contrôle et audit.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Directeur financier',
          'Expert-comptable',
          'Auditeur senior',
          'Contrôleur de gestion'
        ],
        icon: ChartIcon,
        path: null,
        image: null
      },
      {
        id: 22,
        title: 'Ingénierie Commerciale',
        description: 'Master en double diplomation en ingénierie commerciale.',
        duree: 'Master (BAC+5)',
        debouches: [
          'Directeur commercial',
          'Responsable commercial',
          'Consultant en commerce',
          'Chef de vente'
        ],
        icon: ChartIcon,
        path: null,
        image: null
      }
    ]
  }
]

const steps = [
  {
    title: 'Cours théoriques',
    description: 'Enseignement des fondamentaux et des concepts avancés'
  },
  {
    title: 'Travaux pratiques',
    description: 'Application des connaissances à travers des projets concrets'
  },
  {
    title: 'Stages',
    description: 'Immersion professionnelle en entreprise ou administration'
  },
  {
    title: 'Mémoire',
    description: 'Travail de recherche et soutenance pour valider le diplôme'
  }
]

const handleImageError = (event: Event) => {
  console.error('Erreur de chargement d\'image:', event)
}
</script>
