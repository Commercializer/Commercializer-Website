<template>
  <section class="position-relative pt-md-3 pt-lg-5 mb-md-3 mb-lg-5">
    <b-container class="position-relative zindex-5 pt-5">
      <b-row class="mt-4 pt-5">
        <b-col xl="4" lg="5" class="text-center text-lg-start pb-3 pb-md-4 pb-lg-0">
          <h1 class="fs-xl text-uppercase">Professional Medical Center</h1>
          <h3 class="display-4 pb-md-2 pb-lg-4">We Take Care of Your Health</h3>
          <p class="fs-lg">Don't have insurance? <a href="#" class="fw-medium">Click here.</a></p>
        </b-col>
        <Rellax
          custom-class="col-xl-5 col-lg-6 offset-xl-1 position-relative zindex-5 mb-5 mb-lg-0"
        >
          <div
            class="rellax card bg-primary border-0 shadow-primary py-2 p-sm-4 p-lg-5"
            data-rellax-speed="-1"
            data-disable-parallax-down="lg"
          >
            <div class="card-body p-lg-3">
              <h2 class="text-light pb-1 pb-md-3">Silicon Medical Center</h2>
              <p class="fs-lg text-light pb-2 pb-md-0 mb-4 mb-md-5">
                Our medical center provides a wide range of health care services. We use only
                advanced technologies to keep your family happy and healthy, without any unexpected
                surprises. We appreciate your trust greatly. Our patients choose us and our services
                because they know we are the best.
              </p>
              <a href="#" class="btn btn-light btn-lg">
                About Us
                <Icon :icon="RightArrowAltIcon" class="bx lh-1 fs-4 ms-2 me-n2"></Icon>
              </a>
            </div>
          </div>
        </Rellax>
      </b-row>
      <div class="d-none d-lg-block" style="margin-top: -165px"></div>
      <b-row class="align-items-end">
        <Rellax custom-class="col-lg-6 d-none d-lg-block">
          <img
            :src="heroImg2"
            class="rellax rounded-3"
            alt="Image"
            data-rellax-speed="1.35"
            data-disable-parallax-down="md"
          />
        </Rellax>
        <b-col
          lg="6"
          class="d-flex flex-column flex-md-row align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center ps-xl-5 mb-4 mb-md-0">
            <div
              class="btn btn-icon btn-secondary btn-lg pe-none rounded d-lg-none d-xl-inline-flex"
            >
              <Icon :icon="TimeIcon" class="bx text-primary fs-3"></Icon>
            </div>
            <ul class="list-unstyled ps-3 ps-lg-0 ps-xl-3 mb-0">
              <li><strong class="text-dark">Mon – Fri:</strong> 9:00 am – 22:00 pm</li>
              <li><strong class="text-dark">Sat – Sun:</strong> 9:00 am – 20:00 pm</li>
            </ul>
          </div>
          <a href="#" class="btn btn-primary btn-lg shadow-primary">Make an appointment</a>
        </b-col>
      </b-row>
    </b-container>
    <div
      class="d-none d-lg-block position-absolute top-0 end-0 w-50 d-flex flex-column ps-3"
      style="height: calc(100% - 108px)"
    >
      <div
        class="w-100 h-100 overflow-hidden bg-position-center bg-repeat-0 bg-size-cover"
        :style="{ backgroundImage: `url('${heroImg1}')` }"
        style="border-bottom-left-radius: 0.5rem"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImg1 from '@/assets/img/landing/medical/hero-img-1.jpg'
import heroImg2 from '@/assets/img/landing/medical/hero-img-2.jpg'
import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import TimeIcon from '@iconify/icons-bx/bx-time'
import Rellax from '@/components/Rellax.vue'
</script>
