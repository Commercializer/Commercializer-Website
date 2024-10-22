<template>
  <b-container class="brands" id="clients">
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
      :modules="[Pagination, Autoplay, FreeMode]"
      :loop="true"
      :freeMode="true"
      :freeModeMomentum="false"
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
      :speed="1500"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
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
            :style="{ width: 'auto', height: `${brand.height}px` }"
          />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper as SwiperClass } from 'swiper'
import { Pagination, Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import { ref } from 'vue'

type BrandType = {
  image: string
  height: number
}

const brandData: BrandType[] = [
  {
    image: '/images/clients/mastercard-logo.webp',
    height: 38.825
  },
  {
    image: '/images/clients/JAT-logo.webp',
    height: 38.825
  },
  {
    image: '/images/clients/amana-logo.webp',
    height: 38.825
  },
  {
    image: '/images/clients/qatar-esports-new.png',
    height: 58.825
  },
  {
    image: '/images/clients/NCINGA-logo.webp',
    height: 48.825
  },
  { image: '/images/clients/firstcapital.png', height: 60.825 },
  { image: '/images/clients/hayleys.png', height: 60.825 },
  { image: '/images/clients/arivpay.png', height: 60.825 },
  { image: '/images/clients/anybanq.png', height: 60.825 },
  {
    image: '/images/clients/hatch-logo.webp',
    height: 38.825
  },
  { image: '/images/clients/361.png', height: 75.825 },
  { image: '/images/clients/premier-fintech.png', height: 45.825 },

  {
    image: '/images/clients/Ex-pack-logo.webp',
    height: 58.825
  },
  {
    image: '/images/clients/payable-logo.webp',
    height: 44.825
  },
  { image: '/images/clients/ukiyo.png', height: 38.825 },
  {
    image: '/images/clients/fastcorp-logo.webp',
    height: 44.825
  },
  { image: '/images/clients/wilddrift.png', height: 80.825 }
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

.swiper-container-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
  margin: 0 auto;
}
</style>
