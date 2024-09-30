<template>
  <article>
    <div class="d-block position-relative rounded-3 mb-3">
      <a
        href="#"
        class="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
        v-b-tooltip.hover.left
        title="Listen later"
      >
        <Icon :icon="BookmarkIcon" />
      </a>
      <img
        :src="podcast.anchor?.image"
        class="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3"
        :width="48"
        alt="Avatar"
      />
      <span class="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3">{{
        podcast.time
      }}</span>
      <router-link
        :to="{ name: podcast.link?.name, params: podcast.link?.params }"
        class="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"
        aria-label="Listen podcast"
      ></router-link>
      <img :src="podcast.cover" class="rounded-3" alt="Image" />
    </div>
    <div class="d-flex align-items-center mb-2">
      <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
        podcast.category
      }}</a>
      <span class="fs-sm text-muted border-start ps-3 ms-3">{{ podcast.airedOn }}</span>
    </div>
    <h3 class="h5">
      <router-link :to="{ name: podcast.link?.name, params: podcast.link?.params }">{{
        podcast.title
      }}</router-link>
    </h3>
    <div class="d-flex align-items-center text-muted">
      <div class="d-flex align-items-center me-3">
        <Icon :icon="LikeIcon" class="fs-lg me-1" />
        <span class="fs-sm">{{ podcast.liked }}</span>
      </div>
      <div class="d-flex align-items-center me-3">
        <Icon :icon="CommentIcon" class="fs-lg me-1" />
        <span class="fs-sm">{{ podcast.commented }}</span>
      </div>
      <div class="d-flex align-items-center">
        <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
        <span class="fs-sm">{{ podcast.shared }}</span>
      </div>
    </div>
    <router-link
      :to="{ name: podcast.link?.name, params: podcast.link?.params }"
      class="btn btn-link px-0 mt-3"
    >
      <Icon :icon="PlayCircleIcon" class="fs-lg me-2" />
      Listen now
    </router-link>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { PodcastType } from '@/views/pages/podcast/type'

import { Icon } from '@iconify/vue'
import BookmarkIcon from '@iconify/icons-bx/bookmark'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import CommentIcon from '@iconify/icons-bx/comment'
import LikeIcon from '@iconify/icons-bx/bx-like'
import PlayCircleIcon from '@iconify/icons-bx/play-circle'

defineProps({
  podcast: {
    type: Object as PropType<PodcastType>,
    required: true
  }
})
</script>
