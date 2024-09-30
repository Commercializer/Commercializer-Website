<template>
  <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-3 gx-md-4 mt-n2 mt-sm-0">
    <b-col class="pb-1 pb-lg-3 mb-4" v-for="(course, idx) in courseData" :key="idx">
      <CourseCard :course="course"></CourseCard>
    </b-col>
  </b-row>

  <!-- Pagination -->
  <b-pagination
    class="justify-content-center pt-lg-3 pt-1 pb-5"
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
  >
  </b-pagination>
</template>

<script setup lang="ts">
import CourseCard from '@/views/pages/courses/components/CourseCard.vue'
import { courseData } from '../data'
import { ref } from 'vue'

const currentPage = ref(1)
const rows = ref(10)
const perPage = ref(3)
</script>
