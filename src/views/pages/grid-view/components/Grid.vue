<template>
  <b-container class="pb-5 mb-2 mb-md-4 mb-lg-5">
    <b-row class="pb-lg-3">
      <b-col
        v-for="(item, idx) in gridData"
        :key="idx"
        :class="item.odd ? 'col-md-5 mb-2 ' : 'col-md-7 mb-2'"
      >
        <div class="card card-portfolio">
          <div class="card-img">
            <img :src="item.image" alt="Image" />
          </div>
          <div class="card-body">
            <h2 class="h4 mb-2">
              <router-link :to="{ name: 'pages.single-project' }" class="stretched-link">{{
                item.title
              }}</router-link>
            </h2>
            <div class="card-portfolio-meta">
              <span class="text-muted" v-for="(tag, idx) in item.tags"
                >{{ tag }} <span v-if="idx != item.tags.length - 1">/</span></span
              >
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <!-- Pagination -->
    <b-pagination class="pt-lg-3 pt-1" v-model="currentPage" :total-rows="rows" :per-page="perPage">
    </b-pagination>
  </b-container>
</template>

<script setup lang="ts">
import { gridData } from '../data'
import { ref } from 'vue'

const currentPage = ref(1)
const rows = ref(10)
const perPage = ref(3)
</script>
