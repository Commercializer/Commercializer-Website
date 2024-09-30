<template>
  <b-container fluid class="position-relative px-0 pt-5 mt-3 mt-lg-4">
    <b-row class="g-0">
      <b-col xl="7" lg="6" class="pe-lg-5">
        <div class="d-flex h-100 pe-xl-4">
          <video class="w-100" autoplay muted loop style="object-fit: cover">
            <source :src="heroVideo" type="video/mp4" />
          </video>
        </div>
      </b-col>
      <b-col xl="5" lg="6" class="position-relative py-5">
        <img
          :src="heroBg"
          class="position-absolute top-50 translate-middle-y ms-lg-n4"
          :width="866"
          alt="Background shapes"
        />
        <div
          class="position-relative zindex-5 text-center text-lg-start px-3 px-lg-0 py-xl-4 py-xxl-5 mt-lg-3 mx-auto mx-lg-0"
          style="max-width: 530px"
        >
          <h2 class="h3 text-primary">Oct 14-15, 2023</h2>
          <h1 class="display-1 pb-lg-3 mb-3">NY Digital Conference</h1>
          <div class="d-flex justify-content-center justify-content-lg-start text-start mb-2">
            <i class="bx bx-map fs-4 text-primary me-2"></i>
            <div class="fs-xl">International Convention Centre,<br />New York, USA</div>
          </div>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start py-4 py-lg-5"
          >
            <a href="#" class="btn btn-primary shadow-primary btn-lg me-sm-3 me-xl-4 mb-3"
              >Buy access pass</a
            >
            <a href="#" class="btn btn-outline-primary btn-lg mb-3">
              <i class="bx bx-calendar-check fs-xl me-2 ms-n1"></i>
              Add to calendar
            </a>
          </div>
          <div
            class="d-flex align-items-center justify-content-center justify-content-lg-start text-start pb-2 pt-lg-2 pb-xl-0 pt-xl-5 mt-xxl-5"
          >
            <div class="d-flex me-3">
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle"
                style="width: 52px; height: 52px"
              >
                <img :src="avatar8" class="rounded-circle" width="48" alt="Avatar" />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img :src="avatar40" class="rounded-circle" width="48" alt="Avatar" />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img :src="avatar9" class="rounded-circle" width="48" alt="Avatar" />
              </div>
            </div>
            <span class="fs-sm"
              ><span class="text-primary fw-semibold">400+</span> attendees are already with
              us</span
            >
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="position-absolute d-none d-lg-block bottom-0 start-0 w-100 zindex-5 pb-xxl-5">
      <b-container class="pb-4 mb-3 mb-xxl-0">
        <a
          href="#speakers"
          class="d-table text-light opacity-80 text-decoration-none w-auto py-4"
          data-scroll
          data-scroll-offset="70"
        >
          <span class="d-flex align-items-center">
            Scroll for more
            <Icon :icon="DownArrowCircleIcon" class="fs-3 ms-2" />
          </span>
        </a>
      </b-container>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import DownArrowCircleIcon from '@iconify/icons-bx/bx-down-arrow-circle'

import heroVideo from '@/assets/img/landing/conference/hero-video.mp4'
import heroBg from '@/assets/img/landing/conference/hero-bg.png'
import avatar8 from '@/assets/img/avatar/08.jpg'
import avatar9 from '@/assets/img/avatar/09.jpg'
import avatar40 from '@/assets/img/avatar/40.jpg'
</script>
