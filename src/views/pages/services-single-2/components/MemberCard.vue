<template>
  <div class="card card-hover border-0 bg-transparent">
    <div class="position-relative">
      <img :src="member.image" class="rounded-3" :alt="'Dr.' + member.name" />
      <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
        <span class="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
        <div class="position-relative d-flex zindex-2">
          <a href="#" class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
            <Icon :icon="FacebookIcon" />
          </a>
          <a href="#" class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
            <Icon :icon="LinkedinIcon" />
          </a>
          <a href="#" class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
            <Icon :icon="TwitterIcon" />
          </a>
        </div>
      </div>
    </div>
    <div class="card-body text-center p-3">
      <h3 class="fs-lg fw-semibold pt-1 mb-2">Dr. {{ member.name }}</h3>
      <p class="fs-sm mb-2">{{ member.expertise }}</p>
      <div class="d-flex align-items-center justify-content-center">
        <div class="text-nowrap me-1">
          <Icon v-for="(star, idx) in Array.from(new Array(Math.floor(member.rating ?? 0)))" :key="idx"
            :icon="StarIcon" class="bx text-warning"></Icon>

          <Icon v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(member.rating ?? 0)))" :key="idx"
            :icon="StarBxIcon" class="bx text-muted opacity-75"></Icon>
        </div>
        <span class="fs-xs text-muted">({{ member.reviews }} reviews)</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { MemberType } from '@/views/pages/services-single-2/type'

import { Icon } from '@iconify/vue'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import StarIcon from '@iconify/icons-bx/bxs-star'
import StarBxIcon from '@iconify/icons-bx/bx-star'

defineProps({
  member: {
    type: Object as PropType<MemberType>,
    required: true
  }
})
</script>
