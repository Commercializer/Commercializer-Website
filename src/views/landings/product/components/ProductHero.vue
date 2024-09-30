<template>
  <section
    class="min-vh-100 bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-5"
    :style="{ backgroundImage: `url('${bgImg}')` }"
    data-bs-theme="dark"
  >
    <b-container class="pt-lg-3">
      <b-row class="flex-lg-nowrap">
        <b-col lg="7" xl="6" class="col-xxl-5 text-center text-lg-start pt-4 pt-md-5 mt-xxl-4">
          <p class="text-body lead pt-5 mt-sm-2 mt-lg-4 mt-xl-5">Make your moments fly with</p>
          <h1 class="display-3 pb-md-2 mb-5">ProDrone 2.0</h1>
          <div class="mt-n4 ms-lg-n4 ms-n3 pb-sm-3 pb-md-4">
            <VideoPopup
              link="https://www.youtube.com/watch?v=NJ3Z1hSOoMc"
              custom-class="text-white btn btn-lg btn-primary mt-lg-4 mt-3 ms-lg-4 ms-3"
            >
              <a href="#" class="btn btn-lg btn-light mt-lg-4 mt-3 ms-lg-4 ms-3">
                Learn more
                <Icon :icon="RightArrowAlt" class="ms-1 lead"></Icon>
              </a>
            </VideoPopup>
          </div>
          <SwiperSlide class="mx-auto mt-5 pt-xl-5 pt-lg-2 pt-xl-4" style="max-width: 33rem">
            <Swiper
              :modules="[Autoplay, Navigation, Pagination, EffectCoverflow]"
              :slidesPerView="1"
              :effect="'coverflow'"
              :centeredSlides="true"
              :loop="true"
              :speed="650"
              :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 560,
                modifier: 1,
                slideShadows: true
              }"
              :autoplay="{
                delay: 6000,
                disableOnInteraction: false
              }"
              :pagination="{
                el: '.swiper-pagination',
                type: 'fraction'
              }"
              :navigation="{
                prevEl: '.btn-prev',
                nextEl: '.btn-next'
              }"
            >
              <SwiperSlide>
                <img
                  :src="slider1Img"
                  width="434"
                  alt="Slider image"
                  class="d-block mx-auto rounded-3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  :src="slider2Img"
                  width="434"
                  alt="Slider image"
                  class="d-block mx-auto rounded-3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  :src="slider3Img"
                  width="434"
                  alt="Slider image"
                  class="d-block mx-auto rounded-3"
                />
              </SwiperSlide>

              <!-- Prev/Next buttons + count -->
              <div class="d-flex justify-content-center align-items-center pb-3 pt-4 mt-3">
                <b-button
                  class="btn-prev btn-icon position-relative top-0 mt-0 ms-0 me-2"
                  style="transform: none"
                  aria-label="Previous"
                >
                  <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
                </b-button>
                <div
                  class="swiper-pagination text-light opacity-70 fs-sm fw-medium position-relative top-0 w-auto"
                  style="min-width: 70px"
                ></div>
                <b-button
                  class="btn-next btn-icon position-relative top-0 mt-0 ms-2 me-0"
                  style="transform: none"
                  aria-label="Next"
                >
                  <Icon :icon="ChevronRightIcon" class="bx"></Icon>
                </b-button>
              </div>
            </Swiper>
          </SwiperSlide>
        </b-col>

        <!-- Featured image -->
        <div class="d-none d-lg-block pt-5 mt-lg-4 mt-xl-5 ms-lg-n5 mx-xl-0">
          <img :src="heroImg" class="d-block pt-xxl-4 mt-5" width="1058" alt="Hero image" />
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import { Icon } from '@iconify/vue'
import { slider1Img, slider2Img, slider3Img, heroImg, bgImg } from '@/assets/data/image'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import RightArrowAlt from '@iconify/icons-bx/bx-right-arrow-alt'
import VideoPopup from '@/components/VideoPopup.vue'
</script>
