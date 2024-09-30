<template>
  <section class="position-relative pt-5" style="background-color: #151922" data-bs-theme="dark">
    <b-container class="position-relative zindex-2 pt-5 pb-2 pb-md-0">
      <!-- Breadcrumb -->
      <b-nav class="pt-lg-4" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Contacts v.1</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>

      <b-row class="justify-content-center pt-3 mt-3">
        <b-col xl="6" lg="7" md="8" sm="10" class="text-center">
          <h1 class="mb-4">Get in Touch</h1>
          <p class="text-body fs-lg pb-3 mb-3">
            Have a project in mind? To request a quote contact us directly or fill out the form and
            let us know how we can help.
          </p>
          <div class="d-flex justify-content-center">
            <a
              href="#"
              class="btn btn-icon btn-secondary btn-facebook rounded-circle mx-2"
              aria-label="Facebook"
            >
              <Icon :icon="FacebookIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-secondary btn-instagram rounded-circle mx-2"
              aria-label="Instagram"
            >
              <Icon :icon="InstagramIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-secondary btn-google rounded-circle mx-2"
              aria-label="Google"
            >
              <Icon :icon="GoogleIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-secondary btn-twitter rounded-circle mx-2"
              aria-label="Twitter"
            >
              <Icon :icon="TwitterIcon" />
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- Bottom shape -->
    <div
      class="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n5"
      style="color: #151922"
    >
      <div
        class="position-relative start-50 translate-middle-x flex-shrink-0 mt-n5 mt-md-n3 mt-lg-n1"
        style="width: 3788px"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="3788" height="144" viewBox="0 0 3788 144">
          <path
            fill="currentColor"
            d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import GoogleIcon from '@iconify/icons-bx/bxl-google'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
</script>
