<!-- components/AboutMe.vue -->
<template>
    <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <img src="/assets/img/work.jpg" alt="About Me" class="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
                <div class="md:w-1/2 md:pl-12">
                <p class="text-lg text-gray-700 mb-6">
                    I'm a full-stack web developer with over 1 year of professional experience, skilled in JavaScript, Vue.js, React, PHP, and Laravel. I build modern, responsive web applications that are fast, scalable, and user-centric.
                </p>
                <p class="text-lg text-gray-700 mb-6">
                    I've successfully developed full-featured projects using Laravel on the backend and Vue or React on the frontend, often integrating RESTful APIs, authentication systems, and real-time features. My workflow prioritizes clean architecture, performance, and maintainability.
                </p>
                <p class="text-lg text-gray-700 mb-8">
                    I’m committed to continuous learning and growth, and I enjoy tackling real-world problems through efficient, impactful code. From dashboards to dynamic websites, I focus on delivering solutions that drive results.
                </p>
                    <div class="flex space-x-4">
                        <a href="/pdf/Fredrick mwaura.pdf"
                            class="bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition" download>Download
                            CV</a>
                        <a href="#contact"
                            class="border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition">Get
                            in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>