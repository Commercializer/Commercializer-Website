<template>
  <b-container class="text-center py-5 my-2 my-md-4 my-lg-5">
    <h2 class="h1 mb-4">We Have Social Networks</h2>
    <p class="fs-lg text-muted pb-2 mb-5">Follow us and keep up to date with the freshest news!</p>
    <Swiper
      class=""
      :modules="[Pagination]"
      :slidesPerView="2"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 3
        },
        650: {
          slidesPerView: 4
        },
        900: {
          slidesPerView: 5
        },
        1100: {
          slidesPerView: 6
        }
      }"
    >
      <SwiperSlide v-for="(item, idx) in socialNetworkData" :key="idx">
        <div class="position-relative text-center border-end mx-n1">
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-lg stretched-link"
            :class="`btn-${item.title.toLowerCase()}`"
            aria-label="Facebook"
          >
            <Icon :icon="item.icon"></Icon>
          </a>
          <div class="pt-4">
            <h6 class="mb-1">{{ item.title }}</h6>
            <p class="fs-sm text-muted mb-0">{{ item.socialId }}</p>
          </div>
        </div>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 pt-3 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { Icon } from '@iconify/vue'
import { socialNetworkData } from '../data'
</script>
