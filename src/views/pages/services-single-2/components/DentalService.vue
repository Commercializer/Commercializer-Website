<template>
  <b-container class="pb-5 mb-3 mb-md-4 mb-lg-5">
    <h2 class="h1 text-center">Diagnosis of dental diseases</h2>
    <p class="text-center pb-1 pb-sm-0 mb-4 mb-sm-5">
      Nisi augue at ridiculus ullamcorper ibendum nunc dignissim
    </p>
    <b-row class="align-items-lg-center">
      <b-col sm="6" lg="3">
        <div class="pe-lg-4 pe-xl-5">
          <div
            class="text-center text-lg-end pb-2 mb-4 mb-xl-5"
            v-for="(item, index) in dentalServiceLeftData"
            :key="index"
          >
            <img :src="item.image" class="d-inline-block" width="56" alt="Icon" />
            <h3 class="h5 pt-1 my-2">{{ item.service }}</h3>
            <p class="fs-sm mb-0">{{ item.description }}</p>
          </div>
        </div>
      </b-col>
      <b-col lg="6" class="d-none d-lg-block">
        <div
          class="ratio ratio-1x1 border rounded-circle position-relative mx-auto"
          style="max-width: 580px"
        >
          <div class="p-5">
            <img :src="tooth" class="rounded-circle" alt="Tooth" />
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="ps-lg-4 ps-xl-5">
          <div
            class="text-center text-lg-start pb-2 mb-4 mb-xl-5"
            v-for="(item, index) in dentalServiceRightData"
            :key="index"
          >
            <img :src="item.image" class="d-inline-block" width="56" alt="Icon" />
            <h3 class="h5 pt-1 my-2">{{ item.service }}</h3>
            <p class="fs-sm mb-0">{{ item.description }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import tooth from '@/assets/img/services/single/tooth.jpg'
import { dentalServiceLeftData, dentalServiceRightData } from '../data'
</script>
