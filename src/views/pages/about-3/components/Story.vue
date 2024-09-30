<template>
  <b-container class="mb-5 pt-md-1 pt-lg-4 pt-xl-5">
    <div class="mt-4 py-2 pb-sm-3 pb-md-4 pb-lg-5 mx-auto text-center" style="max-width: 46.625rem">
      <h2 class="h1 mb-4">In 2017 we changed the game</h2>
      <p class="mb-4">
        Ac vel feugiat elementum turpis. Euismod eget aliquam non, aliquam dui augue amet lectus
        donec adipiscing quis molestie eget urna.
      </p>
    </div>

    <!-- Steps -->
    <div
      class="steps steps-center steps-sm steps-horizontal-lg"
      style="
        --si-steps-number-size-sm: 1.5rem;
        --si-steps-number-inner-size-sm: 1rem;
        --si-steps-number-bg: rgba(99, 102, 241, 0.2);
        --si-steps-number-inner-bg: #6366f1;
      "
    >
      <div
        class="step w-100 mx-auto"
        style="max-width: 26rem"
        v-for="(item, idx) in storyData"
        :key="idx"
      >
        <div class="step-number">
          <div class="step-number-inner"></div>
        </div>
        <div class="step-body">
          <h3 class="mb-3">{{ item.year }}</h3>
          <p class="mb-0">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { storyData } from '../data'
</script>
