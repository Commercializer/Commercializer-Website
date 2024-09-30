<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <h2 class="h1 mb-4 text-center d-lg-none">Industries We Serve</h2>
    <b-row class="gy-md-5 gy-4 mb-xl-3">
      <b-col xl="4" lg="5" class="d-flex flex-column order-2 order-lg-1">
        <h2 class="h1 mb-4 pb-3 pt-2 d-none d-lg-block">Industries We Serve</h2>

        <!-- Swiper slider -->
        <Swiper
          class="mx-0"
          :modules="[Pagination, Navigation, Thumbs]"
          :thumbs="{ swiper: thumbsSwiper }"
          :spaceBetween="24"
          :loop="true"
          :tabs="true"
          :autoHeight="true"
          :navigation="{
            prevEl: '#prev-industry',
            nextEl: '#next-industry'
          }"
        >
          <SwiperSlide v-for="(industry, idx) in industryData" :key="idx">
            <h3 class="h5 mb-lg-4 mb-3">{{ industry.name }}</h3>
            <p>{{ industry.about }}</p>
          </SwiperSlide>
        </Swiper>

        <!-- Swiper controls (Prev / next buttons) -->
        <div class="d-flex justify-content-center justify-content-lg-start mt-2 mt-lg-auto">
          <b-button
            size="sm"
            id="prev-industry"
            class="btn-prev btn-icon me-2"
            aria-label="Previous"
          >
            <Icon :icon="ChevronLeftIcon" />
          </b-button>
          <b-button size="sm" id="next-industry" class="btn-next btn-icon ms-2" aria-label="Next">
            <Icon :icon="ChevronRightIcon" />
          </b-button>
        </div>
      </b-col>

      <b-col lg="7" class="offset-xl-1 order-1 order-lg-2">
        <!-- Swiper (Industry images) -->
        <Swiper
          :space-Between="10"
          :slides-Per-View="1"
          @swiper="setThumbsSwiper"
          :modules="[Navigation, Thumbs, FreeMode]"
        >
          <SwiperSlide v-for="(industry, idx) in industryData" :key="idx">
            <img :src="industry.image" class="rounded-3" alt="Image" />
          </SwiperSlide>
        </Swiper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules'

import { industryData } from '@/views/landings/dev-agency-3/data'
import type { SwiperType } from '@/types'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
