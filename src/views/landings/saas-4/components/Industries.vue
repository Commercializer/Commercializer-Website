<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <b-row class="gy-4 mb-xl-3">
      <b-col xl="4" lg="5" class="d-flex flex-column order-2 order-lg-1">
        <h2 class="h1 mb-md-4 mb-3 py-lg-3 text-lg-start text-center">Industries We Serve</h2>

        <Swiper
          class="mx-0"
          :modules="[Navigation, Thumbs, Controller]"
          :thumbs="{ swiper: thumbsSwiper }"
          :space-Between="30"
          :loop="true"
          :tabs="true"
          :autoHeight="true"
          :navigation="{
            prevEl: '#prev-industry',
            nextEl: '#next-industry'
          }"
        >
          <SwiperSlide v-for="(industry, idx) in industryData" :key="idx">
            <h3 class="h4 mb-lg-4 mb-4">
              {{ industry.name }}
              <Icon :icon="RightArrowIcon" class="bx text-primary fs-3 fw-normal ms-2 mt-1"></Icon>
            </h3>
            <p>{{ industry.about }}</p>
          </SwiperSlide>
        </Swiper>

        <!-- Slider controls (Prev / next buttons) -->
        <div class="d-flex justify-content-center justify-content-lg-start mt-2 mt-lg-auto">
          <b-button
            size="sm"
            id="prev-industry"
            class="btn-prev btn-icon me-2"
            aria-label="Previous"
          >
            <Icon :icon="ChevronLeftIcon" class="bx bx-chevron-left"></Icon>
          </b-button>
          <b-button size="sm" id="next-industry" class="btn-next btn-icon ms-2" aria-label="Next">
            <Icon :icon="chevronRightIcon" class="bx"></Icon>
          </b-button>
        </div>
      </b-col>
      <b-col lg="7" class="offset-xl-1 order-1 order-lg-2">
        <!-- Swiper tabs (Industry images) -->
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

<script lang="ts" setup>
import { ref } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, FreeMode, Controller } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import RightArrowIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import chevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import { industryData } from '../data'
import type { SwiperType } from '@/types'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
