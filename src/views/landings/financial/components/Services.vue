<template>
  <b-container class="py-5 mt-md-3 my-lg-5">
    <h2 class="h1 pt-xl-2 pb-4 mb-2 mb-lg-3">Our Services</h2>
    <Swiper
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="24"
      :autoHeight="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 3
        }
      }"
    >
      <!-- Item -->
      <SwiperSlide>
        <a href="#"><img :src="financial1Img" class="rounded-3" alt="Image" /></a>
        <div class="pt-4">
          <h3 class="h4">Consulting Services</h3>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Consulting Services
            </li>
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Adipiscing velit enim nec id etiam
            </li>
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Imperdiet quis suspendisse imperdiet
            </li>
          </ul>
        </div>
        <a href="#" class="btn btn-link px-0">
          Learn more
          <Icon :icon="RightArrowAltIcon" class="fs-xl ms-2" />
        </a>
      </SwiperSlide>

      <!-- Item -->
      <SwiperSlide>
        <a href="#"><img :src="financial2Img" class="rounded-3" alt="Image" /></a>
        <div class="pt-4">
          <h3 class="h4">Banking Expertise</h3>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Quis euismod lacus, at consectetur porta
            </li>
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Dictumst enim lectus dis eget non metus cras
            </li>
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Risus volutpat tellus hendrerit nibh
            </li>
          </ul>
        </div>
        <a href="#" class="btn btn-link px-0">
          Learn more
          <Icon :icon="RightArrowAltIcon" class="fs-xl ms-2" />
        </a>
      </SwiperSlide>

      <!-- Item -->
      <SwiperSlide>
        <a href="#"><img :src="financial3Img" class="rounded-3" alt="Image" /></a>
        <div class="pt-4">
          <h3 class="h4">Product Solutions</h3>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Sit scelerisque venenatis, at orci
            </li>
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Felis nascetur tempus nibh dictum tristique mus
            </li>
            <li class="d-flex align-items-center fs-sm mb-2">
              <i class="bx bx-check fs-xl text-primary me-2"></i>
              Consectetur neque vestibulum, vel ut fermentum
            </li>
          </ul>
        </div>
        <a href="#" class="btn btn-link px-0">
          Learn more
          <Icon :icon="RightArrowAltIcon" class="fs-xl ms-2" />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative d-lg-none mt-5"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import financial1Img from '@/assets/img/landing/financial/services/01.jpg'
import financial2Img from '@/assets/img/landing/financial/services/02.jpg'
import financial3Img from '@/assets/img/landing/financial/services/03.jpg'

import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
</script>
