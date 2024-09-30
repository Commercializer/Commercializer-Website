<template>
  <div
    class="position-relative bg-dark rounded-circle flex-shrink-0 zindex-1 p-2 ms-4 ms-sm-0 mb-n5 mb-sm-0 me-sm-n5"
  >
    <img :src="testimonial.user.image" class="rounded-circle" width="80" alt="Avatar" />
  </div>
  <b-card class="border-0 bg-secondary pt-5 pb-1 px-1 ps-sm-5 pe-sm-3 py-sm-3">
    <div class="fs-lg text-nowrap mb-3">
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
    <p class="text-body fs-lg mb-3">{{ testimonial.comment }}</p>
    <h6 class="fs-lg mb-0">{{ testimonial.user.name }}</h6>
  </b-card>
</template>

<script setup lang="ts">
import avatar53Img from '@/assets/img/avatar/53.jpg'
import StarIcon from '@iconify/icons-bx/bxs-star'
import { Icon } from '@iconify/vue'

import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/mobile-app-3/type'
import StarBxIcon from '@iconify/icons-bx/bx-star'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
