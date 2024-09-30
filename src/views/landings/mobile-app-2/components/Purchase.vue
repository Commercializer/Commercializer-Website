<template>
  <section class="bg-secondary pt-lg-4 pt-xl-5 overflow-hidden">
    <b-container class="pt-5">
      <b-row class="pt-2 pt-sm-3 pt-md-4">
        <b-col
          md="6"
          xl="5"
          class="col-xxl-4 text-center text-md-start pb-4 pb-sm-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5"
        >
          <h2 class="h1 mb-5">Download Our App for Any Devices:</h2>
          <div class="d-flex d-md-block mt-n2 mt-sm-0">
            <b-row class="row-cols-1 row-cols-lg-2 align-items-lg-end me-1 me-md-0 pb-md-4 mb-md-3">
              <b-col>
                <h3 class="fs-base fw-normal opacity-60 mb-2">App Store</h3>
                <div class="text-nowrap text-warning pb-1 mb-2">
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                </div>
                <h4 class="mb-1">Editor's Choice</h4>
                <p class="mb-0">rating 4.7, 187K+ reviews</p>
              </b-col>
              <b-col class="d-xl-flex justify-content-end">
                <a href="#" class="btn btn-dark btn-lg w-xl-100 px-3 py-2 ms-xl-3 mt-3 mt-lg-0">
                  <img :src="appStoreLightImg" class="light-mode-img" width="124" alt="App Store" />
                  <img :src="appStoreDarkImg" class="dark-mode-img" width="124" alt="App Store" />
                </a>
              </b-col>
            </b-row>
            <b-row class="row-cols-1 row-cols-lg-2 align-items-lg-end">
              <b-col>
                <h3 class="fs-base fw-normal opacity-60 mb-2">Google Play</h3>
                <div class="text-nowrap text-warning pb-1 mb-2">
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                  <Icon :icon="StarIcon" class="bx"></Icon>
                </div>
                <h4 class="mb-1">App of the Day</h4>
                <p class="mb-0">rating 4.8, 30K+ reviews</p>
              </b-col>
              <b-col class="d-xl-flex justify-content-end">
                <a href="#" class="btn btn-dark btn-lg w-xl-100 px-3 py-2 ms-xl-3 mt-3 mt-lg-0">
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
          </div>
        </b-col>
        <b-col md="6" xl="7" class="col-xxl-8">
          <img
            :src="deviceImg"
            width="618"
            class="rellax d-block mx-auto"
            alt="Devices"
            data-rellax-percentage="0.5"
            data-rellax-speed="1"
            data-disable-parallax-down="lg"
          />
          <div class="d-none d-xl-block" style="margin-bottom: -450px"></div>
          <div class="d-none d-lg-block d-xl-none" style="margin-bottom: -800px"></div>
          <div class="d-none d-sm-block d-lg-none" style="margin-bottom: -400px"></div>
          <div class="d-sm-none" style="margin-bottom: -240px"></div>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <!-- Info links -->
  <b-container class="pt-5 pb-4 pb-sm-5 mb-2 mb-sm-0 mb-lg-3 mb-xl-4 mt-md-2 mt-lg-4 mt-xl-5">
    <b-row class="row-cols-1 row-cols-sm-3 pt-sm-3 py-2">
      <b-col
        class="d-flex d-sm-block d-lg-flex align-items-start mb-3 mb-sm-0"
        v-for="(service, idx) in serviceData"
        :key="idx"
      >
        <div class="d-table bg-primary shadow-primary rounded flex-shrink-0 p-2 mb-3">
          <img :src="service.image" width="24" class="d-block m-1" alt="Icon" />
        </div>
        <div class="ps-4 ps-sm-0 ps-lg-4 ms-lg-2 pe-xl-5">
          <h3 class="h4 mb-2 mb-md-3">{{ service.title }}</h3>
          <p class="mb-1 mb-md-2">{{ service.description }}</p>
          <router-link :to="{ name: service.name }" class="btn btn-link px-0">
            {{ service.text }}
            <Icon :icon="RightArrowIcon" class="bx fs-xl ms-2"></Icon>
          </router-link>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <!-- Divider -->
  <b-container class="mb-md-2 mb-lg-4">
    <hr />
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import StarIcon from '@iconify/icons-bx/bxs-star'
import RightArrowIcon from '@iconify/icons-bx/right-arrow-alt'
import {
  appStoreLightImg,
  appStoreDarkImg,
  googlePlayDarkImg,
  googlePlayLightImg,
  deviceImg
} from '@/assets/data/image'
import { serviceData } from '../data'
</script>
