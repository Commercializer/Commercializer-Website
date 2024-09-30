<template>
  <b-row>
    <b-col md="6" class="pb-2 pb-md-0 mb-4 mb-md-0" :class="index % 2 != 0 ? 'order-md-2' : ''">
      <div class="" :class="index % 2 != 0 ? 'ps-lg-5' : 'pe-lg-5'">
        <img :src="service.image" class="rounded-3" alt="Image" />
      </div>
    </b-col>
    <b-col md="6" :class="index % 2 != 0 ? 'order-md-1' : ''">
      <h2 class="h3 mb-sm-4">{{ service.title }}</h2>
      <p class="d-md-none d-xl-block pb-2 pb-md-3 mb-3">{{ service.description }}</p>

      <div class="border rounded-3 mb-4 mb-lg-5">
        <b-row class="row-cols-1 row-cols-sm-2 g-0">
          <b-col
            class="d-flex align-items-center border-end-sm border-bottom p-3"
            v-for="(item, idx) in service.table"
            :key="idx"
          >
            <img :src="item.image" width="48" alt="Icon" />
            <div class="ps-2 ms-1">
              <h3 class="h6 mb-0">{{ item.head }}</h3>
              <p class="fs-xs mb-0">{{ item.content }}</p>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="d-flex flex-column flex-sm-row">
        <a href="#" class="btn btn-primary mb-3 mb-sm-0 me-sm-3">Send request</a>
        <a href="#" class="btn btn-outline-primary">
          Learn more
          <i class="bx bx-right-arrow-alt fs-xl ms-2 me-n1"></i>
        </a>
      </div>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { ServicesType } from '@/views/pages/services-2/type'

defineProps({
  service: {
    type: Object as PropType<ServicesType>,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>
