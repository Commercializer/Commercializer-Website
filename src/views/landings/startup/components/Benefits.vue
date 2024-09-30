<template>
  <!-- Backer benefits -->
  <b-container class="py-2 py-sm-3 py-md-4 py-lg-5">
    <b-row class="py-5 my-md-2 my-lg-3">
      <b-col lg="5" xl="4" class="mb-5 mb-lg-0">
        <div class="text-center text-lg-start pe-lg-5 pe-xl-0">
          <h2 class="h1 pb-3 pb-lg-5">
            We need your <span class="text-primary">support!</span> Become a backer on Kickstarter
            now and get some <span class="text-primary">benefits</span>
          </h2>
          <a href="#" class="btn btn-lg btn-primary w-100 w-sm-auto">
            Back us on Kickstarter
            <i class="bx bx-right-arrow-alt lead ms-2 me-n1"></i>
          </a>
        </div>
      </b-col>
      <b-col lg="7" xl="6" class="offset-xl-2">
        <b-row class="row-cols-1 row-cols-sm-2 gy-5">
          <b-col class="pt-md-2" v-for="(benefit, idx) in benefitData" :key="idx">
            <div class="text-center text-sm-start pe-sm-3 pe-xl-4">
              <img :src="benefit.image" class="d-inline-block mb-4" width="60" alt="Icon" />
              <h3 class="h4 mb-2">{{ benefit.title }}</h3>
              <p class="fs-lg mb-0">{{ benefit.description }}</p>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { benefitData } from '../data'
</script>
