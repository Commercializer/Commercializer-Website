<template>
  <section class="position-relative pt-5 py-lg-5 mt-3 mt-md-4">
    <!-- Swiper tabs (Project images) -->
    <Swiper
      :modules="[Navigation, Thumbs, FreeMode]"
      :slides-Per-View="1"
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      class="position-md-absolute top-0 end-0 w-md-50 h-100"
    >
      <SwiperSlide
        v-for="(item, idx) in sliderData"
        :key="idx"
        class="w-100 h-100 bg-position-center bg-repeat-0 bg-size-cover"
        :style="{ backgroundImage: `url('${item.image}')` }"
      >
        <div class="ratio ratio-1x1"></div>
      </SwiperSlide>
    </Swiper>

    <b-container class="pt-1 pt-lg-2">
      <b-row>
        <b-col lg="5" md="6">
          <!-- Breadcrumb -->
          <b-nav class="d-none d-md-block pt-4 mt-lg-3" aria-label="breadcrumb">
            <b-breadcrumb class="mb-0">
              <b-breadcrumb-item href="/">
                <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
                Home
              </b-breadcrumb-item>
              <b-breadcrumb-item active>Portfolio Slider View</b-breadcrumb-item>
            </b-breadcrumb>
          </b-nav>

          <!-- Project description (Slider) -->
          <div class="d-none d-lg-block" style="height: 160px"></div>
          <div class="d-none d-md-block d-lg-none" style="height: 80px"></div>
          <Swiper
            class="pt-4 pt-md-0"
            :modules="[Pagination, Navigation, Thumbs, Controller]"
            :spaceBetween="30"
            :thumbs="{ swiper: thumbsSwiper }"
            :loop="true"
            :tabs="true"
            :pagination="{
              el: '.swiper-pagination',
              type: 'fraction'
            }"
            :navigation="{
              prevEl: '.btn-prev',
              nextEl: '.btn-next'
            }"
          >
            <SwiperSlide v-for="(item, idx) in sliderData" :key="idx">
              <h2 class="h1 mb-4">{{ item.title }}</h2>
              <p class="pb-3 mb-3">{{ item.description }}</p>
              <table class="mb-5">
                <tbody>
                  <tr>
                    <th class="text-dark fw-bold pb-2" scope="row">Client</th>
                    <td class="ps-3 ps-sm-4 pb-2">{{ item.client }}</td>
                  </tr>
                  <tr>
                    <th class="text-dark fw-bold pb-2" scope="row">Category</th>
                    <td class="ps-3 ps-sm-4 pb-2">{{ item.category }}</td>
                  </tr>
                  <tr>
                    <th class="text-dark fw-bold pb-2" scope="row">Date</th>
                    <td class="ps-3 ps-sm-4 pb-2">{{ item.date }}</td>
                  </tr>
                </tbody>
              </table>
              <router-link
                :to="{ name: item.link?.name, params: item.link?.params }"
                class="btn btn-primary shadow-primary mt-n2"
                >Read more
              </router-link>
            </SwiperSlide>

            <div class="d-none d-lg-block" style="height: 160px"></div>
            <div class="d-none d-md-block d-lg-none" style="height: 80px"></div>
            <div class="d-md-none" style="height: 40px"></div>

            <!-- Prev / Next buttons + Counter -->
            <div class="d-flex align-items-center ps-2 pb-5">
              <b-button class="btn-prev btn-icon btn-sm position-static" aria-label="Previous">
                <i class="bx bx-chevron-left"></i>
              </b-button>
              <div
                class="swiper-pagination position-static w-auto mx-3"
                style="min-width: 30px"
              ></div>
              <b-button class="btn-next btn-icon btn-sm position-static" aria-label="Next">
                <i class="bx bx-chevron-right"></i>
              </b-button>
            </div>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Controller, Thumbs, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper/types'
import { sliderData } from '../data'

import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
