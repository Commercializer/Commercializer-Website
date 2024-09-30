<template>
  <b-container id="speakers" class="py-5 my-2 my-md-4 my-lg-5">
    <div
      class="d-md-flex align-items-center justify-content-between text-center text-md-start pt-md-1 pt-lg-3"
    >
      <h2 class="h1 mb-4 mb-md-0 me-md-3">World-Class Speakers</h2>
      <a href="#" class="btn btn-primary btn-lg">
        Become a speaker
        <Icon :icon="RightArrowAltIconIcon" class="fs-4 lh-1 ms-2 me-n1" />
      </a>
    </div>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mt-lg-4">
      <b-col v-for="(speaker, idx) in speakerData" :key="idx">
        <SpeakerCard :speakers="speaker" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { speakerData } from '@/views/landings/conference/data'
import SpeakerCard from '@/views/landings/conference/components/SpeakerCard.vue'

import { Icon } from '@iconify/vue'
import RightArrowAltIconIcon from '@iconify/icons-bx/bx-right-arrow-alt'
</script>
