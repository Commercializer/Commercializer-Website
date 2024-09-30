<template>
  <article class="card h-100">
    <div class="card-body">
      <div class="d-flex justify-content-between mb-4">
        <a href="#" class="badge fs-sm bg-secondary text-decoration-none">{{ blog.time }}</a>
      </div>
      <h3 class="h4">
        <a href="#">{{ blog.title }}</a>
      </h3>
      <p class="mb-4">{{ blog.description }}</p>
      <div class="d-flex align-items-center justify-content-between">
        <a href="#" class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
          <img :src="blog.user.image" class="rounded-circle me-3" width="48" alt="Avatar" />
          {{ blog.user.name }}
        </a>
        <div class="d-flex align-items-center text-muted">
          <div class="d-flex align-items-center me-3">
            <i class="bx bx-like fs-lg me-1"></i>
            <span class="fs-sm">{{ blog.liked }}</span>
          </div>
          <div class="d-flex align-items-center me-3">
            <i class="bx bx-comment fs-lg me-1"></i>
            <span class="fs-sm">{{ blog.commented }}</span>
          </div>
          <div class="d-flex align-items-center">
            <i class="bx bx-share-alt fs-lg me-1"></i>
            <span class="fs-sm">{{ blog.shared }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogType } from '@/views/landings/saas-4/type'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
