<template>
  <b-container class="mt-n1 mt-md-0 py-5">
    <b-row class="justify-content-center text-center pt-md-3 pb-4 py-lg-5 mb-1">
      <b-col xl="8" lg="9" md="10">
        <h2 class="h1 mb-lg-4">Integrate Top Work Tools</h2>
        <p class="fs-lg text-muted mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
          Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec
          lacus.
        </p>
      </b-col>
    </b-row>
    <b-row
      class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3 g-lg-4 pb-md-3 pb-lg-5"
    >
      <!-- Item -->
      <b-col v-for="(item, index) in integrationData" :key="index">
        <div class="card card-body card-hover bg-light border-0">
          <img :src="item.image" class="d-block mb-4" width="56" alt="Google" />
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { integrationData } from '../data'
</script>
