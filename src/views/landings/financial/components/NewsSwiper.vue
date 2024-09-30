<template>
  <section class="bg-secondary py-5">
    <b-container class="py-2 py-md-4 py-lg-5">
      <h2 class="h1 text-center pb-4 mb-1 mb-lg-3">Latest News</h2>
      <div class="position-relative px-xl-5">
        <!-- Slider prev/next buttons -->
        <b-button
          size="sm"
          id="prev-news"
          class="btn-prev btn-icon position-absolute top-50 start-0 translate-middle-y d-none d-xl-inline-flex"
          aria-label="Previous"
        >
          <Icon :icon="ChevronLeftIcon" />
        </b-button>
        <b-button
          size="sm"
          id="next-news"
          class="btn-next btn-icon position-absolute top-50 end-0 translate-middle-y d-none d-xl-inline-flex"
          aria-label="Next"
        >
          <Icon :icon="ChevronRightIcon" />
        </b-button>

        <!-- Slider -->
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
            <div class="swiper-pagination position-relative bottom-0 mt-4 mb-lg-2"></div>
          </Swiper>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { newsData } from '../data'
import { Navigation, Pagination } from 'swiper/modules'
import NewsCard from '@/views/landings/financial/components/NewsCard.vue'
import { Icon } from '@iconify/vue'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'
</script>
