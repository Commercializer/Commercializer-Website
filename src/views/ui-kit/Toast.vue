<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Toasts"
      description="Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."
    />

    <!-- Basic example -->
    <section class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>
      <div class="pt-1">
        <b-toast v-model="show">
          <template v-slot:title>
            <div
              class="d-inline-block align-middle bg-primary rounded-1 me-2"
              style="width: 1.25rem; height: 1.25rem"
            ></div>
            <h6 class="fs-sm mb-0 me-auto">Silicon</h6>
            <small class="fw-bold text-muted">11 mins ago</small>
          </template>
          <div>Hello, world! This is a toast message.</div>
        </b-toast>
      </div>
    </section>

    <!-- Color variations -->
    <section class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Color variations</h2>
      <div class="pt-1">
        <b-row>
          <b-col xxl="5" sm="6">
            <b-toast variant="primary" class="mb-4" v-model="showPrimary">
              <template v-slot:title>
                <Icon :icon="BellIcon" class="fs-lg me-2 text-white" />
                <span class="me-auto text-white">Primary toast</span>
              </template>
              <div class="text-white">Hello, world! This is a toast message.</div>
            </b-toast>

            <b-toast variant="secondary" class="mb-4" v-model="showSecondary">
              <template v-slot:title>
                <Icon :icon="TimeIcon" class="fs-lg me-2" />
                <span class="me-auto">Secondary toast</span>
              </template>
              <div class="">Hello, world! This is a toast message.</div>
            </b-toast>

            <b-toast variant="success" class="mb-4" v-model="showSuccess">
              <template v-slot:title>
                <Icon :icon="CheckCircleIcon" class="fs-lg me-2 text-white" />
                <span class="me-auto text-white">Success toast</span>
              </template>
              <div class="text-white">Hello, world! This is a toast message.</div>
            </b-toast>

            <b-toast variant="danger" class="mb-4" v-model="showDanger">
              <template v-slot:title>
                <Icon :icon="BlockIcon" class="fs-lg me-2 text-white" />
                <span class="me-auto text-white">Danger toast</span>
              </template>
              <div class="text-white">Hello, world! This is a toast message.</div>
            </b-toast>
          </b-col>
          <b-col sm="6">
            <b-toast variant="warning" class="mb-4" v-model="showWarning">
              <template v-slot:title>
                <Icon :icon="ErrorIcon" class="fs-lg me-2 text-white" />
                <span class="me-auto text-white">Warning toast</span>
              </template>
              <div class="text-white">Hello, world! This is a toast message.</div>
            </b-toast>

            <b-toast variant="info" class="mb-4" v-model="showInfo">
              <template v-slot:title>
                <Icon :icon="InfoCircleIcon" class="fs-lg me-2 text-white" />
                <span class="me-auto text-white">Info toast</span>
              </template>
              <div class="text-white">Hello, world! This is a toast message.</div>
            </b-toast>

            <b-toast variant="dark" class="mb-4" v-model="showDark">
              <template v-slot:title>
                <Icon :icon="XCircleIcon" class="fs-lg me-2 text-white" />
                <span class="me-auto text-white">Dark toast</span>
              </template>
              <div class="text-white">Hello, world! This is a toast message.</div>
            </b-toast>

            <b-toast v-model="showCustomColor" :style="{ backgroundColor: '#69459e' }">
              <template v-slot:title>
                <Icon :icon="XCircleIcon" class="fs-lg me-2 text-white" />
                <span class="me-auto text-white">Custom color toast</span>
              </template>
              <div class="text-white">Hello, world! This is a toast message.</div>
            </b-toast>
          </b-col>
        </b-row>
      </div>
    </section>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import BellIcon from '@iconify/icons-bx/bell'
import TimeIcon from '@iconify/icons-bx/bx-time'
import CheckCircleIcon from '@iconify/icons-bx/check-circle'
import BlockIcon from '@iconify/icons-bx/block'
import ErrorIcon from '@iconify/icons-bx/error'
import InfoCircleIcon from '@iconify/icons-bx/bx-info-circle'
import XCircleIcon from '@iconify/icons-bx/x-circle'

const show = ref(true)
const showPrimary = ref(true)
const showSecondary = ref(true)
const showSuccess = ref(true)
const showDanger = ref(true)
const showWarning = ref(true)
const showInfo = ref(true)
const showDark = ref(true)
const showCustomColor = ref(true)
</script>
