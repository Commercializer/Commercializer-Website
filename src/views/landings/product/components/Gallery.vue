<template>
  <section class="mb-5 pt-md-3 pt-lg-4 pt-xl-5">
    <h2 class="h1 pt-lg-2 pt-xl-3 mb-5 text-center">User shots gallery</h2>
    <div class="pb-2 pb-sm-3 pb-md-4">
      <!-- LTR -->
      <Swiper
        :modules="[FreeMode, Autoplay]"
        :loop="true"
        :grab-cursor="false"
        :centered-slides="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false
        }"
        :free-mode="true"
        :speed="38000"
        :free-mode-momentum="false"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          500: {
            spaceBetween: 16
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          }
        }"
      >
        <SwiperSlide v-for="(item, idx) in userShotsImages" :key="idx">
          <img :src="item.image" alt="" class="rounded-3" />
        </SwiperSlide>
      </Swiper>

      <!-- RTL -->
      <Swiper
        class="mt-md-4 mt-sm-3 mt-2"
        dir="rtl"
        :modules="[FreeMode, Autoplay]"
        :loop="true"
        :grabCursor="false"
        :centeredSlides="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false
        }"
        :freeMode="true"
        :speed="38000"
        :freeModeMomentum="false"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          500: {
            spaceBetween: 16
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          }
        }"
      >
        <SwiperSlide v-for="(item, idx) in userShotsImages.reverse()" :key="idx">
          <img :src="item.image" alt="" class="rounded-3" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import { userShotsImages } from '../data'
</script>
