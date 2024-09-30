<template>
  <section class="bg-secondary py-5">
    <b-container class="py-2 py-md-4 py-lg-5">
      <h3 class="h1 text-center mb-lg-4">Previous Year Highlights</h3>
      <p class="fs-lg text-muted text-center mb-4 mb-lg-5">
        Watch the short video and check out how the last NY Digital Conference unfolded.
      </p>
      <div class="position-relative overflow-hidden rounded-3 mb-4 mb-lg-5">
        <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
        <img :src="videoCover" alt="Video cover" />

        <div
          class="position-absolute top-0 start-0 w-100 h-100 zindex-5 d-flex align-items-center justify-content-center"
        >
          <VideoPopup
            link="https://www.youtube.com/watch?v=LBfAnFX15nc"
            custom-class="btn btn-video btn-icon bg-white btn-xl stretched-link"
          />
        </div>
      </div>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-2 pt-md-3 pt-lg-2">
        <b-col>
          <div class="d-flex align-items-center">
            <div class="display-4 text-primary">20+</div>
            <p class="ps-3 mb-0">Hours of digital content,workshops &amp; side-events</p>
          </div>
        </b-col>
        <b-col>
          <div class="d-flex align-items-center">
            <div class="display-4 text-primary">3K+</div>
            <p class="ps-3 mb-0">Industry experts, students, and enthusiasts</p>
          </div>
        </b-col>
        <b-col>
          <div class="d-flex align-items-center">
            <div class="display-4 text-primary">18</div>
            <p class="ps-3 mb-0">Digital experts, instructors and panelists for our side-events</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import videoCover from '@/assets/img/landing/conference/video-cover.jpg'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
