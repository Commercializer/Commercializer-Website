<template>
  <b-container class="mt-n2">
    <div class="card border-0 bg-gradient-primary">
      <div
        class="card-body p-md-5 p-4 bg-size-cover"
        :style="{ backgroundImage: `url('${contactBgImg}')` }"
      >
        <div class="py-md-5 py-4 text-center">
          <h3 class="h4 fw-normal text-light opacity-75">Want to work with us? Let’s talk</h3>
          <a href="mailto:email@example.com" class="display-6 text-light">email@example.com</a>
          <div class="pt-md-5 pt-4 pb-md-2">
            <router-link :to="{ name: 'pages.contacts-1' }" class="btn btn-lg btn-light"
              >Contact us</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import contactBgImg from '@/assets/img/landing/digital-agency/contact-bg.png'
</script>
