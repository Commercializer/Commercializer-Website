<template>
  <section class="container mb-5 pb-lg-5 pb-md-4 pb-3">
    <div class="mb-xl-3">
      <h2 class="h1 mb-md-5 mb-4 pb-xl-3 pb-lg-2 pb-md-0 pb-sm-2">What Our Clients Say About Us</h2>

      <!-- Tabs -->

      <b-tabs
        vertical
        class="row gy-4 gx-md-4 gx-3"
        nav-wrapper-class="col-lg-4 col-sm-5 order-1"
        content-class="col-sm-7 offset-lg-1 order-2"
        nav-class="ms-3"
      >
        <b-tab
          v-for="(review, idx) in clientReviewData"
          :key="idx"
          :active="idx == 0 ? true : false"
          title-link-class="flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal w-100"
        >
          <template v-slot:title>
            <img
              :src="review.user.image"
              :width="56"
              alt="Avatar"
              class="rounded-circle me-md-3 me-sm-0 me-3 mb-md-0 mb-sm-2"
            />
            <div>
              <span class="d-block mb-0 fs-lg fw-semibold">{{ review.user.name }}</span>
              {{ review.user.role }}
            </div>
          </template>

          <template v-slot:default>
            <h4 class="mb-3" style="max-width: 22.875rem">“{{ review.title }}”</h4>
            <div class="fs-sm text-nowrap">
              <Icon
                v-for="(star, idx) in Array.from(new Array(Math.floor(review.rating ?? 0)))"
                :key="idx"
                :icon="StarIcon"
                class="bx text-warning"
              ></Icon>

              <Icon
                v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(review.rating ?? 0)))"
                :key="idx"
                :icon="StarBxIcon"
                class="bx text-muted opacity-75"
              ></Icon>
            </div>
            <p class="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg">{{ review.description }}</p>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import StarIcon from '@iconify/icons-bx/bxs-star'
import StarBxIcon from '@iconify/icons-bx/bx-star'

import { clientReviewData } from '@/views/landings/dev-agency-2/data'
</script>
