<template>
  <div class="d-lg-flex align-items-center justify-content-between py-4 mt-lg-2">
    <h1 class="me-3">Courses</h1>
    <div class="d-md-flex mb-3">
      <b-form-select
        v-model="selectedOptions"
        :options="options"
        class="me-md-4 mb-2 mb-md-0"
        style="min-width: 240px"
      >
      </b-form-select>
      <div class="position-relative" style="min-width: 300px">
        <b-form-input type="text" class="pe-5" placeholder="Search courses" />
        <Icon
          :icon="SearchIcon"
          class="text-nav fs-lg position-absolute top-50 end-0 translate-middle-y me-3"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SearchIcon from '@iconify/icons-bx/bx-search'
import { ref } from 'vue'

const selectedOptions = ref('All')
const options = [
  { text: 'All categories', value: 'All' },
  { text: 'Web Development', value: 'Web Development' },
  { text: 'Mobile Development', value: 'Mobile Development' },
  { text: 'Programming', value: 'Programming' },
  { text: 'Game Development', value: 'Game Development' },
  { text: 'Software Testing', value: 'Software Testing' },
  { text: 'Software Engineering', value: 'Software Engineering' },
  { text: 'Network & Security', value: 'Network & Security' }
]
</script>
