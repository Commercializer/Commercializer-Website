<template>
  <section class="position-relative pt-5 mb-5" style="background-color: #151922">
    <span
      class="d-dark-mode-none d-block position-absolute start-0 bottom-0 w-100 bg-white"
      style="height: 19.875vw"
    ></span>
    <span
      class="d-dark-mode-block d-none position-absolute start-0 bottom-0 w-100 bg-light"
      style="height: 19.875vw"
    ></span>
    <b-container class="position-relative zindex-2 pt-5" data-bs-theme="dark">
      <!-- Breadcrumb -->
      <nav class="pt-lg-4" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="bx fs-lg me-1"></Icon>
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>About v.3</b-breadcrumb-item>
        </b-breadcrumb>
      </nav>

      <!-- Page title -->
      <div class="mt-4 mb-lg-5 mb-4 py-3">
        <h1 class="display-4 mb-0">We are Silicon Team</h1>
      </div>

      <!-- Gallery -->
      <b-row class="g-md-4 g-3">
        <b-col md="6">
          <img :src="hero5" alt="Hero image" class="rounded-3" />
        </b-col>
        <b-col md="3" cols="6" class="d-md-block d-none mt-5 pt-3 pt-xl-4">
          <img :src="hero6" alt="Hero image" class="rounded-3" />
        </b-col>
        <b-col md="3" cols="6" class="d-md-block d-none">
          <img :src="hero7" alt="Hero image" class="rounded-3" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import hero5 from '@/assets/img/about/hero/05.jpg'
import hero6 from '@/assets/img/about/hero/06.jpg'
import hero7 from '@/assets/img/about/hero/07.jpg'

import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
