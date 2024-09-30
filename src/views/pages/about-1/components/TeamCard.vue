<template>
  <div class="card card-hover border-0 bg-transparent">
    <div class="position-relative">
      <img :src="member.image" class="rounded-3" alt="" />
      <div
        class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
      >
        <span
          class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"
        ></span>
        <div class="position-relative d-flex zindex-2">
          <a
            v-for="(icon, idx) in member.socialProfile.icon"
            href="#"
            class="btn btn-icon btn-secondary btn-sm bg-white"
            :class="{ 'me-2': idx != member.socialProfile.icon.length - 1 }"
          >
            <Icon :icon="icon"></Icon>
          </a>
        </div>
      </div>
    </div>
    <div class="card-body text-center p-3">
      <h3 class="fs-lg fw-semibold pt-1 mb-2">{{ member.name }}</h3>
      <p class="fs-sm mb-0">{{ member.role }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { PropType } from 'vue'
import type { TeamMemberType } from '@/views/pages/about-1/type'

defineProps({
  member: {
    type: Object as PropType<TeamMemberType>,
    required: true
  }
})
</script>
