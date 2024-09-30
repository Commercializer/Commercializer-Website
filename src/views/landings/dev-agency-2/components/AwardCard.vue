<template>
  <div class="card shadow-sm card-hover position-relative h-100 py-md-1 px-md-2">
    <div class="card-body">
      <Icon v-if="award.icon" :icon="award.icon" />
      <img :src="award.image" :width="170" alt="Clutch" />
      <div class="mt-5 pt-lg-5 pt-md-4 pt-sm-3">
        <h3 class="h5 mt-xl-4 mb-2 pt-lg-2 pb-1 d-flex align-items-center text-nowrap">
          <a href="#" class="stretched-link">Learn more</a>
          <i class="bx bx-right-arrow-circle ms-2 fs-3 text-primary"></i>
        </h3>
        <p class="mb-0">{{ award.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { PropType } from 'vue'
import type { AwardType } from '@/views/landings/dev-agency-2/type'

defineProps({
  award: {
    type: Object as PropType<AwardType>,
    required: true
  }
})
</script>
