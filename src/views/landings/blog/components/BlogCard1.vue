<template>
  <article class="card h-100 border-0 shadow-sm card-hover-primary">
    <div class="card-body pb-0">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <a
          href="#"
          class="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
          >{{ blog.category }}</a
        >
        <span class="fs-sm text-muted">{{ blog.time }}</span>
      </div>
      <h3 class="h5 mb-0">
        <router-link
          :to="{ name: blog.route?.name, params: blog.route?.params }"
          class="stretched-link"
          >{{ blog.title }}
        </router-link>
      </h3>
    </div>
    <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
      <div class="d-flex align-items-center me-3">
        <Icon :icon="LikeIcon" class="fs-lg me-1" />
        <span class="fs-sm">{{ blog.liked }}</span>
      </div>
      <div class="d-flex align-items-center me-3">
        <Icon :icon="CommentIcon" class="fs-lg me-1" />
        <span class="fs-sm">{{ blog.commented }}</span>
      </div>
      <div class="d-flex align-items-center">
        <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
        <span class="fs-sm">{{ blog.shared }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LikeIcon from '@iconify/icons-bx/bx-like'
import CommentIcon from '@iconify/icons-bx/comment'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'

import type { PropType } from 'vue'
import type { BlogType } from '@/views/landings/blog/type'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
