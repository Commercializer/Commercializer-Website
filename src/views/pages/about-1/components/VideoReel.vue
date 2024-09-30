<template>
  <b-container class="text-center pb-5 mt-n2 mt-md-0 mb-md-2 mb-lg-4">
    <div class="position-relative rounded-3 overflow-hidden">
      <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5"
      >
        <VideoPopup
          link="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
          custom-class="btn btn-video btn-icon btn-xl stretched-link bg-white"
        ></VideoPopup>
      </div>
      <span class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-35"></span>
      <img :src="coverImg" class="d-block w-100" alt="Cover image" />
    </div>
  </b-container>
</template>

<script setup lang="ts">
import coverImg from '@/assets/img/landing/digital-agency/cover.jpg'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
