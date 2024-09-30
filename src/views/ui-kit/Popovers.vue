<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Popovers"
      description="A pop-up box that appears when the user clicks/hovers on an element."
    />

    <!-- Static example -->
    <section class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4 pb-lg-2">Simple example</h2>
      <div class="example-popover clearfix">
        <b-button
          variant="primary"
          v-b-popover.hover.right="`And here's some amazing content. It's very engaging. Right?`"
          >Hover to toggle popover
        </b-button>
      </div>
    </section>

    <!-- Live demo -->
    <section class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Live demo</h2>
      <div class="pt-1">
        <b-button id="live-1" class="me-2 my-1" variant="outline-primary">Popover on top</b-button>
        <b-popover target="live-1" triggers="hover" placement="top">
          <template #title> Popover on top </template>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.
        </b-popover>
        <b-button id="live-2" class="me-2 my-1" variant="outline-primary"
          >Popover on right</b-button
        >
        <b-popover target="live-2" triggers="hover" placement="right">
          <template #title> Popover on right </template>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.
        </b-popover>
        <b-button id="live-3" variant="outline-primary" class="me-2 my-1"
          >Popover on bottom</b-button
        >
        <b-popover target="live-3" triggres="hover" placement="bottom">
          <template #title> Popover on bottom </template>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.
        </b-popover>
        <b-button id="live-4" class="my-1" variant="outline-primary">Popover on left</b-button>
        <b-popover target="live-4" triggres="hover" placement="left">
          <template #title>Popover on left</template>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.
        </b-popover>
      </div>
    </section>

    <!-- Toggle on click / hover -->
    <section class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Toggle on click / hover</h2>
      <div class="pt-1">
        <b-button
          variant="primary"
          class="me-2 my-1"
          v-b-popover.click.right="
            `Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.`
          "
          >Click to toggle popover
        </b-button>

        <b-button
          variant="primary"
          v-b-popover.hover.right="
            `Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.`
          "
          >Hover to toggle popover
        </b-button>
      </div>
    </section>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
</script>
