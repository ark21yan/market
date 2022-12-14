// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:['@nuxtjs/tailwindcss', ['nuxt-swiper',{
      styleLang: 'css',
      modules: ['navigation', 'thumbs'],
      ssr:true,
    }]]
  });
