<template>
  <footer class="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
    <b-container class="text-center pt-lg-3">
      <div class="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
        <img :src="logo" class="me-2" width="60" alt="Silicon" />
        <span class="fs-4">Silicon</span>
      </div>
      <ul class="nav justify-content-center pt-3 pb-4 pb-lg-5">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Speakers</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Schedule</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Sponsors</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Prices</a></li>
      </ul>
      <div class="d-flex flex-column flex-sm-row justify-content-center">
        <a href="#" class="btn btn-primary shadow-primary btn-lg me-sm-4 mb-3">Buy access pass</a>
        <a href="#" class="btn btn-outline-light btn-lg mb-3">
          <Icon :icon="CalendarCheckIcon" class="fs-xl me-2 ms-n1" />
          Add to calendar
        </a>
      </div>
      <div class="d-flex justify-content-center pt-4 mt-lg-3">
        <a href="#" class="btn btn-icon btn-secondary btn-facebook mx-2" aria-label="Facebook">
          <Icon :icon="FacebookIcon" />
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-instagram mx-2" aria-label="Instagram">
          <Icon :icon="InstagramIcon" />
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-twitter mx-2" aria-label="Twitter">
          <Icon :icon="TwitterIcon" />
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-youtube mx-2" aria-label="YouTube">
          <Icon :icon="YoutubeIcon" />
        </a>
      </div>
      <p class="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
        <span class="text-light opacity-50">&copy; All rights reserved. Made by </span>
        <a
          class="nav-link d-inline-block p-0"
          href="https://coderthemes.com/"
          target="_blank"
          rel="noopener"
          >Coderthemes</a
        >
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.svg'
import { Icon } from '@iconify/vue'
import CalendarCheckIcon from '@iconify/icons-bx/bx-calendar-check'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
</script>
