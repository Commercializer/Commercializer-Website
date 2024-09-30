<template>
  <Jarallax custom-class="jarallax bg-dark py-xxl-5" data-bs-theme="dark">
    <span class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent"></span>
    <div class="jarallax-img" :style="{ backgroundImage: `url(${heroBg})` }"></div>
    <div class="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">
      <!-- Slider controls (Prev / next) -->
      <b-button
        size="lg"
        id="hero-prev"
        class="btn-prev btn-icon bg-transparent shadow-none position-absolute top-50 start-0 translate-middle-y d-none d-md-inline-flex ms-n3 ms-lg-2"
        aria-label="Previous"
      >
        <i class="bx bx-chevron-left fs-1"></i>
      </b-button>
      <b-button
        size="lg"
        id="hero-next"
        class="btn-next btn-icon bg-transparent shadow-none position-absolute top-50 end-0 translate-middle-y d-none d-md-inline-flex me-n3 me-lg-2"
        aria-label="Next"
      >
        <i class="bx bx-chevron-right fs-1"></i>
      </b-button>

      <b-container class="text-center py-xl-5">
        <b-row class="justify-content-center pt-lg-5">
          <b-col xl="8" lg="9" md="10" cols="11">
            <Swiper
              class="swiper pt-5 pb-4 py-md-5"
              :modules="[Navigation, Pagination, Autoplay]"
              effect="fade"
              :speed="500"
              :loop="true"
              :autoplay="{
                delay: 5500,
                disableOnInteraction: false
              }"
              :pagination="{
                el: '.swiper-pagination',
                clickable: true
              }"
              :navigation="{
                prevEl: '#hero-prev',
                nextEl: '#hero-next'
              }"
            >
              <SwiperSlide>
                <h2 class="display-2 from-start mb-lg-4">
                  The Best IT Solutions for Your Business
                </h2>
                <div class="from-end">
                  <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    We provide the wide range of high quality IT services and best practices
                    solutions to our customers making their business better.
                  </p>
                </div>
                <div class="scale-up delay-1">
                  <a href="#" class="btn btn-primary shadow-primary btn-lg">Start your project</a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <h2 class="display-2 from-start mb-lg-4">Award-Winning Software Development</h2>
                <div class="from-end">
                  <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    We build complex web, desktop and mobile applications. With us you get quality
                    software and perfect service every time.
                  </p>
                </div>
                <div class="scale-up delay-1">
                  <a href="#" class="btn btn-primary shadow-primary btn-lg">View case studies</a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <h2 class="display-2 from-start mb-lg-4">24/7 Tech &amp; Business Support</h2>
                <div class="from-end">
                  <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    We ensure lifetime support of all applications we've built. Our support
                    department is a team of professionals who will assist you 24/7.
                  </p>
                </div>
                <div class="scale-up delay-1">
                  <a href="#" class="btn btn-primary shadow-primary btn-lg">Work with us</a>
                </div>
              </SwiperSlide>

              <!-- Pagination (bullets) -->
              <div class="swiper-pagination position-relative d-md-none pt-2 mt-5"></div>
            </Swiper>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container
      class="d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5"
    >
      <div class="d-flex mb-4 mb-sm-0">
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2"
          aria-label="LinkedIn"
        >
          <Icon :icon="LinkedinIcon" />
        </a>
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-facebook rounded-circle me-2"
          aria-label="Facebook"
        >
          <Icon :icon="FacebookIcon" />
        </a>
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-twitter rounded-circle me-2"
          aria-label="Twitter"
        >
          <Icon :icon="TwitterIcon" />
        </a>
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-youtube rounded-circle me-2"
          aria-label="YouTube"
        >
          <Icon :icon="YoutubeIcon" />
        </a>
      </div>
      <a href="#" class="nav-link px-0">
        Our case studies
        <i class="bx bx-right-arrow-circle fs-4 ms-2"></i>
      </a>
    </b-container>
  </Jarallax>
</template>

<script setup lang="ts">
import heroBg from '@/assets/img/landing/software-agency-1/hero-bg.jpg'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Icon } from '@iconify/vue'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
import Jarallax from '@/components/Jarallax.vue'
</script>
