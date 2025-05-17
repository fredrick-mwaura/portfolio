<template>
    <section id="experience" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
        <div class="relative">
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
  
          <div class="space-y-12">
            <div v-for="(job, index) in jobs" :key="index" :class="['flex flex-col md:flex-row items-center', job.reverse ? 'md:flex-row-reverse' : '']">
              <!-- Left or Right Content -->
              <div :class="['md:w-1/2', job.reverse ? 'md:pl-12' : 'md:pr-12', 'md:text-' + (job.reverse ? 'left' : 'right'), 'mb-6 md:mb-0']">
                <h3 class="text-xl font-bold text-gray-800">{{ job.title }}</h3>
                <h4 class="text-lg font-semibold text-indigo-600 mb-2">{{ job.company }}</h4>
                <p class="text-gray-600 mb-2">{{ job.duration }}</p>
                <ul class="text-gray-700 list-disc list-inside md:list-outside space-y-2">
                  <li v-for="(point, i) in job.points" :key="i">{{ point }}</li>
                </ul>
              </div>
  
              <!-- Timeline Dot -->
              <div class="hidden md:flex items-center justify-center z-10">
                <div class="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
  
              <!-- Achievement and Tech -->
              <div :class="['md:w-1/2', job.reverse ? 'md:pr-12' : 'md:pl-12']">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
                  <div class="flex items-center mb-4">
                    <div class="mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h5 class="text-lg font-medium">Key Achievement</h5>
                      <p class="text-gray-700">{{ job.achievement }}</p>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(techItem, i) in job.tech" :key="i"
                      class="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {{ techItem }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'WorkExperience',
    data() {
      return {
        jobs: [
          {
            title: 'Developer',
            company: 'Bricks Lab',
            duration: 'August 2024 - Present',
            points: [
              'Led a team of 5 developers on mission-critical client projects',
              'Built scalable applications with Vue.js, Nuxt.js, and Laravel',
              'Improved application performance by 40% through optimization',
              'Mentored junior developers'
            ],
            achievement: 'Led frontend for Performance Management module used across organizations',
            tech: ['Vue.js', 'Nuxt.js', 'Laravel', 'AWS'],
            reverse: false
          },
          {
            title: 'Full Stack Developer',
            company: 'Premium thrifts',
            duration: 'Feb 2025 - now',
            points: [
              'Developed responsive enterprise web applications',
              'Implemented REST APIs and third-party integrations',
              'Collaborated on UI/UX with designers',
              'Worked in an Agile environment'
            ],
            achievement: 'Redesigned a job/news platform, increasing user engagement and reducing load time',
            tech: ['React', 'laravel', 'mysql'],
            reverse: true
          },
        ]
      }
    }
  }
  </script>
  