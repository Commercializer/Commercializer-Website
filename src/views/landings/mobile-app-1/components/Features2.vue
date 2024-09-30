<template>
  <b-container class="pt-5 pb-2 pb-md-3 py-lg-5">
    <b-row class="align-items-center my-3 py-md-3 py-lg-5">
      <b-col md="6" xl="5" class="offset-lg-1 offset-xl-2 order-md-2 mb-2 mb-md-0 pb-4 pb-md-0">
        <dic class="position-relative mx-auto mx-md-0" style="max-width: 469px">
          <img
            :src="screen1Img"
            class="rellax d-block"
            alt="Screen"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.5"
            data-disable-parallax-down="md"
          />
          <div
            class="rellax position-absolute top-0 end-0 w-100 h-100"
            data-rellax-percentage="0.5"
            data-rellax-speed="0.75"
            data-disable-parallax-down="md"
          >
            <img :src="screen2Img" alt="Screen" />
          </div>
        </dic>
      </b-col>
      <b-col md="6" lg="5" xl="4" class="offset-xl-1 order-md-1 pb-md-4">
        <h2 class="pb-3">Make your money transfer simple and clear</h2>
        <ul class="list-unstyled pb-3 mb-3">
          <li class="d-flex align-items-center mb-2">
            <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
            Banking transactions are free for you
          </li>
          <li class="d-flex align-items-center mb-2">
            <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
            No monthly cash commission
          </li>
          <li class="d-flex align-items-center mb-2">
            <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
            Manage payments and transactions online
          </li>
        </ul>
        <a href="#" class="btn btn-primary">
          Learn more
          <Icon :icon="RightArrowIcon" class="bx fs-xl ms-2 me-n1"></Icon>
        </a>
      </b-col>
    </b-row>
    <b-row class="align-items-center mt-2 mt-md-0 pt-5 pt-md-4 pt-lg-0 pb-md-3 pb-lg-5">
      <b-col md="6" lg="5" class="offset-xl-1 mb-2 mb-md-0 pb-4 pb-md-0">
        <div class="position-relative mx-auto mx-md-0" style="max-width: 462px">
          <img
            :src="screen3Img"
            class="rellax d-block"
            alt="Screen"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.5"
            data-disable-parallax-down="md"
          />
          <div
            class="rellax position-absolute top-0 end-0 w-100 h-100 me-md-n3"
            data-rellax-percentage="0.5"
            data-rellax-speed="0.75"
            data-disable-parallax-down="md"
          >
            <img :src="screen4Img" alt="Screen" />
          </div>
        </div>
      </b-col>
      <b-col md="6" xl="5" class="offset-lg-1">
        <h2 class="pb-3">Receive payment from international bank details</h2>
        <b-row class="row-cols-1 row-cols-sm-2 text-start pb-3">
          <b-col class="pb-4">
            <div class="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
              <img :src="paymentsImg" alt="Easy Payments" />
            </div>
            <p class="mb-0">
              Manage your payments online. Mollis congue egestas egestas fermentum fames.
            </p>
          </b-col>
          <b-col class="pb-4">
            <div class="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
              <img :src="cashBackImg" alt="Regular Cashback" />
            </div>
            <p class="mb-0">
              A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
            </p>
          </b-col>
        </b-row>
        <a href="#" class="btn btn-primary">
          Learn more
          <Icon :icon="RightArrowIcon" class="bx fs-xl ms-2 me-n1"></Icon>
        </a>
      </b-col>
    </b-row>
    <!-- Extra spacing for dark mode only -->
    <div class="pt-5 d-none d-dark-mode-block"></div>
  </b-container>
</template>

<script setup lang="ts">
import {
  screen1Img,
  screen2Img,
  screen3Img,
  screen4Img,
  cashBackImg,
  paymentsImg
} from '@/assets/data/image'
import { Icon } from '@iconify/vue'
import RightArrowIcon from '@iconify/icons-bx/right-arrow-alt'
import CheckCircleIcon from '@iconify/icons-bx/check-circle'
</script>
