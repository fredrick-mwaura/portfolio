<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">F.M.</NuxtLink>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink 
              v-for="(link, index) in navLinks" 
              :key="index"
              :to="link.url"
              class="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              active-class="text-indigo-600 font-semibold"
            >
              {{ link.text }}
            </NuxtLink>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="isMenuOpen" 
          class="md:hidden bg-white shadow-lg absolute w-full left-0"
          @click.self="isMenuOpen = false"
        >
          <div class="container mx-auto px-4 py-2">
            <nav class="flex flex-col space-y-3 py-4">
              <NuxtLink 
                v-for="(link, index) in navLinks" 
                :key="index"
                :to="link.url"
                class="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors font-medium"
                active-class="text-indigo-600 bg-indigo-50 font-semibold"
                @click="isMenuOpen = false"
              >
                {{ link.text }}
              </NuxtLink>
            </nav>
          </div>
        </div>
      </transition>
    </header>
    
    <main class="flex-grow" v-if="$slots.default">
      <slot />
    </main>
    
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">F.M</h3>
            <p class="text-gray-400">Junior Full-stack developer passionate about creating beautiful and functional web experiences.</p>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li v-for="(link, index) in navLinks" :key="index">
                <NuxtLink 
                  :to="link.url" 
                  class="text-gray-400 hover:text-white transition-colors"
                  @click="isMenuOpen = false"
                >
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:fredrickmwaura691@gmail.com" class="hover:text-white transition-colors">
                  fredrickmwaura691@gmail.com
                </a>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+254792542168" class="hover:text-white transition-colors">
                  +254792542168
                </a>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Murang'a, Kenya
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Fredrick Mwaura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navLinks = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/#about' },
  { text: 'Skills', url: '/#skills' },
  { text: 'Education', url: '/#education' },
  { text: 'Experience', url: '/#experience' },
  { text: 'Projects', url: '/#projects' },
  { text: 'Contact', url: '/#contact' }
];
</script>