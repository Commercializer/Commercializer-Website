<template>
  <div class="bg-secondary rounded-3 my-2 my-md-4 my-lg-5 py-5 px-3 px-md-0">
    <b-row class="align-items-center">
      <b-col
        md="5"
        class="offset-lg-1 text-center text-md-start ps-md-5 ps-lg-0 ps-xl-5 pb-2 pb-md-0 mb-4 mb-md-0"
      >
        <p class="lead mb-3">Ready to get started?</p>
        <h2 class="h1 pb-2 pb-md-4">
          Take Your <span class="text-primary">Skills</span> to the Next Level
        </h2>
        <a href="#" class="btn btn-primary btn-lg">Sign up now!</a>
      </b-col>
      <b-col lg="6" md="7">
        <div class="d-table mx-auto">
          <img :src="step4Dark" class="d-dark-mode-none" width="380" alt="Illustration" />
          <img :src="step4Light" class="d-none d-dark-mode-block" width="380" alt="Illustration" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import step4Dark from '@/assets/img/landing/online-courses/steps/04-dark.svg'
import step4Light from '@/assets/img/landing/online-courses/steps/04-light.svg'
</script>
