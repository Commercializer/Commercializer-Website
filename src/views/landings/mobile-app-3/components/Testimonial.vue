<template>
  <section class="bg-dark py-5" data-bs-theme="dark">
    <b-container class="pt-2 pb-3 py-sm-3 py-md-4 py-lg-5">
      <b-row class="align-items-center py-xl-3 my-xxl-3">
        <b-col md="4" lg="5" class="text-center text-md-start pb-3 pb-md-0 mb-4 mb-md-0">
          <h2 class="h1 mb-4 mb-md-5">
            What our clients say about <span class="text-warning">their experience</span> with our
            application
          </h2>
          <a href="#" class="btn btn-outline-secondary">View all reviews</a>
        </b-col>
        <b-col md="8" lg="7" xl="6" class="offset-xl-1 d-flex flex-column align-items-end gap-4">
          <div
            v-for="(testimonial, idx) in testimonialData"
            :key="idx"
            class="d-flex flex-column flex-sm-row align-items-start align-items-sm-center ms-xxl-4"
            :class="(idx + 1) % 2 == 0 ? 'pe-xl-5' : 'ps-xl-5'"
          >
            <TestimonialCard :testimonial="testimonial" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '@/views/landings/mobile-app-3/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/mobile-app-3/data'
</script>
