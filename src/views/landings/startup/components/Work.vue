<template>
  <!-- Steps (How it works) -->
  <b-container class="pb-md-3 pb-lg-4 pb-xl-0 pt-sm-2 pt-md-3 pt-lg-5 mt-2 mt-md-3">
    <h2 class="display-5 text-center pt-5 pb-3 pb-md-4 pb-lg-5 mb-xl-4">So, how does it work?</h2>

    <!-- Step -->
    <b-row
      class="align-items-center pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5"
      v-for="(process, idx) in processData"
      :key="idx"
    >
      <b-col md="6" class="pb-2 pb-md-0 mb-4 mb-md-0">
        <div class="position-relative rounded-3 overflow-hidden">
          <div class="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100"></div>
          <img
            :src="process.image"
            class="d-block position-relative zindex-2 mx-auto"
            :width="636"
            alt="Image"
          />
        </div>
      </b-col>
      <b-col md="6" lg="5" class="offset-lg-1">
        <div class="ps-md-4 ps-lg-0">
          <div class="text-primary fs-xl fw-bold pb-1 mb-2">Step {{ idx + 1 }}</div>
          <h3 class="h1 mb-lg-4">{{ process.title }}</h3>
          <p class="fs-xl mb-0">{{ process.description }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { processData } from '../data'
</script>
