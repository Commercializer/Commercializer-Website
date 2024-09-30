<template>
  <b-container class="mb-5 pt-md-2 pt-lg-4 pt-xl-5">
    <h2 class="h1 my-4 pt-2 text-center">The benefits of world-changing drone</h2>
    <b-row class="pb-4">
      <b-col md="3" cols="6" class="order-md-1 order-2">
        <div class="d-flex flex-column justify-content-between h-100 text-center">
          <div class="mt-md-5 mt-4">
            <img :src="batteryImg" alt="Icon" class="d-inline-block mb-4" />
            <h3 class="h4 mb-0 lh-1">
              <span class="d-block mb-2 fs-base fw-normal">Flight time</span>
              60 min
            </h3>
          </div>

          <div class="mt-md-5 mt-4">
            <img :src="droneImg" alt="Icon" class="d-inline-block mb-4" />
            <h3 class="h4 mb-0 lh-1">
              <span class="d-block mb-2 fs-base fw-normal">Obstacle sensing</span>
              5-Direction
            </h3>
          </div>

          <div class="mt-md-5 mt-4">
            <img :src="monitorImg" alt="Icon" class="d-inline-block mb-4" />
            <h3 class="h4 mb-0 lh-1">
              <span class="d-block mb-2 fs-base fw-normal">Ultra-clear video</span>
              4K
            </h3>
          </div>
        </div>
      </b-col>
      <b-col md="6" cols="12" class="order-md-2 order-1">
        <div class="d-flex flex-column justify-content-between h-100">
          <div class="mx-md-n5 mb-md-n5">
            <img :src="imageImg" alt="Image" />
          </div>

          <div class="row row-cols-2 mt-md-5 mt-4 text-center">
            <div class="col">
              <img :src="thermometerImg" alt="Icon" class="d-inline-block mb-4" />
              <h3 class="h4 mb-0 lh-1">
                <span class="d-block mb-2 fs-base fw-normal">Working temperature</span>
                -10°C to 40°C
              </h3>
            </div>

            <div class="col">
              <img :src="ledLightImg" alt="Icon" class="d-inline-block mb-4" />
              <h3 class="h4 mb-0 lh-1">
                <span class="d-block mb-2 fs-base fw-normal">For night time</span>
                LED searchlight
              </h3>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="3" cols="6" class="order-md-3 order-3">
        <div class="d-flex flex-column justify-content-between h-100 text-center">
          <div class="mt-md-5 mt-4">
            <img :src="zoomInImg" alt="Icon" class="d-inline-block mb-4" />
            <h3 class="h4 mb-0 lh-1">
              <span class="d-block mb-2 fs-base fw-normal">Opti l camera</span>
              2x zoom
            </h3>
          </div>

          <div class="mt-md-5 mt-4">
            <img :src="computerMicroImg" alt="Icon" class="d-inline-block mb-4" />
            <h3 class="h4 mb-0 lh-1">
              <span class="d-block mb-2 fs-base fw-normal">Sensor</span>
              1 inch
            </h3>
          </div>

          <div class="mt-md-5 mt-4">
            <img :src="audioImg" alt="Icon" class="d-inline-block mb-4" />
            <h3 class="h4 mb-0 lh-1">
              <span class="d-block mb-2 fs-base fw-normal">Noise reduction</span>
              4dB
            </h3>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import batteryImg from '@/assets/img/landing/product/benefits/battery.svg'
import audioImg from '@/assets/img/landing/product/benefits/audio.svg'
import computerMicroImg from '@/assets/img/landing/product/benefits/computer-microprocessor.svg'
import imageImg from '@/assets/img/landing/product/benefits/image.png'
import ledLightImg from '@/assets/img/landing/product/benefits/led-light.svg'
import monitorImg from '@/assets/img/landing/product/benefits/monitor.svg'
import thermometerImg from '@/assets/img/landing/product/benefits/thermometer.svg'
import zoomInImg from '@/assets/img/landing/product/benefits/zoom-in.svg'
import droneImg from '@/assets/img/landing/product/benefits/drone.svg'
</script>
