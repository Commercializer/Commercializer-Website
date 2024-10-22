<template>
  <b-container class="brands">
    <h2 class="brands__heading">
      <!-- Trusted and accredited by official partner network -->
       Our Products & Services Are Trusted By
      <div class="brands__heading-actions">
        <button @click="swiper?.slidePrev()">
          <Icon :icon="ChevronLeftIcon" class="fs-2"></Icon>
        </button>
        <button @click="swiper?.slideNext()">
          <Icon :icon="ChevronRightIcon" class="fs-2"></Icon>
        </button>
      </div>
    </h2>
    <Swiper
      @swiper="onSwiper($event)"
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
          style="height: 100px; display: flex; align-items: center; justify-content: center"
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
import {Swiper as SwiperClass} from 'swiper'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import { ref } from 'vue'

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

const swiper = ref<SwiperClass | null>(null)

function onSwiper(swiperInstance: SwiperClass) {
  swiper.value = swiperInstance
}
</script>

<style scoped lang="scss">
.brands {
  &__heading {
    font-size: 32px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

    &-actions {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        background-color: rgba(255, 255, 255, 0.05);
        border: none;
        outline: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @include mq(sm) {
        display: none;
      }
    }
  }
  padding-top: 0px;
  padding-bottom: 96px;

}
</style>
