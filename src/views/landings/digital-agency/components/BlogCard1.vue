<template>
  <article class="card h-100 border-0 shadow-sm">
    <div class="position-relative">
      <router-link
        :to="{ name: blog.link?.name }"
        class="position-absolute top-0 start-0 w-100 h-100"
        aria-label="Read more"
      ></router-link>
      <a
        href="#"
        class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
        v-b-tooltip.hover.left
        title="Read later"
      >
        <Icon :icon="BookmarkIcon" />
      </a>
      <img :src="blog.cover" class="card-img-top" alt="Image" />
    </div>
    <div class="card-body pb-4">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
          blog.category
        }}</a>
        <span class="fs-sm text-muted">{{ blog.time }}</span>
      </div>
      <h3 class="h5 mb-0">
        <router-link :to="{ name: blog.link?.name }">{{ blog.title }}</router-link>
      </h3>
    </div>
    <div class="card-footer py-4">
      <div class="d-inline-flex align-items-center position-relative me-3">
        <img :src="blog.author.image" class="rounded-circle me-3" :width="48" alt="Avatar" />
        <div>
          <a href="#" class="nav-link p-0 fw-bold text-decoration-none stretched-link">{{
            blog.author.name
          }}</a>
          <span class="fs-sm text-muted">{{ blog.author.expertise }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogType } from '@/views/landings/digital-agency/type'

import BookmarkIcon from '@iconify/icons-bx/bookmark'
import { Icon } from '@iconify/vue'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
