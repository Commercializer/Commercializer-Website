<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <h2 class="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Custom Software Solutions</h2>

    <!-- Swiper slider -->
    <Swiper
      class="mb-xl-3"
      :modules="[Pagination]"
      :spaceBetween="24"
      :breakpoints="{
        0: {
          slidesPerView: 1
        },
        500: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide class="h-auto" v-for="(sol, idx) in solutionData">
        <div class="card h-100">
          <div class="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
            <img :src="sol.image" alt="Icon" class="d-block mb-3 mx-auto" />
            <h3 class="h5 mb-3">{{ sol.title }}</h3>
            <p class="mb-0">{{ sol.description }}</p>
          </div>
        </div>
      </SwiperSlide>

      <!-- Swiper pagination -->
      <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { solutionData } from '@/views/landings/dev-agency-3/data'
</script>
