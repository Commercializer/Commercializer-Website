<template>
  <section class="pb-5 mb-2 mb-md-4 mb-lg-5" style="padding-top: 80px">
    <div class="bg-secondary pb-lg-4 pb-xl-5">
      <b-container class="pb-4 pb-md-5">
        <b-row>
          <b-col xl="5" lg="6" style="margin-top: -80px">
            <Swiper
              :modules="[Navigation, Thumbs, FreeMode]"
              :spaceBetween="10"
              :slides-per-view="1"
              @swiper="setThumbsSwiper"
              class="swiper-tabs mx-auto"
              style="max-width: 526px"
            >
              <SwiperSlide id="image-1" class="" v-for="(item, idx) in ctaData" :key="idx">
                <img :src="item.image" class="rounded-3" alt="Image" />
              </SwiperSlide>
            </Swiper>
          </b-col>
          <b-col xl="5" lg="6" class="offset-xl-1 pt-2 pt-md-4 pt-lg-5 mt-4">
            <!-- Slider prev/next buttons -->
            <div class="d-flex justify-content-center justify-content-lg-start pb-3 mb-3">
              <b-button id="prev" class="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
                <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
              </b-button>
              <b-button id="next" class="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
                <Icon :icon="ChevronRightIcon" class="bx"></Icon>
              </b-button>
            </div>

            <!-- Swiper slider -->
            <Swiper
              class="mx-0 mb-md-n2 mb-xxl-n3"
              :modules="[Navigation, Pagination, Thumbs]"
              :thumbs="{ swiper: thumbsSwiper }"
              :spaceBetween="30"
              :loop="true"
              :tabs="true"
              :navigation="{ prevEl: '#prev', nextEl: '#next' }"
            >
              <SwiperSlide class="pb-4" v-for="(item, idx) in ctaData" :key="idx">
                <h2 class="h1 mb-4">{{ item.title }}</h2>
                <p class="pb-2 pb-xl-0 mb-4 mb-xl-5">{{ item.description }}</p>
                <a
                  href="#"
                  class="btn btn-lg"
                  :class="idx == 0 ? 'btn-success shadow-success' : 'btn-danger shadow-danger'"
                  >Learn more</a
                >
              </SwiperSlide>
            </Swiper>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { ref } from 'vue'
import type { SwiperType } from '@/types'
import { ctaData } from '@/views/landings/medical/data'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
