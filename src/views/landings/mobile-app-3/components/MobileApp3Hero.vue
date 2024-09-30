<template>
  <!-- Hero -->
  <section class="position-relative overflow-hidden zindex-2 pt-4 pt-md-5">
    <b-container>
      <b-row class="justify-content-center align-items-center">
        <!-- Parallax gfx -->
        <b-col xl="6" lg="7" md="6" sm="8" class="col-10 offset-xl-1 order-md-2">
          <Parallax custom-class="parallax mx-auto" :custom-style="{ maxWidth: '556px' }">
            <div class="parallax-layer" data-depth="0.1">
              <img :src="layer1Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="-0.2">
              <img :src="layer2Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="-0.3">
              <img :src="layer3Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="0.4">
              <img :src="layer4Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="-0.1">
              <img :src="layer5Img" alt="Screen" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img :src="layer6Img" alt="Screen" />
            </div>
          </Parallax>
        </b-col>

        <!-- Text -->
        <b-col lg="5" md="6" class="text-center text-md-start order-md-1">
          <h1 class="display-5 mb-lg-4">Commercializing Innovations</h1>
          <p class="fs-xl pb-3 pb-lg-0 mb-4 mb-lg-5">
            Transforming groundbreaking ideas into market-leading products. 
          </p>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start"
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
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import layer1Img from '@/assets/img/landing/app-showcase-3/hero/layer01.png'
import layer2Img from '@/assets/img/landing/app-showcase-3/hero/layer02.png'
import layer3Img from '@/assets/img/landing/app-showcase-3/hero/layer03.png'
import layer4Img from '@/assets/img/landing/app-showcase-3/hero/layer04.png'
import layer5Img from '@/assets/img/landing/app-showcase-3/hero/layer05.png'
import layer6Img from '@/assets/img/landing/app-showcase-3/hero/layer06.png'
import appStoreLightImg from '@/assets/img/market/appstore-light.svg'
import appStoreDarkImg from '@/assets/img/market/appstore-dark.svg'
import googlePlayLightImg from '@/assets/img/market/googleplay-light.svg'
import googlePlayDarkImg from '@/assets/img/market/googleplay-dark.svg'
import Parallax from '@/components/Parallax.vue'
</script>
