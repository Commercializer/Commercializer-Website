<template>
  <b-container class="mt-4 mb-lg-5 pt-lg-2 pb-5">
    <!-- Page title + Layout switcher -->
    <div class="d-flex align-items-center justify-content-between mb-4 pb-1 pb-md-3">
      <h1 class="mb-0">Blog Grid with Sidebar</h1>
      <div class="nav flex-nowrap ms-sm-4 ms-3">
        <router-link
          :to="{ name: 'pages.list-view-with-sidebar' }"
          class="nav-link me-2 p-0"
          aria-label="List view"
        >
          <Icon :icon="ListUlIcon" class="fs-4" />
        </router-link>
        <router-link
          :to="{ name: 'pages.grid-view-with-sidebar' }"
          class="nav-link p-0 active"
          aria-label="Grid view"
        >
          <Icon :icon="GridAltIcon" class="fs-4" />
        </router-link>
      </div>
    </div>

    <!-- Blog grid + Sidebar -->
    <b-row>
      <b-col xl="9" lg="8">
        <div class="pe-xl-5">
          <div class="masonry-grid row row-cols-sm-2 row-cols-1 g-4">
            <!-- Item -->
            <template v-for="(data, idx) in blogData" :key="idx">
              <BlogCard :blog="data" />
            </template>
          </div>

          <!-- Load more button -->
          <b-button variant="outline-primary" size="lg" class="w-100 mt-4">
            <Icon :icon="DownArrowAltIcon" class="fs-xl me-2" />
            Show more
          </b-button>
        </div>
      </b-col>

      <Sidebar />
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import blog1 from '@/assets/img/blog/01.jpg'
import blog2 from '@/assets/img/blog/02.jpg'
import blog3 from '@/assets/img/blog/03.jpg'
import blog5 from '@/assets/img/blog/05.jpg'

import { Icon } from '@iconify/vue'
import ListUlIcon from '@iconify/icons-bx/list-ul'
import GridAltIcon from '@iconify/icons-bx/grid-alt'
import BookmarkIcon from '@iconify/icons-bx/bookmark'
import LikeIcon from '@iconify/icons-bx/bx-like'
import CommentIcon from '@iconify/icons-bx/comment'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import DownArrowAltIcon from '@iconify/icons-bx/down-arrow-alt'

import Sidebar from '@/views/pages/grid-view-with-sidebar/components/Sidebar.vue'
import VideoPopup from '@/components/VideoPopup.vue'
import BlogCard from './BlogCard.vue'
import { blogData } from '../data'
</script>
