<template>
  <b-container class="mt-4 pt-lg-2 pb-3">
    <h1 class="pb-3" style="max-width: 970px">
      This Long-Awaited Technology May Finally Change the World
    </h1>
    <div
      class="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-3"
    >
      <div class="d-flex align-items-center flex-wrap text-muted mb-md-0 mb-4">
        <div class="fs-xs border-end pe-3 me-3 mb-2">
          <span class="badge bg-faded-primary text-primary fs-base">Technology</span>
        </div>
        <div class="fs-sm border-end pe-3 me-3 mb-2">12 hours ago</div>
        <div class="d-flex mb-2">
          <div class="d-flex align-items-center me-3">
            <Icon :icon="LikeIcon" class="fs-base me-1" />
            <span class="fs-sm">8</span>
          </div>
          <div class="d-flex align-items-center me-3">
            <Icon :icon="CommentIcon" class="fs-base me-1" />
            <span class="fs-sm">4</span>
          </div>
          <div class="d-flex align-items-center">
            <Icon :icon="ShareAltIcon" class="fs-base me-1" />
            <span class="fs-sm">2</span>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center position-relative ps-md-3 pe-lg-5 mb-2">
        <img :src="user" class="rounded-circle" width="60" alt="Avatar" />
        <div class="ps-3">
          <h6 class="mb-1">Author</h6>
          <a href="#" class="fw-semibold stretched-link">Albert Flores</a>
        </div>
      </div>
    </div>
  </b-container>

  <!-- Post image (parallax) -->
  <Jarallax
    custom-class="jarallax mb-lg-5 mb-4"
    :options="{ speed: 0.35 }"
    :custom-style="{ height: '36.45vw', minHeight: '300px' }"
  >
    <div class="jarallax-img" :style="{ backgroundImage: `url('${cover}')` }"></div>
  </Jarallax>
</template>

<script setup lang="ts">
import user from '@/assets/img/avatar/39.jpg'
import cover from '@/assets/img/blog/single/cover-image.jpg'

import { Icon } from '@iconify/vue'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import CommentIcon from '@iconify/icons-bx/comment'
import LikeIcon from '@iconify/icons-bx/bx-like'

import Jarallax from '@/components/Jarallax.vue'
</script>
