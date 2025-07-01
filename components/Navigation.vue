<!-- components/Navigation.vue -->
<template>
    <nav class="fixed w-full z-50 transition-all duration-300" :class="navClasses">
        <!-- Glass Background -->
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-xl border-b border-purple-500/20"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20">
                <!-- Logo Section -->
                <div class="flex items-center">
                    <div class="flex-shrink-0 group cursor-pointer">
                        <div class="relative">
                            <!-- Animated Logo Background -->
                            <div class="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                            <span class="relative text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                                Portfolio
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center">
                    <div class="flex items-center space-x-1 bg-slate-800/30 backdrop-blur-sm rounded-full p-2 border border-purple-500/30">
                        <a v-for="(item, index) in navItems" 
                           :key="item.href"
                           :href="item.href" 
                           @click="setActiveItem(index)"
                           class="relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full group"
                           :class="activeItem === index ? 'text-white' : 'text-gray-300 hover:text-white'">
                            
                            <!-- Active Background -->
                            <div v-if="activeItem === index" 
                                 class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/25 animate-pulse"></div>
                            
                            <!-- Hover Background -->
                            <div class="absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <span class="relative">{{ item.name }}</span>
                            
                            <!-- Hover Underline -->
                            <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></div>
                        </a>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="lg:hidden flex items-center">
                    <button @click="toggleMobile" 
                            class="relative p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/30 text-white hover:bg-purple-500/20 transition-all duration-300 group">
                        <div class="w-6 h-6 flex flex-col justify-center items-center">
                            <span class="block w-5 h-0.5 bg-current transform transition-all duration-300 origin-center"
                                  :class="isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'"></span>
                            <span class="block w-5 h-0.5 bg-current transform transition-all duration-300"
                                  :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>
                            <span class="block w-5 h-0.5 bg-current transform transition-all duration-300 origin-center"
                                  :class="isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <transition name="mobile-menu">
            <div v-if="isOpen" class="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20">
                <div class="px-4 py-6 space-y-2">
                    <a v-for="(item, index) in navItems" 
                       :key="item.href"
                       :href="item.href" 
                       @click="closeMobile(index)"
                       class="block px-6 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-xl transition-all duration-300 group">
                        <div class="flex items-center justify-between">
                            <span>{{ item.name }}</span>
                            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </transition>

        <!-- Scroll Progress Bar -->
        <div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300" 
             :style="{ width: scrollProgress + '%' }"></div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeItem = ref(0)
const scrollProgress = ref(0)
const scrollY = ref(0) 

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Summary', href: '#summary' }
]

const navClasses = computed(() => {
    return scrollY.value > 50 
        ? 'shadow-2xl shadow-purple-900/20' 
        : 'shadow-lg shadow-slate-900/10'
})

const toggleMobile = () => {
    isOpen.value = !isOpen.value
}

const closeMobile = (index) => {
    isOpen.value = false
    setActiveItem(index)
}

const setActiveItem = (index) => {
    activeItem.value = index
}

const handleScroll = () => {
    scrollY.value = window.scrollY
    
    // Calculate scroll progress
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = (scrollY.value / windowHeight) * 100
    
    // Auto-update active navigation based on scroll position
    const sections = navItems.map(item => document.querySelector(item.href))
    const scrollPosition = scrollY.value + 100

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
            activeItem.value = i
            break
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease;
}

.mobile-menu-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Custom animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
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