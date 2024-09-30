<template>
  <article class="card border-0 h-100 mx-1">
    <div class="position-relative">
      <router-link
        :to="{ name: blog.route?.name, params: blog.route?.params }"
        class="position-absolute top-0 start-0 w-100 h-100"
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
        <router-link :to="{ name: blog.route?.name, params: blog.route?.params }">{{
          blog.title
        }}</router-link>
      </h3>
    </div>
    <div v-if="blog.author" class="card-footer py-4">
      <a href="#" class="d-flex align-items-center fw-bold text-dark text-decoration-none">
        <img :src="blog.author.image" class="rounded-circle me-3" :width="48" alt="Avatar" />
        {{ blog.author.name }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { BlogType } from '@/views/landings/blog/type'
import { Icon } from '@iconify/vue'
import BookmarkIcon from '@iconify/icons-bx/bookmark'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
