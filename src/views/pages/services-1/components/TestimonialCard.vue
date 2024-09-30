<template>
  <figure class="card h-100 position-relative border-0 bg-transparent">
    <blockquote class="card-body p-0 mb-0">
      <p class="fs-lg mb-0">{{ testimonial.comment }}</p>
    </blockquote>
    <figcaption class="card-footer border-0 d-sm-flex w-100 pb-2">
      <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
        <img :src="testimonial.author.image" width="48" class="d-md-none rounded-circle" alt="" />
        <div class="ps-3 ps-md-0">
          <h5 class="fw-semibold lh-base mb-0">{{ testimonial.author.name }}</h5>
          <span class="fs-sm text-muted">{{ testimonial.author.role }}</span>
        </div>
      </div>
      <img
        :src="testimonial.author.brand.image"
        width="160"
        class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
        alt="Company logo"
      />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/pages/services-1/type'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
