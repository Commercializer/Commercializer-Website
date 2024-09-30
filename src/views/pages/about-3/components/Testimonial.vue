<template>
  <b-container class="mb-5 pb-3 py-lg-4 py-xl-5">
    <b-row class="gy-4 gy-md-5 pt-3 py-md-4">
      <b-col xl="2" lg="3" class="text-lg-start text-center">
        <h2 class="mb-4 mb-xl-5 pb-2 pb-md-3 pb-lg-4">What Our Clients Say About Us:</h2>
        <b-button size="sm" id="prev" class="btn-prev btn-icon me-2" aria-label="Previous">
          <Icon :icon="ChevronLeftIcon" />
        </b-button>
        <b-button size="sm" id="next" class="btn-next btn-icon ms-2" aria-label="Next">
          <Icon :icon="ChevronRightIcon" />
        </b-button>
      </b-col>
      <b-col lg="9" class="offset-xl-1">
        <Swiper
          class=""
          :modules="[Navigation]"
          :loop="true"
          :navigation="{
            prevEl: '#prev',
            nextEl: '#next'
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1
            },
            500: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            }
          }"
        >
          <SwiperSlide
            class="h-auto p-2 pb-4"
            v-for="(testimonial, idx) in testimonialData"
            :key="idx"
          >
            <TestimonialCard :testimonial="testimonial" />
          </SwiperSlide>
        </Swiper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import TestimonialCard from '@/views/pages/about-3/components/TestimonialCard.vue'
import { testimonialData } from '../data'

import { Icon } from '@iconify/vue'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'
</script>
