<template>
  <b-container class="mb-5 pt-md-4">
    <div
      class="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3"
    >
      <h2 class="h1 mb-sm-0">Related Podcasts</h2>
      <router-link
        :to="{ name: 'pages.grid-view-with-sidebar' }"
        class="btn btn-lg btn-outline-primary ms-4"
      >
        All podcasts
        <Icon :icon="RightArrowAltIcon" class="ms-1 me-n1 lh-1 lead" />
      </router-link>
    </div>

    <!-- Carousel -->
    <Swiper
      class=""
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      }"
    >
      <SwiperSlide class="h-auto pb-3" v-for="(podcast, idx) in podcastData" :key="idx">
        <PodcastCard :podcast="podcast"></PodcastCard>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'

import PodcastCard from '@/views/pages/podcast/components/PodcastCard.vue'
import { podcastData } from '../data'
</script>
