<template>
  <b-container class="pt-md-2 pb-5">
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
              What Our Students Say About Online Courses
            </h2>
          </div>
        </div>
      </b-col>
      <b-col md="7">
        <div class="card border-0 shadow-sm p-4 p-xxl-5">
          <div class="d-flex justify-content-between pb-4 mb-2">
            <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
              <Icon :icon="QuoteIcon" class="bx"></Icon>
            </span>
            <div class="d-flex">
              <b-button
                size="sm"
                type="button"
                id="testimonials-prev"
                class="btn-prev btn-sm me-2"
                aria-label="Previous"
              >
                <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
              </b-button>
              <b-button
                size="sm"
                type="button"
                id="testimonials-next"
                class="btn-next btn-sm ms-2"
                aria-label="Next"
              >
                <Icon :icon="ChevronRightIcon" class="bx"></Icon>
              </b-button>
            </div>
          </div>

          <!-- Slider -->
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
            <SwiperSlide
              class="swiper-slide h-auto"
              v-for="(testimonial, idx) in testimonialData"
              :key="idx"
            >
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import QuoteIcon from '@iconify/icons-bx/bxs-quote-left'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import TestimonialCard from '@/views/landings/online-course/components/TestimonialCard.vue'
import { testimonialData } from '../data'
</script>
