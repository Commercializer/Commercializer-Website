<template>
  <b-container class="mb-5 pt-3 pb-lg-5">
    <b-row>
      <b-col xl="3">
        <div
          class="d-xl-block d-flex align-items-center justify-content-between mb-xl-0 mb-4 pb-xl-0 pb-3"
        >
          <h2 class="h1 mb-xl-4 mb-0 pb-xl-3">Latest Podcasts</h2>
          <a href="#" class="btn btn-primary ms-xl-0 ms-4">All podcasts</a>
        </div>
      </b-col>

      <b-col xl="9">
        <Swiper
          :modules="[Pagination]"
          :slidesPerView="1"
          :spaceBetween="24"
          :loop="true"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :breakpoints="{
            576: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1000: {
              slidesPerView: 3
            }
          }"
        >
          <SwiperSlide v-for="(podcast, idx) in podcastData" :key="idx" class="h-auto pb-3">
            <PodcastCard :podcast="podcast" />
          </SwiperSlide>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </Swiper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import PodcastCard from '@/views/landings/blog/components/PodcastCard.vue'
import { podcastData } from '@/views/landings/blog/data'
</script>
