<template>
  <b-container>
    <div class="bg-secondary rounded-3 overflow-hidden py-5 px-4 ps-lg-0 pe-md-5 pe-lg-0">
      <b-row class="align-items-center py-sm-2">
        <b-col md="7" lg="6" class="offset-xl-1">
          <Rellax>
            <div
              class="position-relative mx-auto mb-5 m-md-0"
              :custom-style="{ maxWidth: '526px' }"
            >
              <img :src="deviceImg" class="d-block" alt="Device" />
              <div
                class="rellax d-block position-absolute top-0 end-0 w-100 mt-md-4 me-md-n5"
                data-rellax-percentage="0.5"
                data-rellax-vertical-scroll-axis="xy"
                data-rellax-horizontal-speed="0.6"
                data-rellax-vertical-speed="-0.6"
                data-disable-parallax-down="md"
              >
                <img :src="screenImg" alt="App Screen" />
              </div>
            </div>
          </Rellax>
        </b-col>

        <!-- Text + Download buttons -->
        <b-col xl="4" md="5" class="mt-n2 mt-md-0">
          <h2 class="h1 text-center text-md-start mb-4 mb-lg-5">
            Download Our App for Any Devices:
          </h2>
          <b-row>
            <b-col sm="6" md="12" class="pb-4 pb-sm-0">
              <b-row
                class="row-cols-1 row-cols-lg-2 align-items-end text-center text-md-start pb-md-4 mb-lg-3"
              >
                <b-col class="mb-3 mb-lg-0">
                  <p class="text-muted mb-1">App Store</p>
                  <div class="text-nowrap fs-sm pb-lg-1 mb-2">
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                  </div>
                  <h3 class="h4 mb-1">Editor's Choice</h3>
                  <p class="mb-0">rating 4.7, 187K+ reviews</p>
                </b-col>
                <b-col class="d-lg-flex justify-content-end">
                  <a href="#" class="btn btn-dark btn-lg px-3 py-2">
                    <img
                      :src="appStoreLightImg"
                      class="light-mode-img"
                      width="124"
                      alt="App Store"
                    />
                    <img :src="appStoreDarkImg" class="dark-mode-img" width="124" alt="App Store" />
                  </a>
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="6" md="12">
              <b-row class="row-cols-1 row-cols-lg-2 align-items-end text-center text-md-start">
                <b-col class="mb-3 mb-lg-0">
                  <p class="text-muted mb-1">Google Play</p>
                  <div class="text-nowrap fs-sm pb-lg-1 mb-2">
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                    <Icon :icon="StarIcon" class="bx text-warning"></Icon>
                  </div>
                  <h3 class="h4 mb-1">App of the Day</h3>
                  <p class="mb-0">rating 4.8, 30K+ reviews</p>
                </b-col>
                <b-col class="d-lg-flex justify-content-end">
                  <a href="#" class="btn btn-dark btn-lg px-3 py-2">
                    <img
                      :src="googlePlayLightImg"
                      class="light-mode-img"
                      width="139"
                      alt="Google Play"
                    />
                    <img
                      :src="googlePlayDarkImg"
                      class="dark-mode-img"
                      width="139"
                      alt="Google Play"
                    />
                  </a>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import deviceImg from '@/assets/img/landing/saas-2/device.png'
import screenImg from '@/assets/img/landing/saas-2/screen.png'
import appStoreLightImg from '@/assets/img/market/appstore-light.svg'
import appStoreDarkImg from '@/assets/img/market/appstore-dark.svg'
import googlePlayLightImg from '@/assets/img/market/googleplay-light.svg'
import googlePlayDarkImg from '@/assets/img/market/googleplay-dark.svg'
import { Icon } from '@iconify/vue'
import StarIcon from '@iconify/icons-bx/bxs-star'
import Rellax from '@/components/Rellax.vue'
</script>
