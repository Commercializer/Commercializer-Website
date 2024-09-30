<template>
  <section class="bg-secondary pt-1">
    <b-container>
      <h2 class="h1 text-center text-md-start mb-lg-4">Case Studies</h2>
      <b-row class="align-items-center pb-5">
        <b-col md="8" lg="7" xl="6" class="text-center text-md-start">
          <p class="fs-lg text-muted mb-md-0">
            We bring real solutions to each client’s problems through a deep understanding of their
            market, solution, and vision.
          </p>
        </b-col>
        <b-col md="4" lg="5" xl="6" class="d-flex justify-content-center justify-content-md-end">
          <a href="#" class="btn btn-outline-primary btn-lg">See all case studies</a>
        </b-col>
      </b-row>
    </b-container>

    <div class="position-relative py-lg-4 py-xl-5">
      <Swiper class="position-absolute top-0 start-0 w-100 h-100" :space-Between="10" :slides-Per-View="1"
        @swiper="setThumbsSwiper" :modules="[Navigation, Thumbs, FreeMode]">
        <SwiperSlide>
          <Jarallax custom-class="jarallax position-absolute top-0 start-0 w-100 h-100">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
            <div class="jarallax-img" :style="{ backgroundImage: `url(${caseStudy1})` }"></div>
          </Jarallax>
        </SwiperSlide>

        <SwiperSlide>
          <Jarallax custom-class="jarallax position-absolute top-0 start-0 w-100 h-100">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
            <div class="jarallax-img" :style="{ backgroundImage: `url(${caseStudy2})` }"></div>
          </Jarallax>
        </SwiperSlide>
      </Swiper>

      <b-container class="position-relative zindex-5 py-5">
        <b-row class="py-2 py-md-3">
          <b-col xl="5" lg="7" md="9">
            <!-- Slider controls (Prev / next) -->
            <div class="d-flex justify-content-center justify-content-md-start pb-3 mb-3">
              <b-button size="sm" type="button" id="case-study-prev" class="btn-prev btn-icon bg-white me-2"
                aria-label="Previous">
                <Icon :icon="ChevronLeftIcon" />
              </b-button>
              <b-button size="sm" type="button" id="case-study-next" class="btn-next btn-icon bg-white ms-2"
                aria-label="Next">
                <Icon :icon="ChevronRightIcon" />
              </b-button>
            </div>

            <div class="card bg-custom-card shadow-sm p-3">
              <div class="card-body">
                <Swiper :modules="[Pagination, Navigation, Thumbs]" :thumbs="{ swiper: thumbsSwiper }" :spaceBetween="30"
                  :loop="true" :tabs="true" :pagination="{
                    el: '#case-study-pagination',
                    clickable: true
                  }" :navigation="{
  prevEl: '#case-study-prev',
  nextEl: '#case-study-next'
}">
                  <SwiperSlide>
                    <img :src="caseStudyLogo1" class="d-block mb-3" :width="72" alt="Logo" />
                    <h3 class="mb-2">Cashless payment case study</h3>
                    <p class="fs-sm text-muted border-bottom pb-3 mb-3">
                      Payment Service Provider Company
                    </p>
                    <p class="pb-2 pb-lg-3 mb-3">
                      Aenean dolor elit tempus tellus imperdiet. Elementum, ac convallis morbi sit
                      est feugiat ultrices. Cras tortor maecenas pulvinar nec ac justo. Massa sem
                      eget semper...
                    </p>
                    <a href="#" class="btn btn-primary">View case study</a>
                  </SwiperSlide>

                  <SwiperSlide>
                    <img :src="caseStudyLogo2" class="d-block mb-3" :width="72" alt="Logo" />
                    <h3 class="mb-2">Smart tech case study</h3>
                    <p class="fs-sm text-muted border-bottom pb-3 mb-3">Data Analytics Company</p>
                    <p class="pb-2 pb-lg-3 mb-3">
                      Adipiscing quis a at ligula. Gravida gravida diam rhoncus cursus in. Turpis
                      sagittis tempor gravida phasellus sapien. Faucibus donec consectetur sed id
                      sit nisl.
                    </p>
                    <a href="#" class="btn btn-primary">View case study</a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <!-- Pagination (bullets) -->
            <div class="pt-4 mt-3" data-bs-theme="dark">
              <div id="case-study-pagination" class="swiper-pagination position-relative bottom-0"></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script setup lang="ts">
import caseStudy1 from '@/assets/img/landing/software-agency-1/case-study01.jpg';
import caseStudy2 from '@/assets/img/landing/software-agency-1/case-study02.jpg';
import caseStudyLogo1 from '@/assets/img/landing/software-agency-1/case-study-logo01.png';
import caseStudyLogo2 from '@/assets/img/landing/software-agency-1/case-study-logo02.png';

import { Icon } from '@iconify/vue';
import ChevronRightIcon from '@iconify/icons-bx/chevron-right';
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left';

import Jarallax from '@/components/Jarallax.vue';

import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';
import type { SwiperType } from '@/types';

const thumbsSwiper = ref<SwiperType | null>(null);
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper);
};
</script>
<style lang="css">
[data-bs-theme=dark] .bg-custom-card {
  background-color: #0b0f19 !important;
}
</style>
