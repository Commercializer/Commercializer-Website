<template>
  <b-container class="py-5 my-md-2 my-lg-4 my-xl-5">
    <b-row class="justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
      <b-col lg="8" md="9" class="text-center">
        <h2 class="h1 mb-4">Integrate Top Work Tools</h2>
        <p class="fs-lg text-muted mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
          Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec
          lacus.
        </p>
      </b-col>
    </b-row>
    <Swiper
      class="swiper-nav-onhover mx-n2"
      :modules="[Pagination]"
      :slidesPerView="2"
      :loop="true"
      :spaceBetween="8"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 5
        },
        850: {
          slidesPerView: 6
        },
        1000: {
          slidesPerView: 7
        },
        1200: {
          slidesPerView: 8
        }
      }"
    >
      <!-- Item -->
      <SwiperSlide class="py-3" v-for="(tool, idx) in workToolsData" :key="idx">
        <b-card href="#" class="card-hover border-0 shadow-sm py-3 mx-2">
          <img :src="tool.image" class="d-block mx-auto" alt="Google" />
        </b-card>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3 mt-4"></div>
    </Swiper>
    <div class="text-center pt-xl-4 my-3 mt-xl-n2">
      <a href="#" class="btn btn-primary mt-xl-3">View all integrations</a>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { workToolsData } from '../data'
</script>
