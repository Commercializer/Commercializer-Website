<template>
  <b-container>
    <div class="card bg-white border-primary shadow-sm px-4 px-lg-0" data-bs-theme="light">
      <b-row class="align-items-center py-3">
        <b-col xl="5" md="6" class="offset-lg-1 text-center text-md-start py-4 py-lg-5">
          <h2 class="h1">Our Response to COVID-19</h2>
          <h3 class="h4 text-primary">Get remote financial consulting help</h3>
          <p class="mb-4 mb-lg-5">
            At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus
            amet ultricies. Magna aliquam id nunc ut eu.
          </p>
          <a href="#" class="btn btn-primary">Find out more</a>
        </b-col>
        <b-col xl="6" lg="5" md="6">
          <Vue3Lottie
            class="mx-auto"
            :animation-data="financialLandingAnim"
            :speed="1.25"
            background-color="transparent"
            loop
            autoplay
            style="max-width: 416px"
          />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import financialLandingAnim from '@/assets/json/animation-financial-landing.json'
</script>
