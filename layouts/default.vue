<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <NuxtLink to="/" class="text-xl font-bold text-indigo-600">F.M.</NuxtLink>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-8">
              <NuxtLink v-for="(link, index) in navLinks" :key="index"
                        :to="link.url"
                        class="text-gray-700 hover:text-indigo-600 transition-colors">
                {{ link.text }}
              </NuxtLink>
            </nav>
            
            <!-- Mobile Menu Button -->
            <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg">
          <div class="container mx-auto px-4 py-2">
            <nav class="flex flex-col space-y-4 py-4">
              <NuxtLink v-for="(link, index) in navLinks" :key="index"
                        :to="link.url"
                        class="text-gray-700 hover:text-indigo-600 transition-colors"
                        @click="isMenuOpen = false">
                {{ link.text }}
              </NuxtLink>
            </nav>
          </div>
        </div>
      </header>
      
      <main class="flex-grow"  v-if="$slots.default">
        <slot />
      </main>
      
      <footer class="bg-gray-900 text-white py-10">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">F.M</h3>
              <p class="text-gray-400">Juniour Full-stack developer passionate about creating beautiful and functional web experiences.</p>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li v-for="(link, index) in navLinks" :key="index">
                  <NuxtLink :to="link.url" class="text-gray-400 hover:text-white transition-colors">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4">Contact</h3>
              <ul class="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:fredrickmwaura691@gmail.com" class="hover:text-white transition-colors">
                    fredrickmwaura691@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" class="hover:text-white transition-colors">
                    +254792542168
                  </a>
                </li>
                <li>Muranga, Kenya</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
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