<template>
  <b-container class="text-center pb-5 mb-3 mb-md-4 mb-lg-5">
    <h2 class="h1 pt-1 mb-4">See What Makes Us Different</h2>
    <b-row class="justify-content-center mb-md-2 mb-lg-5">
      <b-col lg="6" md="8">
        <p class="fs-lg text-muted mb-lg-0">
          Your best care begins here. Hurry up to get top health care quality from leading doctors
          of the world.
        </p>
      </b-col>
    </b-row>
    <div class="position-relative rounded-3 overflow-hidden mb-lg-3">
      <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5"
      >
        <VideoPopup
          link="https://www.youtube.com/watch?v=wJC1LFT_GD0"
          custom-class="btn btn-video btn-icon btn-xl stretched-link bg-white"
        />
      </div>
      <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
      <img :src="videoCover" alt="Cover image" />
    </div>
  </b-container>
</template>

<script setup lang="ts">
import videoCover from '@/assets/img/landing/medical/video-cover.jpg'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
