<template>
  <b-container>
    <div class="bg-dark border border-light rounded-3 py-5 px-4 px-sm-0">
      <b-row class="justify-content-center py-sm-2 py-lg-5">
        <b-col xl="6" lg="7" md="8" sm="10" class="text-center">
          <h2 class="h1 text-light mb-4">Ready to Get Started?</h2>
          <p class="fs-lg text-light opacity-70 pb-4 mb-3">
            Organize your tasks with a 14-day free trial
          </p>

          <!-- Desktop form -->
          <b-form class="input-group input-group-lg d-none d-sm-flex needs-validation mb-3">
            <b-form-input
              type="email"
              class="rounded-start ps-5"
              placeholder="Your email"
              required
            />
            <Icon
              :icon="EnvelopeIcon"
              class="bx fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
            ></Icon>
            <div class="invalid-tooltip position-absolute top-100 start-0">
              Please provide a valid email address.
            </div>
            <b-button type="submit" variant="primary">Get started for free</b-button>
          </b-form>

          <!-- Mobile form -->
          <b-form
            class="needs-validation d-sm-none mb-3"
            for="email"
            placeholder="Your email"
            novalidate
          >
            <div class="position-relative mb-3">
              <b-form-input
                type="email"
                class="form-control-lg rounded-start ps-5"
                required
              ></b-form-input>
              <Icon
                :icon="EnvelopeIcon"
                class="bx fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
              ></Icon>
              <b-form-invalid-feedback class="invalid-tooltip position-absolute top-0 start-0 mt-n4"
                >Please provide a valid email address.</b-form-invalid-feedback
              >
            </div>
            <button type="submit" class="btn btn-primary btn-lg w-100">Get started for free</button>
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
import EnvelopeIcon from '@iconify/icons-bx/bx-envelope'
</script>
