<template>
  <div class="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
    <img
      :src="testimonial.image.light"
      class="d-block d-dark-mode-none mx-auto"
      :width="165"
      alt=""
    />
    <img
      :src="testimonial.image.dark"
      class="d-none d-dark-mode-block mx-auto"
      :width="165"
      alt=""
    />
    <div class="card-body text-center pt-1">
      <p class="pb-3 mb-3">{{ testimonial.feedback }}</p>
      <img
        v-if="testimonial.author.image"
        :src="testimonial.author.image"
        class="d-inline-block rounded-circle"
        :width="80"
        alt="Avatar"
      />
      <div class="pt-2 mt-1">
        <h3 class="fs-lg mb-1">{{ testimonial.author.name }}</h3>
        <p class="fs-sm text-muted mb-0">{{ testimonial.author.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/saas-5/type'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
