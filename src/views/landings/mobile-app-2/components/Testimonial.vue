<template>
  <section class="container py-5 my-1 my-md-4 my-lg-5">
    <div class="row pt-2 py-xl-3">
      <div class="col-lg-3 col-md-4">
        <h2
          class="h1 text-center text-md-start mx-auto mx-md-0 pb-3 pb-sm-4 pb-md-0 pt-md-2"
          style="max-width: 300px"
        >
          What <br class="d-none d-md-inline" />People Say <br class="d-none d-md-inline" />About
          App:
        </h2>

        <!-- Slider controls (Prev / next buttons) -->
        <div
          class="d-none d-md-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5"
        >
          <b-button
            id="prev-testimonial"
            class="btn-prev btn-icon btn-sm me-2"
            aria-label="Previous"
          >
            <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
          </b-button>
          <b-button id="next-testimonial" class="btn-next btn-icon btn-sm ms-2" aria-label="Next">
            <Icon :icon="ChevronRightIcon" class="bx"></Icon>
          </b-button>
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <Swiper
          class="swiper mx-n2"
          :modules="[Navigation, Pagination]"
          :slidesPerView="1"
          :spaceBetween="8"
          :loop="true"
          :navigation="{ prevEl: '#prev-testimonial', nextEl: '#next-testimonial' }"
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          :breakpoints="{
            500: {
              slidesPerView: 2
            },
            1000: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }"
        >
          <SwiperSlide class="h-auto pt-4" v-for="(testimonial, idx) in testimonialData" :key="idx">
            <TestimonialCard :testimonial="testimonial" />
          </SwiperSlide>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative d-md-none mt-5"></div>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import TestimonialCard from '@/views/landings/mobile-app-2/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/mobile-app-2/data'
</script>
