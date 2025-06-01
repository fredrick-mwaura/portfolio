<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Modern Header -->
    <header class="sticky top-0 z-50 transition-all duration-300" :class="headerClasses">
      <!-- Glass Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-xl border-b border-purple-500/20"></div>
      
      <div class="relative container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <!-- Enhanced Logo -->
          <NuxtLink to="/" class="group relative">
            <div class="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <span class="relative text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              F.M.
            </span>
          </NuxtLink>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex">
            <div class="flex items-center space-x-1 bg-slate-800/30 backdrop-blur-sm rounded-full p-2 border border-purple-500/30">
              <NuxtLink 
                v-for="(link, index) in navLinks" 
                :key="index"
                :to="link.url"
                class="relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full group text-gray-300 hover:text-white"
                active-class="text-white"
              >
                <!-- Active Background (will be enhanced with JS for active detection) -->
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Hover Background -->
                <div class="absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span class="relative">{{ link.text }}</span>
                
                <!-- Hover Underline -->
                <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></div>
              </NuxtLink>
            </div>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/30 text-white hover:bg-purple-500/20 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="block w-5 h-0.5 bg-current transform transition-all duration-300 origin-center"
                    :class="isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'"></span>
              <span class="block w-5 h-0.5 bg-current transform transition-all duration-300"
                    :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
              <span class="block w-5 h-0.5 bg-current transform transition-all duration-300 origin-center"
                    :class="isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'"></span>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div 
          v-if="isMenuOpen" 
          class="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20"
        >
          <div class="container mx-auto px-4 py-6">
            <nav class="space-y-2">
              <NuxtLink 
                v-for="(link, index) in navLinks" 
                :key="index"
                :to="link.url"
                class="block px-6 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-xl transition-all duration-300 group"
                active-class="text-white bg-purple-500/30"
                @click="isMenuOpen = false"
              >
                <div class="flex items-center justify-between">
                  <span>{{ link.text }}</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </NuxtLink>
            </nav>
          </div>
        </div>
      </transition>

      <!-- Scroll Progress Bar -->
      <div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300" 
           :style="{ width: scrollProgress + '%' }"></div>
    </header>
    
    <!-- Main Content Area -->
    <main class="flex-grow relative" v-if="$slots.default">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div class="relative">
        <slot />
      </div>
    </main>
    
    <!-- Modern Footer -->
    <footer class="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-purple-500/20">
      <!-- Background Effects -->
      <div class="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div class="relative py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Brand Section -->
            <div class="space-y-6">
              <div class="group">
                <div class="relative inline-block">
                  <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                  <h3 class="relative text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                    F.M
                  </h3>
                </div>
              </div>
              <p class="text-gray-400 leading-relaxed">
                Junior Full-stack developer passionate about creating 
                <span class="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">beautiful and functional</span> 
                web experiences.
              </p>
              
              <!-- Social Links -->
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-500/40 transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-500/40 transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-500/40 transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul class="space-y-3">
                <li v-for="(link, index) in navLinks" :key="index">
                  <NuxtLink 
                    :to="link.url" 
                    class="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    @click="isMenuOpen = false"
                  >
                    <span class="transform group-hover:translate-x-2 transition-transform duration-300">{{ link.text }}</span>
                    <svg class="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </NuxtLink>
                </li>
              </ul>
            </div>
            
            <!-- Contact Info -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-white mb-6">Contact</h3>
              <ul class="space-y-4">
                <li class="flex items-center gap-3 text-gray-400 group">
                  <div class="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/40 transition-all duration-300">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:fredrickmwaura691@gmail.com" class="hover:text-white transition-colors">
                    fredrickmwaura691@gmail.com
                  </a>
                </li>
                <li class="flex items-center gap-3 text-gray-400 group">
                  <div class="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/40 transition-all duration-300">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+254792542168" class="hover:text-white transition-colors">
                    +254792542168
                  </a>
                </li>
                <li class="flex items-center gap-3 text-gray-400 group">
                  <div class="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/40 transition-all duration-300">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Murang'a, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Footer Bottom -->
          <div class="mt-16 pt-8 border-t border-purple-500/20">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              <p class="text-gray-400 text-center md:text-left">
                &copy; {{ new Date().getFullYear() }} 
                <span class="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">Fredrick Mwaura</span>. 
                All rights reserved.
              </p>
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>Built with</span>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>& Nuxt.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrollProgress = ref(0);
const scrollY = ref(0);

const navLinks = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/#about' },
  { text: 'Skills', url: '/#skills' },
  { text: 'Education', url: '/#education' },
  { text: 'Experience', url: '/#experience' },
  { text: 'Projects', url: '/#projects' },
  { text: 'Contact', url: '/#contact' }
];

const headerClasses = computed(() => {
  return scrollY.value > 50 
    ? 'shadow-2xl shadow-purple-900/20' 
    : 'shadow-lg shadow-slate-900/10'
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
  
  // Calculate scroll progress
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (scrollY.value / windowHeight) * 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }
    33% {
        transform: translate(30px, -50px) scale(1.1);
    }
    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Backdrop blur fallback */
@supports not (backdrop-filter: blur()) {
    .backdrop-blur-xl {
        background-color: rgba(15, 23, 42, 0.9);
    }
    .backdrop-blur-sm {
        background-color: rgba(255, 255, 255, 0.1);
    }
}
</style>