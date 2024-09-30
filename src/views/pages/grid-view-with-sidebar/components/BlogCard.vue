<template>
  <!-- Item -->
  <div class="masonry-grid-item col pb-2 pb-lg-3">
    <article v-if="blog.card == true" class="card border-0 bg-transparent">
      <div class="position-relative overflow-hidden rounded-3">
        <router-link
          :to="{ name: 'pages.single-post' }"
          class="position-absolute top-0 start-0 w-100 h-100"
          aria-label="Read more"
        ></router-link>
        <div v-if="blog.id == 4">
          <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
          <div
            class="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 zindex-2"
          >
            <VideoPopup
              link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
              custom-class="btn btn-video btn-icon btn-lg bg-white stretched-link"
              data-bs-toggle="video"
              aria-label="Play video"
            >
              <i class="bx bx-play"></i>
            </VideoPopup>
          </div>
        </div>

        <a
          href="#"
          class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
          v-b-tooltip.hover.left
          title="Read later"
          aria-label="Read later"
        >
          <Icon :icon="BookmarkIcon" />
        </a>
        <img :src="blog.image" alt="Image" />
      </div>
      <div class="card-body pb-1 px-0">
        <a
          href="#"
          class="badge fs-sm text-white text-decoration-none mb-3"
          :class="blog.variant"
          >{{ blog.badge }}</a
        >
        <h3 class="h4">
          <router-link :to="{ name: 'pages.single-post' }">{{ blog.title }} </router-link>
        </h3>
        <p class="mb-4">
          {{ blog.description }}
        </p>
        <div class="d-flex align-items-center text-muted">
          <div class="fs-sm border-end pe-3 me-3">{{ blog.date }}</div>
          <div class="d-flex align-items-center me-3">
            <Icon :icon="LikeIcon" class="fs-lg me-1" />
            <span class="fs-sm">{{ blog.like }}</span>
          </div>
          <div class="d-flex align-items-center me-3">
            <Icon :icon="CommentIcon" class="fs-lg me-1" />
            <span class="fs-sm">{{ blog.comment }}</span>
          </div>
          <div class="d-flex align-items-center">
            <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
            <span class="fs-sm">{{ blog.share }}</span>
          </div>
        </div>
      </div>
    </article>
    <article v-else class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-3">
          <a href="#" class="badge fs-sm text-white text-decoration-none" :class="blog.variant">{{
            blog.badge
          }}</a>
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
            v-b-tooltip.hover.left
            title="Read later"
            aria-label="Read later"
          >
            <Icon :icon="BookmarkIcon" />
          </a>
        </div>
        <h3 class="h4">
          <router-link :to="{ name: 'pages.single-post' }">{{ blog.title }} </router-link>
        </h3>
        <p class="mb-3">
          {{ blog.description }}
        </p>
        <div class="d-flex align-items-center text-muted">
          <div class="fs-sm border-end pe-3 me-3">{{ blog.date }}</div>
          <div class="d-flex align-items-center me-3">
            <Icon :icon="LikeIcon" class="fs-lg me-1" />
            <span class="fs-sm">{{ blog.like }}</span>
          </div>
          <div class="d-flex align-items-center me-3">
            <Icon :icon="CommentIcon" class="fs-lg me-1" />
            <span class="fs-sm">{{ blog.comment }}</span>
          </div>
          <div class="d-flex align-items-center">
            <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
            <span class="fs-sm">{{ blog.share }}</span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

import BookmarkIcon from '@iconify/icons-bx/bookmark'
import LikeIcon from '@iconify/icons-bx/bx-like'
import CommentIcon from '@iconify/icons-bx/comment'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import { BlogType } from '../data'
import { PropType } from 'vue'
import VideoPopup from '@/components/VideoPopup.vue'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
