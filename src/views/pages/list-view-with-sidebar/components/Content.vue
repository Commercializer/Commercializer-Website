<template>
  <b-container class="mt-4 mb-2 mb-md-4 mb-lg-5 pt-lg-2 pb-5">
    <!-- Page title + Layout switcher -->
    <div class="d-flex align-items-center justify-content-between mb-4 pb-1 pb-md-3">
      <h1 class="mb-0">Blog List with Sidebar</h1>
      <div class="nav flex-nowrap ms-sm-4 ms-3">
        <router-link
          :to="{ name: 'pages.list-view-with-sidebar' }"
          class="nav-link me-2 p-0 active"
          aria-label="List view"
        >
          <Icon :icon="ListUlIcon" class="fs-4" />
        </router-link>
        <router-link
          :to="{ name: 'pages.grid-view-with-sidebar' }"
          class="nav-link p-0"
          aria-label="Grid view"
        >
          <Icon :icon="GridAltIcon" class="fs-4" />
        </router-link>
      </div>
    </div>

    <!-- Blog list + Sidebar -->
    <b-row>
      <b-col xl="9" lg="8">
        <!-- Item -->
        <template v-for="(data, idx) in blogData" :key="idx">
          <BlogCard :blog="data" />
        </template>
        <div class="pb-2 pb-lg-3"></div>

        <!-- Load more button -->
        <b-button variant="outline-primary" size="lg" class="w-100 mt-4">
          <Icon :icon="DownArrowAltIcon" class="fs-xl me-2" />
          Show more
        </b-button>
      </b-col>

      <Sidebar />
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ListUlIcon from '@iconify/icons-bx/list-ul'
import GridAltIcon from '@iconify/icons-bx/grid-alt'
import DownArrowAltIcon from '@iconify/icons-bx/down-arrow-alt'

import Sidebar from '@/views/pages/list-view-with-sidebar/components/Sidebar.vue'
import { blogData } from './data'
import BlogCard from './BlogCard.vue'
</script>
