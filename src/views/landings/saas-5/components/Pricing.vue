<template>
  <section
    class="position-relative bg-dark pt-lg-4 pt-xl-5"
    style="background: linear-gradient(90deg, #0b0f19 0%, #172033 51.04%, #0b0f19 100%)"
  >
    <Jarallax custom-class="jarallax position-absolute top-0 start-0 w-100 h-100">
      <div class="jarallax-img" :style="{ backgroundImage: `url('${bgpatternImg}')` }"></div>
    </Jarallax>
    <b-container class="position-relative zindex-2 pt-5" data-bs-theme="dark">
      <h2 class="h1 text-center pt-2 pt-sm-3 pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-2">
        Silicon vs Custom development
      </h2>
      <div class="overflow-x-auto pb-4">
        <div class="position-relative ms-n4 ms-md-0" style="min-width: 800px">
          <div
            class="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-none d-lg-block"
            style="width: 342px"
          ></div>
          <div
            class="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-lg-none"
            style="width: 300px"
          ></div>

          <!-- Row -->
          <b-row class="row-cols-3 align-items-center position-relative zindex-2 g-0">
            <b-col>&nbsp;</b-col>
            <b-col class="py-2 py-md-3">
              <div class="text-center py-4 mx-auto" style="width: 264px">
                <h3 class="h4 mb-sm-4">Silicon</h3>
                <a
                  href="#"
                  class="btn btn-primary bg-gradient-primary w-100 border-0 rounded-pill mb-2"
                  >Get started - Free</a
                >
                <p class="text-body fs-xs mb-0">Our pricing starts at as low as $1,299 per team</p>
              </div>
            </b-col>
            <b-col class="text-center pe-lg-5">
              <h3 class="h4 pt-3 pt-md-4 mb-0 mx-auto" style="width: 264px">Building In-House</h3>
            </b-col>
            <div class="position-relative w-100 opacity-50">
              <span
                class="position-absolute top-0 start-0 w-100 h-1"
                style="
                  background: linear-gradient(
                    270deg,
                    #0f1522 0%,
                    rgba(11, 15, 25, 0) 54.17%,
                    #0f1522 98.44%
                  );
                "
              ></span>
              <span class="d-block w-100 h-1 bg-gradient-primary"></span>
            </div>
          </b-row>

          <!-- Row -->
          <b-row
            class="row-cols-3 align-items-center position-relative zindex-2 g-0"
            v-for="(item, idx) in pricingData"
            :key="idx"
          >
            <b-col class="py-3 py-md-4 ps-lg-5">
              <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px">
                {{ item.head }}
              </div>
            </b-col>
            <b-col class="py-3 py-md-4">
              <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
                <div class="text-white fs-lg fw-semibold">{{ item.title1 }}</div>
                <div class="text-body fs-xs">{{ item.description1 }}</div>
              </div>
            </b-col>
            <b-col class="py-3 py-md-4 pe-lg-5">
              <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
                <div class="text-white fs-lg fw-semibold">{{ item.title2 }}</div>
                <div class="text-body fs-xs">{{ item.description2 }}</div>
              </div>
            </b-col>
            <div class="position-relative w-100 opacity-50">
              <span
                class="position-absolute top-0 start-0 w-100 h-1"
                style="
                  background: linear-gradient(
                    270deg,
                    #0f1522 0%,
                    rgba(11, 15, 25, 0) 54.17%,
                    #0f1522 98.44%
                  );
                "
              ></span>
              <span class="d-block w-100 h-1 bg-gradient-primary"></span>
            </div>
          </b-row>
        </div>
      </div>
    </b-container>
    <div class="d-none d-xl-block" style="height: 300px"></div>
    <div class="d-none d-md-block d-xl-none" style="height: 260px"></div>
    <div class="d-md-none" style="height: 230px"></div>
    <div
      class="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1"
      style="color: var(--si-body-bg)"
    >
      <div
        class="position-relative start-50 translate-middle-x flex-shrink-0"
        style="width: 3774px"
      >
        <svg
          width="3774"
          height="201"
          viewBox="0 0 3774 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bgpatternImg from '@/assets/img/landing/saas-5/pricing-bg-pattern.png'
import { pricingData } from '../data'
import Jarallax from '@/components/Jarallax.vue'
</script>
