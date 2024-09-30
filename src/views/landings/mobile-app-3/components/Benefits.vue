<template>
  <section class="bg-secondary pt-5">
    <b-container class="pt-2 pt-sm-3 pt-md-4 pt-lg-5">
      <b-row class="pt-xl-2 pt-xxl-4 pb-3 pb-sm-4 pb-md-5 mt-2">
        <b-col md="6" xl="5" class="col-xxl-4">
          <h2 class="h1">
            We offer <span class="text-primary">beneficial conditions</span> for all categories of
            users
          </h2>
        </b-col>
        <b-col md="6" xl="5" class="offset-xl-2 offset-xxl-3">
          <ul class="list-unstyled">
            <li class="d-flex fs-xl pb-2 mb-1">
              <Icon
                :icon="CheckCircleIcon"
                class="bx text-dark d-flex pe-1 me-2"
                style="margin-top: 0.375rem"
              ></Icon>
              Banking transactions are free for you
            </li>
            <li class="d-flex fs-xl pb-2 mb-1">
              <Icon
                :icon="CheckCircleIcon"
                class="bx text-dark d-flex pe-1 me-2"
                style="margin-top: 0.375rem"
              ></Icon>
              No monthly cash commission
            </li>
            <li class="d-flex fs-xl pb-2 mb-1">
              <Icon
                :icon="CheckCircleIcon"
                class="bx text-dark d-flex pe-1 me-2"
                style="margin-top: 0.375rem"
              ></Icon>
              Manage payments and transactions online
            </li>
            <li class="d-flex fs-xl pb-2 mb-1">
              <Icon
                :icon="CheckCircleIcon"
                class="bx text-dark d-flex pe-1 me-2"
                style="margin-top: 0.375rem"
              ></Icon>
              Receive real-time alerts
            </li>
            <li class="d-flex fs-xl">
              <Icon
                :icon="CheckCircleIcon"
                class="bx text-dark d-flex pe-1 me-2"
                style="margin-top: 0.375rem"
              ></Icon>
              Receive payment from international banks
            </li>
          </ul>
        </b-col>
      </b-row>

      <!-- Business category -->
      <b-row
        class="align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3"
      >
        <b-col
          cols="10"
          sm="9"
          md="6"
          xl="7"
          class="d-flex justify-content-md-end order-md-2 pb-2 pb-md-0 mb-4 mb-md-0"
        >
          <img :src="bussinesImg" width="642" alt="Businessman" />
        </b-col>
        <b-col md="6" xl="5" class="order-md-1 text-center text-md-start">
          <h2 class="mb-lg-4">For business services</h2>
          <p class="fs-lg pb-4 mb-0">
            Our app simplifies the process of tracking your company's financial health. From cash
            flow analysis to expense tracking, our app offers a wide range of tools that help you
            make informed decisions about your business finances. Stay on top of your financial
            performance.
          </p>
          <a href="#" class="btn btn-outline-primary mt-1">
            Learn more
            <Icon :icon="ChevronRightIcon" class="bx fs-lg ms-2 me-n2"></Icon>
          </a>
        </b-col>
      </b-row>

      <!-- Sturtups category -->
      <b-row
        class="align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3"
      >
        <b-col cols="10" sm="9" md="6" xl="7" class="pb-2 pb-md-0 mb-4 mb-md-0">
          <div class="pe-md-4 pe-xl-0">
            <img :src="startupsImg" width="636" alt="Startupper" />
          </div>
        </b-col>
        <b-col md="6" xl="5" class="text-center text-md-start">
          <h2 class="mb-lg-4">Offer for startups</h2>
          <p class="fs-lg pb-4 mb-0">
            Starting a new business is a challenging venture, and managing your finances can be
            overwhelming. Our app offers a range of features designed specifically for startups,
            from budget tracking to financial planning. It helps you make informed decisions, and
            focus on growing your business.
          </p>
          <a href="#" class="btn btn-outline-primary mt-1">
            Learn more
            <Icon :icon="ChevronRightIcon" class="bx fs-lg ms-2 me-n2"></Icon>
          </a>
        </b-col>
      </b-row>

      <!-- Students category -->
      <b-row
        class="align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3"
      >
        <b-col
          cols="10"
          sm="9"
          md="6"
          xl="7"
          class="d-flex justify-content-md-end order-md-2 pb-2 pb-md-0 mb-4 mb-md-0"
        >
          <img :src="studentImg" width="640" alt="Student" />
        </b-col>
        <b-col md="6" xl="5" class="order-md-1 text-center text-md-start">
          <h2 class="mb-lg-4">Benefits for students</h2>
          <p class="fs-lg pb-4 mb-0">
            Managing your finances as a student can be difficult, but our app makes it easy. It
            offers a variety of features that help you track your expenses, set budgets, and save
            money. Easily monitor your spending habits and make informed decisions about your
            finances. Start managing your money like a pro!
          </p>
          <a href="#" class="btn btn-outline-primary mt-1">
            Learn more
            <Icon :icon="ChevronRightIcon" class="bx fs-lg ms-2 me-n2"></Icon>
          </a>
        </b-col>
      </b-row>

      <!-- Stats -->
      <div class="pb-5 pt-2 pt-sm-3 pt-lg-4 pt-xl-5">
        <Swiper
          class="pb-sm-2 pb-md-4 pb-lg-5 mb-xxl-3 mx-n2"
          :modules="[Pagination]"
          :slidesPerView="1"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :breakpoints="{
            500: {
              slidesPerView: 2,
              spaceBetween: 8
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 8
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 8
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 8
            }
          }"
        >
          <SwiperSlide class="h-auto py-3" v-for="(stat, idx) in statData" :key="idx">
            <div class="card border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
              <div class="card-body">
                <img
                  :src="stat.image"
                  style="
                    filter: drop-shadow(
                        0px 0.8645132780075073px 4.602016925811768px rgba(99, 102, 241, 0.02)
                      )
                      drop-shadow(
                        0px 2.9037201404571533px 10.33138370513916px rgba(99, 102, 241, 0.05)
                      )
                      drop-shadow(0px 13px 27px rgba(99, 102, 241, 0.17));
                  "
                  alt="Payment icon"
                />
                <h3 class="h1 pt-4 mb-1">
                  {{ stat.number }} <span class="h4">{{ stat.postfix }}</span>
                </h3>
                <p class="fs-lg mb-0">{{ stat.title }}</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative pt-2 mt-4"></div>
        </Swiper>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import CheckCircleIcon from '@iconify/icons-bx/bx-check-circle'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { bussinesImg, startupsImg, studentImg } from '@/assets/data/image'

import { statData } from '@/views/landings/mobile-app-3/data'
</script>
