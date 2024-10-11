<template>
  <b-container class="brands">
    <h2 class="brands__heading">Trusted and accredited by official partner network</h2>
    <Swiper
      class="mx-n2"
      :modules="[Pagination]"
      :slidesPerView="1"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 2,
          spaceBetween: 8
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 8
        },
        850: {
          slidesPerView: 4,
          spaceBetween: 8
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 8
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 8
        }
      }"
    >
      <SwiperSlide class="py-2" v-for="(brand, idx) in brandData" :key="idx">
        <a
          href="#"
          style="
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <img
            :src="brand.image"
            class="d-block mx-auto my-2"
            width="155"
            alt="Brand"
            style="width: 96px; height: auto"
          />
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

type BrandType = {
  image: string
}

const brandData: BrandType[] = [
  {
    image: '/images/clients/mastercard-logo.webp'
  },
  {
    image: '/images/clients/JAT-logo.webp'
  },
  {
    image: '/images/clients/amana-logo.webp'
  },
  {
    image: '/images/clients/NCINGA-logo.webp'
  },
  {
    image: '/images/clients/hatch-logo.webp'
  },
  {
    image: '/images/clients/Ex-pack-logo.webp'
  },
  {
    image: '/images/clients/payable-logo.webp'
  },
  {
    image: '/images/clients/fastcorp-logo.webp'
  }
]
</script>

<style scoped lang="scss">
.brands {
  &__heading {
    font-size: 32px;
    font-weight: bold;

    @include mq(md) {
      text-align: center;
      font-size: 28px;
    }

    @include mq(sm) {
      font-size: 24px;
    }

    @include mq(xs) {
      font-size: 22px;
    }
  }
  padding-block: 96px;
}
</style>
