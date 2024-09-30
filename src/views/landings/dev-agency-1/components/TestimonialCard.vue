<template>
  <div class="h-auto">
    <figure class="card h-100 position-relative border-0 bg-transparent">
      <blockquote class="card-body p-0 mb-0">
        <p class="fs-lg mb-0">{{ testimonial.comment }}</p>
      </blockquote>
      <figcaption class="card-footer border-0 d-flex align-items-center w-100 pb-2">
        <img :src="testimonial.user.image" :width="48" class="rounded-circle" alt="" />
        <div class="ps-3">
          <h5 class="fw-semibold lh-base mb-0">{{ testimonial.user.name }}</h5>
          <span class="fs-sm text-muted">{{ testimonial.user.role }}</span>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/dev-agency-1/type'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
