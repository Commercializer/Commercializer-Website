<template>
  <b-container class="pt-2 pt-lg-0 pb-5 mb-md-4 mb-lg-5">
    <h2 class="h1 text-center pb-3 pb-lg-4">Industries We Serve</h2>

    <b-tabs
      content-class="bg-secondary rounded-3 py-4"
      nav-class="flex-nowrap justify-content-lg-center overflow-auto pb-2 mb-3 mb-lg-4"
      align="center"
    >
      <b-tab v-for="(feature, idx) in featureData" :key="idx">
        <template v-slot:title>
          <Icon :icon="feature.icon" class="fs-xl opacity-60 me-2"></Icon>
          {{ feature.title }}
        </template>

        <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
          <b-col lg="4" md="5" class="offset-lg-1 text-center text-md-start">
            <h3 class="mb-lg-4">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </b-col>
          <b-col lg="6" md="7" class="mt-2 mb-3 mt-md-3">
            <img :src="feature.image" alt="" class="d-block rounded-3 my-lg-2 mx-auto me-md-0" />
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { featureData } from '@/views/pages/services-2/data'
</script>
