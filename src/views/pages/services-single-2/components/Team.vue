<template>
  <b-container class="pt-md-1 pb-3">
    <h2 class="h1 text-center pb-3 pb-lg-4">Our Dental Specialists</h2>
    <Swiper
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: { slidesPerView: 2 },
        700: { slidesPerView: 3 },
        991: { slidesPerView: 4 }
      }"
    >
      <SwiperSlide v-for="(member, index) in memberData" :key="index">
        <MemberCard :member="member"></MemberCard>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-4 mt-1"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import MemberCard from '@/views/pages/services-single-2/components/MemberCard.vue'
import { memberData } from '../data'
</script>
