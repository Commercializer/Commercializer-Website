<template>
  <b-container class="mb-5 pt-md-3 pt-lg-4 pt-xl-5">
    <div
      class="pt-2 pt-sm-4 pb-md-3 mb-4 mt-lg-1 mt-xl-3 mx-auto text-center"
      style="max-width: 47rem"
    >
      <h2 class="h1 mb-4">Our offices around the world</h2>
      <p class="mb-3">
        Congue gravida vel imperdiet rutrum lectus felis purus blandit ullamcorper. In eleifend in
        ultrices ultrices aliquam augue praesent.
      </p>
      <router-link :to="{ name: 'pages.contacts-2' }" class="btn btn-primary mb-4"
        >Contact us</router-link
      >
    </div>

    <!-- Map -->
    <div class="mb-4 pb-2">
      <img :src="mapLight" alt="Map" class="d-dark-mode-none d-block" />
      <img :src="mapDark" alt="Map" class="d-dark-mode-block d-none" />
    </div>
  </b-container>
</template>

<script setup lang="ts">
import mapLight from '@/assets/img/about/map-light.png'
import mapDark from '@/assets/img/about/map-dark.png'
</script>
