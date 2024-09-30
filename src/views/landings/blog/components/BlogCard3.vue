<template>
  <article class="card border-0 shadow-sm overflow-hidden mb-4">
    <b-row class="g-0">
      <b-col
        sm="4"
        class="position-relative bg-repeat-0 bg-size-cover"
        :style="{ backgroundImage: `url(${blog.cover})`, minHeight: '15rem' }"
      >
        <router-link
          :to="{ name: blog.route?.name, params: blog.route?.params }"
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
      </b-col>
      <b-col sm="8">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
              blog.category
            }}</a>
            <span class="fs-sm text-muted border-start ps-3 ms-3">{{ blog.time }}</span>
          </div>
          <h3 class="h4">
            <router-link :to="{ name: blog.route?.name, params: blog.route?.params }"
              >{{ blog.title }}
            </router-link>
          </h3>
          <p>{{ blog.description }}</p>
          <hr class="my-4" />
          <div class="d-flex align-items-center justify-content-between">
            <a
              v-if="blog.author"
              href="#"
              class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
            >
              <img :src="blog.author?.image" class="rounded-circle me-3" :width="48" alt="Avatar" />
              {{ blog.author.name }}
            </a>
            <div class="d-flex align-items-center text-muted">
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
          </div>
        </div>
      </b-col>
    </b-row>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { BlogType } from '@/views/landings/blog/type'

import { Icon } from '@iconify/vue'
import LikeIcon from '@iconify/icons-bx/bx-like'
import CommentIcon from '@iconify/icons-bx/comment'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import BookmarkIcon from '@iconify/icons-bx/bookmark'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
