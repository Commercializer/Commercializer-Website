<template>
  <b-container class="py-5 my-2 my-md-4 my-lg-5">
    <h2 class="h1 text-center pt-1 pt-xl-2 mb-4">Why Choose Us?</h2>
    <p class="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
      We personalize how we work to fit your project needs. Our approach helps augment innovation.
    </p>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-xl-3">
      <b-col
        v-for="(item, idx) in featureData"
        :key="idx"
        class="text-center"
        :class="{ 'border-end': idx != featureData.length - 1 }"
      >
        <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
          <img :src="item.image" :width="32" alt="" />
        </div>
        <h3 class="h5 mb-2 mb-lg-0">{{ item.title }}</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { featureData } from '@/views/landings/dev-agency-1/data'
</script>
