<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Placeholders"
      description="Use loading placeholders for your components or pages to indicate something may still be loading."
    />

    <!-- Width -->
    <section id="placeholders-width" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Width</h2>
      <div class="pt-1">
        <b-placeholder cols="6"></b-placeholder>
        <b-placeholder class="w-75"></b-placeholder>
        <b-placeholder style="width: 33%"></b-placeholder>
      </div>
    </section>

    <!-- Color -->
    <section id="placeholders-color" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Color</h2>
      <div class="pt-1">
        <b-placeholder cols="12"></b-placeholder>
        <b-placeholder cols="12" variant="primary"></b-placeholder>
        <b-placeholder cols="12" variant="secondary"></b-placeholder>
        <b-placeholder cols="12" variant="success"></b-placeholder>
        <b-placeholder cols="12" variant="danger"></b-placeholder>
        <b-placeholder cols="12" variant="warning"></b-placeholder>
        <b-placeholder cols="12" variant="info"></b-placeholder>
        <div class="bg-dark p-2 my-2">
          <b-placeholder cols="12" variant="light"></b-placeholder>
        </div>
        <b-placeholder cols="12" variant="dark"></b-placeholder>
      </div>
    </section>

    <!-- Sizing -->
    <section id="placeholders-sizing" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizing</h2>
      <div class="pt-1">
        <b-placeholder cols="12" size="lg" class="mb-2"></b-placeholder>
        <b-placeholder cols="12" size="md"></b-placeholder>
        <b-placeholder cols="12" size="sm"></b-placeholder>
        <b-placeholder cols="12" size="xs"></b-placeholder>
      </div>
    </section>

    <!-- Animation -->
    <section id="placeholders-animation" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Animation</h2>
      <div class="pt-1">
        <b-placeholder animation="glow" cols="12" class="mb-2"></b-placeholder>
        <b-placeholder animation="wave" cols="12"></b-placeholder>
      </div>
    </section>

    <!-- Use case: Card -->
    <section id="placeholders-card" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Use case: Card</h2>
      <div class="pt-1">
        <b-placeholder-card class="border-0 shadow" style="max-width: 22rem">
          <template v-slot:img>
            <div class="position-relative">
              <b-placeholder class="card-img-top ratio ratio-16x9"></b-placeholder>
              <Icon
                :icon="ImageIcon"
                class="position-absolute top-50 start-50 translate-middle display-3 fw-normal opacity-35"
              />
            </div>
          </template>
          <h5>
            <b-placeholder cols="6" animation="glow"></b-placeholder>
            <span class="visually-hidden">Card title</span>
          </h5>
          <p class="">
            <b-placeholder animation="glow" size="sm" cols="7" class="me-2"></b-placeholder>
            <b-placeholder animation="glow" size="sm" cols="4"></b-placeholder>
            <b-placeholder animation="glow" size="sm" cols="4" class="me-2"></b-placeholder>
            <b-placeholder animation="glow" size="sm" cols="6"></b-placeholder>
            <b-placeholder animation="glow" size="sm" cols="8"></b-placeholder>
          </p>
        </b-placeholder-card>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import { Icon } from '@iconify/vue'
import ImageIcon from '@iconify/icons-bx/image'

const anchorData = [
  {
    id: 'placeholders-width',
    title: 'Width'
  },
  {
    id: 'placeholders-color',
    title: 'Color'
  },
  {
    id: 'placeholders-sizing',
    title: 'Sizing'
  },
  {
    id: 'placeholders-animation',
    title: 'Animation'
  },
  {
    id: 'placeholders-card',
    title: 'Use case: Card'
  }
]
</script>
