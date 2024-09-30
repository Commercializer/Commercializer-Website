<template>
  <b-container class="pt-4 pt-lg-0 pb-4 pb-lg-5">
    <h2 class="h1 text-center pb-3 pb-md-0 mb-md-5">How Does It Work?</h2>
    <div class="steps">
      <div
        class="step pt-0 pb-5"
        v-for="(process, idx) in processData"
        :key="idx"
        :class="idx == 0 ? 'pt-md-3' : 'pt-md-4'"
      >
        <div class="step-number">
          <div class="step-number-inner">{{ idx + 1 }}</div>
        </div>
        <div class="step-body d-flex align-items-center ps-xl-5">
          <div
            class="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.3"
            data-disable-parallax-down="lg"
          >
            <img
              :src="process.image.dark"
              class="d-dark-mode-none"
              width="306"
              alt="Illustration"
            />
            <img
              :src="process.image.light"
              class="d-none d-dark-mode-block"
              width="306"
              alt="Illustration"
            />
          </div>
          <div
            class="rellax ps-md-4 ps-xl-5"
            data-rellax-percentage="0.5"
            data-rellax-speed="0.4"
            data-disable-parallax-down="lg"
          >
            <h3 class="h4">{{ process.title }}</h3>
            <p class="mb-0">{{ process.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { processData } from '../data'
</script>
