<template>
  <section class="position-relative">
    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-secondary d-none d-dark-mode-block"
    ></div>

    <!-- Awards -->
    <b-container class="position-relative zindex-2 py-5 mt-xl-3 mt-xxl-0">
      <b-row class="g-4 py-2 py-sm-3 py-md-4 py-lg-5 mt-xxl-2">
        <b-col
          sm="6"
          md="4"
          class="d-flex justify-content-center"
          v-for="(purchase, index) in purchaseData"
          :key="index"
        >
          <div class="d-flex align-items-center">
            <img :src="palmBranchLeftLightImg" class="light-mode-img" alt="Palm branch" />
            <img :src="palmBranchLeftDarkImg" class="dark-mode-img" alt="Palm branch" />
            <div class="text-center">
              <div class="fs-xl opacity-80 mb-1">{{ purchase.text }}</div>
              <h3 class="h4 text-body text-uppercase mb-1">{{ purchase.content }}</h3>
              <div class="fs-xl opacity-80">2022</div>
            </div>
            <img :src="palmBranchRightLightImg" class="light-mode-img" alt="Palm branch" />
            <img :src="palmBranchRightDarkImg" class="dark-mode-img" alt="Palm branch" />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- Download app CTA -->
    <section
      class="position-relative d-flex align-items-center justify-content-center justify-content-lg-end zindex-2 pb-5 pb-lg-0 mb-md-3 mb-lg-0"
    >
      <div class="text-center text-lg-start pe-xl-5 me-lg-4">
        <div class="px-3" style="max-width: 530px">
          <h2 class="h1 mb-lg-4">Download <span class="text-primary">Silicon</span> app</h2>
          <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
            Take control of your finances and download our mobile app today! Start tracking your
            expenses, budgeting wisely, and achieving your financial goals with ease. Don't wait,
            take the first step towards financial freedom now!
          </p>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start"
          >
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
              <img :src="appStoreLightImg" class="light-mode-img" width="124" alt="App Store" />
              <img :src="appStoreDarkImg" class="dark-mode-img" width="124" alt="App Store" />
            </a>
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 mb-sm-3">
              <img :src="googlePlayLightImg" class="light-mode-img" width="139" alt="Google Play" />
              <img :src="googlePlayDarkImg" class="dark-mode-img" width="139" alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <img :src="screenImg" width="900" alt="Mobile app screens" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import {
  palmBranchLeftDarkImg,
  palmBranchRightLightImg,
  palmBranchLeftLightImg,
  palmBranchRightDarkImg,
  appStoreLightImg,
  googlePlayLightImg,
  googlePlayDarkImg,
  appStoreDarkImg,
  screenImg
} from '@/assets/data/image'
import { purchaseData } from '@/views/landings/mobile-app-3/data'
</script>
