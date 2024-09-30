<template>
  <section class="position-relative bg-secondary py-5">
    <b-container class="container mt-3 pt-md-2 pt-lg-4 pb-2 pb-md-4 pb-lg-5">
      <h2 class="h1 text-center pb-2 pb-md-0 mb-4 mb-md-5">How Does It Work?</h2>
      <div class="position-relative mx-5">
        <!-- Slider prev/next buttons -->
        <b-button
          id="prev-screen"
          class="btn-prev btn-icon position-absolute top-50 start-0 ms-n5 translate-middle-y"
          aria-label="Previous"
        >
          <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
        </b-button>
        <b-button
          id="next-screen"
          class="btn-next btn-icon position-absolute top-50 end-0 me-n5 translate-middle-y"
          aria-label="Next"
        >
          <Icon :icon="ChevronRightIcon" class="bx"></Icon>
        </b-button>

        <!-- Phone frame -->
        <div
          class="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33 zindex-5"
        >
          <div
            class="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
            style="max-width: 328px"
            :style="{ backgroundImage: `url('${PhoneFrameImg}')` }"
          ></div>
        </div>

        <!-- Phone screen -->
        <div class="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33">
          <div
            class="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
            style="max-width: 328px"
            :style="{ backgroundImage: `url('${PhoneScreenImg}')` }"
          ></div>
        </div>

        <!-- Swiper slider -->
        <Swiper
          class="mobile-app-slider"
          :modules="[Navigation, Pagination, Thumbs, Controller]"
          :slidesPerView="1"
          :pagination="{ el: '#swiper-progress', type: 'progressbar' }"
          :centeredSlides="true"
          :loop="true"
          :tabs="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :navigation="{ prevEl: '#prev-screen', nextEl: '#next-screen' }"
          :breakpoints="{
            768: { slidesPerView: 3 }
          }"
        >
          <SwiperSlide v-for="(data, idx) in processData" :key="idx">
            <img :src="data.image" class="d-block mx-auto" :width="328" alt="Screen" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Swiper tabs (Description text) -->
      <b-row class="justify-content-center pt-4 mt-2 mt-md-3">
        <div class="col-xl-6 col-lg-7 col-md-8 text-center">
          <Swiper
            :loop="false"
            :space-Between="10"
            :slides-Per-View="1"
            :free-mode="true"
            @swiper="setThumbsSwiper"
            :modules="[Navigation, Thumbs, FreeMode]"
            :watch-slides-progress="true"
          >
            <SwiperSlide v-for="(item, idx) in processData" :key="idx">
              <h3 class="h4 pb-1 mb-2">Step {{ idx + 1 }}. {{ item.title }}</h3>
              <p class="mb-0">{{ item.description }}</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </b-row>
    </b-container>

    <!-- Slider progress -->
    <div id="swiper-progress" class="swiper-pagination bottom-0" style="top: auto"></div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Controller, Thumbs, FreeMode } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import PhoneScreenImg from '@/assets/img/landing/app-showcase-1/screens/phone-screen.png'
import PhoneFrameImg from '@/assets/img/landing/app-showcase-1/screens/phone-frame.png'
import { ref } from 'vue'

import type { SwiperType } from '@/types'
import { processData } from '@/views/landings/mobile-app-1/data'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
