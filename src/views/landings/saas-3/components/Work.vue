<template>
  <b-container>
    <div class="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" style="max-width: 530px">
      <h2 class="h1">How Does It Work?</h2>
      <p class="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus
        facilisis ultrices
      </p>
    </div>

    <!-- Steps -->
    <div class="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3">
      <div class="step" v-for="(item, idx) in workFlowData" :key="idx">
        <div class="step-number">
          <div class="step-number-inner">{{ idx + 1 }}</div>
        </div>
        <div class="step-body">
          <h3 class="h4 mb-3">{{ item.title }}</h3>
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Video -->
    <div class="bg-secondary position-relative rounded-3 overflow-hidden px-4 px-sm-5">
      <div
        class="position-absolute top-50 start-50 w-75 h-75 translate-middle d-flex align-items-center justify-content-center zindex-5"
      >
        <VideoPopup
          link="https://www.youtube.com/watch?v=wODsNtortYw"
          custom-class="btn btn-video btn-icon btn-xl bg-white stretched-link"
        />
      </div>
      <div class="pt-4 mt-sm-3 px-3 px-sm-5 mx-md-5">
        <img
          :src="videoCoverImg"
          width="786"
          class="rellax d-block mx-auto mt-lg-4"
          alt="Card"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.1"
          data-disable-parallax-down="lg"
        />
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import videoCoverImg from '@/assets/img/landing/saas-3/video-cover.png'
import LightGallery from '@/components/LightGallery.vue'

import { workFlowData } from '../data'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
