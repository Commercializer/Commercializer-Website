<template>
  <section class="bg-secondary py-5">
    <b-container class="py-2 py-md-3 py-lg-4 py-xl-5">
      <b-row class="row-cols-1 row-cols-md-2 gx-3 gx-lg-4">
        <b-col md="6" class="mb-3 mb-md-0">
          <b-card class="border-0 bg-dark h-100 p-xl-4">
            <h2 class="display-1 text-light">420k</h2>
            <p class="lead fw-medium text-light">
              <span class="opacity-70">users are taking advantage of our</span>
              <span class="fw-bold">Task Manager Tool</span
              ><span class="opacity-70"
                >. It’s a new transparent and efficient way to organize all of your daily
                tasks.</span
              >
            </p>
          </b-card>
        </b-col>
        <b-col md="6">
          <div class="card border-0 shadow-sm p-4 p-xxl-5">
            <div class="d-flex justify-content-between pb-4 mb-2">
              <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <Icon :icon="QuoteLeftIcon" class="bx"></Icon>
              </span>
              <div class="d-flex">
                <b-button
                  id="testimonials-prev"
                  class="btn-prev btn-icon btn-sm me-2"
                  aria-label="Previous"
                >
                  <Icon :icon="ChevronLeft" class="bx"></Icon>
                </b-button>
                <b-button
                  id="testimonials-next"
                  class="btn-next btn-icon btn-sm ms-2"
                  aria-label="Next"
                >
                  <Icon :icon="ChevronRightIcon" class="bx"></Icon>
                </b-button>
              </div>
            </div>

            <!-- Slider -->
            <Swiper
              class="mx-0 mb-md-n2 mb-xxl-n3"
              :modules="[Navigation, Pagination]"
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
              <!-- Item -->
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
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
import ChevronLeft from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import TestimonialCard from '@/views/landings/saas-1/components/TestimonialCard.vue'
import { testimonialData } from '../data'
</script>
