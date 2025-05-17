<!-- components/ProjectsSection.vue -->
<template>
    <section id="projects" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-2">My Projects</h2>
        <div class="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="index" 
               class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <div class="relative h-64 overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div class="p-6 text-white">
                  <h3 class="text-xl font-bold">{{ project.title }}</h3>
                  <p class="text-sm opacity-90">{{ project.shortDesc }}</p>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tech, i) in project.technologies" :key="i" 
                      class="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                  {{ tech }}
                </span>
              </div>
              
              <p class="text-gray-600 mb-6">{{ project.description }}</p>
              
              <div class="flex justify-between mt-auto">
                <NuxtLink :to="project.demoUrl" 
                           class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors" target="_blank">
                  Live Demo
                </NuxtLink>
                <a :href="project.githubUrl" target="_blank" rel="noopener" 
                   class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span class="flex items-center gap-2">
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Featured Project Section -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-center mb-8">Featured Project</h3>
          <div class="bg-white rounded-xl shadow-xl overflow-hidden">
            <div class="lg:flex">
              <div class="lg:w-1/2">
                <img :src="featuredProject.image" :alt="featuredProject.title" class="w-full h-full object-cover">
              </div>
              <div class="lg:w-1/2 p-8">
                <h4 class="text-2xl font-bold mb-2">{{ featuredProject.title }}</h4>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="(tech, i) in featuredProject.technologies" :key="i" 
                        class="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                    {{ tech }}
                  </span>
                </div>
                <p class="text-gray-700 mb-6">{{ featuredProject.description }}</p>
                <p class="text-gray-700 mb-6">{{ featuredProject.challenge }}</p>
                <p class="text-gray-700 mb-8">{{ featuredProject.solution }}</p>
                
                <div class="flex gap-4">
                  <NuxtLink :to="featuredProject.demoUrl" 
                             class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    See Live Demo
                  </NuxtLink>
                  <a :href="featuredProject.githubUrl" target="_blank" rel="noopener" 
                     class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <span>View Source</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Project Inquiry CTA -->
        <div class="mt-20 text-center">
          <h3 class="text-2xl font-bold mb-4">Have a project in mind?</h3>
          <p class="text-gray-600 max-w-2xl mx-auto mb-8">I'm always open to discussing new projects and creative ideas. Let's turn your vision into reality.</p>
          <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Let's Talk
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const projects = [    
    {
      title: "News Blog",
      shortDesc: "Content management system",
      description: "A dynamic news blog powered by a custom CMS with integrated maps for location-based reporting and enhanced user engagement",
      technologies: ["Nuxt 3", "Laravel", "Tailwind CSS"],
      image: "img/brick.png",
      demoUrl: "https://brick.news/",
      githubUrl: "https://github.com/mwangiismuthui/bricknewsweb"
    },
    {
      title: "Portfolio App",
      shortDesc: "Responsive developer portfolio",
      description: "A modern, customizable developer portfolio to showcase past projects made with style and simplicity.",
      technologies: ["Nuxt 3", "Tailwind CSS"],
      image: "img/portfolio.png",
      demoUrl: "https://nyarikikaruma.vercel.app",
      githubUrl: "https://github.com/nyarikikaruma/my-portfolio"
    }
  ];
  
  const featuredProject = {
      title: "Movies Listing App",
      shortDesc: "On online app, for your favourite movies list.",
      description: "A modern movie recommendation app for your fovourites movies built with Nuxt 3.",
      technologies: ["Vue.js", "Nuxt 3", "Vuetify", "Firebase", "Pinia"],
      image: "/img/movies.png",
      demoUrl: "https://nyarikimovies.vercel.app",
      githubUrl: "https://github.com/nyarikikaruma/nyarikimovies"
    }
  </script>