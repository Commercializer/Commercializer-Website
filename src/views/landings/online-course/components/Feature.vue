<template>
  <!-- What you get (Icon boxes) -->
  <b-container class="pt-1 pt-xl-3 pb-5">
    <h2 class="h1 text-center pb-3 pb-md-0 mb-md-5">What You Get</h2>
    <Swiper
      class="swiper-nav-onhover mt-n3 mx-n2"
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="8"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        600: {
          slidesPerView: 2
        },
        1000: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide class="h-auto py-3" v-for="(feature, idx) in featureData" :key="idx">
        <div class="card card-hover h-100 mx-2">
          <div class="card-body">
            <div class="d-table position-relative p-3 mb-4">
              <img :src="feature.image" class="position-relative zindex-2" width="32" alt="Icon" />
              <span
                class="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-circle opacity-8"
              ></span>
            </div>
            <h3 class="h5 pb-1 mb-2">{{ feature.title }}</h3>
            <p class="mb-0">{{ feature.description }}</p>
          </div>
        </div>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { featureData } from '../data'
</script>
