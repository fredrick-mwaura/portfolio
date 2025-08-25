<!-- components/HeroSection.vue -->
<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-500 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-yellow-400 rounded-full mix-blend-multiply blur-xl animate-blob animate-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-pink-500 rounded-full mix-blend-multiply blur-xl animate-blob animate-delay-4000"></div>
    </div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div class="absolute top-16 left-8 sm:top-20 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-float"></div>
      <div class="absolute top-32 right-16 sm:top-40 sm:right-32 w-1 h-1 bg-purple-300 rounded-full animate-float animate-delay-1000"></div>
      <div class="absolute bottom-24 left-8 sm:bottom-32 sm:left-16 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-300 rounded-full animate-float animate-delay-2000"></div>
      <div class="absolute top-48 left-1/2 sm:top-60 w-1 h-1 bg-pink-300 rounded-full animate-float animate-delay-3000"></div>
      <div class="absolute bottom-16 right-8 sm:bottom-20 sm:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full animate-float animate-delay-500"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        <!-- Content Section -->
        <div class="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <div class="mb-4 sm:mb-6">
            <span class="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs sm:text-sm font-medium text-white mb-3 sm:mb-4 animate-pulse">
              <a href="#contact" class="hover:text-gray-200 transition-colors duration-200">Available for Hire</a>
            </span>
          </div>
          
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            <span class="block mb-1 sm:mb-2">Hi, I'm</span>
            <span class="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Fredrick Mwaura
            </span>
          </h1>
          
          <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 sm:mb-8 text-gray-200 leading-relaxed">
            <span class="typing-cursor">Full Stack Developer</span>
          </h2>
          
          <p class="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
            Passionate about creating 
            <span class="text-purple-400 font-semibold">elegant</span>, 
            <span class="text-pink-400 font-semibold">efficient</span> and 
            <span class="text-yellow-400 font-semibold">user-friendly</span> 
            web applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
            <a href="#contact" 
               class="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transform text-center">
              <span class="relative z-10">Contact Me</span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#projects" 
               class="group relative px-6 py-3 sm:px-8 sm:py-4 border-2 border-purple-400 rounded-full font-semibold text-purple-300 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm transform text-center">
              <span class="relative z-10">View Projects</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </a>
          </div>
        </div>
        
        <!-- Profile Image Section -->
        <div class="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div class="relative">
            <!-- Glowing ring animation -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-spin-very-slow opacity-75 blur-md"></div>
            <div class="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 animate-spin-reverse opacity-50 blur-sm"></div>
            
            <!-- Profile container -->
            <div class="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 sm:border-4 border-white/20 shadow-2xl backdrop-blur-sm">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
              <img src="/assets/img/profile.png" 
                   alt="Fredrick Mwaura - Full Stack Developer" 
                   class="relative z-10 w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              
              <!-- Floating icons around profile -->
              <div class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg animate-bounce">
                &lt;/&gt;
              </div>
              <div class="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-base animate-bounce animate-delay-1000">
                ⚡
              </div>
              <div class="absolute top-1/4 -left-3 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm animate-bounce animate-delay-2000">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-10 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <img src="/assets/img/icons/scroll.png" alt="">
      <!-- <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div class="w-2 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div> -->
    </div>

    <!-- Scroll indicator -->
    <!-- <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div class="w-2 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div> -->
  </section>
</template>

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

@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}

@keyframes typing-cursor {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blob {
  animation: blob 7s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-spin-very-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 25s linear infinite;
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

.animate-delay-500 {
  animation-delay: 0.5s;
}

.typing-cursor::after {
  content: '|';
  display: inline-block;
  animation: typing-cursor 1s infinite;
  @apply text-purple-400;
}

/* Additional responsive improvements */
@media (max-width: 640px) {
  .typing-cursor::after {
    font-size: 0.9em;
  }
}

@media (max-width: 1024px) and (orientation: landscape) {
  #hero {
    padding: 2rem 0;
  }
}
</style>