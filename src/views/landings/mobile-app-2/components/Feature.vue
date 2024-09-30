<template>
  <b-container class="py-5 my-md-3 my-lg-4 my-xl-5">
    <b-row class="align-items-center align-items-xl-end py-2 pb-sm-3">
      <b-col md="6" class="mb-5 mb-md-0">
        <div style="max-width: 570px">
          <h2 class="h1 pb-3 mb-2 mb-md-3">Get possibilities for better trading with Silicon</h2>
          <b-row class="row-cols-1 row-cols-sm-2 gx-lg-5 g-4">
            <b-col
              v-for="(item, idx) in featureData"
              :key="idx"
              class="d-md-flex d-xl-block align-items-center pt-1 pt-sm-2 pt-md-0 pt-xl-3"
            >
              <div class="d-table bg-secondary rounded flex-shrink-0 p-2 mb-3 me-md-3 me-xl-0">
                <img :src="item.image" width="19" class="d-block m-1" alt="Icon" />
              </div>
              <h3 class="h5 pb-sm-1 mb-2">
                <span class="d-md-none d-xl-block">{{ item.title }}</span>
                <span class="fs-base text-nav d-none d-md-block d-xl-none">{{ item.title }}</span>
              </h3>
              <p class="fs-sm mb-0 d-md-none d-xl-block">{{ item.description }}</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <Rellax custom-class="col-md-6">
        <div
          class="rellax position-relative rounded-3 mb-xl-5"
          style="box-shadow: -7px 12px 60px 0 rgba(126, 123, 160, 0.12)"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.3"
          data-disable-parallax-down="xl"
        >
          <img :src="statsImg" class="d-block rounded-3" alt="Stats screen" />
        </div>
      </Rellax>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { statsImg } from '@/assets/data/image'
import { featureData } from '@/views/landings/mobile-app-2/data'
import Rellax from '@/components/Rellax.vue'
</script>
