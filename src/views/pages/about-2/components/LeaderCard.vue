<template>
  <div class="card card-body card-hover bg-light border-0 text-center mx-2">
    <img :src="leader.image" class="d-block rounded-circle mx-auto mb-3" width="162" alt="" />
    <h5 class="fw-medium fs-lg mb-1">{{ leader.name }}</h5>
    <p class="fs-sm mb-3">{{ leader.role }}</p>
    <div class="d-flex justify-content-center">
      <a
        v-for="(icon, idx) in leader.socialProfile.icons"
        class="btn btn-icon btn-outline-secondary btn-facebook btn-sm me-2"
      >
        <Icon :icon="icon"></Icon>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { LeaderType } from '@/views/pages/about-2/type'
import { Icon } from '@iconify/vue'

defineProps({
  leader: {
    type: Object as PropType<LeaderType>,
    required: true
  }
})
</script>
