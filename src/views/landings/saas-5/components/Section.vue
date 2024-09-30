<template>
  <section class="bg-dark py-5" data-bs-theme="dark">
    <b-container class="pt-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
      <b-row class="pt-lg-2 pt-xl-3">
        <b-col md="6">
          <h2 class="h1 pe-xxl-5 me-xl-4 mb-md-0">
            Our <span class="text-warning">data centers</span> spread all over the world. Get access
            to the API from anywhere
          </h2>
        </b-col>
        <b-col md="6" xl="5" class="offset-xl-1">
          <p class="text-body fs-xl mb-0">
            Our data centers are a key component of our global infrastructure, providing reliable
            and scalable computing resources to customers around the world. We offer a highly
            distributed and resilient platform that can support the most demanding workloads.
          </p>
        </b-col>
      </b-row>
      <div class="pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
        <img :src="mapImg" alt="Map" />
      </div>
    </b-container>
  </section>

  <!-- Video -->
  <section class="position-relative py-5">
    <span
      class="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"
      style="background: linear-gradient(360deg, #fff 5.39%, #f3f6ff 78.66%)"
    ></span>
    <span
      class="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
      style="background: linear-gradient(360deg, #0b0f19 5.39%, rgba(255, 255, 255, 0.04) 78.66%)"
    ></span>
    <b-container class="position-relative zindex-2 py-2 py-sm-3 py-sm-4 py-md-5">
      <b-row class="align-items-center py-lg-2 py-xl-3 my-xl-1 my-xxl-3">
        <b-col md="5" xl="4">
          <h2 class="h1 pb-2 pb-sm-3 mb-md-0">
            Learn <span class="text-gradient-primary">how Silicon works</span> in a nutshell. Watch
            a short introductory video
          </h2>
        </b-col>
        <b-col md="7" class="offset-xl-1">
          <div class="position-relative">
            <div
              class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5"
            >
              <VideoPopup
                link="https://www.youtube.com/watch?v=ADpOLD2z1Ns"
                custom-class="btn btn-video btn-icon btn-xl stretched-link bg-white"
              />
            </div>
            <img :src="videoLightImg" class="d-dark-mode-none rounded-3" alt="Video cover" />
            <img :src="videoDarkImg" class="d-none d-dark-mode-block rounded-3" alt="Video cover" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import mapImg from '@/assets/img/landing/saas-5/map.png'
import videoLightImg from '@/assets/img/landing/saas-5/video-cover-light.jpg'
import videoDarkImg from '@/assets/img/landing/saas-5/video-cover-dark.png'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
