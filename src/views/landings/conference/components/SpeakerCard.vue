<template>
  <div class="card card-hover border-0 bg-transparent">
    <div class="position-relative">
      <img :src="speakers.image" class="rounded-3" alt="Ralph Edwards" />
      <div
        class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
      >
        <span
          class="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"
        ></span>
        <div class="position-relative d-flex zindex-2">
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
            aria-label="Facebook"
          >
            <Icon :icon="FacebookIcon" />
          </a>
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
            aria-label="LinkedIn"
          >
            <Icon :icon="LinkedinIcon" />
          </a>
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
            aria-label="Twitter"
          >
            <Icon :icon="TwitterIcon" />
          </a>
        </div>
      </div>
    </div>
    <div class="card-body text-center p-3">
      <h3 class="fs-lg fw-semibold pt-1 mb-2">{{ speakers.name }}</h3>
      <p class="fs-sm mb-0">{{ speakers.position }}</p>
    </div>
  </div>
</template>
s

<script setup lang="ts">
import type { PropType } from 'vue'
import type { SpeakerType } from '@/views/landings/conference/type'

import { Icon } from '@iconify/vue'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'

defineProps({
  speakers: {
    type: Object as PropType<SpeakerType>,
    required: true
  }
})
</script>
