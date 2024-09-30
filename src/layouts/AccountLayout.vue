<template>
  <LoadingSpinner :is-loading="false" />

  <main class="page-wrapper">
    <Navbar :isTransparent="false" stuck border-bottom />

    <b-container class="pt-5">
      <b-row>
        <Sidebar />

        <slot />
      </b-row>
    </b-container>
  </main>

  <AccountFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import Navbar from '@/layouts/partials/Navbar.vue';
import Sidebar from '@/layouts/partials/AccountSidebar.vue';
import AccountFooter from '@/layouts/partials/AccountFooter.vue';
import BackToTop from '@/layouts/partials/BackToTop.vue';
</script>
