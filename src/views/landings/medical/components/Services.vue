<template>
  <b-container class="pb-5 mb-md-2 mb-lg-5">
    <b-row>
      <b-col lg="4" class="text-center text-lg-start pb-3 pb-lg-0 mb-4 mb-lg-0">
        <h2 class="h1 mb-lg-4">Highly Innovative Technology &amp; Services</h2>
        <p class="pb-4 mb-0 mb-lg-3">
          We appreciate your trust greatly. Our patients choose us and our services because they
          know we are the best. We offer complete health care to individuals with various health
          concerns.
        </p>
        <a href="#" class="btn btn-primary shadow-primary btn-lg">All services</a>
      </b-col>
      <b-col xl="7" lg="8" class="offset-xl-1">
        <b-row class="row-cols-1 row-cols-md-2">
          <b-col>
            <ServiceCard
              v-for="(service, idx) in servicesData.slice(0, 3)"
              :key="idx"
              :service="service"
            />
          </b-col>

          <b-col>
            <ServiceCard
              v-for="(service, idx) in servicesData.slice(3, servicesData.length)"
              :key="idx"
              :service="service"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import ServiceCard from '@/views/landings/medical/components/ServiceCard.vue'
import { servicesData } from '../data'
</script>
