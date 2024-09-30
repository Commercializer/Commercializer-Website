<template>
  <b-container class="my-5 py-lg-5 py-md-4 py-3">
    <h2 class="h1 mb-md-4 mb-3 pt-xl-3">Our Services</h2>
    <b-row class="gy-sm-4 gy-3 mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2">
      <b-col md="6" cols="12">
        <p class="mb-0 fs-lg">
          We bring real solutions to each client&apos;s problems through a deep understanding of
          their market, solution, and vision.
        </p>
      </b-col>
      <b-col class="text-md-end">
        <a href="#" class="btn btn-lg btn-outline-primary">See all case studies</a>
      </b-col>
    </b-row>

    <Swiper
      class="mb-xl-3"
      :modules="[Pagination]"
      :spaceBetween="24"
      :breakpoints="{
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        }
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide v-for="(item, idx) in caseStudyData" :key="idx" class="h-auto pt-1">
        <CaseStudyCard :case-study="item" />
      </SwiperSlide>

      <!-- Swiper pagination -->
      <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import CaseStudyCard from '@/views/landings/dev-agency-2/components/CaseStudyCard.vue'
import { caseStudyData } from '@/views/landings/dev-agency-2/data'
</script>
