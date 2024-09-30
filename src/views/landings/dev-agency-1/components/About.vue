<template>
  <b-container class="pt-5 mt-2 mt-md-4 mt-lg-5">
    <b-row class="pt-xl-3">
      <b-col md="5" class="text-center text-md-start pb-5">
        <h1 class="mb-4">Award-Winning Software Company</h1>
        <p class="fs-lg pb-lg-3 mb-4">
          We create diverse, complex, web and mobile solutions for any business need. With us you
          get quality software and perfect service every time.
        </p>
        <a href="#" class="btn btn-primary shadow-primary btn-lg">More About Us</a>
        <div class="mt-3 mt-sm-0 pt-4 pt-sm-5 mt-xl-4">
          <h2 class="h6 mb-4">Some of our awards:</h2>
          <img :src="awards" alt="Awards" />
        </div>
      </b-col>
      <b-col xl="6" md="7" class="offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
        <img :src="aboutImg" class="rounded-3 shadow-sm" alt="Image" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import awards from '@/assets/img/landing/software-agency-1/awards.svg'
import aboutImg from '@/assets/img/landing/software-agency-1/about-img.jpg'
</script>
