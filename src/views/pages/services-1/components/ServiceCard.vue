<template>
  <router-link
    :to="{ name: service.link?.name, params: service.link?.params }"
    class="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2"
  >
    <div class="card-body pt-3">
      <div
        class="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3"
      >
        <img :src="service.image" class="d-block m-1" width="40" alt="Icon" />
      </div>
      <h2 class="h4 d-inline-flex align-items-center">
        {{ service.title }}
        <Icon :icon="RightArrowCircleIcon" class="text-primary fs-3 ms-2" />
      </h2>
      <p class="fs-sm text-body mb-0">{{ service.description }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/pages/services-1/type'
import { Icon } from '@iconify/vue'
import RightArrowCircleIcon from '@iconify/icons-bx/bx-right-arrow-circle'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>
