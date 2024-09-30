<template>
  <section
    class="position-relative bg-dark pt-lg-4 pt-xl-5"
    style="background: linear-gradient(90deg, #0b0f19 0%, #172033 51.04%, #0b0f19 100%)"
  >
    <Jarallax custom-class="jarallax position-absolute top-0 start-0 w-100 h-100">
      <div class="jarallax-img" :style="{ backgroundImage: `url('${heroBgImg}')` }"></div>
    </Jarallax>
    <b-container class="position-relative zindex-2 pt-2 pt-sm-4 pt-md-5">
      <b-row class="justify-content-center pt-5">
        <b-col lg="9" xl="8" class="text-center pt-5 mt-1">
          <a
            href="#"
            class="d-inline-flex align-items-center fs-sm fw-semibold text-decoration-none border border-primary border-opacity-50 rounded-pill py-1 px-3"
          >
            <span class="text-gradient-primary lh-lg">New Silicon v2.0</span>
            <Icon
              :icon="RightArrowAltIcon"
              class="bx text-gradient-primary fs-lg ms-2 me-n1"
            ></Icon>
          </a>
          <h1 class="display-4 text-white pt-3 mt-3 mb-4">
            Powerful AI models to serve your business needs
          </h1>
          <p class="text-white opacity-70 fs-xl">
            Our robust platform is designed to handle large volumes of data and processing power,
            making it perfect for businesses of all sizes.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div class="d-none d-lg-block" style="height: 480px"></div>
    <div class="d-lg-none" style="height: 400px"></div>
    <div
      class="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1"
      style="color: var(--si-body-bg)"
    >
      <div
        class="position-relative start-50 translate-middle-x flex-shrink-0"
        style="width: 3774px"
      >
        <svg
          width="3774"
          height="201"
          viewBox="0 0 3774 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroBgImg from '@/assets/img/landing/saas-5/hero-bg-pattern.png'
import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import Jarallax from '@/components/Jarallax.vue'
</script>
