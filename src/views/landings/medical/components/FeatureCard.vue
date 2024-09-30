<template>
  <div
    class="card flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100"
  >
    <img :src="feature.image" width="168" alt="icon" />
    <div
      class="card-body text-center text-sm-start text-md-center text-xxl-start pb-3 pb-sm-2 pb-md-3 pb-xxl-2"
    >
      <h3
        class="h5 mt-n4 mt-sm-0 mt-md-n4 mt-xxl-0"
        :class="feature.image == 'ambulanceImg' ? 'mb-3' : 'mb-2'"
      >
        {{ feature.title }}
      </h3>
      <p class="fs-sm mb-1">{{ feature.description }}</p>
      <a href="#" class="btn btn-link stretched-link px-0">
        {{ feature.linkLabel }}
        <Icon :icon="RightArrowAltIcon" class="bx fs-xl ms-1"></Icon>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'

import type { PropType } from 'vue'
import type { FeatureType } from '@/views/landings/medical/type'

defineProps({
  feature: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>
