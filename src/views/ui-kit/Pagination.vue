<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Pagination"
      description="Indicate a series of related content exists across multiple pages."
    />

    <!-- Default example -->
    <section id="pagination-default" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Default example</h2>
      <div class="pt-1">
        <b-nav>
          <b-pagination v-model="currentPage" :total-rows="rows" prev-text="Prev" next-text="Next">
          </b-pagination>
        </b-nav>
      </div>
    </section>

    <!-- Prev / next icons only -->
    <section id="pagination-icons" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Prev / next icons only</h2>
      <div class="pt-1">
        <b-nav>
          <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
        </b-nav>
      </div>
    </section>

    <!-- Sizing -->
    <section id="pagination-sizing" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizing</h2>
      <div class="pt-1">
        <b-nav class="mb-4 pb-2">
          <b-pagination
            size="lg"
            v-model="currentPage"
            :total-rows="rows"
            prev-text="Prev"
            next-text="Next"
          ></b-pagination>
        </b-nav>
        <b-nav class="mb-4 pb-2">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            prev-text="Prev"
            next-text="Next"
          ></b-pagination>
        </b-nav>
        <b-nav>
          <b-pagination
            size="sm"
            v-model="currentPage"
            :total-rows="rows"
            prev-text="Prev"
            next-text="Next"
          ></b-pagination>
        </b-nav>
      </div>
    </section>

    <!-- Load more (One-page) -->
    <section id="pagination-load-more" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Load more (One-page)</h2>
      <div class="pt-1">
        <nav
          class="d-md-flex justify-content-between align-items-center text-center text-md-left"
          aria-label="..."
        >
          <div class="d-md-flex align-items-center w-100">
            <span class="fs-sm opacity-70 me-md-3"> Showing 12 of 90 products </span>
            <b-progress
              :value="value"
              clas="w-100 my-3 mx-auto mx-md-0"
              width="12rem"
              height="4px"
            ></b-progress>
            <b-button class="shadow-primary ms-auto" size="sm" variant="primary">
              <Icon :icon="RefreshIcon" class="fs-lg me-1" />
              Load more products
            </b-button>
          </div>
        </nav>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import { ref } from 'vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import { Icon } from '@iconify/vue'
import RefreshIcon from '@iconify/icons-bx/refresh'

const anchorData = [
  {
    id: 'pagination-default',
    title: 'Default example'
  },
  {
    id: 'pagination-icons',
    title: 'Prev / next icons only'
  },
  {
    id: 'pagination-sizing',
    title: 'Sizing'
  },
  {
    id: 'pagination-load-more',
    title: 'Load more (One-page)'
  }
]

const currentPage = ref(2)
const rows = ref(100)
const value = ref(18)
</script>
