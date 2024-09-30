<template>
  <Jarallax
    custom-class="jarallax bg-dark pt-2 pt-lg-3 pb-lg-5"
    :options="{ speed: 0.35 }"
    data-bs-theme="dark"
  >
    <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70"></span>
    <div class="jarallax-img" :style="{ backgroundImage: `url('${course}')` }"></div>
    <b-container class="position-relative zindex-5 pb-5">
      <!-- Breadcrumb -->
      <b-nav class="py-4" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item> Courses </b-breadcrumb-item>
          <b-breadcrumb-item active>Fullstack Web Developer Course from Scratch</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>

      <!-- Badges -->
      <div class="d-flex pt-3 pb-4 py-sm-4 pt-lg-5">
        <span class="badge bg-success fs-sm me-2">Best Seller</span>
        <a href="#" class="badge bg-white text-nav fs-sm text-decoration-none">Web Development</a>
      </div>

      <!-- Title -->
      <h1>Fullstack Web Developer Course from Scratch</h1>
      <p class="fs-lg text-light opacity-70">
        Egestas feugiat lorem eu neque suspendisse ullamcorper scelerisque aliquam mauris.
      </p>

      <!-- Stats -->
      <div class="d-sm-flex py-3 py-md-4 py-xl-5">
        <div class="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
          <div class="text-nowrap me-1 gap-1">
            <Icon :icon="StarIcon" class="bx text-warning"></Icon>
            <Icon :icon="StarIcon" class="bx text-warning"></Icon>
            <Icon :icon="StarIcon" class="bx text-warning"></Icon>
            <Icon :icon="StarIcon" class="bx text-warning"></Icon>
            <Icon :icon="StarBxIcon" class="bx text-muted opacity-75"></Icon>
          </div>
          <span class="text-light opacity-70">(1.2K reviews)</span>
        </div>
        <div class="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
          <Icon :icon="Like" class="bx fs-xl text-light opacity-70 me-1"></Icon>
          <span class="text-light opacity-70">4.2K likes</span>
        </div>
        <div class="d-flex">
          <Icon :icon="Time" class="bx fs-xl text-light opacity-70 me-1"></Icon>
          <span class="text-light opacity-70">220 hours</span>
        </div>
      </div>

      <!-- Author -->
      <div class="d-flex align-items-center mt-xl-5 pt-2 pt-md-4 pt-lg-5">
        <img :src="avatar" class="rounded-circle" width="60" alt="Albert Flores" />
        <div class="ps-3">
          <div class="text-light opacity-80 mb-1">Created by</div>
          <h6>Albert Flores</h6>
        </div>
      </div>
    </b-container>
  </Jarallax>
</template>

<script setup lang="ts">
import course from '@/assets/img/portfolio/courses/single.jpg'
import avatar from '@/assets/img/avatar/17.jpg'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import StarIcon from '@iconify/icons-bx/bxs-star'
import StarBxIcon from '@iconify/icons-bx/bx-star'
import Like from '@iconify/icons-bx/bx-like'
import Time from '@iconify/icons-bx/bx-time'
import Jarallax from '@/components/Jarallax.vue'
</script>
