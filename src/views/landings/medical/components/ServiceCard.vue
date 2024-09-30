<template>
  <b-card class="card-hover bg-secondary border-0 mb-4">
    <div class="d-flex align-items-start">
      <div class="flex-shrink-0 bg-light rounded-3 p-3">
        <img :src="service.image" width="28" alt="Icon" />
      </div>
      <div class="ps-4">
        <h3 class="h5 pb-2 mb-1">{{ service.title }}</h3>
        <p class="pb-2 mb-1">{{ service.description }}</p>
        <router-link
          :to="{ name: service.link?.name, params: service.link?.params }"
          class="btn btn-link stretched-link px-0"
        >
          Learn more
          <Icon :icon="RightArrowAltIcon" class="bx fs-xl ms-2"></Icon>
        </router-link>
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'

import type { PropType } from 'vue'
import type { ServiceType } from '@/views/landings/medical/type'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>
