<template>
  <b-container>
    <div class="position-relative bg-dark rounded-3 overflow-hidden py-5 px-4 px-sm-0">
      <span
        class="position-absolute top-0 start-0 d-block w-100 h-100"
        style="
          background: radial-gradient(
            116.18% 118% at 50% 100%,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(218, 70, 239, 0.05) 41.83%,
            rgba(241, 244, 253, 0.07) 82.52%
          );
        "
      ></span>
      <b-row class="position-relative justify-content-center py-sm-2 py-lg-5">
        <b-col xl="6" lg="7" md="8" sm="10" class="text-center">
          <h2 class="h1 text-light mb-4">Ready to Get Started?</h2>
          <p class="fs-lg text-light opacity-70 pb-4 mb-3">
            Write your email address so we can contact you
          </p>

          <!-- Desktop form -->
          <b-form class="input-group input-group-lg d-none d-sm-flex mb-3">
            <b-form-input
              type="email"
              class="rounded-start ps-5"
              placeholder="Your email"
              required
            />
            <Icon
              :icon="EnvelopeIcon"
              class="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
            />
            <div class="invalid-tooltip position-absolute top-100 start-0">
              Please provide a valid email address.
            </div>
            <b-button variant="primary" type="submit">Get in touch</b-button>
          </b-form>

          <!-- Mobile form -->
          <b-form class="d-sm-none mb-3">
            <div class="position-relative mb-3">
              <b-form-input
                size="lg"
                type="email"
                class="rounded-start ps-5"
                placeholder="Your email"
                required
              />
              <Icon
                :icon="EnvelopeIcon"
                class="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
              />
              <div class="invalid-tooltip position-absolute top-0 start-0 mt-n4">
                Please provide a valid email address.
              </div>
            </div>
            <b-button variant="primary" size="lg" type="submit" class="w-100"
              >Get in touch</b-button
            >
          </b-form>
          <p class="fs-sm text-light opacity-50 mb-0">
            No subscriptions. No annual fees. No lock-ins.
          </p>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
</script>
