<template>
  <b-container class="pb-4 pb-lg-5 mb-3">
    <div
      class="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3"
    >
      <h2 class="mb-0">Trusted by Awesome Clients</h2>

      <!-- Slider prev/next buttons + Quotation mark -->
      <div class="d-md-flex d-none ms-4">
        <b-button size="sm" id="prev-brand" class="btn-prev btn-icon me-2" aria-label="Previous">
          <Icon :icon="ChevronLeftIcon" />
        </b-button>
        <b-button
          size="sm"
          type="button"
          id="next-brand"
          class="btn-next btn-icon ms-2"
          aria-label="Next"
        >
          <Icon :icon="ChevronRightIcon" />
        </b-button>
      </div>
    </div>

    <Swiper
      class="mx-n2"
      :modules="[Pagination, Navigation]"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :navigation="{ prevEl: '#prev-brand', nextEl: '#next-brand' }"
      :loop="true"
      :breakpoints="{
        500: {
          slidesPerView: 3,
          spaceBetween: 8
        },
        650: {
          slidesPerView: 4,
          spaceBetween: 8
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 8
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 8
        }
      }"
    >
      <SwiperSlide class="py-3" v-for="(brand, index) in brandData" :key="index">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img :src="brand.image" class="d-block mx-auto my-2" :width="154" alt="Brand" />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import { Icon } from '@iconify/vue'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'
import { brandData } from '@/views/landings/digital-agency/data'
</script>
