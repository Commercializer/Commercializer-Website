<template>
  <section class="bg-secondary border-bottom border-light py-5">
    <div class="container py-md-3 py-lg-5">
      <h2 class="h1 text-center pb-2">News &amp; Insights</h2>
      <div class="position-relative mx-md-2 px-md-5">
        <!-- Slider controls (Prev / next) -->
        <b-button
          size="sm"
          type="button"
          id="news-prev"
          class="btn-prev btn-icon position-absolute top-50 start-0 translate-middle-y mt-n4 d-none d-md-inline-flex"
          aria-label="Previous"
        >
          <i class="bx bx-chevron-left"></i>
        </b-button>
        <b-button
          size="sm"
          type="button"
          id="news-next"
          class="btn-next btn-icon position-absolute top-50 end-0 translate-middle-y mt-n4 d-none d-md-inline-flex"
          aria-label="Next"
        >
          <i class="bx bx-chevron-right"></i>
        </b-button>

        <Swiper
          class="swiper-nav-onhover mx-n2"
          :modules="[Pagination, Navigation]"
          :slidesPerView="1"
          :loop="true"
          :spaceBetween="8"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :navigation="{
            prevEl: '#news-prev',
            nextEl: '#news-next'
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1
            },
            560: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            }
          }"
        >
          <SwiperSlide v-for="(item, idx) in newsData" :key="idx" class="h-auto py-3">
            <NewsCard :news="item" />
          </SwiperSlide>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import { newsData } from '@/views/landings/dev-agency-1/data'
import NewsCard from '@/views/landings/dev-agency-1/components/NewsCard.vue'
</script>
