export default defineNuxtConfig({
  site: {
    url: 'https://commercializer.global',
    name: 'Commercializer ',
    description: 'Transforming groundbreaking ideas into market-leading products',
    defaultLocale: 'en',
  },
  modules: [
    '@bootstrap-vue-next/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@nuxt/image"
  ],
  devtools: { enabled: false },
  css: ['bootstrap/dist/css/bootstrap.min.css', "~/assets/scss/theme.scss",],
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    }
  }
})