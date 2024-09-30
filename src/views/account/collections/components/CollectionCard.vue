<template>
  <div class="card border-0 shadow-sm overflow-hidden mb-4">
    <b-row class="g-0">
      <a
        href="#"
        class="col-sm-4 bg-repeat-0 bg-position-center bg-size-cover"
        :style="{ backgroundImage: `url(${collection?.image})`, minHeight: '13rem' }"
        aria-label="Cover image"
      >
      </a>
      <b-col sm="8">
        <div class="card-body">
          <div class="fs-sm text-muted mb-1">{{ collection.date }}</div>
          <h2 class="h4 pb-1 mb-2">
            <a href="#">{{ collection.title }}</a>
          </h2>
          <p class="mb-4 mb-lg-5">
            <template v-for="(tag, idx) in collection?.tags" :key="tag">
              {{ tag }} <span v-if="idx != collection.tags.length - 1">/</span>
            </template>
          </p>
          <div class="d-flex">
            <b-button variant="outline-primary" class="px-3 px-lg-4 me-3">
              <Icon :icon="EditIcon" class="fs-xl me-xl-2" />
              <span class="d-none d-xl-inline">Edit</span>
            </b-button>
            <b-button variant="outline-secondary" class="px-3 px-lg-4 me-3">
              <Icon :icon="PowerOffIcon" class="fs-xl me-xl-2" />
              <span class="d-none d-xl-inline">Deactivate</span>
            </b-button>
            <b-button variant="outline-danger" class="px-3 px-lg-4">
              <Icon :icon="TrashAltIcon" class="fs-xl me-xl-2" />
              <span class="d-none d-xl-inline">Delete</span>
            </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import EditIcon from '@iconify/icons-bx/bx-edit'
import PowerOffIcon from '@iconify/icons-bx/power-off'
import TrashAltIcon from '@iconify/icons-bx/trash-alt'

import type { PropType } from 'vue'
import type { CollectionType } from '@/views/account/collections/type'

defineProps({
  collection: {
    type: Object as PropType<CollectionType>,
    required: true
  }
})
</script>
