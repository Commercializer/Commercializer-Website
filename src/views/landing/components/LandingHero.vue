<template>
  <section
    class="vh-100 bg-repeat-0 bg-position-center bg-size-cover overflow-hidden"
    :style="{ backgroundImage: `url('${bgImg}')` }"
    data-bs-theme="dark"
  >
    <div class="container vh-100">
      <div class="row flex-nowrap vh-100">
        <div class="col-lg-4 col-md-5 d-flex flex-column text-center text-md-start py-5">
          <h1 class="display-3 mt-auto mb-4">Silicon</h1>
          <p class="lead text-light opacity-70 pb-5 mb-0 mb-md-3">
            Multipurpose Business /<br class="d-none d-md-inline" />
            Technology Template
          </p>
          <img
            :src="switcherImg"
            width="212"
            class="d-block mx-auto mx-md-0"
            alt="Light / Dark Mode"
          />
          <div
            class="position-relative d-flex align-items-center justify-content-center justify-content-md-start mb-md-4 mb-lg-5 mt-auto"
          >
            <div class="btn btn-icon btn-secondary rounded-circle">
              <Icon :icon="ChevronDownIcon" class="bx"></Icon>
            </div>
            <a
              href="#landings"
              class="nav-link stretched-link text-light fw-normal opacity-80 py-2 px-3"
              data-scroll
              data-scroll-offset="70"
              >View Landings</a
            >
          </div>
        </div>

        <Rellax custom-class="d-flex flex-shrink-0 align-items-start">
          <img
            :src="screens1Img"
            class="rellax d-block flex-shrink-0 mt-n5"
            :width="486"
            :height="1390"
            alt="Screens"
            data-rellax-speed="4"
            data-disable-parallax-down="md"
          />
          <img
            :src="screens2Img"
            class="rellax d-block flex-shrink-0 mt-5"
            :width="486"
            :height="1470"
            alt="Screens"
            data-rellax-speed="-4"
            data-disable-parallax-down="md"
          />
          <img
            :src="screens3Img"
            class="rellax d-block flex-shrink-0"
            :width="486"
            :height="1480"
            alt="Screens"
            data-rellax-speed="4"
            data-disable-parallax-down="md"
          />
        </Rellax>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import bgImg from '@/assets/img/landing/intro/hero/bg.jpg'
import switcherImg from '@/assets/img/landing/intro/hero/switcher.svg'
import screens1Img from '@/assets/img/landing/intro/hero/screens01.png'
import screens2Img from '@/assets/img/landing/intro/hero/screens02.png'
import screens3Img from '@/assets/img/landing/intro/hero/screens03.png'
import { Icon } from '@iconify/vue'
import ChevronDownIcon from '@iconify/icons-bx/bx-chevron-down'
import Rellax from '@/components/Rellax.vue'
</script>
