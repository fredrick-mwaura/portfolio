<!-- components/Navigation.vue -->
<template>
    <nav class="bg-white shadow-md fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-2xl font-bold text-indigo-600">Portfolio</span>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#hero" class="text-gray-700 hover:text-indigo-600 transition">Home</a>
            <a href="#about" class="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#education" class="text-gray-700 hover:text-indigo-600 transition">Education</a>
            <a href="#skills" class="text-gray-700 hover:text-indigo-600 transition">Skills</a>
            <a href="#experience" class="text-gray-700 hover:text-indigo-600 transition">Experience</a>
            <a href="#projects" class="text-gray-700 hover:text-indigo-600 transition">Projects</a>
            <a href="#summary" class="text-gray-700 hover:text-indigo-600 transition">Summary</a>
          </div>
          <div class="md:hidden flex items-center">
            <button @click="isOpen = !isOpen" class="text-gray-500 hover:text-indigo-600 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#hero" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#about" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">About</a>
          <a href="#education" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Education</a>
          <a href="#skills" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Skills</a>
          <a href="#experience" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Experience</a>
          <a href="#projects" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Projects</a>
          <a href="#summary" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Summary</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const isOpen = ref(false);
  </script>