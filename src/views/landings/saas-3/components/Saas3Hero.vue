<template>
  <section
    class="bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4"
    :style="{ backgroundImage: `url('${herobgImg}')` }"
    data-bs-theme="dark"
  >
    <b-container class="position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
      <b-row class="pt-3 pb-2 py-md-4">
        <!-- Text -->
        <b-col xl="5" md="6" class="pt-lg-5 text-center text-md-start mb-4 mb-md-0">
          <h1 class="display-3 pb-2 pb-sm-3">Make Your Life Even Easier with Crypto Bank</h1>
          <p class="text-body fs-lg d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5">
            Odio venenatis a, non egestas ut ultrices ultrices quis orci ipsum eu tellus tempor sed
            amet mauris pellentesque ut vitae.
          </p>
          <div class="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0">
            <a href="#" class="btn btn-lg btn-primary shadow-primary me-3 me-sm-4"
              >Start trial now</a
            >
            <a href="#" class="btn btn-lg btn-outline-secondary">Contact us</a>
          </div>
          <div
            class="d-flex align-items-center justify-content-center justify-content-md-start text-start pt-4 pt-lg-5 mt-xxl-5"
          >
            <div class="d-flex me-3">
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle"
                style="width: 52px; height: 52px"
              >
                <img :src="avatar14Img" class="rounded-circle" width="48" alt="Avatar" />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img :src="avatar8Img" class="rounded-circle" width="48" alt="Avatar" />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img :src="avatar15Img" class="rounded-circle" width="48" alt="Avatar" />
              </div>
            </div>
            <div class="text-light"><strong>400k+</strong> users already with us</div>
          </div>
        </b-col>

        <b-col xl="7" md="6" class="d-md-flex justify-content-end">
          <Parallax
            custom-class="parallax mx-auto ms-md-0 me-md-n5"
            :custom-style="{ maxWidth: '675px' }"
          >
            <div class="parallax-layer zindex-2" data-depth="0.1">
              <img :src="layer1Img" alt="Card" />
            </div>
            <div class="parallax-layer zindex-3" data-depth="0.25">
              <img :src="layer2Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="-0.15">
              <img :src="layer3Img" alt="Bubble" />
            </div>
          </Parallax>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import herobgImg from '@/assets/img/landing/saas-3/hero/hero-bg.jpg'
import avatar14Img from '@/assets/img/avatar/14.jpg'
import avatar8Img from '@/assets/img/avatar/08.jpg'
import avatar15Img from '@/assets/img/avatar/15.jpg'
import layer1Img from '@/assets/img/landing/saas-3/hero/layer01.png'
import layer2Img from '@/assets/img/landing/saas-3/hero/layer02.png'
import layer3Img from '@/assets/img/landing/saas-3/hero/layer03.png'
import Parallax from '@/components/Parallax.vue'
</script>
