<template>
  <Navbar :isTransparent="false" :fixedTop="true" :absolute="false" :navbarSticky="false" :stuck="true" />

  <!-- Page content -->
  <section class="d-flex align-items-center min-vh-100 py-3 bg-light" style="
      background: radial-gradient(
        144.3% 173.7% at 71.41% 94.26%,
        rgba(99, 102, 241, 0.1) 0%,
        rgba(218, 70, 239, 0.05) 32.49%,
        rgba(241, 244, 253, 0.07) 82.52%
      );
    ">
    <b-container class="my-5 text-md-start text-center">
      <b-row class="align-items-center">
        <!-- Animation -->
        <b-col xl="6" md="7" class="order-md-2 ms-n5">
          <Vue3Lottie :animation-data="anim404" background-color="transparent" :speed="1" loop autoplay />
        </b-col>

        <b-col md="5" class="offset-xl-1 order-md-1">
          <h1 class="display-1 mb-sm-4 mt-n4 mt-sm-n5">Error 404</h1>
          <p class="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">
            The page you are looking for was moved, removed or might never existed.
          </p>
          <router-link :to="{ name: 'landing' }" class="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
            <Icon :icon="HomeAltIcon" class="me-2 ms-n1 lead" />
            Go to homepage
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="11" class="offset-xl-1 mt-3">
          <p class="nav d-block fs-sm text-center text-md-start mb-0">
            &copy; All rights reserved. Made by
            <a class="nav-link d-inline-block p-0" href="https://coderthemes.com/" target="_blank" rel="noopener">Coderthemes</a>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <!-- Footer -->
  <!--  <b-container class="text-md-start text-center py-lg-5 py-4">-->

  <!--  </b-container>-->
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt';
import Navbar from '@/layouts/partials/Navbar.vue';
import { Vue3Lottie } from 'vue3-lottie';
import anim404 from '@/assets/json/animation-404-v1.json';
</script>
