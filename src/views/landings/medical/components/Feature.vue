<template>
  <b-container class="py-5 mb-2 mb-md-4 mb-lg-5">
    <b-row class="row-cols-1 row-cols-md-3 g-4 pt-2 pt-md-4 pb-lg-2">
      <b-col v-for="(feature, idx) in featureData" :key="idx">
        <FeatureCard :feature="feature" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import FeatureCard from '@/views/landings/medical/components/FeatureCard.vue'
import { featureData } from '../data'
</script>
