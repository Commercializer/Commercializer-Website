<template>
  <!-- Hero -->
  <section class="position-relative pt-5">
    <!-- Background -->
    <div
      class="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
      :style="{ backgroundImage: `url('${bgImg}')` }"
    >
      <div class="d-lg-none" style="height: 960px"></div>
      <div class="d-none d-lg-block" style="height: 768px"></div>
    </div>

    <!-- Content -->
    <b-container class="position-relative zindex-5 pt-5">
      <b-row>
        <b-col lg="6">
          <!-- Breadcrumb -->
          <b-nav class="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4" aria-label="breadcrumb">
            <b-breadcrumb class="mb-0">
              <b-breadcrumb-item href="/">
                <Icon :icon="HomeAltIcon" class="bx fs-lg me-1"></Icon>
                Home
              </b-breadcrumb-item>
              <b-breadcrumb-item active>About v.1</b-breadcrumb-item>
            </b-breadcrumb>
          </b-nav>

          <!-- Text -->
          <h1 class="pb-2 pb-md-3">About Silicon</h1>
          <p class="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style="max-width: 526px">
            We are a dedicated team of passionate product managers, full stack developers, UX/UI
            designers, QA engineers and marketing experts helping businesses of every size — from
            new startups to public companies — launch their projects using our software.
          </p>
          <img :src="clutchDark" class="d-dark-mode-none" width="175" alt="Clutch" />
          <img :src="clutchLight" class="d-none d-dark-mode-block" width="175" alt="Clutch" />
          <b-row class="row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
            <b-col>
              <h3 class="h2 mb-2">2,480</h3>
              <p class="mb-0"><strong>Remote</strong> Sales Experts</p>
            </b-col>
            <b-col>
              <h3 class="h2 mb-2">760</h3>
              <p class="mb-0"><strong>New Clients</strong> per Month</p>
            </b-col>
            <b-col>
              <h3 class="h2 mb-2">1,200</h3>
              <p class="mb-0"><strong>Requests</strong> per Week</p>
            </b-col>
          </b-row>
        </b-col>

        <!-- Images -->
        <b-col lg="6" class="mt-xl-3 pt-5 pt-lg-4">
          <b-row class="row-cols-2 gx-3 gx-lg-4">
            <b-col class="pt-lg-5 mt-lg-1">
              <img :src="hero1" class="d-block rounded-3 mb-3 mb-lg-4" alt="Image" />
              <img :src="hero2" class="d-block rounded-3" alt="Image" />
            </b-col>
            <b-col>
              <img :src="hero3" class="d-block rounded-3 mb-3 mb-lg-4" alt="Image" />
              <img :src="hero4" class="d-block rounded-3" alt="Image" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bgImg from '@/assets/img/about/hero-bg.svg'
import hero1 from '@/assets/img/about/hero/01.jpg'
import hero2 from '@/assets/img/about/hero/02.jpg'
import hero3 from '@/assets/img/about/hero/03.jpg'
import hero4 from '@/assets/img/about/hero/04.jpg'
import clutchDark from '@/assets/img/about/clutch-dark.png'
import clutchLight from '@/assets/img/about/clutch-light.png'

import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
