<!-- pages/contact.vue -->
<template>
    <div id='contact' class="py-20">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl font-bold text-center mb-2">Contact Me</h1>
            <div class="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div>
                    <h2 class="text-2xl font-bold mb-6">Get In Touch</h2>
                    <p class="text-gray-600 mb-8">
                        Have a project in mind? Looking to collaborate or hire me? Feel free to reach out using the form
                        or through my contact information.
                    </p>

                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 bg-indigo-100 p-3 rounded-full text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-gray-900">Email</h3>
                                <p class="mt-1 text-gray-600">
                                    <a href="mailto:fredrickmwaura691@gmail.com"
                                        class="hover:text-indigo-600 transition-colors">
                                        fredrickmwaura691@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 bg-indigo-100 p-3 rounded-full text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                                <p class="mt-1 text-gray-600">
                                    <a href="tel:+254792542168" class="hover:text-indigo-600 transition-colors">
                                        +254792542168
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 bg-indigo-100 p-3 rounded-full text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-gray-900">Location</h3>
                                <p class="mt-1 text-gray-600">Murang'a, Kenya</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <h3 class="text-lg font-medium text-gray-900 mb-4">Connect With Me</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.linkedin.com/in/fredrick-mwaura/" target="_blank" rel="noopener"
                                class="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://github.com/fredrick-mwaura" target="_blank" rel="noopener"
                                class="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/+254792542168" target="_blank" rel="noopener"
                                class="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 32 32">
                                    <path
                                        d="M16.003 3.2C9.373 3.2 3.997 8.576 3.997 15.207c0 2.628.861 5.05 2.33 7.02L4 28l5.929-2.285a12.73 12.73 0 006.074 1.541c6.63 0 12.007-5.376 12.007-12.007S22.633 3.2 16.003 3.2zm0 21.815c-2.165 0-4.192-.634-5.889-1.723l-.421-.263-3.513 1.354.935-3.41-.275-.444a9.733 9.733 0 01-1.543-5.224c0-5.406 4.4-9.807 9.807-9.807 5.407 0 9.808 4.4 9.808 9.807s-4.401 9.81-9.81 9.81zm5.436-7.177c-.298-.149-1.762-.869-2.037-.97-.273-.1-.472-.149-.67.15-.197.298-.768.969-.941 1.167-.173.199-.347.224-.645.075-.298-.15-1.26-.464-2.4-1.48-.886-.79-1.484-1.764-1.656-2.062-.173-.298-.018-.459.13-.608.134-.134.299-.347.448-.52.15-.173.2-.298.299-.497.1-.198.05-.373-.025-.522-.075-.149-.669-1.611-.916-2.205-.242-.582-.489-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.482 1.065 2.876 1.213 3.075c.149.198 2.098 3.204 5.084 4.49.71.306 1.263.49 1.693.627.71.226 1.356.194 1.87.118.571-.085 1.762-.72 2.012-1.413.248-.692.248-1.284.174-1.412-.075-.13-.272-.199-.571-.347z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-lg">
                        <div class="mb-6">
                            <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" v-model="form.name"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your name" required />
                        </div>

                        <div class="mb-6">
                            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" id="email" v-model="form.email"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="your.email@example.com" required />
                        </div>

                        <div class="mb-6">
                            <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                            <input type="text" id="subject" v-model="form.subject"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="What is this regarding?" required />
                        </div>

                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea id="message" v-model="form.message" rows="5"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your message here..." required></textarea>
                        </div>

                        <button type="submit"
                            class="w-full bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                            :disabled="isSubmitting">
                            <span v-if="isSubmitting">Sending...</span>
                            <span v-else>Send Message</span>
                        </button>

                        <div v-if="formSubmitted" class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                            Thank you for your message! I'll get back to you soon.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const submitForm = () => {
    isSubmitting.value = true;

    // Simulate form submission delay
    setTimeout(() => {
        // In a real application, you would send the form data to a server here
        console.log('Form submitted:', form);

        // Reset form after submission
        form.name = '';
        form.email = '';
        form.subject = '';
        form.message = '';

        isSubmitting.value = false;
        formSubmitted.value = true;

        // Hide the success message after 5 seconds
        setTimeout(() => {
            formSubmitted.value = false;
        }, 5000);
    }, 1500);
};
</script>