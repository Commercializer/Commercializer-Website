<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <h2 class="h1 mb-lg-4 mb-3 text-center">Simple Integration with Popular Tools</h2>
    <p class="mb-lg-5 mb-4 pb-lg-0 pb-md-2 mx-auto text-center" style="max-width: 40.75rem">
      In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id
      porttitor aliquam eget aliquet sagittis eu aut diam ut phasellus sed convallis iaculis neque
      ultricies convallis sed enim.
    </p>

    <!-- Swiper slider -->
    <Swiper
      class="mt-n2 mb-xl-2 mx-n2"
      :modules="[Pagination]"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        0: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 38
        }
      }"
    >
      <!-- Swiper item -->
      <SwiperSlide class="h-auto py-2">
        <a
          href="#"
          class="card card-body card-hover h-100 py-sm-4 py-3 px-3 mx-2 border-0 shadow-sm rounded-pill"
        >
          <img
            :src="light1Img"
            class="d-dark-mode-none d-block my-sm-0 my-1 mx-auto"
            width="153"
            alt="Brand"
          />
          <img
            :src="dark1Img"
            class="d-dark-mode-block d-none my-sm-0 my-1 mx-auto"
            width="153"
            alt="Brand"
          />
        </a>
      </SwiperSlide>

      <!-- Swiper item -->
      <SwiperSlide class="h-auto py-2">
        <a
          href="#"
          class="card card-body card-hover h-100 py-sm-4 py-3 px-3 mx-2 border-0 shadow-sm rounded-pill"
        >
          <img
            :src="light2Img"
            class="d-dark-mode-none d-block my-sm-0 my-1 mx-auto mb-n2"
            width="121"
            alt="Brand"
          />
          <img
            :src="dark2Img"
            class="d-dark-mode-block d-none my-sm-0 my-1 mx-auto mb-n2"
            width="121"
            alt="Brand"
          />
        </a>
      </SwiperSlide>

      <!-- Swiper item -->
      <SwiperSlide class="h-auto py-2">
        <a
          href="#"
          class="card card-body card-hover h-100 py-sm-4 py-3 px-3 mx-2 border-0 shadow-sm rounded-pill"
        >
          <img
            :src="light3Img"
            class="d-dark-mode-none d-block my-sm-0 my-1 mx-auto"
            width="128"
            alt="Brand"
          />
          <img
            :src="dark3Img"
            class="d-dark-mode-block d-none my-sm-0 my-1 mx-auto"
            width="128"
            alt="Brand"
          />
        </a>
      </SwiperSlide>

      <!-- Swiper item -->
      <SwiperSlide class="h-auto py-2">
        <a
          href="#"
          class="card card-body card-hover h-100 py-sm-4 py-3 px-3 mx-2 border-0 shadow-sm rounded-pill"
        >
          <img
            :src="light4Img"
            class="d-dark-mode-none d-block my-sm-0 my-1 mx-auto"
            width="138"
            alt="Brand"
          />
          <img
            :src="dark4Img"
            class="d-dark-mode-block d-none my-sm-0 my-1 mx-auto"
            width="138"
            alt="Brand"
          />
        </a>
      </SwiperSlide>

      <!-- Swiper item -->
      <SwiperSlide class="h-auto py-2">
        <a
          href="#"
          class="card card-body card-hover h-100 py-sm-4 py-3 px-3 mx-2 border-0 shadow-sm rounded-pill"
        >
          <img
            :src="light5Img"
            class="d-dark-mode-none d-block my-sm-0 my-1 mx-auto"
            width="164"
            alt="Brand"
          />
          <img
            :src="dark5Img"
            class="d-dark-mode-block d-none my-sm-0 my-1 mx-auto"
            width="164"
            alt="Brand"
          />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import light1Img from '@/assets/img/landing/saas-4/integrations/01-light.png'
import dark1Img from '@/assets/img/landing/saas-4/integrations/01-dark.png'
import light2Img from '@/assets/img/landing/saas-4/integrations/02-light.png'
import dark2Img from '@/assets/img/landing/saas-4/integrations/02-dark.png'
import light3Img from '@/assets/img/landing/saas-4/integrations/03-light.png'
import dark3Img from '@/assets/img/landing/saas-4/integrations/03-dark.png'
import light4Img from '@/assets/img/landing/saas-4/integrations/04-light.png'
import dark4Img from '@/assets/img/landing/saas-4/integrations/04-dark.png'
import light5Img from '@/assets/img/landing/saas-4/integrations/05-light.png'
import dark5Img from '@/assets/img/landing/saas-4/integrations/05-dark.png'
</script>
