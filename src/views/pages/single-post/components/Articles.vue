<template>
  <b-container class="mb-5 pt-md-4">
    <div
      class="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3"
    >
      <h2 class="h1 mb-sm-0">Related Articles</h2>
      <router-link
        :to="{ name: 'pages.list-view-with-sidebar' }"
        class="btn btn-lg btn-outline-primary ms-4"
      >
        All posts
        <Icon :icon="RightArrowAltIcon" class="ms-1 me-n1 lh-1 lead" />
      </router-link>
    </div>

    <Swiper
      class="mx-n2"
      :modules="[Pagination]"
      :slidesPerView="1"
      :space-between="8"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
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
      <SwiperSlide class="h-auto pb-3" v-for="(article, idx) in articlesData" :key="idx">
        <ArticleCard :article="article"></ArticleCard>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import ArticleCard from '@/views/pages/single-post/components/ArticleCard.vue'
import { articlesData } from '../data'

import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
</script>
