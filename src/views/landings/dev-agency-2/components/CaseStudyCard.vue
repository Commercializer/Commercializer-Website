<template>
  <div class="card h-100">
    <img :src="caseStudy.image" class="card-img-top" alt="Card image" />
    <div class="card-body">
      <h5 class="card-title mb-3">{{ caseStudy.title }}</h5>
      <p class="card-text mb-4 pb-md-3 fs-lg">{{ caseStudy.description }}</p>
      <a href="#" class="btn btn-lg btn-outline-primary">See all case studies</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { CaseStudyType } from '@/views/landings/dev-agency-2/type'

defineProps({
  caseStudy: {
    type: Object as PropType<CaseStudyType>,
    required: true
  }
})
</script>
