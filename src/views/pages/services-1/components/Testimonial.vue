<template>
  <b-container class="pb-5 mb-2 mb-lg-4" style="margin-top: -228px">
    <h2 class="h1 pb-3 pb-lg-4">What Our Clients Say</h2>
    <b-row>
      <b-col md="4" class="d-none d-md-block">
        <!-- Swiper tabs (Author images) -->
        <Swiper
          :modules="[Navigation, Thumbs, FreeMode]"
          :slides-Per-View="1"
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
        >
          <SwiperSlide
            v-for="(testimonial, idx) in testimonialData"
            :key="idx"
            id="project-1"
            class="card p-0 h-100 bg-position-top-center bg-repeat-0 bg-size-cover rounded-3"
            :style="{ backgroundImage: `url('${testimonial.author.image}')` }"
          >
            <div class="ratio ratio-1x1"></div>
          </SwiperSlide>
        </Swiper>
      </b-col>
      <b-col md="8">
        <div class="position-relative ms-xxl-5">
          <div
            class="d-none d-dark-mode-block bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3"
          ></div>
          <div class="card border-light shadow-sm zindex-2 mt-4 pt-5 p-4 p-xxl-5">
            <span
              class="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 translate-middle-y"
            >
              <i class="bx bxs-quote-left"></i>
            </span>

            <Swiper
              class="mx-0 mb-md-n2 mb-xxl-n3"
              :modules="[Navigation, Pagination, Thumbs]"
              :thumbs="{ swiper: thumbsSwiper }"
              :spaceBetween="24"
              :loop="true"
              :tabs="true"
              :navigation="{
                prevEl: '#prev',
                nextEl: '#next'
              }"
            >
              <SwiperSlide class="h-auto" v-for="(testimonial, idx) in testimonialData" :key="idx">
                <TestimonialCard :testimonial="testimonial" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </b-col>
    </b-row>

    <!-- Slider Prev / Next buttons -->
    <div class="d-flex justify-content-center justify-content-md-start pt-3 mt-2 mt-md-3">
      <b-button id="prev" class="btn-prev btn-icon me-2" size="sm" aria-label="Previous">
        <Icon :icon="ChevronLeft" class="bx"></Icon>
      </b-button>
      <b-button id="next" class="btn-next btn-icon ms-2" size="sm" aria-label="Next">
        <Icon :icon="ChevronRight" class="bx"></Icon>
      </b-button>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Navigation, Pagination, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper/types'

import { Icon } from '@iconify/vue'
import ChevronLeft from '@iconify/icons-bx/bx-chevron-left'
import ChevronRight from '@iconify/icons-bx/bx-chevron-right'

import { ref } from 'vue'

import TestimonialCard from '@/views/pages/services-1/components/TestimonialCard.vue'
import { testimonialData } from '../data'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
