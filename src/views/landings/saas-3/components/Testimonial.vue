<template>
  <b-container class="py-5 mb-2 mt-sm-2 my-md-4 my-lg-5">
    <b-row class="pt-2 py-xl-3">
      <b-col lg="3" md="4">
        <h2 class="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2" style="max-width: 300px">
          What Our <br class="d-none d-md-inline" />Clients Say
          <br class="d-none d-md-inline" />About Us:
        </h2>

        <!-- Slider controls (Prev / next buttons) -->
        <div
          class="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5"
        >
          <b-button
            id="prev-testimonial"
            class="btn-prev btn-icon btn-sm me-2"
            aria-label="Previous"
          >
            <i class="bx bx-chevron-left"></i>
          </b-button>
          <b-button id="next-testimonial" class="btn-next btn-icon btn-sm ms-2" aria-label="Next">
            <i class="bx bx-chevron-right"></i>
          </b-button>
        </div>
      </b-col>
      <b-col lg="9" md="8">
        <Swiper
          class="mx-n2"
          :modules="[Navigation]"
          :slidesPerView="1"
          :spaceBetween="8"
          :loop="true"
          :navigation="{
            prevEl: '#prev-testimonial',
            nextEl: '#next-testimonial'
          }"
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
          <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx" class="h-auto pt-4">
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
import TestimonialCard from '@/views/landings/saas-3/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/saas-3/data'
</script>
