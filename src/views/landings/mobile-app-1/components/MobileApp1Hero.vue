<template>
  <section
    class="overflow-hidden pt-5"
    style="
      background: radial-gradient(
        116.18% 118% at 50% 100%,
        rgba(99, 102, 241, 0.1) 0%,
        rgba(218, 70, 239, 0.05) 41.83%,
        rgba(241, 244, 253, 0.07) 82.52%
      );
    "
  >
    <BContainer class="pt-3 pt-sm-4 pt-xl-5">
      <BRow class="pt-md-2 pt-lg-5">
        <BCol md="5" class="d-flex flex-column mt-md-4 pt-5 pb-3 pb-sm-4 py-md-5">
          <h1 class="display-4 text-center text-md-start mb-4">Manage All Your Money in One App</h1>
          <p class="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4 mb-lg-5">
            We offer you a new generation of the mobile banking.<br />Save, spend &amp; manage money
            in your pocket.
          </p>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start"
          >
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
              <img :src="appStoreLightImg" class="light-mode-img" width="124" alt="App Store" />
              <img :src="appStoreDarkImg" class="dark-mode-img" width="124" alt="App Store" />
            </a>
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 mb-3">
              <img :src="googlePlayLightImg" class="light-mode-img" width="139" alt="Google Play" />
              <img :src="googlePlayDarkImg" class="dark-mode-img" width="139" alt="Google Play" />
            </a>
          </div>
          <div
            class="position-relative d-inline-flex align-items-center justify-content-center justify-content-md-start mt-auto pt-3 pt-md-4 pb-xl-2"
          >
            <a
              href="#features"
              class="btn btn-icon btn-light bg-white stretched-link rounded-circle me-3"
              data-scroll
              data-scroll-offset="120"
              aria-label="Scroll for more"
            >
              <Icon :icon="ChevronDownIcon" />
            </a>
            <span class="fs-sm">Discover more</span>
          </div>
        </BCol>
        <BCol md="7" class="align-self-end">
          <Rellax
            custom-class="position-relative overflow-hidden mt-4 pb-3 pt-4 mx-auto me-md-0"
            :custom-style="{ maxWidth: '632px' }"
          >
            <div class="ratio ratio-1x1"></div>
            <img
              :src="heroPhone1Img"
              class="rellax position-absolute top-0 start-0 zindex-2"
              data-rellax-speed="1.6"
              data-disable-parallax-down="md"
              alt="Phone"
            />
            <img
              :src="heroPhone2Img"
              class="rellax position-absolute top-0 start-0"
              data-rellax-speed="2.8"
              data-disable-parallax-down="md"
              alt="Phone"
            />
          </Rellax>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<script setup lang="ts">
import appStoreLightImg from '@/assets/img/market/appstore-light.svg'
import appStoreDarkImg from '@/assets/img/market/appstore-dark.svg'
import googlePlayLightImg from '@/assets/img/market/googleplay-light.svg'
import googlePlayDarkImg from '@/assets/img/market/googleplay-dark.svg'
import heroPhone1Img from '@/assets/img/landing/app-showcase-1/hero-phone-1.png'
import heroPhone2Img from '@/assets/img/landing/app-showcase-1/hero-phone-2.png'
import { Icon } from '@iconify/vue'
import ChevronDownIcon from '@iconify/icons-bx/chevron-down'
import Rellax from '@/components/Rellax.vue'
</script>
