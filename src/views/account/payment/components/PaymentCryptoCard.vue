<template>
  <div
    class="card d-sm-flex flex-sm-row align-items-sm-center justify-content-between border-0 shadow-sm p-3 p-md-4 mb-4"
  >
    <div class="d-flex align-items-center pe-sm-3">
      <img :src="crypto.image" :width="84" alt="" />
      <div class="ps-3 ps-sm-4">
        <h6 class="mb-2">{{ crypto.name }}</h6>
        <div class="fs-sm">••••••••••{{ crypto.lastSecretBit }}</div>
      </div>
    </div>
    <div class="d-flex justify-content-end pt-3 pt-sm-0">
      <button type="button" class="btn btn-outline-secondary px-3 px-xl-4 me-3">
        <Icon :icon="EditIcon" class="fs-xl me-lg-1 me-xl-2" />
        <span class="d-none d-lg-inline">Edit</span>
      </button>
      <button type="button" class="btn btn-outline-danger px-3 px-xl-4">
        <Icon :icon="TrashAltIcon" class="fs-xl me-lg-1 me-xl-2" />
        <span class="d-none d-lg-inline">Delete</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { PaymentCardType } from '@/views/account/payment/type'
import { Icon } from '@iconify/vue'
import EditIcon from '@iconify/icons-bx/bx-edit'
import TrashAltIcon from '@iconify/icons-bx/trash-alt'

defineProps({
  crypto: {
    type: Object as PropType<PaymentCardType>,
    required: true
  }
})
</script>
