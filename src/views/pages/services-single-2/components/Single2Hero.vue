<template>
  <b-container class="pt-4 pb-5 mb-lg-5">
    <!-- Breadcrumb mobile -->
    <b-nav class="d-md-none pb-3 mb-2 mb-lg-3" aria-label="breadcrumb">
      <b-breadcrumb class="mb-0">
        <b-breadcrumb-item href="/">
          <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item> Services </b-breadcrumb-item>
        <b-breadcrumb-item active>Dental Care</b-breadcrumb-item>
      </b-breadcrumb>
    </b-nav>

    <b-row class="row-cols-1 row-cols-md-2 g-0 pb-2">
      <!-- Image -->
      <b-col
        class="order-md-2 position-relative bg-position-center bg-size-cover bg-repeat-0 zindex-2"
        :style="{ backgroundImage: `url('${dental}')` }"
        style="border-radius: 0.5rem 0.5rem 0.5rem 0"
      >
        <div style="height: 250px"></div>
      </b-col>

      <!-- Text + Breadcrumb desktop -->
      <b-col class="order-md-1">
        <b-nav class="d-none d-md-block py-3 mb-2 mb-lg-3" aria-label="breadcrumb">
          <b-breadcrumb class="mb-0">
            <b-breadcrumb-item href="/">
              <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item class=""> Services </b-breadcrumb-item>
            <b-breadcrumb-item active>Dental Care</b-breadcrumb-item>
          </b-breadcrumb>
        </b-nav>

        <div class="bg-secondary rounded-3 p-4 p-lg-5 mt-n2 mt-md-0 me-md-n2">
          <div class="px-sm-3 px-xl-4 pt-4 py-md-3 py-lg-4 py-xl-5">
            <h1 class="pb-2 pb-xxl-3">Dental Care</h1>
            <p class="pb-2 mb-4 mb-xxl-5">
              Vestibulum nunc lectus auctor quis natoque lectus tortor lacus, eu nunc feugiat nisl
              maecenas nulla hac morbi. Sollicitudin cursus in habitasse adipiscing sed aenean
              sapien maecenas lectus auctor. Non feugiat feugiat egestas nulla nec. Arcu tempus,
              eget elementum dolor ullamcorper sodales ultrices eros.
            </p>
            <div class="d-xxl-flex align-items-center">
              <a href="#" class="btn btn-primary shadow-primary btn-lg">Make an appointment</a>
              <ul class="list-unstyled ps-xxl-4 pt-4 pt-xxl-0 ms-xxl-2">
                <li><strong>Mon &mdash; Fri:</strong> 9:00 am &mdash; 22:00 am</li>
                <li><strong>Sat &mdash; Sun:</strong> 9:00 am &mdash; 20:00 am</li>
              </ul>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import dental from '@/assets/img/services/single/dental.jpg'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
