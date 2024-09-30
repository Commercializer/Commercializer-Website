<template>
  <b-container class="pt-1 py-sm-2 py-md-4 py-lg-5">
    <b-row class="row-cols-1 row-cols-md-3 g-4 py-5 mb-2 mb-sm-3">
      <b-col class="pt-2 pt-md-0" v-for="(feature, idx) in featureData" :key="idx">
        <div class="text-center px-xl-4">
          <img :src="feature.image" class="d-inline-block mb-4" width="70" alt="Icon" />
          <h3 class="h4 mb-2">{{ feature.title }}</h3>
          <p class="fs-lg mb-0">{{ feature.description }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { featureData } from '../data'
</script>
