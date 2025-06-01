<!-- components/ProjectsSection.vue -->
<template>
  <section id="projects" class="relative py-32 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <!-- Floating Orbs -->
      <div class="floating-orb absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="floating-orb absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="floating-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>

    <div class="container relative z-10 mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block relative">
          <!-- Glowing Text Effect -->
          <div class="absolute inset-0 blur-2xl">
            <h2 class="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              My Projects
            </h2>
          </div>
          <h2 class="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight animate-pulse-subtle">
            My Projects
          </h2>
          <div class="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto rounded-full shadow-2xl shadow-purple-500/50 animate-shimmer"></div>
        </div>
        <p class="text-xl text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
          Crafting digital experiences that push boundaries and solve real-world problems
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="group project-card relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-700 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          <!-- Enhanced Card Glow Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/15 group-hover:via-pink-500/15 group-hover:to-cyan-500/15 rounded-3xl transition-all duration-700"></div>
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
          
          <!-- Image Container -->
          <div class="relative h-80 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <!-- Image Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Floating Tech Stack -->
            <div class="absolute top-6 left-6 flex flex-wrap gap-2">
              <span 
                v-for="(tech, i) in project.technologies" 
                :key="i" 
                class="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                :style="`transition-delay: ${i * 100}ms`"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- Project Title Overlay -->
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-3xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {{ project.title }}
              </h3>
              <p class="text-purple-200 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {{ project.shortDesc }}
              </p>
            </div>
          </div>
          
          <!-- Card Content -->
          <div class="p-8">
            <p class="text-slate-300 text-lg leading-relaxed mb-8">
              {{ project.description }}
            </p>
            
            <!-- Action Buttons -->
            <div class="flex gap-4">
              <NuxtLink 
                :to="project.demoUrl" 
                class="group/btn flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-center"
                target="_blank"
              >
                <span class="flex items-center justify-center gap-2">
                  <span>Live Demo</span>
                  <svg class="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </span>
              </NuxtLink>
              
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener" 
                class="group/btn px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <span class="flex items-center justify-center gap-2">
                  <span>GitHub</span>
                  <svg class="w-5 h-5 transition-transform group-hover/btn:rotate-12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Featured Project Section -->
      <div class="mb-24">
        <div class="text-center mb-16">
          <h3 class="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Featured Project
          </h3>
          <div class="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div class="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-700">
          <!-- Featured Card Glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-cyan-500/5 rounded-3xl transition-all duration-700"></div>
          
          <div class="lg:flex">
            <!-- Featured Image -->
            <div class="lg:w-1/2 relative overflow-hidden">
              <img 
                :src="featuredProject.image" 
                :alt="featuredProject.title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <!-- Featured Content -->
            <div class="lg:w-1/2 p-12">
              <h4 class="text-4xl font-bold text-white mb-4">
                {{ featuredProject.title }}
              </h4>
              
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-3 mb-6">
                <span 
                  v-for="(tech, i) in featuredProject.technologies" 
                  :key="i" 
                  class="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-purple-200 rounded-full border border-purple-400/30"
                >
                  {{ tech }}
                </span>
              </div>
              
              <p class="text-slate-300 text-lg leading-relaxed mb-6">
                {{ featuredProject.description }}
              </p>
              
              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink 
                  :to="featuredProject.demoUrl" 
                  class="group/btn px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-center"
                >
                  <span class="flex items-center justify-center gap-3">
                    <span>See Live Demo</span>
                    <svg class="w-6 h-6 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </span>
                </NuxtLink>
                
                <a 
                  :href="featuredProject.githubUrl" 
                  target="_blank" 
                  rel="noopener" 
                  class="group/btn px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span class="flex items-center justify-center gap-3">
                    <span>View Source</span>
                    <svg class="w-6 h-6 transition-transform group-hover/btn:rotate-12" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Inquiry CTA -->
      <div class="text-center">
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
          <div class="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h3 class="text-4xl font-bold text-white mb-6">
              Have a project in mind?
            </h3>
            <p class="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              I'm always open to discussing new projects and creative ideas. Let's turn your vision into reality.
            </p>
            <NuxtLink 
              to="/#contact" 
              class="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span>Let's Talk</span>
              <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
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
    image: "img/portifolio.png",
    demoUrl: "https://fredric-mwaura.vercel.app/",
    githubUrl: "https://github.com/fredrick-mwaura/new-portifolio"
  }
];

