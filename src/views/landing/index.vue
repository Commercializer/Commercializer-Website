<template>
  <LandingLayout>
    <template v-slot:body>
      <LandingHero />

      <!-- Main features (Slider on narrow scrreens) -->
      <LandingFeature />

      <!-- Landings (Grid) -->
      <b-container id="landings" class="text-center pt-5 mt-2 mt-md-4 mt-lg-5">
        <h2 class="h1 pt-2 pt-lg-0">Landing Pages</h2>
        <p class="fs-lg pb-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">
          Choose from pre-built layouts of our unique landing pages
        </p>
        <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3">
          <b-col
            class="card-hover shadow-none bg-none position-relative mb-4 mb-lg-5"
            v-for="(item, index) in demoLandingPagesData"
            :key="index"
          >
            <img
              :src="item.image"
              class="b-block border rounded-3 shadow-sm"
              alt="Mobile App Showcase v.1"
            />
            <h3 class="h5 mt-4 mb-3 mb-lg-0">
              <router-link :to="{ name: item.name }" class="stretched-link">{{
                item.title
              }}</router-link>
            </h3>
          </b-col>

          <b-col class="position-relative mb-4 mb-lg-5">
            <div class="position-relative">
              <img
                :src="placeholderImg"
                class="b-block border rounded-3 shadow-sm"
                alt="Placeholder"
              />
              <div
                class="position-absolute"
                style="top: 38.4%; padding-left: 15.38%; padding-right: 15.38%"
              >
                <img
                  :src="wireframeImg"
                  class="placeholder placeholder-wave bg-transparent opacity-80"
                  alt=""
                />
              </div>
            </div>
            <h3 class="h5 mt-4 mb-3 mb-lg-0">
              <span class="nav-link justify-content-center fw-bold pe-none p-0">Coming Soon</span>
            </h3>
          </b-col>
        </b-row>
      </b-container>

      <!-- More features (Grid) -->
      <b-container class="pt-4 pb-5 py-lg-5">
        <h2 class="h1 text-center pt-1 pt-md-3 pt-lg-4 pb-3 pb-md-4 mb-0 mb-lg-3">
          More Silicon Features
        </h2>
        <b-row
          class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 g-xl-4 pb-md-3 pb-lg-5"
        >
          <b-col v-for="(data, index) in moreFeatureData" :key="index">
            <div class="card h-100 bg-transparent border-0">
              <div class="bg-secondary rounded-3 w-auto lh-1 p-2 mt-4 ms-4 me-auto">
                <Icon v-if="data.icon" class="fs-2" :icon="data.icon"></Icon>
              </div>
              <div class="card-body">
                <h3 class="h6">{{ data.title }}</h3>
                <p class="fs-sm mb-0">{{ data.description }}</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <template v-slot:footer>
      <LandingFooter />
    </template>
  </LandingLayout>
</template>

<script lang="ts" setup>
import LandingFeature from '@/views/landing/components/Feature.vue'
import LandingHero from '@/views/landing/components/LandingHero.vue'
import LandingFooter from '@/views/landing/components/LandingFooter.vue'

import { Icon } from '@iconify/vue'

import { demoLandingPagesData, moreFeatureData } from '@/views/landing/data'

import placeholderImg from '@/assets/img/landing/intro/landings/placeholder.jpg'
import wireframeImg from '@/assets/img/landing/intro/landings/wireframe.svg'
import LandingLayout from '@/layouts/LandingLayout.vue'
</script>
