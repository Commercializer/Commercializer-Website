<template>
  <section
    class="py-5 mb-md-2"
    style="
      background: radial-gradient(
        116.18% 118% at 50% 100%,
        rgba(99, 102, 241, 0.1) 0%,
        rgba(218, 70, 239, 0.05) 41.83%,
        rgba(241, 244, 253, 0.07) 82.52%
      );
    "
  >
    <b-container class="py-lg-4">
      <b-row class="py-md-3">
        <b-col xl="3" lg="4" class="pt-2">
          <h2 class="h1 text-center text-lg-start pb-2">Clients are Loving Our App</h2>

          <!-- Slider prev/next buttons -->
          <div class="d-flex justify-content-center justify-content-lg-start pt-lg-5">
            <b-button id="prev-review" class="btn-prev btn-icon btn-sm me-3" aria-label="Previous">
              <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
            </b-button>
            <b-button id="next-review" class="btn-next btn-icon btn-sm" aria-label="Next">
              <Icon :icon="ChevronRightIcon" class="bx bx-chevron-right"></Icon>
            </b-button>
          </div>
        </b-col>
        <b-col lg="8" class="offset-xl-1 pt-4 mt-2 mt-md-3 mt-lg-0 pt-lg-0">
          <div class="px-2 px-sm-0">
            <Swiper
              class="mx-n2"
              :modules="[Navigation]"
              :slidesPerView="1"
              :spaceBetween="8"
              :navigation="{ prevEl: '#prev-review', nextEl: '#next-review' }"
              :loop="true"
              :breakpoints="{ 600: { slidesPerView: 2 } }"
            >
              <SwiperSlide
                class="h-auto pt-4 pb-3 px-2"
                v-for="(item, idx) in testimonialData"
                :key="idx"
              >
                <TestimonialCard :testimonial="item" />
              </SwiperSlide>
            </Swiper>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import TestimonialCard from '@/views/landings/mobile-app-1/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/mobile-app-1/data'
</script>
