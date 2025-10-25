// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // server setup
  devServer:{
    port: 3001
  },
  css: ['@/assets/css/reset.css'],
  modules: ['@pinia/nuxt'],
  app:{
    head:{
      title:'Nuxt Shopping',
      meta:[
        {name:'description',content: 'Nuxt Shopping Example'}
      ],
    }
  }
})