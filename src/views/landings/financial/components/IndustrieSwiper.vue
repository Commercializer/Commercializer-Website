<template>
  <!-- Industries (Slider) -->
  <b-container class="pt-xl-3 pb-5">
    <h2 class="h1 text-center text-lg-start pb-4 mb-1 mb-lg-3">Industries We Serve</h2>
    <b-row class="pb-2 pb-md-4 pb-lg-5">
      <b-col xl="4" lg="5" class="d-flex flex-column order-2 order-lg-1">
        <!-- Swiper slider -->
        <Swiper
          class="mx-0"
          :modules="[Navigation, Thumbs, Pagination]"
          :thumbs="{ swiper: thumbsSwiper }"
          :spaceBetween="30"
          :loop="true"
          :tabs="true"
          :autoHeight="true"
          :navigation="{
            prevEl: '#prev-industry',
            nextEl: '#next-industry'
          }"
        >
          <SwiperSlide v-for="(industry, idx) in industryData" :key="idx">
            <h3 class="h4 mb-4">
              {{ industry.name }}
              <Icon :icon="RightArrowIcon" class="bx text-primary fs-3 fw-normal ms-2 mt-1"></Icon>
            </h3>
            <p>{{ industry.about }}</p>
          </SwiperSlide>
        </Swiper>

        <!-- Slider controls (Prev / next buttons) -->
        <div class="d-flex justify-content-center justify-content-lg-start mt-2 mt-lg-auto">
          <b-button id="prev-industry" class="btn-prev btn-icon btn-sm me-2" aria-label="Previous">
            <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
          </b-button>
          <b-button id="next-industry" class="btn-next btn-icon btn-sm ms-2" aria-label="Next">
            <Icon :icon="ChevronRightIcon" class="bx"></Icon>
          </b-button>
        </div>
      </b-col>
      <b-col lg="7" class="offset-xl-1 order-1 order-lg-2 pt-lg-3 mt-lg-n5 mb-4 mb-lg-0">
        <!-- Swiper tabs (Industry images) -->
        <Swiper
          class="mt-lg-n5"
          :spaceBetween="10"
          :slidesPerView="1"
          @swiper="setThumbsSwiper"
          :modules="[Navigation, Thumbs, FreeMode]"
        >
          <!-- Industry 1 -->
          <SwiperSlide v-for="(industry, idx) in industryData" :key="idx">
            <img :src="industry.image" class="rounded-3" alt="Image" />
          </SwiperSlide>
        </Swiper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { Navigation, Thumbs, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { industryData } from '../data'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import RightArrowIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import type { SwiperType } from '@/types'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
