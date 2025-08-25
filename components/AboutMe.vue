<!-- components/AboutMe.vue -->
<template>
    <section id="about" class="relative py-24 overflow-hidden">
        <!-- Animated Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
           <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>
        
        <!-- Floating Elements -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                    About Fredrick Mwaura
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-16">
                <!-- Image Section -->
                <div class="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
                    <div class="relative group">
                        <!-- Glowing Border -->
                        <div class="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        
                        <!-- Image Container -->
                        <div class="relative rounded-2xl overflow-hidden bg-slate-800 p-2">
                            <img 
                                src="/assets/img/work.jpg" 
                                alt="About Me" 
                                class="w-full h-auto rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1" 
                            />
                            
                            <!-- Overlay -->
                            <div class="absolute inset-2 rounded-xl bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <!-- Floating Badge -->
                        <div class="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                            Full-Stack Dev
                        </div>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="lg:w-1/2 space-y-8" data-aos="fade-left" data-aos-delay="400">
                    <!-- Text Content -->
                    <div class="space-y-6">
                        <div class="group">
                            <p class="text-lg text-gray-300 leading-relaxed transform transition-all duration-300 group-hover:text-white group-hover:translate-x-2">
                                I'm a <span class="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">full-stack web developer</span> with over 1 year of professional experience, skilled in JavaScript, Vue.js, React, PHP, and Laravel. I build modern, responsive web applications that are fast, scalable, and user-centric.
                            </p>
                        </div>
                        
                        <div class="group">
                            <p class="text-lg text-gray-300 leading-relaxed transform transition-all duration-300 group-hover:text-white group-hover:translate-x-2">
                                I've successfully developed full-featured projects using Laravel on the backend and Vue or React on the frontend, often integrating RESTful APIs, authentication systems, and real-time features. My workflow prioritizes <span class="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">clean architecture</span>, performance, and maintainability.
                            </p>
                        </div>
                        
                        <div class="group">
                            <p class="text-lg text-gray-300 leading-relaxed transform transition-all duration-300 group-hover:text-white group-hover:translate-x-2">
                                I'm committed to continuous learning and growth, and I enjoy tackling real-world problems through efficient, impactful code. From dashboards to dynamic websites, I focus on delivering <span class="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">solutions that drive results</span>.
                            </p>
                        </div>
                    </div>

                    <!-- Skills Tags -->
                    <div class="flex flex-wrap gap-3 py-4" data-aos="fade-up" data-aos-delay="600">
                        <span v-for="skill in skills" :key="skill" 
                              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default">
                            {{ skill }}
                        </span>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="800">
                        <a href="/pdf/Fredrick mwaura.pdf"
                           class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transform" 
                           download>
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></span>
                            <span class="relative flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                                Download CV
                            </span>
                        </a>
                        
                        <a href="#contact"
                           class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/30 rounded-xl hover:border-white/60 hover:bg-white/10 hover:scale-105 transform backdrop-blur-sm">
                            <span class="relative flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                                Get in Touch
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skills = ref([
    'JavaScript', 'Vue.js', 'Reactjs', 'PHP', 'Laravel', 
    'Node.js', 'expressJS', 'MySQL', 'REST APIs', 'Git', 'Python', 'Django'
])

onMounted(() => {
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        })
    }
})
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

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1e293b;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #8b5cf6, #ec4899);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #7c3aed, #db2777);
}
</style>