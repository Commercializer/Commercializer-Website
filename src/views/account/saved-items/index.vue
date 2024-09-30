<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-lg-2 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
        <div class="d-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
          <h1 class="h2 mb-0">Saved Items</h1>
          <button type="button" class="btn btn-outline-danger px-3 px-sm-4">
            <Icon :icon="TrashAltIcon" class="fs-xl me-sm-2" />
            <span class="d-none d-sm-inline">Remove all</span>
          </button>
        </div>
        <b-row class="row-cols-1 row-cols-sm-2 gx-3 gx-lg-4">
          <b-col v-for="(course, idx) in courseData" :key="idx" class="pb-lg-2 mb-4">
            <CourseCard :course="course" />
          </b-col>
        </b-row>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import CourseCard from '@/views/account/saved-items/components/CourseCard.vue'
import { courseData } from '@/views/account/saved-items/data'
import { Icon } from '@iconify/vue'
import TrashAltIcon from '@iconify/icons-bx/trash-alt'
</script>
