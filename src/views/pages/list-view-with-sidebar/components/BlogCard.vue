<template>
  <div>
    <article class="card me-xl-5 mb-4" :class="blog.card == false ? 'border-0 bg-transparent' : ''">
      <div v-if="blog.card == false" class="row g-0">
        <div
          class="col-sm-5 position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3"
          :style="{ backgroundImage: `url('${blog.image}')` }"
          style="min-height: 15rem"
        >
          <router-link
            :to="{ name: 'pages.list-view-with-sidebar' }"
            class="position-absolute top-0 start-0 w-100 h-100"
            :class="blog.id == 6 ? 'bg-dark opacity-35' : ''"
            aria-label="Read more"
          ></router-link>
          <div
            v-if="blog.id == 6"
            class="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 zindex-2"
          >
            <VideoPopup
              link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
              custom-class="btn btn-video btn-icon btn-lg bg-white stretched-link"
            >
              <i class="bx bx-play"></i>
            </VideoPopup>
          </div>
          <a
            href="#"
            class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Read later"
            aria-label="Read later"
          >
            <Icon :icon="BookmarkIcon" />
          </a>
        </div>
        <div class="col-sm-7">
          <div class="card-body px-0 pt-sm-0 ps-sm-4 pb-0 pb-sm-4">
            <a
              href="#"
              class="badge fs-sm text-white text-decoration-none mb-3"
              :class="blog.variant"
              >{{ blog.badge }}</a
            >
            <h3 class="h4">
              <a href="blog-single.html">{{ blog.title }}</a>
            </h3>
            <p class="mb-4">{{ blog.description }}</p>
            <div class="d-flex align-items-center text-muted">
              <div class="fs-sm border-end pe-3 me-3">{{ blog.date }}</div>
              <div class="d-flex align-items-center me-3">
                <i class="bx bx-like fs-lg me-1"></i>
                <span class="fs-sm">{{ blog.like }}</span>
              </div>
              <div class="d-flex align-items-center me-3">
                <i class="bx bx-comment fs-lg me-1"></i>
                <span class="fs-sm">{{ blog.comment }}</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="bx bx-share-alt fs-lg me-1"></i>
                <span class="fs-sm">{{ blog.share }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="card-body">
        <div class="d-flex justify-content-between mb-3">
          <a href="#" class="badge fs-sm text-white text-decoration-none" :class="blog.variant">{{
            blog.badge
          }}</a>
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Read later"
            aria-label="Read later"
          >
            <Icon :icon="BookmarkIcon" />
          </a>
        </div>
        <h3 class="h4">
          <a href="blog-single.html">{{ blog.title }}</a>
        </h3>
        <p class="mb-4">{{ blog.description }}</p>
        <div class="d-flex align-items-center text-muted">
          <div class="fs-sm border-end pe-3 me-3">{{ blog.date }}</div>
          <div class="d-flex align-items-center me-3">
            <i class="bx bx-like fs-lg me-1"></i>
            <span class="fs-sm">{{ blog.like }}</span>
          </div>
          <div class="d-flex align-items-center me-3">
            <i class="bx bx-comment fs-lg me-1"></i>
            <span class="fs-sm">{{ blog.comment }}</span>
          </div>
          <div class="d-flex align-items-center">
            <i class="bx bx-share-alt fs-lg me-1"></i>
            <span class="fs-sm">{{ blog.share }}</span>
          </div>
        </div>
      </div>
    </article>
    <div class="pb-2 pb-lg-3"></div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { BlogType } from './data'
import { Icon } from '@iconify/vue'
import BookmarkIcon from '@iconify/icons-bx/bookmark'
import VideoPopup from '@/components/VideoPopup.vue'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
