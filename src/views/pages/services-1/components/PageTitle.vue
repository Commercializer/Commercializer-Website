<template>
  <div class="bg-secondary pt-5" style="padding-bottom: 228px">
    <!-- Breadcrumb -->
    <nav class="container pt-5 pb-4 mb-lg-2" aria-label="breadcrumb">
      <b-breadcrumb class="pt-lg-3 mb-0">
        <b-breadcrumb-item href="/">
          <Icon :icon="HomeAltIcon" />
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active>Services v.1</b-breadcrumb-item>
      </b-breadcrumb>
    </nav>

    <b-container class="pb-2 pb-md-4 pb-lg-5 mb-3">
      <h1 class="pb-4">Services v.1</h1>
      <b-row class="row-cols-1 row-cols-md-2">
        <b-col class="py-4 my-2 my-sm-3" v-for="(service, idx) in serviceData" :key="idx">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'

import ServiceCard from '@/views/pages/services-1/components/ServiceCard.vue'
import { serviceData } from '../data'
</script>
