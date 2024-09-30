<template>
  <section class="position-relative py-5 bg-dark">
    <span
      class="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary"
    ></span>
    <div class="position-relative container my-lg-5 my-md-4 my-3 py-xl-3" data-bs-theme="dark">
      <h2 class="h1 mb-md-4 mb-3 text-center">Our Awards</h2>
      <p
        class="text-body mb-md-5 mb-4 pb-xl-3 pb-lg-2 pb-md-0 pb-sm-2 mx-auto text-center"
        style="max-width: 32.875rem"
      >
        In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id
        porttitor aliquam eget aliquet sagittis
      </p>

      <Swiper
        class="mt-n1"
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
        <SwiperSlide v-for="(award, idx) in awardData" :key="idx" class="h-auto pt-1">
          <AwardCard :award="award" />
        </SwiperSlide>

        <!-- Swiper pagination -->
        <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import AwardCard from '@/views/landings/dev-agency-2/components/AwardCard.vue'
import { awardData } from '@/views/landings/dev-agency-2/data'
</script>
