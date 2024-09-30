<template>
  <b-container class="pt-4 pb-2 py-md-4 py-lg-5">
    <b-row class="pb-1">
      <b-col md="5" xl="4" class="text-center text-md-start pb-4 mb-2">
        <h2 class="h1 mb-lg-4">Our prices for best results</h2>
        <p class="pb-4 mb-1 mb-lg-3">
          Nisi augue at ridiculus ullamcorper ibendum nunc dignissim habitasse in mollis orci.
          Elementum duis ultricies vehicula nullam tristique.
        </p>
        <a href="#" class="btn btn-primary shadow-primary btn-lg">Make an appointment</a>
      </b-col>
      <b-col md="7" class="offset-xl-1">
        <div class="bg-secondary rounded-3 p-4">
          <div
            class="d-flex justify-content-between align-items-center border-bottom pb-4 mx-sm-3 mb-4"
            v-for="(item, index) in pricingData"
            :key="index"
          >
            <span class="fs-xl fw-500">{{ item.title }}</span>
            <span
              >from<span class="h5 ms-2 mb-0">${{ item.price }}</span></span
            >
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { pricingData } from '../data'
</script>
