<template>
  <article class="card h-100 border-0 shadow-sm mx-2">
    <div class="position-relative">
      <router-link
        :to="{ name: course.route.name, params: course.route.params }"
        class="d-block position-absolute w-100 h-100 top-0 start-0"
        aria-label="Course link"
      ></router-link>
      <span
        v-if="course.badge"
        class="badge position-absolute top-0 start-0 zindex-2 mt-3 ms-3"
        :class="course.badge == 'Best Seller' ? 'bg-success' : 'bg-danger'"
        >{{ course.badge }}</span
      >
      <a
        href="#"
        class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
        v-b-tooltip.hover.left
        title="Save to Favorites"
      >
        <Icon :icon="BookmarkIcon" class="bx"></Icon>
      </a>
      <img :src="course.image" class="card-img-top" alt="Image" />
    </div>
    <div class="card-body pb-3">
      <h3 class="h5 mb-2">
        <router-link :to="{ name: course.route.name }">{{ course.title }}</router-link>
      </h3>
      <p class="fs-sm mb-2">By {{ course.author.name }}</p>
      <p v-if="course.discount" class="fs-lg fw-semibold text-primary mb-0 text-danger">
        ${{ Math.ceil((course.price * course.discount) / 100) }}
        <del class="text-muted">${{ course.price }}</del>
      </p>
      <p v-else class="fs-lg fw-semibold text-primary mb-0 text-primary">${{ course.price }}</p>
    </div>
    <div class="card-footer d-flex align-items-center fs-sm text-muted py-4">
      <div class="d-flex align-items-center me-4">
        <Icon :icon="TimeIcon" class="bx fs-xl me-1"></Icon>
        {{ course.time }} hours
      </div>
      <div class="d-flex align-items-center">
        <Icon :icon="LikeIcon" class="bx fs-xl me-1"></Icon>
        {{ course.like }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BookmarkIcon from '@iconify/icons-bx/bx-bookmark'
import TimeIcon from '@iconify/icons-bx/bx-time'
import LikeIcon from '@iconify/icons-bx/bx-like'
import type { PropType } from 'vue'
import type { CourseType } from '@/views/landings/online-course/type'

defineProps({
  course: {
    type: Object as PropType<CourseType>,
    required: true
  }
})
</script>
