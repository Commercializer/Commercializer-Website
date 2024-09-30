<template>
  <section class="mb-5 pt-md-2 pt-lg-4 pt-xl-5">
    <b-container class="mt-4 pt-2">
      <b-row class="row-cols-md-2 row-cols-1 gy-4 mb-5">
        <div class="col">
          <h2 class="h1 mb-0">
            Shoot like a pro with our new easy to use <span class="text-primary">ProDrone 2.0</span>
          </h2>
        </div>
        <div class="col">
          <p class="mb-0 fs-lg">
            Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos, ProDrone
            2.0 grants filmmakers absolute creative freedom. It carefully optimizes user experience
            and intelligent features.
          </p>
        </div>
      </b-row>
      <div class="position-relative rounded-3 overflow-hidden">
        <div
          class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5"
        >
          <VideoPopup
            link="https://www.youtube.com/watch?v=aOwTUgqUfH8"
            custom-class="btn btn-video btn-icon btn-xl stretched-link bg-white"
          />
        </div>
        <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></span>
        <img :src="videoCoverImg" alt="Cover image" />
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { videoCoverImg } from '@/assets/data/image'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
