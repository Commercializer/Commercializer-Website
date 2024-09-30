<template>
  <b-container class="my-5 pt-xl-5 pt-lg-4 pt-md-3 pb-lg-5 pb-md-4 pb-3">
    <h2 class="h1 mt-xl-3 mb-4 pb-3 text-center">Why Silicon App?</h2>

    <b-tabs content-class="mb-xl-3 py-4 bg-secondary rounded-3" align="center">
      <!-- Economic Analysis -->
      <b-tab active>
        <template v-slot:title>
          <Icon :icon="StarIcon" class="bx opacity-60 me-2 fs-lg"></Icon>
          Economic Analysis
        </template>

        <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
          <b-col lg="4" md="5" class="offset-lg-1 text-center text-md-start">
            <h3 class="h2 mb-lg-4 mb-3">Economic Analysis</h3>
            <p class="mb-4 pb-lg-3">
              It is a xlong established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters
            </p>
            <a href="#" class="btn btn-primary">Learn more</a>
          </b-col>
          <b-col lg="6" md="7" class="mt-4 pt-md-0 pt-2">
            <img
              src="@/assets/img/landing/saas-4/about/01.png"
              class="d-block my-lg-2 mx-auto me-md-0"
              width="595"
              alt="Image"
            />
          </b-col>
        </b-row>
      </b-tab>

      <!-- Investments -->
      <b-tab>
        <template v-slot:title>
          <Icon :icon="BriefcaseAltIcon" class="bx opacity-60 me-2 fs-lg"></Icon>
          Investments
        </template>

        <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
          <b-col lg="5" md="6" class="offset-lg-1 text-center text-md-start">
            <h3 class="h2 mb-lg-4 mb-3">Investments</h3>
            <div class="d-sm-flex mb-4 pb-lg-3 text-sm-start">
              <p class="w-100 mb-sm-0">
                It is a long established fact that a reader will be distracted by the readable
                content.
              </p>
              <span class="d-sm-block d-none w-1 mx-4">
                <span class="d-dark-mode-none d-block w-100 h-100 bg-black opacity-25"></span>
                <span class="d-dark-mode-block d-none w-100 h-100 bg-white opacity-25"></span>
              </span>
              <p class="w-100 mb-sm-0">
                Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio
              </p>
            </div>
            <a href="#" class="btn btn-primary">Learn more</a>
          </b-col>
          <b-col lg="5" md="6" class="mt-4 pt-md-0 pt-2">
            <img
              src="@/assets/img/landing/saas-4/about/02.png"
              class="d-block my-lg-2 mx-auto me-md-0 rounded-3"
              width="595"
              alt="Image"
            />
          </b-col>
        </b-row>
      </b-tab>

      <!-- Corporate Finance -->
      <b-tab>
        <template v-slot:title>
          <Icon :icon="BarChartAltIcon" class="bx opacity-60 me-2 fs-lg"></Icon>
          Corporate Finance
        </template>

        <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
          <b-col lg="4" md="5" class="offset-lg-1 text-center text-md-start">
            <h3 class="h2 mb-lg-4 mb-3">Corporate Finance</h3>
            <ul class="list-unstyled mb-4 pb-lg-3">
              <li class="d-flex justify-content-md-start justify-content-center mt-2">
                <Icon :icon="CheckCircleIcon" class="bx me-2 fs-5 text-primary"></Icon>
                Transparent work management
              </li>
              <li class="d-flex justify-content-md-start justify-content-center mt-2">
                <Icon :icon="CheckCircleIcon" class="bx me-2 fs-5 text-primary"></Icon>
                Track your progress with interactive charts
              </li>
              <li class="d-flex justify-content-md-start justify-content-center mt-2">
                <Icon :icon="CheckCircleIcon" class="bx me-2 fs-5 text-primary"></Icon>
                Easiest way to track time spent on tasks
              </li>
            </ul>
            <a href="#" class="btn btn-primary">Learn more</a>
          </b-col>
          <b-col lg="6" md="7" class="mt-4 pt-md-0 pt-2">
            <img
              src="@/assets/img/landing/saas-4/about/03.png"
              class="d-block my-lg-2 mx-auto me-md-0 rounded-3"
              width="595"
              alt="Image"
            />
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import StarIcon from '@iconify/icons-bx/bx-star'
import BriefcaseAltIcon from '@iconify/icons-bx/bx-briefcase-alt-2'
import BarChartAltIcon from '@iconify/icons-bx/bx-bar-chart-alt-2'
import CheckCircleIcon from '@iconify/icons-bx/bx-check-circle'
</script>
