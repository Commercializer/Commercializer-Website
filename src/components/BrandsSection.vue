<template>
  <b-container class="brands">
    <h2 class="brands__heading">Trusted and accredited by official partner network</h2>
    <Swiper
      class="mx-n2"
      :modules="[Pagination]"
      :slidesPerView="2"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 3,
          spaceBetween: 8
        },
        650: {
          slidesPerView: 4,
          spaceBetween: 8
        },
        850: {
          slidesPerView: 5,
          spaceBetween: 8
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 8
        }
      }"
    >
      <SwiperSlide class="py-2" v-for="(brand, idx) in brandData" :key="idx">
        <a href="#" class="px-2 mx-2">
          <img :src="brand.image" class="d-block mx-auto my-2" width="155" alt="Brand" />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'

type BrandType = {
  image: string
}

const brandData: BrandType[] = [
  {
    image: brand1SvgImg
  },
  {
    image: brand2SvgImg
  },
  {
    image: brand3SvgImg
  },
  {
    image: brand4SvgImg
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  }
]
</script>


<style scoped lang="scss">
.brands {
  &__heading {
    font-size: 32px;
    font-weight: bold;
  }
  padding-block: 96px;
}
</style>