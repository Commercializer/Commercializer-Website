<template>
  <section class="bg-secondary mb-5 py-lg-4 py-xl-5">
    <b-container class="pt-5">
      <b-row class="align-items-center gy-5 pt-2 pt-sm-3 pt-md-4">
        <b-col lg="5" class="text-lg-start text-center">
          <h2 class="h1 mb-4 pb-lg-2">Company built by a global team of innovators</h2>
          <p class="mb-4 pb-1 pb-sm-2 pb-lg-3">
            In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id
            porttitor aliquam eget aliquet sagittis eu aut diam ut phasellus sed convallis iaculis
            neque ultricies convallis sed enim
          </p>
          <router-link :to="{ name: 'pages.contacts-2' }" class="btn btn-primary"
            >Contact us</router-link
          >
        </b-col>
        <b-col lg="6" class="offset-lg-1">
          <b-row class="row-cols-sm-2 row-cols-1 g-4 align-items-center">
            <b-col>
              <div class="card border-0">
                <div class="card-body m-xl-3 m-1 text-center">
                  <a href="#" class="d-inline-block mb-4 pb-2">
                    <img
                      src="@/assets/img/about/clutch-logo-dark.svg"
                      width="116"
                      alt="Clutch"
                      class="d-dark-mode-none d-block"
                    />
                    <img
                      src="@/assets/img/about/clutch-logo-light.svg"
                      width="116"
                      alt="Clutch"
                      class="d-dark-mode-block d-none"
                    />
                  </a>
                  <h5 class="mb-3 fs-lg fw-normal lh-1">
                    <span class="h1 d-block w-100 mb-0">100%</span>
                    Positive Feedback
                  </h5>
                  <div class="mb-3 text-nowrap">
                    <Icon :icon="StarIcon" class="text-warning fs-sm"></Icon>
                    <Icon :icon="StarIcon" class="text-warning fs-sm"></Icon>
                    <Icon :icon="StarIcon" class="text-warning fs-sm"></Icon>
                    <Icon :icon="StarIcon" class="text-warning fs-sm"></Icon>
                    <Icon :icon="StarIcon" class="text-warning fs-sm"></Icon>
                  </div>
                  <img
                    src="@/assets/img/about/members-light.png"
                    width="168"
                    alt="Members"
                    class="d-dark-mode-none d-block mx-auto"
                  />
                  <img
                    src="@/assets/img/about/members-dark.png"
                    width="168"
                    alt="Members"
                    class="d-dark-mode-block d-none mx-auto"
                  />
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="card border-0">
                <div class="card-body m-xl-3 m-1 text-center">
                  <img
                    src="@/assets/img/about/chat-light.svg"
                    width="56"
                    alt="Icon"
                    class="d-dark-mode-none d-block mx-auto mb-4"
                  />
                  <img
                    src="@/assets/img/about/chat-dark.svg"
                    width="56"
                    alt="Icon"
                    class="d-dark-mode-block d-none mx-auto mb-4"
                  />
                  <h5 class="mb-3 fs-lg fw-normal lh-1">
                    <span class="h1 d-block w-100 mb-0">24/7</span>
                    Customer support
                  </h5>
                </div>
              </div>
              <div class="card border-0 mt-4">
                <div
                  class="card-body m-xl-3 m-1 bg-repeat-0 bg-position-top-end"
                  :style="{ backgroundImage: `url('${graphImg}')` }"
                >
                  <h5 class="mb-3 fs-lg fw-normal lh-1 mt-5">
                    <span class="h1 d-block w-100 mb-0">+12k</span>
                    new leads for clients
                  </h5>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- Brands (carousel) -->
      <Swiper
        class="mx-n2 mt-lg-5 mt-sm-2 mt-md-4 pt-4"
        :modules="[Autoplay]"
        :slidesPerView="2"
        :loop="true"
        :autoplay="{
          delay: 6000,
          disableOnInteraction: false
        }"
        :pagination="{
          el: '.swiper-pagination'
        }"
        :breakpoints="{
          500: {
            slidesPerView: 3,
            spaceBetween: 8
          },
          650: {
            slidesPerView: 4,
            spaceBetween: 8
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 8
          },
          1100: {
            slidesPerView: 6,
            spaceBetween: 8
          }
        }"
      >
        <SwiperSlide class="py-3" v-for="(item, idx) in brandsData" :key="idx">
          <a href="#" class="card card-body bg-none border-0 px-2 mx-2">
            <img :src="item.image" class="d-block mx-auto my-2" width="154" alt="Brand" />
          </a>
        </SwiperSlide>

        <!-- Pagination (bullets) -->
        <div class="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import StarIcon from '@iconify/icons-bx/bxs-star'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { brandsData } from '../data'
import graphImg from '@/assets/img/about/graph.svg'
</script>
