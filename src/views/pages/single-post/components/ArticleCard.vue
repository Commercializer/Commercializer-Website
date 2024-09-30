<template>
  <article class="card border-0 shadow-sm h-100 mx-2">
    <div class="position-relative">
      <router-link
        :to="{ name: article.link?.name, params: article.link?.params }"
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
      <img :src="article.image" class="card-img-top" alt="Image" />
    </div>
    <div class="card-body pb-4">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">{{
          article.category
        }}</a>
        <span class="fs-sm text-muted">{{ article.date }}</span>
      </div>
      <h3 class="h5 mb-0">
        <router-link :to="{ name: article.link?.name, params: article.link?.params }">{{
          article.title
        }}</router-link>
      </h3>
    </div>
    <div class="card-footer py-4">
      <a href="#" class="d-flex align-items-center fw-bold text-dark text-decoration-none">
        <img :src="article.author.avatar" class="rounded-circle me-3" width="48" alt="Avatar" />
        {{ article.author.name }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ArticleType } from '@/views/pages/single-post/type'
import { Icon } from '@iconify/vue'
import BookmarkIcon from '@iconify/icons-bx/bookmark'

defineProps({
  article: {
    type: Object as PropType<ArticleType>,
    required: true
  }
})
</script>
