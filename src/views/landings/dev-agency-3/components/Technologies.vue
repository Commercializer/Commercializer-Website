<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <!-- Swiper slider -->
    <Swiper
      class="mb-xl-3 text-center"
      :modules="[Pagination, Autoplay]"
      :spaceBetween="24"
      :autoplay="true"
      :breakpoints="{
        0: {
          slidesPerView: 2
        },
        500: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 6
        }
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide>
        <div class="mb-3">
          <img
            src="@/assets/img/landing/software-agency-3/technologies/js-light.svg"
            alt="Logo"
            class="d-dark-mode-none d-inline-block"
          />
          <img
            src="@/assets/img/landing/software-agency-3/technologies/js-dark.svg"
            alt="Logo"
            class="d-dark-mode-inline-block d-none"
          />
        </div>
        <span class="text-body">Javascript</span>
      </SwiperSlide>

      <SwiperSlide>
        <div class="mb-3">
          <img
            src="@/assets/img/landing/software-agency-3/technologies/node-light.svg"
            alt="Logo"
            class="d-dark-mode-none d-inline-block"
          />
          <img
            src="@/assets/img/landing/software-agency-3/technologies/node-dark.svg"
            alt="Logo"
            class="d-dark-mode-inline-block d-none"
          />
        </div>
        <span class="text-body">Node.JS</span>
      </SwiperSlide>

      <SwiperSlide>
        <div class="mb-3">
          <img
            src="@/assets/img/landing/software-agency-3/technologies/react-light.svg"
            alt="Logo"
            class="d-dark-mode-none d-inline-block"
          />
          <img
            src="@/assets/img/landing/software-agency-3/technologies/react-dark.svg"
            alt="Logo"
            class="d-dark-mode-inline-block d-none"
          />
        </div>
        <span class="text-body">React</span>
      </SwiperSlide>

      <SwiperSlide>
        <div class="mb-3">
          <img
            src="@/assets/img/landing/software-agency-3/technologies/php-light.svg"
            alt="Logo"
            class="d-dark-mode-none d-inline-block"
          />
          <img
            src="@/assets/img/landing/software-agency-3/technologies/php-dark.svg"
            alt="Logo"
            class="d-dark-mode-inline-block d-none"
          />
        </div>
        <span class="text-body">PHP</span>
      </SwiperSlide>

      <SwiperSlide>
        <div class="mb-3">
          <img
            src="@/assets/img/landing/software-agency-3/technologies/angular-light.svg"
            alt="Logo"
            class="d-dark-mode-none d-inline-block"
          />
          <img
            src="@/assets/img/landing/software-agency-3/technologies/angular-dark.svg"
            alt="Logo"
            class="d-dark-mode-inline-block d-none"
          />
        </div>
        <span class="text-body">Angular</span>
      </SwiperSlide>

      <SwiperSlide>
        <div class="mb-3">
          <img
            src="@/assets/img/landing/software-agency-3/technologies/python-light.svg"
            alt="Logo"
            class="d-dark-mode-none d-inline-block"
          />
          <img
            src="@/assets/img/landing/software-agency-3/technologies/python-dark.svg"
            alt="Logo"
            class="d-dark-mode-inline-block d-none"
          />
        </div>
        <span class="text-body">Python</span>
      </SwiperSlide>

      <!-- Swiper pagination -->
      <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
</script>
