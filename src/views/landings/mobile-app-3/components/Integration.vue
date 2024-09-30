<template>
  <b-container class="position-relative zindex-2 py-5 mt-lg-3 mb-md-2">
    <h2 class="h4 text-center mb-2 mb-sm-3">Fully integrated with</h2>
    <Swiper
      :modules="[Pagination]"
      :slidesPerView="2"
      :spaceBetween="12"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :loop="true"
      :breakpoints="{
        500: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        650: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 24
        }
      }"
    >
      <!-- Item -->
      <SwiperSlide>
        <a href="#" class="swap-image">
          <img :src="envatoGaryImg" class="swap-from" width="196" alt="Envato" />
          <div class="swap-to">
            <img :src="envatoLightImg" class="light-mode-img" width="196" alt="Envato" />
            <img :src="envatoDarkImg" class="dark-mode-img" width="196" alt="Envato" />
          </div>
        </a>
      </SwiperSlide>

      <!-- Item -->
      <SwiperSlide>
        <a href="#" class="swap-image">
          <img :src="laravelGrayImg" class="swap-from" width="196" alt="Laravel" />
          <img :src="laravelImg" class="swap-to" width="196" alt="Laravel" />
        </a>
      </SwiperSlide>

      <!-- Item -->
      <SwiperSlide>
        <a href="#" class="swap-image">
          <img :src="magnetoGrayImg" class="swap-from" width="196" alt="Magento" />
          <div class="swap-to">
            <img :src="magnetoLightImg" class="light-mode-img" width="196" alt="Magento" />
            <img :src="magnetoDarkImg" class="dark-mode-img" width="196" alt="Magento" />
          </div>
        </a>
      </SwiperSlide>

      <!-- Item -->
      <SwiperSlide>
        <a href="#" class="swap-image">
          <img :src="pingdomGrayImg" class="swap-from" width="196" alt="Pingdom" />
          <div class="swap-to">
            <img :src="pingdomLightImg" class="light-mode-img" width="196" alt="Pingdom" />
            <img :src="pingdomDarkImg" class="dark-mode-img" width="196" alt="Pingdom" />
          </div>
        </a>
      </SwiperSlide>

      <!-- Item -->
      <SwiperSlide>
        <a href="#" class="swap-image">
          <img :src="angularGrayImg" class="swap-from" width="196" alt="Angular" />
          <div class="swap-to">
            <img :src="angularLightImg" class="light-mode-img" width="196" alt="Angular" />
            <img :src="angularDarkImg" class="dark-mode-img" width="196" alt="Angular" />
          </div>
        </a>
      </SwiperSlide>

      <!-- Item -->
      <SwiperSlide>
        <a href="#" class="swap-image">
          <img :src="woocommerceGrayImg" class="swap-from" width="196" alt="WooCommerce" />
          <div class="swap-to">
            <img :src="woocommerceLightImg" class="light-mode-img" width="196" alt="WooCommerce" />
            <img :src="woocommerceDarkImg" class="dark-mode-img" width="196" alt="WooCommerce" />
          </div>
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-2 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script lang="ts" setup>
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import envatoGaryImg from '@/assets/img/landing/app-showcase-3/integrations/envato-gray.svg'
import envatoLightImg from '@/assets/img/landing/app-showcase-3/integrations/envato-color-light.svg'
import envatoDarkImg from '@/assets/img/landing/app-showcase-3/integrations/envato-color-dark.svg'

import angularGrayImg from '@/assets/img/landing/app-showcase-3/integrations/angular-gray.svg'
import angularDarkImg from '@/assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg'
import angularLightImg from '@/assets/img/landing/app-showcase-3/integrations/angular-color-light.svg'

import laravelImg from '@/assets/img/landing/app-showcase-3/integrations/laravel-color.svg'
import laravelGrayImg from '@/assets/img/landing/app-showcase-3/integrations/laravel-gray.svg'

import magnetoDarkImg from '@/assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg'
import magnetoLightImg from '@/assets/img/landing/app-showcase-3/integrations/magento-color-light.svg'
import magnetoGrayImg from '@/assets/img/landing/app-showcase-3/integrations/magento-gray.svg'

import pingdomGrayImg from '@/assets/img/landing/app-showcase-3/integrations/pingdom-gray.svg'
import pingdomDarkImg from '@/assets/img/landing/app-showcase-3/integrations/pingdom-color-dark.svg'
import pingdomLightImg from '@/assets/img/landing/app-showcase-3/integrations/pingdom-color-light.svg'

import woocommerceGrayImg from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-gray.svg'
import woocommerceLightImg from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-color-light.svg'
import woocommerceDarkImg from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-color-dark.svg'
</script>
