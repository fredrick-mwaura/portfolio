// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
   public: {
     emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
     emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
     emailjsPublicKey: process.env.EMAILJS_USER_ID
   }
  }
})