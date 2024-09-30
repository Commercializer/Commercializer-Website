<template>
  <b-container>
    <div class="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-lg-5 px-xl-0">
      <b-row class="align-items-center py-lg-4">
        <b-col xl="5" md="6" class="offset-xl-1 mb-4 mb-md-0">
          <div class="d-flex align-items-center">
            <img :src="notificationImg" width="78" alt="Bell icon" />
            <div class="ps-3 ms-sm-3">
              <h2 class="h4 mb-0">
                Subscribe to our newsletter to stay informed about latest updates
              </h2>
            </div>
          </div>
        </b-col>
        <b-col xl="5" md="6">
          <div class="ps-lg-5 ms-xl-2">
            <b-form class="input-group input-group-lg">
              <b-form-input
                type="email"
                id="subscr-email"
                class="rounded-start ps-5"
                placeholder="Your email"
                required
              />
              <Icon
                :icon="EnvelopeIcon"
                class="bx fs-xl text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
              ></Icon>
              <div class="invalid-tooltip position-absolute top-100 start-0">
                Please provide a valid email address.
              </div>
              <b-button type="submit" variant="primary" class="px-sm-4">Subscribe</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import notificationImg from '@/assets/img/landing/app-showcase-1/notification-icon.svg'
import { EnvelopeIcon } from '@/views/landings/mobile-app-1/data'
import { Icon } from '@iconify/vue'
</script>
