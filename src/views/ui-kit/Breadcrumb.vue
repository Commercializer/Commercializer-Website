<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Breadcrumb"
      description="Indicate the current page’s location within a navigational hierarchy."
    />

    <section class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Example</h2>

      <div class="pt-1">
        <b-breadcrumb :items="breadcrumbItems" />

        <b-breadcrumb>
          <b-breadcrumb-item>
            <Icon :icon="HomeAltIcon" class="fs-lg" />
          </b-breadcrumb-item>
          <b-breadcrumb-item>Products lis</b-breadcrumb-item>
          <b-breadcrumb-item active>Single product</b-breadcrumb-item>
        </b-breadcrumb>

        <b-breadcrumb>
          <b-breadcrumb-item>
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item>Products list</b-breadcrumb-item>
          <b-breadcrumb-item active>Single product</b-breadcrumb-item>
        </b-breadcrumb>
      </div>
    </section>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'

const breadcrumbItems = ref([
  { text: 'Home', href: '#' },
  { text: 'Products list', href: '#' },
  { text: 'Single product' }
])
</script>
