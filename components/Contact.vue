<template>
    <div id='contact' class="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div class="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-20 left-40 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
            <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-300 rounded-full animate-float-delayed opacity-40"></div>
            <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300 rounded-full animate-float-slow opacity-30"></div>
            <div class="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-float opacity-50"></div>
            <div class="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-300 rounded-full animate-float-delayed opacity-35"></div>
        </div>

        <div class="relative container mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h1 class="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                    Contact Me
                </h1>
                <div class="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8 rounded-full animate-fade-in-up animation-delay-300"></div>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
                    Let's bring your ideas to life together. I'm always excited to discuss new opportunities and creative projects.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                <!-- Contact Information -->
                <div class="animate-fade-in-up animation-delay-700">
                    <div class="relative">
                        <!-- Glow Effect -->
                        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur opacity-25 animate-pulse-slow"></div>
                        
                        <div class="relative bg-gray-900/90 backdrop-blur-xl p-10 rounded-3xl border border-gray-700/50">
                            <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Get In Touch
                            </h2>
                            <p class="text-gray-300 mb-10 text-lg leading-relaxed">
                                Have a project in mind? Looking to collaborate or hire me? Feel free to reach out using the form
                                or through my contact information. I respond to all messages within 24 hours.
                            </p>

                            <div class="space-y-8">
                                <!-- Email -->
                                <div class="group flex items-start space-x-6 p-4 rounded-2xl hover:bg-gray-800/50 transition-all duration-300">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">Email</h3>
                                        <p class="text-gray-300">
                                            <a href="mailto:fredrickmwaura691@gmail.com" class="hover:text-indigo-400 transition-colors text-lg">
                                                fredrickmwaura691@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <!-- Phone -->
                                <div class="group flex items-start space-x-6 p-4 rounded-2xl hover:bg-gray-800/50 transition-all duration-300">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Phone</h3>
                                        <p class="text-gray-300">
                                            <a href="tel:+254792542168" class="hover:text-green-400 transition-colors text-lg">
                                                +254 792 542 168
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <!-- Location -->
                                <div class="group flex items-start space-x-6 p-4 rounded-2xl hover:bg-gray-800/50 transition-all duration-300">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Location</h3>
                                        <p class="text-gray-300 text-lg">Murang'a, Kenya</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Social Links -->
                            <div class="mt-12">
                                <h3 class="text-xl font-semibold text-white mb-6">Connect With Me</h3>
                                <div class="flex space-x-6">
                                    <a href="https://www.linkedin.com/in/fredrick-mwaura/" target="_blank" rel="noopener"
                                        class="group relative bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        <div class="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                                    </a>
                                    
                                    <a href="https://github.com/fredrick-mwaura" target="_blank" rel="noopener"
                                        class="group relative bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-2xl text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        <div class="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                                    </a>
                                    
                                    <a href="https://wa.me/+254792542168" target="_blank" rel="noopener"
                                        class="group relative bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M16.003 3.2C9.373 3.2 3.997 8.576 3.997 15.207c0 2.628.861 5.05 2.33 7.02L4 28l5.929-2.285a12.73 12.73 0 006.074 1.541c6.63 0 12.007-5.376 12.007-12.007S22.633 3.2 16.003 3.2zm0 21.815c-2.165 0-4.192-.634-5.889-1.723l-.421-.263-3.513 1.354.935-3.41-.275-.444a9.733 9.733 0 01-1.543-5.224c0-5.406 4.4-9.807 9.807-9.807 5.407 0 9.808 4.4 9.808 9.807s-4.401 9.81-9.81 9.81zm5.436-7.177c-.298-.149-1.762-.869-2.037-.97-.273-.1-.472-.149-.67.15-.197.298-.768.969-.941 1.167-.173.199-.347.224-.645.075-.298-.15-1.26-.464-2.4-1.48-.886-.79-1.484-1.764-1.656-2.062-.173-.298-.018-.459.13-.608.134-.134.299-.347.448-.52.15-.173.2-.298.299-.497.1-.198.05-.373-.025-.522-.075-.149-.669-1.611-.916-2.205-.242-.582-.489-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.482 1.065 2.876 1.213 3.075c.149.198 2.098 3.204 5.084 4.49.71.306 1.263.49 1.693.627.71.226 1.356.194 1.87.118.571-.085 1.762-.72 2.012-1.413.248-.692.248-1.284.174-1.412-.075-.13-.272-.199-.571-.347z" />
                                        </svg>
                                        <div class="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse animation-delay-2000"></div>
                                    </a>
                                </div>
                            </div>

                            <!-- Response Time -->
                            <div class="mt-8 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20">
                                <div class="flex items-center space-x-3">
                                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span class="text-green-300 font-medium">Usually responds within 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="animate-fade-in-up animation-delay-1000">
                    <div class="relative">
                        <!-- Glow Effect -->
                        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 animate-pulse-slow animation-delay-1000"></div>
                        
                        <form id="contact-form" @submit.prevent="submitForm" class="relative bg-gray-900/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700/50" ref="formRef">
                            <div class="mb-8">
                                <label for="name" class="block text-white font-semibold mb-3 text-lg">Name</label>
                                <input type="text" id="name" v-model="form.name"
                                    class="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70"
                                    placeholder="Your full name" required />
                            </div>

                            <div class="mb-8">
                                <label for="email" class="block text-white font-semibold mb-3 text-lg">Email</label>
                                <input type="email" id="email" v-model="form.email"
                                    class="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70"
                                    placeholder="your.email@example.com" required />
                            </div>

                            <div class="mb-8">
                                <label for="subject" class="block text-white font-semibold mb-3 text-lg">Subject</label>
                                <input type="text" id="subject" v-model="form.subject"
                                    class="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70"
                                    placeholder="What is this regarding?" required />
                            </div>

                            <div class="mb-8">
                                <label for="message" class="block text-white font-semibold mb-3 text-lg">Message</label>
                                <textarea id="message" v-model="form.message" rows="6"
                                    class="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70 resize-none"
                                    placeholder="Tell me about your project or inquiry..." required></textarea>
                            </div>

                            <button type="submit"
                                class="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-indigo-500/25"
                                :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="flex items-center justify-center">
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending Message...
                                </span>
                                <span v-else class="flex items-center justify-center">
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </span>
                            </button>

                            <div v-if="formSubmitted" class="mt-6 p-6 bg-gradient-to-r from-green-900/50 to-emerald-900/50 text-green-300 rounded-2xl border border-green-500/30 animate-fade-in">
                                <div class="flex items-center space-x-3">
                                    <svg class="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-green-300">Message Sent Successfully!</h4>
                                        <p class="text-green-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import emailjs from '@emailjs/browser';

const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Reference to the form element
const formRef = ref(null);

// Bind this to v-model on the input fields
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Initialize EmailJS
onMounted(() => {
  emailjs.init(USER_ID);
});

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    const result = await emailjs.send(service_id, template_id, {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
      to_email: "fredrickmwaura691@gmail.com"  
    });
    console.log('Success:', result);

    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';

    formSubmitted.value = true;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};
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

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes pulse-slow {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
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

.animate-fade-in {
    animation: fade-in 0.5s ease-out;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
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