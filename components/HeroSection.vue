<!-- components/HeroSection.vue -->
<template>
    <section id="hero" class="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span class="text-yellow-300">Fredrick Mwaura</span></h1>
            <h2 class="text-2xl md:text-3xl font-medium mb-6">Full Stack Developer</h2>
            <p class="text-lg mb-8">Passionate about creating elegant, efficient and user-friendly web applications that solve real-world problems.</p>
            <div class="flex space-x-4">
              <a href="#contact" class="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition">Contact Me</a>
              <a href="#projects" class="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-700 transition">View Projects</a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/assets/img/profile.png" alt="Profile" class="absolute w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>