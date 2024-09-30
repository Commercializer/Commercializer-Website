<template>
  <section class="bg-dark pt-4 pt-sm-5 overflow-hidden" data-bs-theme="dark">
    <b-container class="pt-xl-4 pt-xxl-5" style="margin-bottom: -1.75rem">
      <b-row class="py-4 pb-sm-5 mb-3 mb-sm-0 mb-lg-4">
        <b-col md="6" class="mb-xl-2">
          <h2 class="h1 mb-md-0" style="max-width: 560px">
            The main advantage of our app is the combination of
            <span class="text-warning">simplicity</span> and
            <span class="text-warning">functionality</span>
          </h2>
        </b-col>
        <b-col md="6" class="mb-xl-2">
          <p class="text-body fs-xl mt-2 mb-0">
            Unlike other financial management tools that can be overwhelming with complicated
            features and confusing interfaces, our app provides a streamlined approach that is easy
            to use and understand. But simplicity should ever compromise functionality.
          </p>
        </b-col>
      </b-row>
      <div class="position-relative bg-white bg-opacity-10 p-2 p-sm-3" style="border-radius: 20px">
        <div class="position-relative rounded-4 overflow-hidden">
          <div class="position-absolute top-50 start-50 translate-middle zindex-2 text-center">
            <VideoPopup
              link="https://www.youtube.com/watch?v=6AzbQhiX4tg"
              custom-class="btn btn-video btn-icon btn-xl bg-white stretched-link mb-2 mb-sm-4"
            />

            <div class="h6 fs-lg mb-0">Watch video</div>
            <div class="text-body fs-sm text-nowrap">See how our app is different</div>
          </div>
          <span
            class="position-absolute top-0 start-0 w-100 h-100 zindex-1 opacity-90"
            style="
              background: radial-gradient(circle, rgba(11, 15, 25, 0) 0%, rgba(8, 11, 18, 1) 70%);
            "
          ></span>
          <img :src="videoCoverImg" class="opacity-75" alt="Video cover" />
        </div>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import videoCoverImg from '@/assets/img/landing/app-showcase-3/video-cover.jpg'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
