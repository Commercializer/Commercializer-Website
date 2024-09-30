<template>
  <article class="card border-0 shadow-sm overflow-hidden mb-4">
    <b-row class="g-0">
      <div
        class="col-sm-4 position-relative bg-position-center bg-repeat-0 bg-size-cover"
        :style="{ backgroundImage: `url('${blog.image}')` }"
        style="min-height: 15rem"
      >
        <router-link
          :to="{ name: blog.link.name, params: blog.link.params }"
          class="position-absolute top-0 start-0 w-100 h-100"
          aria-label="Read more"
        ></router-link>
        <a
          href="#"
          class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
          v-b-tooltip.hover.left
          title="Read later"
          aria-label="Read later"
        >
          <Icon :icon="BookmarkIcon" />
        </a>
      </div>
      <div class="col-sm-8">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
              blog.category
            }}</a>
            <span class="fs-sm text-muted border-start ps-3 ms-3">{{ blog.date }}</span>
          </div>
          <h3 class="h4">
            <router-link :to="{ name: blog.link.name, params: blog.link.params }">{{
              blog.title
            }}</router-link>
          </h3>
          <p>{{ blog.description }}</p>
          <hr class="my-4" />
          <div class="d-flex align-items-center justify-content-between">
            <a
              href="#"
              class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
            >
              <img :src="blog.author.avatar" class="rounded-circle me-3" width="48" alt="Avatar" />
              {{ blog.author.name }}
            </a>
            <div class="d-flex align-items-center text-muted">
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
        </div>
      </div>
    </b-row>
  </article>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BookmarkIcon from '@iconify/icons-bx/bookmark'
import LikeIcon from '@iconify/icons-bx/bx-like'
import CommentIcon from '@iconify/icons-bx/comment'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'

import type { PropType } from 'vue'
import type { BlogType } from '@/views/pages/list-view-no-sidebar/type'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
