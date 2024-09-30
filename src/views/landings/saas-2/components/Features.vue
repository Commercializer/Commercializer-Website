<template>
  <section class="position-relative py-5">
    <b-container class="container position-relative zindex-5 pb-md-4 pt-md-2 pt-lg-3 pb-lg-5">
      <b-row class="justify-content-center text-center pb-3 mb-sm-2 mb-lg-3">
        <b-col xl="6" lg="7" md="9">
          <h2 class="h1 mb-lg-4">What Do You Get with Our Tool?</h2>
          <p class="fs-lg text-muted mb-0">
            Make sure all your tasks are organized so you can set the priorities and focus on
            important.
          </p>
        </b-col>
      </b-row>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 pb-xl-3">
        <!-- Item -->
        <b-col class="position-relative" v-for="(feature, idx) in featureData" :key="idx">
          <b-card class="border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
            <div class="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
              <img :src="feature.image" width="40" alt="Comments" />
            </div>
            <div class="text-center">
              <h3 class="h5 pb-1 mb-2">{{ feature.title }}</h3>
              <p class="mb-0">{{ feature.description }}</p>
            </div>
          </b-card>
          <hr class="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block" />
          <hr class="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
        </b-col>
      </b-row>
    </b-container>
    <div
      class="position-absolute top-0 start-0 w-100 h-100"
      style="background-color: rgba(255, 255, 255, 0.05)"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { featureData } from '../data'
</script>
