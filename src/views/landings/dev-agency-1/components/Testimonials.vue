<template>
  <b-container class="pb-5 mb-md-2 mb-xl-4">
    <b-row class="pb-lg-2">
      <b-col md="5" class="mb-4 mb-md-0">
        <div class="card justify-content-center bg-dark h-100 p-4 p-lg-5">
          <div class="p-2">
            <h3 class="display-4 text-primary mb-1">200+</h3>
            <h2 class="text-light pb-5 mb-2">Clients Already Served</h2>
            <a
              href="#"
              class="d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4"
              style="background-color: #3e4265"
            >
              <div class="pe-3">
                <div class="fs-xs text-light text-uppercase opaciy-70 mb-2">Reviewed on</div>
                <img :src="clutchLogo" width="97" alt="Clutch" />
              </div>
              <div class="ps-1">
                <div class="text-nowrap mb-2">
                  <Icon :icon="StarIcon" class="text-warning" />
                  <Icon :icon="StarIcon" class="text-warning" />
                  <Icon :icon="StarIcon" class="text-warning" />
                  <Icon :icon="StarIcon" class="text-warning" />
                  <Icon :icon="StarIcon" class="text-warning" />
                </div>
                <div class="text-light opacity-70">49 reviews</div>
              </div>
            </a>
          </div>
        </div>
      </b-col>
      <b-col md="7" class="col-md-7">
        <div class="card border-0 shadow-sm p-4 p-xxl-5">
          <!-- Slider prev/next buttons + Quotation mark -->
          <div class="d-flex justify-content-between pb-4 mb-2">
            <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
              <Icon :icon="QuoteLeftIcon" />
            </span>
            <div class="d-flex">
              <b-button
                size="sm"
                id="testimonial-prev"
                class="btn-prev btn-icon me-2"
                aria-label="Previous"
              >
                <Icon :icon="ChevronLeftIcon" />
              </b-button>
              <b-button
                size="sm"
                id="testimonial-next"
                class="btn-next btn-icon ms-2"
                aria-label="Next"
              >
                <Icon :icon="ChevronRightIcon" />
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
              prevEl: '#testimonial-prev',
              nextEl: '#testimonial-next'
            }"
          >
            <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
              <TestimonialCard :testimonial="testimonial" />
            </SwiperSlide>

            <!-- Pagination (bullets) -->
            <div class="swiper-pagination position-relative pt-3 mt-4"></div>
          </Swiper>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import clutchLogo from '@/assets/img/about/clutch-logo.svg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'
import StarIcon from '@iconify/icons-bx/bxs-star'

import TestimonialCard from '@/views/landings/dev-agency-1/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/dev-agency-1/data'
</script>
