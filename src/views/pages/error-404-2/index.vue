<template>
  <!-- BG light version -->
  <div class="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover"
    :style="{ background: `url(${bgLight})` }"></div>

  <!-- BG dark version -->
  <div
    class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover"
    :style="{ background: `url(${bgDark})` }"></div>

  <Navbar :absolute="false" :fixedTop="true" />

  <!-- Page content -->
  <section class="container d-flex flex-column h-100 align-items-center position-relative zindex-5 pt-5">
    <div class="text-center pt-5 pb-3 mt-auto">
      <!-- Parallax gfx (Light version) -->
      <Parallax custom-class="parallax mx-auto d-dark-mode-none" :custom-style="{ maxWidth: '574px' }">
        <div class="parallax-layer" data-depth="-0.15">
          <img :src="lightLayer1" alt="Layer" />
        </div>
        <div class="parallax-layer" data-depth="0.12">
          <img :src="lightLayer2" alt="Layer" />
        </div>
        <div class="parallax-layer zindex-5" data-depth="-0.12">
          <img :src="lightLayer3" alt="Layer" />
        </div>
      </Parallax>

      <!-- Parallax gfx (Dark version) -->
      <Parallax custom-class="parallax mx-auto d-none d-dark-mode-block" :custom-style="{ maxWidth: '574px' }">
        <div class="parallax-layer" data-depth="-0.15">
          <img :src="darkLayer1" alt="Layer" />
        </div>
        <div class="parallax-layer" data-depth="0.12">
          <img :src="darkLayer2" alt="Layer" />
        </div>
        <div class="parallax-layer zindex-5" data-depth="-0.12">
          <img :src="darkLayer3" alt="Layer" />
        </div>
      </Parallax>

      <h1 class="visually-hidden">404</h1>
      <h2 class="display-5">Ooops!</h2>
      <p class="fs-xl pb-3 pb-md-0 mb-md-5">The page you are looking for is not available.</p>
      <router-link :to="{ name: 'landing' }" class="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
        <i class="bx bx-home-alt me-2 ms-n1 lead"></i>
        Go to homepage
      </router-link>
    </div>

    <div class="text-center py-lg-5 py-4 mt-auto">
      <p class="nav d-block fs-sm pt-3 pt-lg-0 mb-0">
        <span class="opacity-75">&copy; All rights reserved. Made by </span>
        <a class="nav-link d-inline-block p-0" href="https://coderthemes.com/" target="_blank" rel="noopener">Coderthemes</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue';
import bgLight from '@/assets/img/404/light/bg.jpg';
import bgDark from '@/assets/img/404/dark/bg.jpg';

import lightLayer1 from '@/assets/img/404/light/layer01.png';
import lightLayer2 from '@/assets/img/404/light/layer02.png';
import lightLayer3 from '@/assets/img/404/light/layer03.png';

import darkLayer1 from '@/assets/img/404/dark/layer01.png';
import darkLayer2 from '@/assets/img/404/dark/layer02.png';
import darkLayer3 from '@/assets/img/404/dark/layer03.png';

import Parallax from '@/components/Parallax.vue';
</script>
