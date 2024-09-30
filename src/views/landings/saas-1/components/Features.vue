<template>
  <b-container>
    <h2 class="h1 text-center pb-4 pb-lg-5">Stay Organized &amp; Connected</h2>
    <b-row>
      <b-col
        lg="3"
        md="4"
        sm="6"
        class="text-center pb-md-2 mb-3 mb-lg-4"
        v-for="(feature, idx) in featuresData"
        :key="idx"
      >
        <div class="d-inline-block bg-secondary rounded-circle p-3 mb-4">
          <img :src="feature.image" width="32" alt="Icon" />
        </div>
        <h3 class="h5 pb-1 mb-2">{{ feature.title }}</h3>
        <p class="fs-sm">{{ feature.description }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { featuresData } from '../data'
</script>
