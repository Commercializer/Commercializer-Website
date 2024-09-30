<template>
  <b-container class="pt-xl-2 pb-5 mb-md-3 mb-lg-5">
    <div
      class="d-md-flex align-items-center justify-content-between text-center text-md-start pb-1 pb-lg-0 mb-4 mb-lg-5"
    >
      <h2 class="h1 mb-md-0">Qualified Medical Specialists</h2>
      <a href="#" class="btn btn-outline-primary">
        See all doctors
        <Icon :icon="RightArrowAltIcon" class="bx fs-xl ms-2 me-n1"></Icon>
      </a>
    </div>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <b-col v-for="(member, idx) in teamData" :key="idx">
        <TeamCard :member="member" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import TeamCard from '@/views/landings/medical/components/TeamCard.vue'
import { teamData } from '../data'
</script>
