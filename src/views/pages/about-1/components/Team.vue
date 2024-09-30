<template>
  <b-container class="py-5 my-md-3 my-lg-5">
    <h2 class="h1 text-center pt-1 pb-3 mb-3 mb-lg-4">Our Leadership</h2>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <b-col v-for="(member, idx) in teamMemberData" :key="idx">
        <TeamCard :member="member" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { teamMemberData } from '@/views/pages/about-1/data'
import TeamCard from '../components/TeamCard.vue'
</script>
