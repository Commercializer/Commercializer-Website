<template>
  <b-container class="mt-lg-4 pt-5">
    <b-breadcrumb class="mb-0 pt-5">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1"></Icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>{{ subTitle }}</b-breadcrumb-item>
    </b-breadcrumb>
  </b-container>
</template>

<script setup lang="ts">
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import { Icon } from '@iconify/vue'

defineProps({
  subTitle: {
    type: String
  }
})
</script>
