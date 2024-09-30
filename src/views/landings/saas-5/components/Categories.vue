<template>
  <b-container class="position-relative zindex-3">
    <div class="d-none d-lg-block" style="margin-top: -428px"></div>
    <div class="d-lg-none" style="margin-top: -370px"></div>
    <Swiper
      :modules="[Pagination]"
      :slidesPerView="1"
      :space-between="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        560: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide v-for="(swiper, idx) in categoriesData" :key="idx">
        <a href="#" class="card-portfolio position-relative d-block rounded-3 overflow-hidden">
          <span
            class="position-absolute top-0 start-0 w-100 h-100 zindex-1"
            style="background: linear-gradient(180deg, rgba(17, 24, 39, 0) 35.56%, #111827 95.3%)"
          ></span>
          <div class="position-absolute bottom-0 w-100 zindex-2 p-4">
            <div class="px-md-3">
              <h3 class="h4 text-white mb-0">{{ swiper.head }}</h3>
              <div class="card-portfolio-meta d-flex align-items-center justify-content-between">
                <span class="text-white fs-xs text-truncate opacity-70 pe-3">{{
                  swiper.description
                }}</span>
                <Icon :icon="RightArrowCircleIcon" class="bx fs-3 text-gradient-primary"></Icon>
              </div>
            </div>
          </div>
          <div class="card-img">
            <img :src="swiper.image" alt="Ecommerce" />
          </div>
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RightArrowCircleIcon from '@iconify/icons-bx/bx-right-arrow-circle'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { categoriesData } from '../data'
</script>
