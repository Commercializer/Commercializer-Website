<template>
  <b-container class="pt-3 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
    <Rellax custom-class="row align-items-center">
      <div
        class="rellax col-md-7"
        data-rellax-percentage="0.5"
        data-rellax-speed="-0.6"
        data-disable-parallax-down="lg"
      >
        <img :src="dashboardImg" class="d-block mx-auto" width="746" alt="Image" />
      </div>
      <div
        class="rellax col-md-5 col-xl-4 offset-xl-1 d-flex d-sm-block flex-column"
        data-rellax-percentage="0.5"
        data-rellax-speed="0.8"
        data-disable-parallax-down="lg"
      >
        <h2 class="pb-3 pt-2 pt-md-0">Manage Your Work</h2>
        <ul class="list-unstyled pb-2">
          <li
            class="d-flex align-items-center pb-1 mb-2"
            v-for="(work, idx) in workData"
            :key="idx"
          >
            <Icon :icon="CheckCircleIcon" class="bx text-primary fs-xl me-2"></Icon>
            {{ work.title }}
          </li>
        </ul>
        <a href="#" class="btn btn-primary">
          Learn more
          <Icon :icon="RightArrowAltIcon" class="bx fs-xl ms-2"></Icon>
        </a>
      </div>
    </Rellax>
  </b-container>
</template>

<script setup lang="ts">
import dashboardImg from '@/assets/img/landing/saas-1/dashboard.png'
import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import CheckCircleIcon from '@iconify/icons-bx/bx-check-circle'
import { workData } from '../data'
import Rellax from '@/components/Rellax.vue'
</script>
