<template>
  <UIKitLayout>
    <UIKitPageTitle title="Tooltips" description="Custom tooltips for local title storage." />

    <!-- Live demo -->
    <section class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Live demo</h2>
      <div class="pt-1">
        <b-button
          class="me-2 my-1"
          variant="outline-primary"
          v-b-tooltip.hover.top
          title="Tooltip on top"
          >Tooltip on top
        </b-button>
        <b-button
          class="me-2 my-1"
          variant="outline-primary"
          v-b-tooltip.hover.right
          title="Tooltip on right"
        >
          Tooltip on right
        </b-button>
        <b-button
          class="me-2 my-1"
          variant="outline-primary"
          v-b-tooltip.hover.bottom
          title="Tooltip on bottom"
        >
          Tooltip on bottom
        </b-button>
        <b-button
          class="me-2 my-1"
          variant="outline-primary"
          v-b-tooltip.hover.left
          title="Tooltip on left"
          >Tooltip on left
        </b-button>
        <b-button
          class="my-1"
          variant="outline-primary"
          v-b-tooltip.hover.top
          data-bs-html="true"
          title="&lt;i&gt;Tooltip&lt;/i&gt; &lt;u&gt;with&lt;/u&gt; &lt;strong&gt;HTML&lt;/strong&gt;"
          >Tooltip with HTML
        </b-button>
      </div>
    </section>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
</script>
