<template>
  <article class="card h-100 border-0 bg-transparent">
    <div class="position-relative">
      <a href="#" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
      <img :src="blog.image" class="rounded-3" alt="Image" />
    </div>
    <div class="card-body pb-0 px-0">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
          blog.category
        }}</a>
        <span class="fs-sm text-muted">{{ blog.time }}</span>
      </div>
      <h3 class="h5 mb-0 fw-semibold">
        <a href="#">{{ blog.title }}</a>
      </h3>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogType } from '@/views/landings/dev-agency-3/type'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
