<template>
  <section class="overflow-hidden pt-2 pt-md-4 pt-lg-5">
    <b-container class="pt-1 pt-sm-0">
      <b-row class="align-items-center">
        <!-- Cursor parallax -->
        <b-col md="7" class="order-md-2 mb-3 mb-sm-2 mb-md-0">
          <Parallax custom-class="parallax" :custom-style="{ maxWidth: '746px' }">
            <div class="parallax-layer" data-depth="0.1">
              <img :src="phoneImg" alt="Phone" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img :src="scooterImg" alt="Scooters" />
            </div>
          </Parallax>
        </b-col>

        <!-- Text + button -->
        <b-col md="5" class="order-md-1">
          <h1 class="display-4 mb-ms-4">We ride. We care. We share.</h1>
          <p class="fs-xl pb-2 mb-4 mb-xl-5" style="max-width: 450px">
            Empower citizens to move with ease and style by sharing sustainable vehicles.
          </p>
          <div class="position-relative d-md-none d-lg-block mb-4" style="max-width: 416px">
            <i
              class="bx bxl-kickstarter d-flex d-dark-mode-none justify-content-center align-items-center position-absolute bg-dark fs-lg text-white rounded-1"
              style="
                top: 0;
                left: 63%;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: -0.525rem;
                margin-left: -0.5rem;
              "
            ></i>
            <i
              class="bx bxl-kickstarter d-none d-dark-mode-flex justify-content-center align-items-center position-absolute bg-white fs-lg badge text-dark rounded-1 p-0"
              style="
                top: 0;
                left: 63%;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: -0.525rem;
                margin-left: -0.5rem;
              "
            ></i>
            <div class="progress" style="height: 6px">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 63%"
                aria-valuenow="63"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <ul class="list-unstyled d-md-none d-lg-block pb-1 pb-xl-0 mb-4 mb-xl-5">
            <li class="d-flex align-items-center mb-2">
              <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
              $8,294 pledged
            </li>
            <li class="d-flex align-items-center mb-2">
              <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
              63% funded
            </li>
            <li class="d-flex align-items-center mb-2">
              <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
              15 days to go
            </li>
          </ul>
          <a href="#" class="btn btn-lg btn-primary w-100 w-sm-auto">
            Back us on Kickstarter
            <Icon :icon="SrightArrowIcon" class="bx lead ms-2 me-n1"></Icon>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Parallax from '@/components/Parallax.vue'
import { Icon } from '@iconify/vue'
import CheckCircleIcon from '@iconify/icons-bx/bx-check-circle'
import SrightArrowIcon from '@iconify/icons-bx/bxs-right-arrow-alt'
import phoneImg from '@/assets/img/landing/startup/hero/phone.png'
import scooterImg from '@/assets/img/landing/startup/hero/scooters.png'
</script>
