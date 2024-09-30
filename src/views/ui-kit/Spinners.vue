<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Spinners"
      description="Indicate the loading state of a component or page."
    />

    <!-- Border spinner -->
    <section id="spinners-border" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Border spinner</h2>
      <div class="pt-1">
        <b-spinner class="m-2"> </b-spinner>
        <b-spinner class="text-muted m-2"> </b-spinner>
        <b-spinner class="text-primary m-2"> </b-spinner>
        <b-spinner class="text-accent m-2"> </b-spinner>
        <b-spinner class="text-secondary m-2"> </b-spinner>
        <b-spinner class="text-success m-2"> </b-spinner>
        <b-spinner class="text-danger m-2"> </b-spinner>
        <b-spinner class="text-warning m-2"> </b-spinner>
        <b-spinner class="text-info m-2"> </b-spinner>
        <div class="d-inline-block bg-dark mx-2">
          <b-spinner class="text-light my-2 mx-3"> </b-spinner>
        </div>
      </div>
    </section>

    <!-- Growing spinner -->
    <section id="spinners-growing" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Growing spinner</h2>
      <div class="pt-1">
        <b-spinner type="grow" class="m-2"> </b-spinner>
        <b-spinner type="grow" class="text-muted m-2"> </b-spinner>
        <b-spinner type="grow" class="text-primary m-2"> </b-spinner>
        <b-spinner type="grow" class="text-accent m-2"> </b-spinner>
        <b-spinner type="grow" class="text-secondary m-2"> </b-spinner>
        <b-spinner type="grow" class="text-success m-2"> </b-spinner>
        <b-spinner type="grow" class="text-danger m-2"> </b-spinner>
        <b-spinner type="grow" class="text-warning m-2"> </b-spinner>
        <b-spinner type="grow" class="text-info m-2"> </b-spinner>
        <div class="d-inline-block bg-dark mx-2">
          <b-spinner type="grow" class="text-light my-2 mx-3"> </b-spinner>
        </div>
      </div>
    </section>

    <!-- Size -->
    <section id="spinners-size" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Size</h2>
      <div class="pt-1">
        <div class="d-inline-block align-middle me-2">
          <b-spinner class="m-2" small></b-spinner>
          <b-spinner type="grow" small class="m-2"></b-spinner>
        </div>
        <div class="d-inline-block align-middle me-2">
          <b-spinner class="m-2"></b-spinner>
          <b-spinner type="grow" class="m-2"></b-spinner>
        </div>
        <div class="d-inline-block align-middle">
          <b-spinner class="m-2" style="width: 3.5rem; height: 3.5rem"></b-spinner>
          <b-spinner type="grow" class="m-2" style="width: 3.5rem; height: 3.5rem"></b-spinner>
        </div>
      </div>
    </section>

    <!-- Inside button -->
    <section id="spinners-button" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inside button</h2>
      <div class="pt-1">
        <b-button class="btn-icon pe-none me-1 my-1" variant="primary" aria-label="Loading...">
          <b-spinner small></b-spinner>
        </b-button>
        <b-button class="pe-none me-3 my-1" variant="primary">
          <b-spinner small class="me-2"></b-spinner>
          Loading...
        </b-button>
        <b-button class="btn-icon pe-none me-1 my-1" variant="secondary" aria-label="Loading...">
          <b-spinner type="grow" small></b-spinner>
        </b-button>
        <b-button class="pe-none my-1" variant="secondary">
          <b-spinner type="grow" small class="me-2"></b-spinner>
          Loading...
        </b-button>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const anchorData = [
  {
    id: 'spinners-border',
    title: 'Border spinner'
  },
  {
    id: 'spinners-growing',
    title: 'Growing spinner'
  },
  {
    id: 'spinners-size',
    title: 'Size'
  },
  {
    id: 'spinners-button',
    title: 'Inside button'
  }
]
</script>
