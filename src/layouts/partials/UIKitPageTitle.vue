<template>
  <div
    class="d-sm-flex align-items-end justify-content-between ps-lg-2 ps-xxl-0 mt-2 mt-lg-0 pt-4 mb-n3"
  >
    <div class="me-4">
      <h1 class="pb-1">{{ title }}</h1>
      <p class="text-muted fs-lg mb-2">{{ description }}</p>
    </div>
    <span v-if="isSiliconComponent" class="badge bg-warning mb-2">Silicon component</span>

    <a
      v-else
      href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/"
      class="btn btn-link px-0"
      target="_blank"
      rel="noopener"
    >
      BootstrapVue Docs
      <Icon :icon="LinkExternalIcon" class="fs-lg ms-2" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LinkExternalIcon from '@iconify/icons-bx/link-external'
import { onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isSiliconComponent: {
    type: Boolean,
    default: false
  }
})
</script>
