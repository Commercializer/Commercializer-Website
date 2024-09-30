<template>
  <section class="position-relative pt-2 pt-sm-0 pb-lg-4">
    <b-container class="pb-2">
      <h2 class="h1 text-center">Trusted by leading companies</h2>
      <p class="fs-lg text-center pb-4 pb-lg-5 mb-2 mb-sm-3 mb-xl-4">
        Learn why top companies from around the globe choose us
      </p>
      <b-row class="masonry-grid row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-sm-3 g-md-4">
        <b-col v-for="(testimonial, idx) in testimonialData" :key="idx" class="masonry-grid-item">
          <TestimonialCard :testimonial="testimonial" />
        </b-col>
      </b-row>
    </b-container>

    <!-- Gradient -->
    <div class="d-none d-md-block">
      <span
        class="position-absolute start-0 bottom-0 w-100 zindex-1 d-dark-mode-none"
        style="
          height: 390px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 50.14%);
        "
      ></span>
      <span
        class="position-absolute start-0 bottom-0 w-100 zindex-2 d-none d-dark-mode-block"
        style="
          height: 375px;
          background: linear-gradient(180deg, rgba(11, 15, 25, 0) 0%, #0b0f19 50.14%);
        "
      ></span>
    </div>
    <div class="d-md-none">
      <span
        class="position-absolute start-0 bottom-0 w-100 zindex-1 d-dark-mode-none"
        style="
          height: 300px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 50.14%);
        "
      ></span>
      <span
        class="position-absolute start-0 bottom-0 w-100 zindex-2 d-none d-dark-mode-block"
        style="
          height: 290px;
          background: linear-gradient(180deg, rgba(11, 15, 25, 0) 0%, #0b0f19 50.14%);
        "
      ></span>
    </div>

    <!-- More button -->
    <div
      class="position-absolute start-0 bottom-0 w-100 d-flex justify-content-center zindex-2 pb-5 px-3 mb-3 mb-md-4 mb-lg-5"
    >
      <a href="#" class="btn btn-outline-secondary rounded-pill mb-xxl-3">Read more reviews</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '@/views/landings/saas-5/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/saas-5/data'
</script>
