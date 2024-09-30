<template>
  <b-container class="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
    <h2 class="h1 pb-2 pb-md-0 mb-4 mb-md-5">How We Work?</h2>
    <div class="steps steps-sm steps-horizontal-md pb-2 pb-sm-3">
      <div class="step" v-for="(item, idx) in workData" :key="idx">
        <div class="step-number">
          <div class="step-number-inner">{{ idx + 1 }}</div>
        </div>
        <div class="step-body">
          <h3 class="h4 mb-3">{{ item.title }}</h3>
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { workData } from '../data'
</script>
