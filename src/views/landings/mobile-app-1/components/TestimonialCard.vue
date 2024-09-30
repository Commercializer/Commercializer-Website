<template>
  <div class="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
    <b-card class="h-100 position-relative border-0 shadow-sm pt-4">
      <span
        class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
      >
        <Icon :icon="QuoteLeftIcon" class="bx"></Icon>
      </span>
      <blockquote class="pb-4 mb-0">
        <div class="text-nowrap pt-1 mb-3">
          <Icon
            v-for="(star, idx) in Array.from(new Array(Math.floor(testimonial.rating ?? 0)))"
            :key="idx"
            :icon="StarIcon"
            class="bx text-warning"
          ></Icon>

          <Icon
            v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0)))"
            :key="idx"
            :icon="StarBxIcon"
            class="bx text-muted opacity-75"
          ></Icon>
        </div>
        <p class="fs-lg mb-0">{{ testimonial.comment }}</p>
      </blockquote>
      <div class="card-footer d-flex align-items-center border-0 pt-0">
        <img :src="testimonial.user.image" :width="48" class="rounded-circle ms-n1" alt="" />
        <div class="ps-2 ms-1">
          <h6 class="fs-base fw-semibold mb-0">{{ testimonial.user.name }}</h6>
          <span class="fs-sm text-muted">{{ testimonial.user.role }}</span>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
import StarIcon from '@iconify/icons-bx/bxs-star'
import StarBxIcon from '@iconify/icons-bx/bx-star'

import { Icon } from '@iconify/vue'
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/mobile-app-1/type'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
