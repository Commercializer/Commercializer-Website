<template>
  <!-- Category -->

  <!-- Category header -->
  <header class="d-flex align-items-center justify-content-between mb-4">
    <span
      class="badge fs-base fw-normal"
      :class="
        item.category == 'Digital'
          ? 'bg-info shadow-info'
          : item.category == 'Technology'
            ? 'bg-danger shadow-danger'
            : item.category == 'Marketing'
              ? 'bg-warning shadow-warning'
              : 'bg-success shadow-success'
      "
      >{{ item.category }}</span
    >
    <a href="#" class="btn btn-outline-primary ms-4">
      See all
      <i class="bx bx-right-arrow-alt ms-1 fs-lg"></i>
    </a>
  </header>

  <!-- Category feed -->
  <ul class="list-unstyled mb-0">
    <!-- Item -->
    <li class="mb-4" v-for="(blog, idx) in item.blogs" :key="idx">
      <h3 class="h4 mb-2">
        <router-link :to="{ name: 'pages.single-post' }">{{ blog.title }}</router-link>
      </h3>
      <div class="d-flex align-items-center text-muted pt-1">
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
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogsType } from '@/views/pages/simple-feed/type'

defineProps({
  item: {
    type: Object as PropType<BlogsType>,
    required: true
  }
})
</script>
