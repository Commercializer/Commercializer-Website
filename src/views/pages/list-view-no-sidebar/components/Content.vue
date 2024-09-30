<template>
  <b-container class="mt-4 mb-lg-5 pt-lg-2 pb-5">
    <!-- Page title + Layout switcher + Search form -->
    <b-row class="align-items-end gy-3 mb-4 pb-lg-3 pb-1">
      <b-col lg="5" md="4">
        <h1 class="mb-2 mb-md-0">Blog List</h1>
      </b-col>
      <b-col lg="7" md="8">
        <b-form class="row gy-2">
          <b-col lg="5" sm="5">
            <div class="d-flex align-items-center">
              <div class="nav flex-nowrap me-sm-4 me-3">
                <router-link
                  :to="{ name: 'pages.list-view-no-sidebar' }"
                  class="nav-link me-2 p-0 active"
                  aria-label="List view"
                >
                  <Icon :icon="ListUlIcon" class="fs-4" width="40" height="34" />
                </router-link>
                <router-link
                  :to="{ name: 'pages.grid-view-no-sidebar' }"
                  class="nav-link p-0"
                  aria-label="Grid view"
                >
                  <Icon :icon="GridAltIcon" class="fs-4" width="40" height="34" />
                </router-link>
              </div>
              <b-form-select v-model="selectedCategory" :options="categoryOptions"> </b-form-select>
            </div>
          </b-col>
          <b-col lg="7" sm="6">
            <div class="input-group">
              <b-form-input type="text" class="pe-5 rounded" placeholder="Search the blog..." />
              <Icon
                :icon="SearchIcon"
                class="position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"
              />
            </div>
          </b-col>
        </b-form>
      </b-col>
    </b-row>

    <template v-for="(blog, idx) in blogData" :key="idx">
      <BlogCard :blog="blog" />
    </template>

    <Pagination />
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SearchIcon from '@iconify/icons-bx/bx-search'
import GridAltIcon from '@iconify/icons-bx/grid-alt'
import ListUlIcon from '@iconify/icons-bx/list-ul'

import BlogCard from '@/views/pages/list-view-no-sidebar/components/BlogCard.vue'
import Pagination from '@/views/pages/list-view-no-sidebar/components/Pagination.vue'
import { blogData } from '../data'

import { ref } from 'vue'

const selectedCategory = ref(null)
const categoryOptions = [
  { text: 'All categories', value: null },
  { text: 'Processes & Tools', value: 'processes-and-tools' },
  { text: 'startups', value: 'Startups' },
  { text: 'digital', value: 'Digital' },
  { text: 'strategy', value: 'Strategy' },
  { text: 'business', value: 'Business' }
]
</script>
