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
                        I'm a dedicated full-stack developer with over 3 years of hands-on experience, specializing in
                        JavaScript, Node.js, Vue, PHP, and Laravel. I enjoy building modern, responsive web applications
                        that are both functional and user-friendly.
                    </p>
                    <p class="text-lg text-gray-700 mb-6">
                        I have a proven track record of designing and developing scalable solutions, from backend APIs
                        to dynamic front-end interfaces. My approach emphasizes clean code, performance, and best
                        practices to deliver high-quality digital experiences.
                    </p>
                    <p class="text-lg text-gray-700 mb-8">
                        I'm always eager to learn new technologies and improve my skills. Whether working on web or
                        mobile platforms, I’m passionate about solving real-world problems through code and delivering
                        products that make an impact.
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