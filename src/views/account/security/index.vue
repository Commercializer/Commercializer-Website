<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-lg-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
        <h1 class="h2 pt-xl-1 pb-3">Security</h1>

        <!-- Password -->
        <h2 class="h5 text-primary mb-4">Password</h2>
        <b-form class="border-bottom pb-3 pb-lg-4">
          <b-row>
            <b-col sm="6" class="mb-4">
              <PasswordInput label="Current Password" v-model="passwordDetails.password" />
            </b-col>
          </b-row>

          <b-row class="pb-2">
            <b-col sm="6" class="mb-4">
              <PasswordInput label="New password" v-model="passwordDetails.newPassword" />
            </b-col>

            <b-col sm="6" class="mb-4">
              <PasswordInput
                label="Confirm new password"
                v-model="passwordDetails.confirmPassword"
              />
            </b-col>
          </b-row>

          <div class="d-flex mb-3">
            <b-button variant="secondary" type="reset" class="me-3">Cancel</b-button>
            <b-button variant="primary" type="submit">Save changes</b-button>
          </div>
        </b-form>

        <!-- Sessions -->
        <h2 class="h5 text-primary pt-1 pt-lg-3 mt-4">Your sessions</h2>
        <p class="pb-3 mb-3">
          This is a list of devices that have logged into your account. Remove any sessions that you
          do not recognize.
        </p>
        <ul class="list-unstyled mb-0">
          <li class="d-flex align-items-center justify-content-between mb-4">
            <div class="d-flex align-items-start me-3">
              <div class="bg-secondary rounded-1 p-2">
                <Icon :icon="DesktopIcon" class="fs-xl text-primary d-block" />
              </div>
              <div class="ps-3">
                <div class="fw-medium text-nav mb-1">Mac – New York, USA</div>
                <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2">Chrome</span>
                <span class="badge bg-success shadow-success">Active now</span>
              </div>
            </div>
            <b-button variant="outline-secondary" class="px-3 px-sm-4">
              <Icon :icon="XIcon" class="fs-xl ms-sm-n1 me-sm-1" />
              <span class="d-none d-sm-inline">Remove</span>
            </b-button>
          </li>
          <li class="d-flex align-items-center justify-content-between mb-4">
            <div class="d-flex align-items-start me-3">
              <div class="bg-secondary rounded-1 p-2">
                <Icon :icon="MobileIcon" class="fs-xl text-primary d-block" />
              </div>
              <div class="ps-3">
                <div class="fw-medium text-nav mb-1">Iphone 12 – New York, USA</div>
                <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2"
                  >Silicon App</span
                >
                <span class="d-inline-block fs-sm text-muted">20 hours ago</span>
              </div>
            </div>
            <b-button variant="outline-secondary" class="px-3 px-sm-4">
              <Icon :icon="XIcon" class="fs-xl ms-sm-n1 me-sm-1" />
              <span class="d-none d-sm-inline">Remove</span>
            </b-button>
          </li>
          <li class="d-flex align-items-center justify-content-between mb-4">
            <div class="d-flex align-items-start me-3">
              <div class="bg-secondary rounded-1 p-2">
                <Icon :icon="DesktopIcon" class="fs-xl text-primary d-block" />
              </div>
              <div class="ps-3">
                <div class="fw-medium text-nav mb-1">Windows 10.1 – New York, USA</div>
                <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2">Chrome</span>
                <span class="d-inline-block fs-sm text-muted">November 15 at 8:42 am</span>
              </div>
            </div>
            <b-button variant="outline-secondary" class="px-3 px-sm-4">
              <Icon :icon="XIcon" class="fs-xl ms-sm-n1 me-sm-1" />
              <span class="d-none d-sm-inline">Remove</span>
            </b-button>
          </li>
        </ul>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import PasswordInput from '@/components/PasswordInput.vue'

import { Icon } from '@iconify/vue'
import DesktopIcon from '@iconify/icons-bx/desktop'
import MobileIcon from '@iconify/icons-bx/bx-mobile'
import XIcon from '@iconify/icons-bx/bx-x'

import { ref } from 'vue'

const passwordDetails = ref({
  password: 'jonnyPass',
  newPassword: '',
  confirmPassword: ''
})
</script>
