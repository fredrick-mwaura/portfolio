<!-- components/Skills.vue -->
<template>
  <section id="skills" class="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
      <div class="absolute top-40 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply blur-xl animate-blob animate-delay-2000"></div>
      <div class="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply blur-xl animate-blob animate-delay-4000"></div>
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div class="absolute top-32 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float"></div>
      <div class="absolute top-60 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float animate-delay-1000"></div>
      <div class="absolute bottom-40 left-1/5 w-1 h-1 bg-blue-400 rounded-full animate-float animate-delay-2000"></div>
      <div class="absolute top-80 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float animate-delay-3000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-block p-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
          <div class="bg-slate-900 rounded-full px-6 py-2">
            <span class="text-purple-400 font-medium">My Expertise</span>
          </div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Crafting exceptional digital experiences with modern technologies and proven methodologies
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Technical Skills -->
        <div class="space-y-8">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h3>
          </div>
          
          <div class="space-y-8">
            <div v-for="(skill, index) in technicalSkills" :key="index" 
                 class="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              
              <!-- Skill Header -->
              <div class="flex justify-between items-center mb-4">
                <span class="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {{ skill.name }}
                </span>
                <div class="flex items-center gap-2">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {{ skill.display }}%
                  </div>
                </div>
              </div>
              
              <!-- Progress Bar Background -->
              <div class="relative w-full h-3 bg-gray-700/50 rounded-full overflow-hidden">
                <!-- Animated Background -->
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
                
                <!-- Progress Fill -->
                <div
                  class="relative h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full transition-all duration-1000 ease-out shadow-lg"
                  :style="{ width: skill.value + '%' }"
                >
                  <!-- Shimmer Effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded-full"></div>
                </div>
                
                <!-- Glow Effect -->
                <div 
                  class="absolute top-0 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-50 transition-all duration-1000"
                  :style="{ width: skill.value + '%' }"
                ></div>
              </div>
              
              <!-- Floating Skill Icons -->
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
                <span class="text-xs">⚡</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tools & Other Skills -->
        <div class="space-y-8">
          <!-- Tools Section -->
          <div>
            <div class="flex items-center gap-3 mb-8">
              <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Tools & Technologies
              </h3>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Tool Cards -->
              <div v-for="(tool, index) in tools" :key="index"
                   class="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <component :is="tool.icon" class="w-5 h-5 text-white" />
                  </div>
                  <span class="font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                    {{ tool.name }}
                  </span>
                </div>
                <!-- Hover Glow -->
                <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          <!-- Soft Skills Section -->
          <div>
            <div class="flex items-center gap-3 mb-8">
              <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Soft Skills
              </h3>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Soft Skill Cards -->
              <div v-for="(softSkill, index) in softSkills" :key="index"
                   class="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <component :is="softSkill.icon" class="w-5 h-5 text-white" />
                  </div>
                  <span class="font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                    {{ softSkill.name }}
                  </span>
                </div>
                <!-- Hover Glow -->
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue';

const technicalSkills = ref([
  { name: 'JavaScript / TypeScript', value: 85, display: 85 },
  { name: 'Vue.js / Nuxt.js', value: 60, display: 60 },
  { name: 'PHP / Laravel', value: 85, display: 85 },
  { name: 'React.js', value: 95, display: 95 },
  { name: 'HTML5 / CSS3 / Tailwind', value: 95, display: 95 },
]);

// Icon components as render functions
const DatabaseIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' }));

const GitIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' }));

const DockerIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2' }));

const ShieldIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }));

const TestIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' }));

const TeamIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }));

const ChatIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' }));

const LightningIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M13 10V3L4 14h7v7l9-11h-7z' }));

const ClockIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, h('path', { d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }));

const tools = ref([
  { name: 'Git / GitHub', icon: GitIcon },
  { name: 'SQL Databases', icon: DatabaseIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'CI/CD Pipeline', icon: ShieldIcon },
  { name: 'Jest / Testing', icon: TestIcon },
]);

const softSkills = ref([
  { name: 'Team Collaboration', icon: TeamIcon },
  { name: 'Communication', icon: ChatIcon },
  { name: 'Problem Solving', icon: LightningIcon },
  { name: 'Time Management', icon: ClockIcon },
]);
</script>

<style>
@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-blob {
  animation: blob 7s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

.animate-delay-1000 {
  animation-delay: 1s;
}

.animate-delay-2000 {
  animation-delay: 2s;
}

.animate-delay-3000 {
  animation-delay: 3s;
}

.animate-delay-4000 {
  animation-delay: 4s;
}
</style>