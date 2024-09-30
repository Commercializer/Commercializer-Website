<template>
  <div>
    <section class="position-relative zindex-2 py-lg-4 py-xl-5">
      <b-container class="pb-2 pt-sm-2 py-md-3">
        <b-row class="align-items-center justify-content-center py-5 my-sm-2 my-xxl-3">
          <b-col cols="10" sm="9" md="6" class="pb-4 pb-md-0 mb-2 mb-md-0">
            <!-- Swiper tabs -->

            <Swiper
              class="zindex-2 mx-auto"
              :space-Between="10"
              :slides-Per-View="1"
              @swiper="setThumbsSwiper"
              :modules="[Navigation, Thumbs, FreeMode]"
            >
              <SwiperSlide
                class="rounded-3 px-4 px-sm-5 px-md-0"
                style="background: linear-gradient(135deg, #96fbc4 0%, #dbf799 100%)"
              >
                <span
                  class="position-absolute start-0 translate-middle-x zindex-1 rounded-circle"
                  style="
                    bottom: 26.6%;
                    width: 25px;
                    height: 25px;
                    background: linear-gradient(90deg, #96fbc4 0%, #f9f586 100%);
                  "
                ></span>
                <span
                  class="position-absolute top-50 translate-middle-y zindex-1 rounded-circle"
                  style="
                    left: -18.5%;
                    width: 14px;
                    height: 14px;
                    background: linear-gradient(90deg, #96fbc4 0%, #f9f586 100%);
                  "
                ></span>
                <span
                  class="position-absolute zindex-1 rounded-circle"
                  style="
                    top: 10%;
                    right: -10%;
                    width: 11px;
                    height: 11px;
                    background: linear-gradient(90deg, #96fbc4 0%, #f9f586 100%);
                  "
                ></span>
                <img :src="step1Img" class="d-block mx-auto" width="500" alt="App screen" />
              </SwiperSlide>
              <SwiperSlide
                class="rounded-3 px-4 px-sm-5 px-md-0"
                style="background: linear-gradient(124deg, #f6d365 2.46%, #fda085 101.25%)"
              >
                <span
                  class="position-absolute start-0 translate-middle-x zindex-1 rounded-circle"
                  style="
                    bottom: 38.8%;
                    width: 25px;
                    height: 25px;
                    background: linear-gradient(124deg, #f6d365 2.46%, #fda085 101.25%);
                  "
                ></span>
                <span
                  class="position-absolute zindex-1 rounded-circle"
                  style="
                    bottom: 22.5%;
                    left: -14%;
                    width: 14px;
                    height: 14px;
                    background: linear-gradient(124deg, #f6d365 2.46%, #fda085 101.25%);
                  "
                ></span>
                <span
                  class="position-absolute zindex-1 rounded-circle"
                  style="
                    top: 14%;
                    right: -9%;
                    width: 11px;
                    height: 11px;
                    background: linear-gradient(124deg, #f6d365 2.46%, #fda085 101.25%);
                  "
                ></span>
                <img :src="step2Img" class="d-block mx-auto" width="500" alt="App screen" />
              </SwiperSlide>
              <SwiperSlide class="rounded-3 bg-gradient-primary px-4 px-sm-5 px-md-0">
                <span
                  class="position-absolute start-0 translate-middle-x zindex-1 rounded-circle bg-gradient-primary"
                  style="bottom: 28%; width: 25px; height: 25px"
                ></span>
                <span
                  class="position-absolute top-50 translate-middle-y zindex-1 rounded-circle bg-gradient-primary mt-4"
                  style="left: -16%; width: 14px; height: 14px"
                ></span>
                <span
                  class="position-absolute zindex-1 rounded-circle bg-gradient-primary"
                  style="top: 8.5%; right: -8.5%; width: 11px; height: 11px"
                ></span>
                <img :src="step3Img" class="d-block mx-auto" width="500" alt="App screen" />
              </SwiperSlide>
            </Swiper>
          </b-col>
          <b-col md="6" lg="5" class="offset-lg-1">
            <div class="ps-md-4 ps-lg-0">
              <!-- Swiper slider -->
              <Swiper
                class="text-center text-md-start mt-auto"
                :modules="[Navigation, Pagination, Thumbs, Controller]"
                :spaceBetween="30"
                :loop="true"
                :tabs="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :pagination="{
                  el: '#stepsPagination',
                  type: 'fraction'
                }"
                :navigation="{
                  prevEl: '#prev-screen',
                  nextEl: '#next-screen'
                }"
              >
                <SwiperSlide>
                  <div class="h5 text-primary pb-1 mb-2">Step 1</div>
                  <h2 class="h1 pb-1">Create account</h2>
                  <ul class="list-unstyled d-table mx-auto mx-md-0">
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Enter your email and create a password
                    </li>
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Check your inbox to find the confirmation email
                    </li>
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx bx-check text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Follow the steps described in the email
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="h5 text-primary pb-1 mb-2">Step 2</div>
                  <h2 class="h1 pb-1">Connect account</h2>
                  <ul class="list-unstyled d-table mx-auto mx-md-0">
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Authorize in the application
                    </li>
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Fill application forms
                    </li>
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Take a photo of your passport and TIN
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="h5 text-primary pb-1 mb-2">Step 3</div>
                  <h2 class="h1 pb-1">Get the card</h2>
                  <ul class="list-unstyled d-table mx-auto mx-md-0">
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Specify the desired method of obtaining a card
                    </li>
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Receive the card within 1-2 business days
                    </li>
                    <li class="d-flex fs-lg text-start pb-1 mb-2">
                      <Icon
                        :icon="CheckIcon"
                        class="bx text-primary lead pe-1 me-1"
                        style="margin-top: 0.125rem"
                      ></Icon>
                      Start managing your finances
                    </li>
                  </ul>
                </SwiperSlide>
              </Swiper>

              <!-- Slider controls (Prev / next) + pagination -->
              <div class="d-flex justify-content-center justify-content-md-start pt-2 pt-lg-3">
                <b-button id="prev-screen" class="btn-prev btn-icon btn-sm" aria-label="Previous">
                  <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
                </b-button>
                <div
                  id="stepsPagination"
                  class="swiper-pagination position-relative bottom-0 fs-sm lh-1 fw-medium mx-3"
                  style="width: 1.5rem"
                ></div>
                <b-button id="next-screen" class="btn-next btn-icon btn-sm" aria-label="Next">
                  <Icon :icon="ChevronRightIcon" class="bx"></Icon>
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode, Thumbs, Controller, Pagination } from 'swiper/modules'

import step1Img from '@/assets/img/landing/app-showcase-3/steps/01.png'
import step2Img from '@/assets/img/landing/app-showcase-3/steps/02.png'
import step3Img from '@/assets/img/landing/app-showcase-3/steps/03.png'

import { Icon } from '@iconify/vue'
import CheckIcon from '@iconify/icons-bx/bx-check'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'

import { ref } from 'vue'
import type { SwiperType } from '@/types'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>
