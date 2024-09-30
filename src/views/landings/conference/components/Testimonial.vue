<template>
  <section class="bg-secondary py-5">
    <b-container class="py-2 py-md-4 py-lg-5">
      <h2 class="h1 text-center pb-3 pb-lg-0 mb-4 mb-lg-5">What Our Attendees Say</h2>
      <div class="position-relative px-sm-5 mx-auto" style="max-width: 976px">
        <!-- Prev button -->
        <b-button
          size="sm"
          id="prev"
          class="btn-prev btn-icon position-absolute top-50 translate-middle-y start-0 d-none d-sm-inline-flex mt-n4"
        >
          <Icon :icon="ChevronLeftIcon" />
        </b-button>

        <!-- Next button -->
        <b-button
          size="sm"
          id="next"
          class="btn-next btn-icon position-absolute top-50 translate-middle-y end-0 d-none d-sm-inline-flex mt-n4"
        >
          <Icon :icon="ChevronRightIcon" />
        </b-button>

        <Swiper
          class="swiper-nav-onhover pt-1 mx-md-2"
          :modules="[Pagination, Navigation]"
          :spaceBetween="12"
          :loop="true"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :navigation="{
            prevEl: '#prev',
            nextEl: '#next'
          }"
          wrapper-class="pt-4 pb-3"
        >
          <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx" class="h-auto px-2">
            <TestimonialCard :testimonial="testimonial" />
          </SwiperSlide>

          <!-- Pagination -->
          <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </Swiper>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'

import TestimonialCard from '@/views/landings/conference/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/conference/data'
</script>
