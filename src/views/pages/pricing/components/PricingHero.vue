<template>
  <section class="bg-dark py-4" data-bs-theme="dark">
    <b-container class="pb-2 py-lg-3">
      <!-- Breadcrumb -->
      <b-nav class="pb-4 mb-lg-3" aria-label="breadcrumb">
        <b-breadcrumb class="justify-content-center justify-content-lg-start mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Pricing</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>
      <h1 class="text-center mb-0">Transparent Pricing for You</h1>
    </b-container>
    <div style="height: 300px"></div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
