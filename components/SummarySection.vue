<!-- components/SummarySection.vue -->
<template>
    <section id="summary" class="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-2">Summary</h2>
        <div class="w-24 h-1 bg-white mx-auto mb-12"></div>
        
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-xl mb-8">
            A passionate full-stack developer with expertise in modern web technologies, 
            dedicated to creating exceptional user experiences through clean, efficient code.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div class="text-4xl font-bold mb-2">{{ projectsCompleted }}+</div>
              <div class="text-lg">Projects Completed</div>
            </div>
            <div class="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div class="text-4xl font-bold mb-2">{{ yearsExperience }}+</div>
              <div class="text-lg">Years Experience</div>
            </div>
            <div class="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div class="text-4xl font-bold mb-2">{{ clientsSatisfied }}+</div>
              <div class="text-lg">Satisfied Clients</div>
            </div>
          </div>
          
          <h3 class="text-2xl font-semibold mb-6">Areas of Expertise</h3>
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <div v-for="(area, index) in expertiseAreas" :key="index" 
                 class="px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              {{ area }}
            </div>
          </div>
          
          <div class="mb-12">
            <h3 class="text-2xl font-semibold mb-6">Let's Connect</h3>
            <div class="flex justify-center gap-6">
              <a v-for="(social, index) in socialLinks" :key="index" 
                 :href="social.url" 
                 class="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                 target="_blank" rel="noopener">
                <span class="sr-only">{{ social.name }}</span>
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <NuxtLink to="/#contact" 
                   class="inline-block px-8 py-4 bg-white text-indigo-900 font-medium rounded-lg hover:bg-opacity-90 transition-colors">
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Import icons (in a real project, you would use an icon library like heroicons, etc.)
  const LinkedInIcon = defineComponent({
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' })
    ])
  });
  
  const GitHubIcon = defineComponent({
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })
    ])
  });
  
  // Data for the summary section
  const projectsCompleted = ref(6);
  const yearsExperience = ref(1);
  const clientsSatisfied = ref(3);
  
  const expertiseAreas = [
    "Frontend Development",
    "Restful APIs",
    "Responsive Web Design",
    "react.js ",
    "Laravel",
    "Database Design",
    "API Development",
    "Performance Optimization"
  ];
  
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/fredrick-mwaura/", icon: LinkedInIcon },
    { name: "GitHub", url: "https://github.com/fredrick-mwaura", icon: GitHubIcon },
  ];
  </script>