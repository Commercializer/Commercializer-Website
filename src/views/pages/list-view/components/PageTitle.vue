<template>
  <b-container class="d-sm-flex align-items-center justify-content-between pb-4 mb-2 mb-lg-3">
    <h1 class="mb-sm-0 me-sm-3">Portfolio List</h1>
    <b-form-select v-model="selectedOption" :options="options" style="width: 240px"></b-form-select>
  </b-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref(null)

const options = [
  { text: 'All categories', value: null },
  { text: 'Web Design', value: 'Web Design' },
  { text: 'Graphic Design', value: 'Graphic Design' },
  { text: 'Branding', value: 'Branding' },
  { text: 'UI / UX', value: 'UI / UX' },
  { text: 'Motion Design', value: 'Motion Design' }
]
</script>
