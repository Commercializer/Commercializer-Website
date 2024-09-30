<template>
  <article class="card border-0 shadow-sm overflow-hidden">
    <b-row class="g-0">
      <b-col
        sm="5"
        class="position-relative bg-position-center bg-repeat-0 bg-size-cover"
        :style="{ backgroundImage: `url(${blog.cover})`, minHeight: '15rem' }"
      >
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
      </b-col>
      <div class="col-sm-7">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
              blog.category
            }}</a>
            <span class="fs-sm text-muted border-start ps-3 ms-3">{{ blog.time }}</span>
          </div>
          <h3 class="h5">
            <router-link :to="{ name: blog.link?.name }">{{ blog.title }}</router-link>
          </h3>
          <hr class="my-4" />
          <div class="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between">
            <div class="d-flex align-items-center position-relative me-3">
              <img :src="blog.author.image" class="rounded-circle me-3" :width="48" alt="Avatar" />
              <div>
                <a href="#" class="nav-link p-0 fw-bold text-decoration-none stretched-link">{{
                  blog.author.name
                }}</a>
                <span class="fs-sm text-muted">{{ blog.author.expertise }}</span>
              </div>
            </div>
            <div class="d-flex align-items-center mt-sm-0 mt-4 text-muted">
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
import type { BlogType } from '@/views/landings/digital-agency/type'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
