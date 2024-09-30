<template>
  <!-- Popular courses -->
  <b-container class="mt-2 mt-sm-3 py-md-3 py-lg-5">
    <b-row class="py-5">
      <b-col lg="3" md="4">
        <!-- Nav tabs -->
        <ul
          class="nav nav-tabs flex-nowrap overflow-auto flex-md-column pb-2 pb-md-0 mb-3 mb-md-5"
          role="tablist"
        >
          <li class="nav-item" v-for="(course, idx) in courses" :key="idx">
            <a
              href="#"
              class="nav-link d-inline-block text-nowrap"
              :class="{ active: idx == 0 }"
              role="tab"
              >{{ course }}</a
            >
          </li>
        </ul>
        <router-link
          :to="{ name: 'landings.online-course' }"
          class="btn btn-outline-primary btn-lg d-none d-md-inline-flex"
        >
          See all courses
          <Icon :icon="RightArrowAltIcon" class="bx fs-xl ms-2"></Icon>
        </router-link>
      </b-col>
      <b-col lg="9" md="8">
        <!-- Title + prev/next buttons -->
        <div class="d-flex align-items-center justify-content-between pb-4 mb-3">
          <h2 class="h1 mb-0 me-3">Popular Courses</h2>
          <div class="d-flex">
            <button
              type="button"
              id="popular-prev"
              class="btn btn-prev btn-icon btn-sm me-2"
              aria-label="Previous"
            >
              <Icon :icon="ChevronLeftIcon" class="bx"></Icon>
            </button>
            <button
              type="button"
              id="popular-next"
              class="btn btn-next btn-icon btn-sm ms-2"
              aria-label="Next"
            >
              <Icon :icon="ChevronRightIcon" class="bx"></Icon>
            </button>
          </div>
        </div>

        <!-- Courses slider -->
        <Swiper
          class="swiper-nav-onhover mx-n2"
          :modules="[Pagination, Navigation]"
          :slidesPerView="1"
          :spaceBetween="8"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :navigation="{
            prevEl: '#popular-prev',
            nextEl: '#popular-next'
          }"
          :breakpoints="{
            560: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 1
            },
            850: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }"
        >
          <SwiperSlide class="h-auto pb-3" v-for="(course, idx) in popularCourseData" :key="idx">
            <CourseCard :course="course" />
          </SwiperSlide>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </Swiper>
        <router-link
          :to="{ name: 'landings.online-course' }"
          class="btn btn-outline-primary btn-lg w-100 d-md-none mt-3"
        >
          See all courses
          <Icon :icon="RightArrowAltIcon" class="bx fs-xl ms-2"></Icon>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'

import CourseCard from '@/views/landings/online-course/components/CourseCard.vue'
import { courses, popularCourseData } from '../data'
</script>
