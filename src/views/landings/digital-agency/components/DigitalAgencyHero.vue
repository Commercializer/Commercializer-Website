<template>
  <Jarallax
    custom-class="jarallax position-relative d-flex align-items-center min-vh-100 bg-light mb-5 py-lg-5 pt-5"
    :custom-style="{ backgroundImage: `url(${heroBg})` }"
    :options="{ imgPosition: '0% 100%', speed: 0.5 }"
  >
    <b-container class="position-relative zindex-5 py-5">
      <b-row class="justify-content-md-start justify-content-center">
        <b-col
          md="6"
          sm="8"
          class="order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center"
        >
          <div class="mb-md-5 pb-xl-5 mb-4">
            <!-- Video popup btn -->
            <div class="d-inline-flex align-items-center position-relative mb-3">
              <VideoPopup
                link="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
                custom-class="btn btn-video btn-icon btn-lg flex-shrink-0 me-3 stretched-link"
                data-bs-toggle="video"
                aria-label="Play video"
              >
              </VideoPopup>
              <h4 class="mb-0">Digital Agency Promo</h4>
            </div>

            <!-- Text -->
            <h1 class="display-2 mb-md-5 mb-3 pb-3">
              We <span class="text-gradient-primary">Transform</span> Your Ideas into Reality
            </h1>
            <div class="d-md-flex align-items-md-start">
              <router-link
                to="/contacts-1"
                class="btn btn-lg btn-primary flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3"
              >
                Work with us
              </router-link>
              <p class="d-lg-block d-none mb-0 ps-md-3">
                Silicon is a leading full-service digital agency based in New York. We make mobile
                apps,websites &amp; brands, that people appreciate all around the world.
              </p>
            </div>
          </div>

          <!-- Scroll down btn -->
          <div
            class="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative"
          >
            <a
              href="#benefits"
              data-scroll
              data-scroll-offset="100"
              class="btn btn-video btn-icon rounded-circle shadow-sm flex-shrink-0 stretched-link me-3"
              aria-label="Scroll for more"
            >
              <i class="bx bx-chevron-down"></i>
            </a>
            <span class="fs-sm">Discover more</span>
          </div>
        </b-col>

        <!-- Animated gfx -->
        <b-col sm="6" cols="9" class="order-md-2 order-1">
          <Vue3Lottie
            class="mx-auto"
            background-color="transparent"
            :speed="1"
            loop
            autoplay
            :animation-data="digitalAgencyAnim"
          />
        </b-col>
      </b-row>
    </b-container>
  </Jarallax>
</template>

<script setup lang="ts">
import heroBg from '@/assets/img/landing/digital-agency/hero-bg.svg'
import { Vue3Lottie } from 'vue3-lottie'
import digitalAgencyAnim from '@/assets/json/animation-digital-agency.json'
import Jarallax from '@/components/Jarallax.vue'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
