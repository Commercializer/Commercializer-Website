<template>
  <b-container
    id="features"
    class="pt-lg-2 pt-xl-3 pb-3 pb-xl-5 mt-n2 mt-sm-0 mb-2 mb-md-4 mb-lg-5"
  >
    <b-row class="pb-xl-3">
      <b-col lg="5" class="d-none d-lg-block">
        <div class="position-relative" :style="{ maxWidth: '348px' }">
          <img :src="phoneImg" alt="Phone" />
          <div
            class="rellax position-absolute top-0"
            data-rellax-vertical-scroll-axis="x"
            data-rellax-horizontal-speed="0.75"
            data-disable-parallax-down="lg"
            style="max-width: 348px; right: -2.75rem"
            :src="cardImg"
          >
            <img :src="cardImg" alt="Card" />
          </div>
        </div>
      </b-col>

      <b-col lg="7">
        <h2 class="h1 text-center text-md-start mb-4">App Features</h2>
        <p class="fs-lg text-muted text-center text-md-start mb-4 mb-xl-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
          Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec
          lacus.
        </p>
        <b-row class="row-cols-1 row-cols-sm-2 pt-2 pt-sm-3 pt-xl-2">
          <b-col
            v-for="(item, idx) in appFeaturesData"
            :key="idx"
            class="pb-2 pb-xl-0 mb-4 mb-xl-5"
          >
            <div class="d-flex align-items-start pe-xl-3">
              <div class="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                <img :src="item.image" alt="Icon" />
              </div>
              <div class="ps-4 ps-sm-3 ps-md-4">
                <h3 class="h5 pb-1 mb-2">{{ item.title }}</h3>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import phoneImg from '@/assets/img/landing/app-showcase-1/features/phone.png'
import cardImg from '@/assets/img/landing/app-showcase-1/features/card.png'
import { appFeaturesData } from '@/views/landings/mobile-app-1/data'
</script>
