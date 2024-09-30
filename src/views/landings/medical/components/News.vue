<template>
  <b-container class="py-5 mb-1 mb-md-4 mb-lg-5">
    <h2 class="h1 text-center pt-1 pb-4 mb-1 mb-lg-3">Latest News &amp; Healthy Tips</h2>
    <div class="position-relative px-xl-5">
      <!-- Slider prev/next buttons -->
      <b-button
        size="sm"
        id="prev-news"
        class="btn-prev btn-icon position-absolute top-50 start-0 translate-middle-y d-none d-xl-inline-flex"
        aria-label="Previous"
      >
        <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
      </b-button>
      <b-button
        size="sm"
        id="next-news"
        class="btn-next btn-icon position-absolute top-50 end-0 translate-middle-y d-none d-xl-inline-flex"
        aria-label="Next"
      >
        <Icon :icon="ChevronRightIcon" class="bx"></Icon>
      </b-button>

      <div class="px-xl-2">
        <Swiper
          class="mx-n2"
          :modules="[Pagination, Navigation]"
          :slidesPerView="1"
          :loop="true"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :navigation="{
            prevEl: '#prev-news',
            nextEl: '#next-news'
          }"
          :breakpoints="{
            500: {
              slidesPerView: 2
            },
            1000: {
              slidesPerView: 3
            }
          }"
        >
          <SwiperSlide class="h-auto pb-3" v-for="(news, idx) in newsData" :key="idx">
            <NewsCard :news="news" />
          </SwiperSlide>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </Swiper>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import NewsCard from '@/views/landings/medical/components/NewsCard.vue'
import { newsData } from '../data'
</script>
