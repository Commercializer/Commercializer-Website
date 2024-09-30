<template>
  <article class="card p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2">
    <div class="card-body pb-0">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <a
          href="#"
          class="badge fs-sm text-nav bg-secondary text-decoration-none position-relative zindex-2"
          >{{ news.category }}</a
        >
        <span class="fs-sm text-muted">{{ news.time }}</span>
      </div>
      <h3 class="h4">
        <router-link to="/blog" class="stretched-link">{{ news.title }}</router-link>
      </h3>
      <p class="mb-0">{{ news.description }}</p>
    </div>
    <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
      <div class="d-flex align-items-center me-3">
        <i class="bx bx-like fs-lg me-1"></i>
        <span class="fs-sm">{{ news.liked }}</span>
      </div>
      <div class="d-flex align-items-center me-3">
        <i class="bx bx-comment fs-lg me-1"></i>
        <span class="fs-sm">{{ news.commented }}</span>
      </div>
      <div class="d-flex align-items-center">
        <i class="bx bx-share-alt fs-lg me-1"></i>
        <span class="fs-sm">{{ news.shared }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { NewsType } from '@/views/landings/dev-agency-1/type'

defineProps({
  news: {
    type: Object as PropType<NewsType>,
    required: true
  }
})
</script>
