<template>
  <b-container class="mt-4 pt-lg-2 pb-4">
    <!-- Page title + Search form -->
    <b-row class="gy-4 align-items-end mb-2 pb-md-3">
      <b-col lg="8" md="6" class="col-lg-8 col-md-6">
        <h1 class="mb-0">Blog Simple Feed</h1>
      </b-col>
      <b-col lg="4" md="6">
        <form class="input-group">
          <input
            type="text"
            placeholder="Search the blog..."
            class="form-control form-control-lg rounded-3"
          />
          <button
            type="submit"
            class="btn btn-icon btn-lg btn-primary rounded-3 ms-3"
            aria-label="Search"
          >
            <i class="bx bx-search"></i>
          </button>
        </form>
      </b-col>
    </b-row>

    <!-- Blog posts slider -->
    <Swiper
      class="swiper-nav-onhover mx-n2"
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="8"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
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
      <SwiperSlide class="h-auto py-3" v-for="(feed, idx) in feedData" :key="idx">
        <ArticleCard :feed="feed"></ArticleCard>
      </SwiperSlide>
    </Swiper>

    <!-- Pagination (bullets) -->
    <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import ArticleCard from '@/views/pages/simple-feed/components/ArticleCard.vue'
import { feedData } from '../data'
</script>
