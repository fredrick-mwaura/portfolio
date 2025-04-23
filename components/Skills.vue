<!-- components/Skills.vue -->
<template>
    <section id="skills" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Technical Skills -->
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-indigo-600">Technical Skills</h3>
            
            <div>
          <h3 class="text-2xl font-semibold mb-6 text-indigo-600">Technical Skills</h3>

          <div class="space-y-6">
            <div v-for="(skill, index) in technicalSkills" :key="index">
              <div class="flex justify-between mb-1">
                <span class="font-medium text-gray-700">{{ skill.name }}</span>
                <span class="font-medium text-gray-700">{{ skill.display }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full transition-all duration-700"
                  :style="{ width: skill.value + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

          </div>
          
          <!-- Other Skills & Tools -->
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-indigo-600">Tools & Other Skills</h3>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
                <div class="bg-indigo-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <span class="font-medium">Git / GitHub</span>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
                <div class="bg-indigo-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <span class="font-medium">SQL / NoSQL</span>
              </div>
                            
              <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
                <div class="bg-indigo-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" />
                  </svg>
                </div>
                <span class="font-medium">Docker </span>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
                <div class="bg-indigo-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span class="font-medium">CI/CD</span>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
                <div class="bg-indigo-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="font-medium">Jest / Testing</span>
              </div>
            </div>
            
            <h3 class="text-2xl font-semibold mt-8 mb-6 text-indigo-600">Soft Skills</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
                <div class="bg-indigo-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <!-- components/Skills.vue (continued) -->
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span class="font-medium">Team Collaboration</span>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
              <div class="bg-indigo-100 p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span class="font-medium">Communication</span>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
              <div class="bg-indigo-100 p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="font-medium">Problem Solving</span>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
              <div class="bg-indigo-100 p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="font-medium">Time Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const technicalSkills = ref([
  { name: 'JavaScript / TypeScript', value: 85, display: 85 },
  { name: 'Vue.js / Nuxt.js', value: 60, display: 60 },
  { name: 'PHP / Laravel', value: 85, display: 85 },
  { name: 'React.js', value: 95, display: 95 },
  { name: 'HTML5 / CSS3 / Tailwind', value: 95, display: 95 },
]);
</script>
