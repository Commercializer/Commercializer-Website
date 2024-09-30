<template>
  <figure class="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
    <span
      class="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5"
    >
      <Icon :icon="QuoteLeftIcon" />
    </span>
    <blockquote class="card-body mt-2 mb-2">
      <p class="fs-lg mb-0">{{ testimonial.comment }}</p>
    </blockquote>
    <figcaption class="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
      <img :src="testimonial.user.image" :width="60" class="rounded-circle" alt="Annette Black" />
      <div class="ps-3">
        <h6 class="fw-semibold lh-base mb-0">{{ testimonial.user.name }}</h6>
        <span class="fs-sm text-muted">{{ testimonial.user.role }}</span>
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { TestimonialType } from '@/views/landings/conference/type'

import { Icon } from '@iconify/vue'
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
