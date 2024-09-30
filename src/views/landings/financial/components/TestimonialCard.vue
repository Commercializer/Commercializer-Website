<template>
  <figure class="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
    <div class="card h-100 position-relative border-0 shadow-sm pt-4">
      <span
        class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
      >
        <Icon :icon="QuoteLeftIcon"></Icon>
      </span>
      <blockquote class="card-body pb-3 mb-0">
        <p class="mb-0">{{ testimonial.comment }}</p>
      </blockquote>
      <div class="card-footer border-0 text-nowrap pt-0">
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
    </div>
    <figcaption class="d-flex align-items-center ps-4 pt-4">
      <img :src="testimonial.user.image" :width="48" class="rounded-circle" alt="" />
      <div class="ps-3">
        <h6 class="fs-sm fw-semibold mb-0">{{ testimonial.user.name }}</h6>
        <span class="fs-xs text-muted">{{ testimonial.user.role }}</span>
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-alt-left'
import StarIcon from '@iconify/icons-bx/bxs-star'
import { Icon } from '@iconify/vue'

import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/financial/type'
import StarBxIcon from '@iconify/icons-bx/bx-star'
import avatar3Img from '@/assets/img/avatar/03.jpg'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
