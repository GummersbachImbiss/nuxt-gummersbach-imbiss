// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plausible: {
    // Prevent tracking on localhost
    ignoredHostnames: ['localhost'],
    domain: 'gummersbach-imbiss.de',
    apiHost: 'https://tracking.jmse.cloud'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/plausible']
})