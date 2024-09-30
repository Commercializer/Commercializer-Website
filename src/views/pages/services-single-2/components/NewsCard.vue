<template>
  <article class="card h-100 border-0 shadow-sm mx-2">
    <div class="position-relative">
      <a href="#" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
      <a
        href="#"
        class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
        v-b-tooltip.hover.left
        data-bs-placement="left"
        title="Read later"
      >
        <Icon :icon="BookmarkIcon" class="bx"></Icon>
      </a>
      <img :src="news.image" class="card-img-top" alt="Image" />
    </div>
    <div class="card-body pb-4">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
          news.category
        }}</a>
        <span class="fs-sm text-muted">{{ news.time }}</span>
      </div>
      <h3 class="h5 mb-0">
        <a href="#">{{ news.title }}</a>
      </h3>
    </div>
    <div class="card-footer py-4">
      <a href="#" class="d-flex align-items-center text-decoration-none">
        <img :src="news.author.image" class="rounded" width="48" alt="Avatar" />
        <div class="ps-3">
          <h6 class="fs-base fw-semibold mb-0">{{ news.author.name }}</h6>
          <span class="fs-sm text-muted">{{ news.author.expertise }}</span>
        </div>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import BookmarkIcon from '@iconify/icons-bx/bx-bookmark'
import { Icon } from '@iconify/vue'
import type { PropType } from 'vue'
import type { NewsType } from '@/views/pages/services-single-2/type'

defineProps({
  news: {
    type: Object as PropType<NewsType>,
    required: true
  }
})
</script>