const featuredProject = {
  title: "News Blog",
  shortDesc: "Content management system",
  description: "A dynamic news blog powered by a custom CMS with integrated maps for location-based reporting and enhanced user engagement",
  technologies: ["Nuxt 3", "Laravel", "Tailwind CSS"],
  image: "img/brick.png",
  demoUrl: "https://brick.news/",
  githubUrl: "https://github.com/mwangiismuthui/bricknewsweb"
}
</script>

<style scoped>
/* Keyframe Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes gradient-x {
  0%, 100% { transform: translateX(-50%) skewX(-5deg); }
  50% { transform: translateX(50%) skewX(5deg); }
}

@keyframes gradient-y {
  0%, 100% { transform: translateY(-50%) skewY(-3deg); }
  50% { transform: translateY(50%) skewY(3deg); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.9; }
}

@keyframes stars {
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
}

/* Floating Orbs */
.floating-orb-1 {
  animation: float 12s ease-in-out infinite;
}

.floating-orb-2 {
  animation: float 15s ease-in-out infinite reverse;
  animation-delay: -2s;
}

.floating-orb-3 {
  animation: float 18s ease-in-out infinite;
  animation-delay: -4s;
}

.floating-orb-4 {
  animation: float 14s ease-in-out infinite reverse;
  animation-delay: -6s;
}

.floating-orb-5 {
  animation: float 16s ease-in-out infinite;
  animation-delay: -8s;
}

/* Gradient Animations */
.animate-gradient-x {
  animation: gradient-x 8s ease-in-out infinite;
}

.animate-gradient-y {
  animation: gradient-y 10s ease-in-out infinite reverse;
}

/* Shimmer Effect */
.animate-shimmer {
  background: linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6);
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

/* Pulse Subtle */
.animate-pulse-subtle {
  animation: pulse-subtle 4s ease-in-out infinite;
}

/* Project Card Enhancements */
.project-card {
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.8s ease-in-out;
  z-index: 1;
  border-radius: 1.5rem;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:hover {
  transform: translateY(-16px) scale(1.02);
}

/* Starfield Effect */
.stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.stars {
  background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="white" opacity="0.3"/><circle cx="80" cy="40" r="0.5" fill="white" opacity="0.5"/><circle cx="40" cy="60" r="1" fill="white" opacity="0.2"/><circle cx="90" cy="80" r="0.5" fill="white" opacity="0.4"/><circle cx="10" cy="90" r="1" fill="white" opacity="0.3"/></svg>') repeat;
  animation: stars 100s linear infinite;
}

.stars2 {
  background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="10" r="0.5" fill="white" opacity="0.4"/><circle cx="70" cy="50" r="1" fill="white" opacity="0.2"/><circle cx="15" cy="70" r="0.5" fill="white" opacity="0.5"/><circle cx="85" cy="30" r="1" fill="white" opacity="0.3"/></svg>') repeat;
  animation: stars 150s linear infinite;
}

.stars3 {
  background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="25" r="0.5" fill="white" opacity="0.3"/><circle cx="25" cy="45" r="1" fill="white" opacity="0.4"/><circle cx="75" cy="75" r="0.5" fill="white" opacity="0.2"/></svg>') repeat;
  animation: stars 200s linear infinite;
}

/* Button Enhancements */
.group\/btn {
  position: relative;
  overflow: hidden;
}

.group\/btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease-in-out;
  border-radius: inherit;
}

.group\/btn:hover::before {
  left: 100%;
}

/* Text Glow Effect */
.text-glow {
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5),
               0 0 40px rgba(139, 92, 246, 0.3),
               0 0 60px rgba(139, 92, 246, 0.1);
}

/* Enhanced Backdrop Blur */
.backdrop-blur-xl {
  backdrop-filter: blur(24px) saturate(180%);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #db2777);
}
</style>