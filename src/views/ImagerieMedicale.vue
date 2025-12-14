<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white section-padding overflow-hidden" :style="{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80"></div>
      </div>
      <div class="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <span class="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NOUVELLE FILIÈRE PARAMÉDICALE
          </span>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-fade-in-up">
            Master en Imagerie Médicale
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-primary-100 animate-fade-in-up-delay">
            Domaine : Sciences et Technologie | Mention : Génie Biomédical
          </p>
        </div>
      </div>
    </section>

    <!-- Présentation -->
    <section class="section-padding bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Présentation</h2>
          
          <div class="bg-primary-50 p-6 md:p-8 rounded-xl mb-8">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Objectifs</h3>
            <p class="text-gray-700 leading-relaxed">
              Le présent parcours forme des professionnels capables de maîtriser les aspects techniques et scientifiques 
              de l'imagerie médicale, ainsi que de contribuer au développement et à l'application de nouvelles technologies 
              dans ce domaine. Les diplômés sont préparés à travailler dans des environnements variés, tels que les hôpitaux, 
              les centres de recherche et de santé, et l'industrie technologique.
            </p>
          </div>

          <!-- Qu'attendre de cette formation -->
          <div class="mb-8">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-6">Qu'attendre de cette formation à ISAGES ?</h3>
            
            <div class="space-y-6">
              <div class="bg-gray-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Maîtrise des techniques d'imagerie médicale
                </h4>
                <ul class="list-disc list-inside space-y-2 text-gray-700 ml-10">
                  <li>Acquisition de connaissances approfondies sur les principes physiques et biologiques des différentes techniques d'imagerie (radiographie, scanner, IRM, échographie, etc.)</li>
                  <li>Capacité à utiliser et à optimiser les équipements d'imagerie</li>
                  <li>Compréhension des indications, limites et avantages de chaque technique</li>
                  <li>Maîtrise des protocoles d'acquisition et de traitement des images</li>
                </ul>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Expertise en traitement et analyse d'images
                </h4>
                <ul class="list-disc list-inside space-y-2 text-gray-700 ml-10">
                  <li>Développement de compétences en traitement numérique du signal et des images</li>
                  <li>Acquisition de méthodes d'analyse quantitative et qualitative des images</li>
                  <li>Utilisation de logiciels spécialisés pour la reconstruction, l'amélioration et l'interprétation des images</li>
                </ul>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Recherche et développement
                </h4>
                <ul class="list-disc list-inside space-y-2 text-gray-700 ml-10">
                  <li>Capacité à mener des projets de recherche dans le domaine de l'imagerie médicale</li>
                  <li>Connaissance des avancées technologiques et des développements récents dans le domaine</li>
                  <li>Participation à l'innovation et à l'amélioration des pratiques en imagerie</li>
                </ul>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Gestion et management
                </h4>
                <ul class="list-disc list-inside space-y-2 text-gray-700 ml-10">
                  <li>Compréhension des aspects organisationnels et économiques de l'imagerie médicale</li>
                  <li>Acquisition de compétences en gestion de projets et en management d'équipes</li>
                  <li>Connaissance des réglementations et des normes en vigueur</li>
                </ul>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Formation et communication
                </h4>
                <ul class="list-disc list-inside space-y-2 text-gray-700 ml-10">
                  <li>Capacité à former et à encadrer d'autres professionnels de santé</li>
                  <li>Compétences en communication scientifique et en vulgarisation</li>
                  <li>Participation à la diffusion des connaissances et à la promotion de l'imagerie médicale</li>
                </ul>
              </div>
            </div>

            <div class="mt-6 p-6 bg-primary-50 rounded-xl">
              <p class="text-gray-700 font-semibold">
                <strong>En résumé</strong>, le master en imagerie médicale vise à former des experts polyvalents, 
                capables de répondre aux défis actuels et futurs de ce domaine en constante évolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compétences -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Compétence(s) visée(s)
          </h2>
          <p class="text-center text-gray-700 mb-8">
            Le Master en Imagerie Médicale développe en l'étudiant, des compétences techniques avancées en traitement 
            d'images, en physique des rayonnements et en connaissance des dispositifs médicaux. Les compétences 
            transversales incluent la gestion de projet, la communication scientifique et le management d'équipe.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Compétences techniques -->
            <div class="bg-white p-6 rounded-xl shadow-md">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Compétences techniques</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Traitement d'images :</strong> Maîtrise des outils et techniques de traitement d'images médicales (IRM, scanner, radiographie, échographie, etc.)</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Physique des rayonnements :</strong> Compréhension des principes physiques des différents types d'imagerie (rayons X, résonance magnétique, ultrasons, etc.)</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Instrumentation médicale :</strong> Connaissance des dispositifs d'imagerie médicale et de leur fonctionnement</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Anatomie et physiologie humaines :</strong> Connaissance approfondie de l'anatomie et du fonctionnement du corps humain pour une interprétation optimale des images</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Informatique et traitement de données :</strong> Maîtrise des outils informatiques pour la gestion, le traitement et l'analyse des données d'imagerie</span>
                </li>
              </ul>
            </div>

            <!-- Compétences transversales -->
            <div class="bg-white p-6 rounded-xl shadow-md">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Compétences transversales</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Gestion de projet :</strong> Capacité à élaborer, piloter et évaluer un projet dans le domaine de l'imagerie médicale</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Communication scientifique :</strong> Capacité à communiquer efficacement les résultats de recherche, à rédiger des rapports et à présenter des données</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Management d'équipe :</strong> Capacité à animer, encadrer et manager une équipe de professionnels de la santé</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Analyse et esprit critique :</strong> Capacité à analyser de manière critique les résultats d'examens d'imagerie et à participer à l'élaboration de protocoles</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700"><strong>Adaptation et résolution de problèmes :</strong> Capacité à s'adapter aux évolutions technologiques et à résoudre les problèmes liés à l'utilisation des dispositifs d'imagerie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Débouchés professionnels -->
    <section class="section-padding bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Débouchés professionnels</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-primary-50 p-6 rounded-xl">
              <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Secteur hospitalier
              </h3>
              <p class="text-gray-700">
                Prise en charge des patients, interprétation des images et collaboration avec les équipes médicales.
              </p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Recherche et développement
              </h3>
              <p class="text-gray-700">
                Participation à l'élaboration de nouvelles techniques d'imagerie et à l'amélioration des dispositifs existants.
              </p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Enseignement et formation
              </h3>
              <p class="text-gray-700">
                Transmission des connaissances et compétences aux futurs professionnels de l'imagerie médicale.
              </p>
            </div>

            <div class="bg-primary-50 p-6 rounded-xl">
              <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Industrie et secteur privé
              </h3>
              <p class="text-gray-700">
                Développement, commercialisation et maintenance des équipements d'imagerie médicale.
              </p>
            </div>
          </div>

          <div class="mt-6 bg-gray-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Expertise et conseil
            </h3>
            <p class="text-gray-700">
              Apport d'expertise technique et scientifique dans le domaine de l'imagerie médicale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthode d'enseignement -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Méthode d'enseignement</h2>
          
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="text-4xl font-bold text-primary-600 mb-2">60%</div>
              <div class="text-gray-700 font-semibold">de pratiques</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="text-4xl font-bold text-primary-600 mb-2">40%</div>
              <div class="text-gray-700 font-semibold">de théories</div>
            </div>
            <div class="bg-primary-50 p-6 rounded-xl shadow-md">
              <div class="text-lg font-bold text-gray-900 mb-2">Stage pratique</div>
              <div class="text-gray-700">obligatoire en structures spécialisées offert par ISAGES</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conditions d'admission -->
    <section class="section-padding bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conditions d'admission</h2>
          
          <div class="bg-primary-50 p-6 md:p-8 rounded-xl mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Diplômes requis :</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Une licence en physique, biologie, chimie, sciences de la santé, ou tout diplôme équivalent</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Diplôme d'ingénieur / génie biomédical</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Diplôme d'État de manipulateur d'électroradiologie médicale</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 md:p-8 rounded-xl">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Dossier de candidature :</h3>
            <ol class="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Une demande d'inscription adressée au Directeur Général, précisant la filière choisie</li>
              <li>Un curriculum vitae</li>
              <li>Une copie légalisée du relevé de licence</li>
              <li>Une copie légalisée de l'attestation de licence ou tout autre diplôme équivalent</li>
              <li>Une copie légalisée de l'acte de naissance</li>
              <li>Une copie légalisée du certificat de nationalité ou un duplicata</li>
              <li>Deux (02) photos passeport</li>
              <li>Une copie de la carte d'identité</li>
              <li>Une copie du reçu des frais d'étude de dossier</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="container-custom text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Intéressé par cette formation ?
        </h2>
        <p class="text-xl mb-8 text-primary-100">
          Rejoignez l'ISAGES et commencez votre parcours en Imagerie Médicale
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/admission" class="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg cursor-pointer">
            S'inscrire maintenant
          </router-link>
          <router-link to="/contact" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg cursor-pointer">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import heroBg from '../assets/hero-imagerie.jpg'
// Page pour la formation en Imagerie Médicale
</script>


