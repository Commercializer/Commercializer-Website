<template>
  <footer class="footer py-5">
    <b-container class="text-center pt-2 pt-sm-3">
      <div class="navbar-brand d-inline-block text-dark p-0 me-0 mb-4 pb-md-2">
        <img :src="logo" width="47" alt="Silicon" />
        Silicon
      </div>
      <ul class="nav align-items-center justify-content-center mb-4 pb-1 pb-md-3">
        <li class="nav-item mx-lg-1 px-md-2">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item mx-lg-1 px-md-2">
          <a href="#" class="nav-link">Features</a>
        </li>
        <li class="nav-item mx-lg-1 px-md-2">
          <a href="#" class="nav-link">Overview</a>
        </li>
        <li class="nav-item mx-lg-1 px-md-2">
          <a href="#" class="nav-link">Blog</a>
        </li>
        <li class="nav-item mx-lg-1 px-md-2">
          <a href="#" class="nav-link">Contact</a>
        </li>
        <li class="nav-item mx-lg-1 px-md-2">
          <a href="#" class="nav-link">Account</a>
        </li>
      </ul>
      <div class="d-inline-block mt-n3 ms-n3 pb-2 pb-md-3 mb-4 mb-lg-5">
        <a href="#" class="btn btn-icon btn-secondary btn-facebook mt-3 ms-3" aria-label="Facebook">
          <Icon :icon="FacebookIcon" class="bx bxl-facebook-square"></Icon>
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-twitter mt-3 ms-3" aria-label="Twitter">
          <Icon :icon="TwitterIcon" class="bx bxl-twitter"></Icon>
        </a>
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-instagram mt-3 ms-3"
          aria-label="Instagram"
        >
          <Icon :icon="InstagramIcon" class="bx bxl-instagram"></Icon>
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-youtube mt-3 ms-3" aria-label="YouTube">
          <Icon :icon="YoutubeIcon" class="bx bxl-youtube"></Icon>
        </a>
      </div>
      <p class="mb-0 mx-auto fs-sm text-muted" style="max-width: 53.5rem">
        &copy; All rights reserved. Made by
        <a
          class="nav-link d-inline-block p-0"
          href="https://coderthemes.com/"
          target="_blank"
          rel="noopener"
          >Coderthemes</a
        >. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada
        suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.svg'
import { Icon } from '@iconify/vue'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook-square'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
</script>
