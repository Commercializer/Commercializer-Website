<template>
  <section class="overflow-hidden pt-md-2 pt-lg-3 pb-3 pb-md-4 pb-xl-5">
    <b-container>
      <div class="d-flex flex-column flex-md-row flex-md-nowrap align-items-start">
        <b-col md="7" class="ps-0 pe-lg-4 mb-5 mb-md-0">
          <div style="max-width: 660px">
            <h2 class="h1 pb-3 mb-2 mb-md-3">What We Offer</h2>
            <b-row class="row-cols-1 row-cols-sm-2 gx-lg-5 g-4">
              <b-col class="pt-1 pt-sm-2 pt-lg-3" v-for="(feature, idx) in featureData" :key="idx">
                <Icon :icon="feature.icon" class="d-block fs-2 text-primary mb-2 mb-sm-3"></Icon>
                <h3 class="h5 pb-sm-1 mb-2">{{ feature.title }}</h3>
                <p class="mb-0">{{ feature.description }}</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <img :src="dashboard" :width="836" class="ms-3 ms-sm-5 ms-xl-3" alt="Dashboard" />
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import dashboard from '@/assets/img/services/single/dashboard.png'
import { Icon } from '@iconify/vue'
import { featureData } from '../data'
</script>
