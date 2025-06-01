<!-- components/HeroSection.vue -->
<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply blur-xl animate-blob animate-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply blur-xl animate-blob animate-delay-4000"></div>
    </div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-float"></div>
      <div class="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full animate-float animate-delay-1000"></div>
      <div class="absolute bottom-32 left-16 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-float animate-delay-2000"></div>
      <div class="absolute top-60 left-1/2 w-1 h-1 bg-pink-300 rounded-full animate-float animate-delay-3000"></div>
      <div class="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-float animate-delay-500"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- Content Section -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <div class="mb-6">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium text-white mb-4 animate-pulse">
              Available for Hire
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Hi, I'm 
            <span class="block mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Fredrick Mwaura
            </span>
          </h1>
          
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-gray-200">
            <span class="typing-cursor">Full Stack Developer</span>
          </h2>
          
          <p class="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            Passionate about creating 
            <span class="text-purple-400 font-semibold">elegant</span>, 
            <span class="text-pink-400 font-semibold">efficient</span> and 
            <span class="text-yellow-400 font-semibold">user-friendly</span> 
            web applications that solve real-world problems.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" 
               class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transform">
              <span class="relative z-10">Contact Me</span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#projects" 
               class="group relative px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-purple-300 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm transform">
              <span class="relative z-10">View Projects</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </a>
          </div>
        </div>
        
        <!-- Profile Image Section -->
        <div class="lg:w-1/2 flex justify-center">
          <div class="relative">
            <!-- Glowing ring animation -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-spin-very-slow opacity-75 blur-md"></div>
            <div class="absolute inset-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 animate-spin-reverse opacity-50 blur-sm"></div>
            
            <!-- Profile container -->
            <div class="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
              <img src="/assets/img/profile.png" 
                   alt="Fredrick Mwaura - Full Stack Developer" 
                   class="relative z-10 w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              
              <!-- Floating icons around profile -->
              <div class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce">
                &lt;/&gt;
              </div>
              <div class="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce animate-delay-1000">
                ⚡
              </div>
              <div class="absolute top-1/4 -left-6 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce animate-delay-2000">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <img src="/assets/img/icons/scroll.png"/>
    </div>
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
</style>