<template>
  <b-container class="mb-5 py-lg-3 py-xl-4 py-xxl-5">
    <div
      class="d-md-flex align-items-center justify-content-between text-md-start text-center pt-1 pt-sm-3 pt-md-4 mb-5"
    >
      <h2 class="h1 mb-md-0">Our talented team</h2>
      <a href="#" class="btn btn-primary">
        Join our team
        <Icon :icon="RightArrowAltIcon" class="lead ms-1" />
      </a>
    </div>

    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-lg-2 pb-xl-3">
      <b-col v-for="(member, idx) in teamData" :key="idx">
        <TeamCard :member="member" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import TeamCard from '@/views/pages/about-3/components/TeamCard.vue'
import { teamData } from '../data'
</script>
