<template>
  <b-container class="mb-5 pt-2 pb-3 py-md-4 py-lg-5">
    <h2 class="h1 pb-2 pb-lg-0 mb-4 mb-lg-5 text-center">What They Say About Us</h2>
    <b-row>
      <b-col md="8">
        <div class="card border-0 shadow-sm p-4 p-xxl-5 mb-4 me-xxl-4">
          <!-- Quotation mark -->
          <div class="pb-4 mb-2">
            <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
              <Icon :icon="QuoteLeftIcon" />
            </span>
          </div>

          <Swiper
            class="mx-0 mb-md-n2 mb-xxl-n3"
            :modules="[Navigation, Pagination, Thumbs, Controller]"
            :space-between="24"
            :pager="true"
            :loop="true"
            :tabs="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :navigation="{ prevEl: '#page-prev', nextEl: '#page-next' }"
          >
            <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx" class="h-auto">
              <figure class="card h-100 position-relative border-0 bg-transparent">
                <blockquote class="card-body p-0 mb-0">
                  <p class="fs-lg mb-0">{{ testimonial.comment }}</p>
                </blockquote>
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- Pagination (Pager) -->
        <nav class="pagination d-flex justify-content-center justify-content-md-start">
          <div class="page-item me-2">
            <a
              id="page-prev"
              class="page-link page-prev btn-icon btn-sm"
              href="#"
              aria-label="Previous"
            >
              <Icon :icon="ChevronLeftIcon" />
            </a>
          </div>
          <ul class="list-unstyled d-flex justify-content-center w-auto mb-0"></ul>
          <div class="page-item ms-2">
            <a
              id="page-next"
              class="page-link page-next btn-icon btn-sm"
              href="#"
              aria-label="Next"
            >
              <Icon :icon="ChevronRightIcon" />
            </a>
          </div>
        </nav>
      </b-col>
      <div class="col-md-4 d-none d-md-block">
        <!-- Swiper tabs (Author images) -->
        <Swiper
          :space-Between="10"
          :slides-Per-View="1"
          :free-mode="true"
          @swiper="setThumbsSwiper"
          :modules="[Navigation, Thumbs, FreeMode]"
        >
          <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
            <div class="card bg-transparent border-0">
              <div class="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center">
                <img :src="testimonial.user.image" alt="" />
              </div>
              <div class="card-footer d-flex w-100 border-0 pb-0">
                <img
                  :src="testimonial.user.brand.image"
                  :width="160"
                  class="d-none d-xl-block"
                  alt="Company logo"
                />
                <div class="border-start-xl ps-xl-4 ms-xl-2">
                  <h5 class="fw-semibold lh-base mb-0">{{ testimonial.user.name }}</h5>
                  <span class="fs-sm text-muted"
                    >{{ testimonial.user.role }}
                    <span class="d-xl-none d-inline"
                      >at {{ testimonial.user.brand.name }}</span
                    ></span
                  >
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Controller, Thumbs, FreeMode } from 'swiper/modules'
import type { SwiperType } from '@/types'

import { Icon } from '@iconify/vue'
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import { testimonialData } from '@/views/landings/digital-agency/data'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
