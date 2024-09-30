<template>
  <b-container>
    <b-row>
      <b-col md="5">
        <div class="card h-100 border-0 overflow-hidden px-md-4">
          <span
            class="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-10 d-none d-md-block"
          ></span>
          <div
            class="card-body d-flex flex-column align-items-center justify-content-center position-relative zindex-2 p-0 pb-2 p-lg-4"
          >
            <h2 class="h1 text-center text-md-start p-lg-4">
              What Our Clients Say About Silicon Studio
            </h2>
          </div>
        </div>
      </b-col>
      <b-col md="7">
        <div class="card border-0 shadow-sm p-4 p-xxl-5">
          <div class="d-flex justify-content-between pb-4 mb-2">
            <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
              <Icon :icon="QuoteLeftIcon" />
            </span>
            <div class="d-flex">
              <b-button
                id="testimonials-prev"
                class="btn-prev btn-icon btn-sm me-2"
                aria-label="Previous"
              >
                <i class="bx bx-chevron-left"></i>
              </b-button>
              <b-button
                id="testimonials-next"
                class="btn-next btn-icon btn-sm ms-2"
                aria-label="Next"
              >
                <i class="bx bx-chevron-right"></i>
              </b-button>
            </div>
          </div>

          <Swiper
            class="mx-0 mb-md-n2 mb-xxl-n3"
            :modules="[Pagination, Navigation]"
            :spaceBetween="24"
            :loop="true"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
            :navigation="{
              prevEl: '#testimonials-prev',
              nextEl: '#testimonials-next'
            }"
          >
            <SwiperSlide class="h-auto" v-for="(testimonial, idx) in testimonialData" :key="idx">
              <TestimonialCard :testimonial="testimonial" />
            </SwiperSlide>

            <!-- Pagination (bullets) -->
            <div class="swiper-pagination position-relative mt-5"></div>
          </Swiper>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
import TestimonialCard from '@/views/pages/about-1/components/TestimonialCard.vue'
import { testimonialData } from '../data'
</script>
