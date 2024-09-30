import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

import router from '@/router'

import VueTheMask from 'vue-the-mask'
import Vue3Lottie from 'vue3-lottie'

import 'boxicons'
import 'jarallax/dist/jarallax.min.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lightgallery.css'
import 'prismjs'
import 'prismjs/themes/prism.css'
import 'simplebar-vue/dist/simplebar.min.css'
import 'simplebar/dist/simplebar.min.css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade'
import 'swiper/css/mousewheel'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/swiper-bundle.css'
import '@/assets/scss/theme.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTheMask)
app.use(Vue3Lottie)
app.mount('#app')
