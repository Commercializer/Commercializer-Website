<template>
  <b-pagination
    class="justify-content-center pt-lg-3 pt-1"
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
  >
  </b-pagination>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  currentPage: Number,
  rows: Number,
  perPage: Number
})

const currentPage = ref(props.currentPage ?? 1)
const rows = ref(props.rows ?? 10)
const perPage = ref(props.perPage ?? 3)
</script>
