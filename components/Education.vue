<!-- components/Education.vue -->
<template>
    <section id="education" class="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <!-- Floating Particles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
            <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-float-delayed opacity-40"></div>
            <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-300 rounded-full animate-float-slow opacity-30"></div>
            <div class="absolute top-2/3 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-float opacity-50"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                     Education 
                </h2>
                <div class="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-fade-in-up animation-delay-300"></div>
                <p class="mt-6 text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
                    Building the foundation for innovation and excellence
                </p>
            </div>
            
            <!-- Education Cards -->
            <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                <!-- Primary Education Card -->
                <div class="group relative">
                    <!-- Glow Effect -->
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    
                    <div class="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 animate-fade-in-up animation-delay-700">
                        <!-- Card Header -->
                        <div class="flex items-start mb-6">
                            <div class="relative">
                                <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                                <!-- Floating Ring -->
                                <div class="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                            </div>
                            
                            <div class="ml-6 flex-1">
                                <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                    Bachelor of Science in Computer Science
                                </h3>
                                <div class="flex items-center space-x-2">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-300 border border-purple-500/30">
                                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                        </svg>
                                        2022 - 2026
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- University Info -->
                        <div class="mb-6">
                            <h4 class="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                                Murang'a University of Technology
                            </h4>
                            <p class="text-gray-300 leading-relaxed">
                                Focused on software development and computer architecture, with hands-on experience in modern programming paradigms and emerging technologies.
                            </p>
                        </div>
                        
                        <!-- Progress Bar -->
                        <div class="mb-6">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-sm text-gray-400">Progress</span>
                                <span class="text-sm text-purple-400 font-semibold">75%</span>
                            </div>
                            <div class="w-full bg-gray-700 rounded-full h-2">
                                <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-progress" style="width: 75%"></div>
                            </div>
                        </div>
                        
                        <!-- Key Skills -->
                        <div class="space-y-3">
                            <h5 class="text-lg font-semibold text-white">Key Areas</h5>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 cursor-default">
                                    Software Engineering
                                </span>
                                <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 cursor-default">
                                    Data Structures
                                </span>
                                <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 cursor-default">
                                    Algorithm Design
                                </span>
                                <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 cursor-default">
                                    Machine learning
                                </span>
                                <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 cursor-default">
                                    Database Design
                                </span>
                                <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 cursor-default">
                                    System Architecture
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Future Education/Certifications Card -->
                <div class="group relative">
                    <!-- Glow Effect -->
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt animation-delay-1000"></div>
                    
                    <div class="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 animate-fade-in-up animation-delay-1000">
                        <!-- Card Header -->
                        <div class="flex items-start mb-6">
                            <div class="relative">
                                <div class="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <!-- Floating Stars -->
                                <div class="absolute -top-2 -right-2 text-yellow-400 animate-twinkle">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div class="ml-6 flex-1">
                                <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    Professional Certifications
                                </h3>
                                <div class="flex items-center space-x-2">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 border border-blue-500/30">
                                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        In Progress
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Certification Info -->
                        <div class="mb-6">
                            <h4 class="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                                Expanding Technical Expertise
                            </h4>
                            <p class="text-gray-300 leading-relaxed">
                                Continuously pursuing industry certifications in cloud computing, DevOps, and modern web technologies to stay current with industry trends.
                            </p>
                        </div>
                        
                        <!-- Upcoming Certifications -->
                        <div class="space-y-3">
                            <h5 class="text-lg font-semibold text-white">Target Certifications</h5>
                            <div class="space-y-2">
                                <div class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <span class="text-gray-300">AWS Solutions Architect</span>
                                    <span class="text-blue-400 text-sm">2025</span>
                                </div>
                                <div class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <span class="text-gray-300">Google Cloud Professional</span>
                                    <span class="text-blue-400 text-sm">2025</span>
                                </div>
                                <div class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <span class="text-gray-300">Kubernetes Administrator</span>
                                    <span class="text-blue-400 text-sm">2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes float-delayed {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);
    }
}

@keyframes float-slow {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes tilt {
    0%, 50%, 100% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(1deg);
    }
    75% {
        transform: rotate(-1deg);
    }
}

@keyframes progress {
    from {
        width: 0%;
    }
    to {
        width: 75%;
    }
}

@keyframes pulse-slow {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.8;
    }
}

@keyframes twinkle {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(0.8);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out;
}

.animate-tilt {
    animation: tilt 10s infinite linear;
}

.animate-progress {
    animation: progress 2s ease-out;
}

.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}

.animate-twinkle {
    animation: twinkle 2s ease-in-out infinite;
}

.animation-delay-300 {
    animation-delay: 0.3s;
}

.animation-delay-500 {
    animation-delay: 0.5s;
}

.animation-delay-700 {
    animation-delay: 0.7s;
}

.animation-delay-1000 {
    animation-delay: 1s;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>