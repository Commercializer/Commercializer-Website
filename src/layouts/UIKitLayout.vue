<template>
  <LoadingSpinner :is-loading="false" />

  <CustomNavbar :top-bar-link="uiKitSidebarMobileLinkData" />
  <CustomSidebar
    badge="UI Kit"
    badge-variant="warning"
    :sidebar-link="uiKitSidebarLinkData"
    :mobile-link="uiKitSidebarMobileLinkData"
  />
  <main class="docs-container pt-5">
    <b-container fluid class="px-xxl-5 px-lg-4 pt-4 pt-lg-5 pb-2 pb-lg-4">
      <slot name="default" />
    </b-container>
  </main>

  <slot name="anchor-navigation" />

  <BackToTop />
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import CustomNavbar from '@/layouts/partials/CustomNavbar.vue'
import CustomSidebar from '@/layouts/partials/CustomSidebar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { uiKitSidebarLinkData, uiKitSidebarMobileLinkData } from '@/layouts/data'
</script>
