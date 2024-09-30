<template>
  <b-container class="mb-md-3 mb-lg-5 pb-5" v-for="(service, idx) in servicesData" :key="idx">
    <ServicesCard :service="service" :index="idx"></ServicesCard>
  </b-container>
</template>

<script setup lang="ts">
import ServicesCard from './ServicesCard.vue'
import { servicesData } from '../data'
</script>
