<template>
  <!-- Image grid (Parallax) -->
  <b-container class="position-relative pt-1 pt-md-3">
    <Rellax>
      <b-row class="align-items-start">
        <div
          class="rellax col-lg-5 col-sm-6 mb-4 mb-sm-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.5"
          data-disable-parallax-down="sm"
        >
          <img
            src="@/assets/img/portfolio/single/01.jpg"
            class="rounded-3"
            width="526"
            alt="Image"
          />
        </div>
        <div
          class="rellax col-lg-7 col-sm-6 d-sm-flex justify-content-end pt-sm-4 pt-lg-5 mt-md-3 mb-4 mb-sm-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="-1.25"
          data-disable-parallax-down="sm"
        >
          <div>
            <img
              src="@/assets/img/portfolio/single/03.jpg"
              class="rounded-3"
              width="416"
              alt="Image"
            />
          </div>
        </div>
        <div
          class="rellax col-lg-5 col-sm-6 d-sm-flex justify-content-lg-end pt-sm-5 mt-lg-5 mb-4 mb-sm-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="-1.25"
          data-disable-parallax-down="sm"
        >
          <div>
            <img
              src="@/assets/img/portfolio/single/04.jpg"
              class="rounded-3"
              width="416"
              alt="Image"
            />
          </div>
        </div>
        <div
          class="rellax col-lg-7 col-sm-6 d-sm-flex justify-content-center mt-sm-n5 mb-4 mb-sm-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.25"
          data-disable-parallax-down="sm"
        >
          <div>
            <img
              src="@/assets/img/portfolio/single/05.jpg"
              class="d-block rounded-3 mt-xl-n5"
              width="526"
              alt="Image"
            />
          </div>
        </div>
      </b-row>
      <b-row
        class="position-sm-absolute top-50 start-0 translate-middle-sm-y w-100 d-flex mt-md-n5"
      >
        <b-col
          lg="5"
          sm="6"
          class="rellax offset-sm-3 offset-lg-4 mt-sm-n5"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.4"
          data-disable-parallax-down="sm"
        >
          <img
            src="@/assets/img/portfolio/single/02.jpg"
            class="d-block rounded-3 mt-xl-n5"
            width="526"
            alt="Image"
          />
        </b-col>
      </b-row>
    </Rellax>
  </b-container>
</template>

<script setup lang="ts">
import Rellax from '@/components/Rellax.vue'
</script>
