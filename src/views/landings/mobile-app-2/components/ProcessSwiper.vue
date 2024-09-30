<template>
  <b-container>
    <div class="text-center pb-4 mb-3 mx-auto" style="max-width: 530px">
      <h2 class="h1">How Does It Work?</h2>
      <p class="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus
        facilisis ultrices
      </p>
    </div>
    <b-row class="align-items-center">
      <b-col md="6" class="pb-4 pb-md-0 mb-2 mb-md-0">
        <!-- Swiper tabs -->
        <div class="position-relative px-5">
          <Swiper
            class="swiper-tabs zindex-2 mx-auto"
            :space-Between="10"
            :slides-Per-View="1"
            @swiper="setThumbsSwiper"
            :modules="[Navigation, Thumbs, FreeMode]"
            style="max-width: 384px"
          >
            <SwiperSlide v-for="(item, idx) in processData" :key="idx">
              <img :src="item.image" alt="" />
            </SwiperSlide>
          </Swiper>

          <div
            class="bg-gradient-primary position-absolute start-0 bottom-0 w-100 opacity-15 rounded-3"
            style="height: 86.5%"
          ></div>
        </div>
      </b-col>
      <b-col md="6" lg="5" class="offset-lg-1">
        <div class="ps-md-4 ps-lg-0">
          <!-- Swiper slider -->
          <Swiper
            class="text-center text-md-start mt-auto"
            :modules="[Navigation, Thumbs, Controller]"
            :space-between="30"
            :loop="true"
            :tabs="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :navigation="{
              prevEl: '#prev-screen',
              nextEl: '#next-screen'
            }"
          >
            <SwiperSlide v-for="(item, idx) in processData" :key="idx">
              <div class="fs-xl text-muted mb-3 mb-lg-4">step {{ idx + 1 }}</div>
              <h3 class="mb-lg-4">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </SwiperSlide>
          </Swiper>

          <!-- Slider controls (Prev / next) -->
          <div class="d-flex justify-content-center justify-content-md-start pt-2 pt-lg-3">
            <b-button id="prev-screen" class="btn-prev btn-icon btn-sm me-2" aria-label="Previous">
              <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
            </b-button>
            <b-button id="next-screen" class="btn-next btn-icon btn-sm ms-2" aria-label="Next">
              <Icon :icon="ChevronRightIcon" class="bx"></Icon>
            </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode, Thumbs, Controller } from 'swiper/modules'

import { processData } from '@/views/landings/mobile-app-2/data'

import { ref } from 'vue'
import type { SwiperType } from '@/types'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
