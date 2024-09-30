<template>
  <LoadingSpinner :is-loading="false" />

  <main class="page-wrapper">
    <Navbar :isTransparent="false" :absolute="false" :fixedTop="true" />

    <slot name="body" />
  </main>

  <slot name="footer" />

  <BackToTop />
</template>

<script lang="ts" setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import Navbar from '@/layouts/partials/Navbar.vue';
import BackToTop from '@/layouts/partials/BackToTop.vue';
</script>
