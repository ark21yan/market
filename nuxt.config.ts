// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
      '@nuxtjs/tailwindcss', 
      ['nuxt-swiper',{ styleLang: 'css', modules: ['navigation', 'thumbs'],}],            
    ],
    app:{
      head:{
        script:[
          {src:"@/assets/scripts/main.js",
          body: true,
          async: true,
          defer: true}
        ]
      }
    }
   
    
  });
