<template>
  <section
    class="position-relative jarallax pb-xl-3"
    data-jarallax
    data-speed="0.4"
    data-bs-theme="dark"
  >
    <div
      class="jarallax-img bg-dark opacity-70"
      :style="{ backgroundImage: `url(${coverImage})` }"
    ></div>

    <!-- Overlay bg -->
    <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70 zindex-1"></span>

    <!-- Overlay content -->
    <b-container class="position-relative pb-5 zindex-5">
      <!-- Breadcrumb -->
      <nav class="py-4" aria-label="breadcrumb">
        <ol class="breadcrumb mb-0 py-3">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'landing' }"
              ><i class="bx bx-home-alt fs-lg me-1"></i>Home</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">Blog Homepage</li>
        </ol>
      </nav>

      <!-- Featured article -->
      <b-row class="mb-xxl-5 py-md-4 py-lg-5">
        <b-col lg="6" md="7" class="pb-3 pb-md-0 mb-4 mb-md-5">
          <div class="mb-3 fs-lg text-light">
            <img :src="flame" :width="24" alt="Flame icon" class="mt-n1 me-1" />
            Hot Topic
          </div>
          <h1 class="display-5 pb-md-3">
            This Long-Awaited Technology May Finally Change the World
          </h1>
          <div class="d-flex flex-wrap mb-md-5 mb-4 pb-md-2 text-white">
            <div class="border-end border-light h-100 mb-2 pe-3 me-3">
              <span class="badge bg-faded-light fs-base">Technology</span>
            </div>
            <div class="border-end border-light mb-2 pe-3 me-3 opacity-70">12 hours ago</div>
            <div class="d-flex align-items-center mb-2 text-nowrap">
              <div class="d-flex align-items-center me-3 opacity-70">
                <Icon :icon="LikeIcon" class="fs-lg me-1" />
                <span class="fs-sm">8</span>
              </div>
              <div class="d-flex align-items-center me-3 opacity-70">
                <Icon :icon="CommentIcon" class="fs-lg me-1" />
                <span class="fs-sm">4</span>
              </div>
              <div class="d-flex align-items-center opacity-70">
                <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                <span class="fs-sm">2</span>
              </div>
            </div>
          </div>
          <router-link to="/blog-single" class="btn btn-lg btn-primary">
            Read article
            <i class="bx bx-right-arrow-alt ms-2 me-n1 lead"></i>
          </router-link>
        </b-col>

        <!-- Articles slider -->
        <div class="col-lg-4 offset-lg-2 col-md-5">
          <Swiper
            class="overflow-hidden w-100 ms-n2 ms-md-0 pe-3 pe-sm-4"
            style="max-height: 405px"
            :modules="[Mousewheel, Scrollbar]"
            direction="vertical"
            slidesPerView="auto"
            :freeMode="true"
            :scrollbar="{
              el: '.swiper-scrollbar'
            }"
            :mousewheel="true"
            wrapper-class="pe-md-2"
          >
            <SwiperSlide class="h-auto px-2">
              <b-row class="row-cols-md-1 row-cols-sm-2 row-cols-1 g-md-4 g-3">
                <b-col v-for="(blog, idx) in blogData" :key="idx">
                  <BlogCard1 :blog="blog" />
                </b-col>
              </b-row>
            </SwiperSlide>

            <div class="swiper-scrollbar"></div>
          </Swiper>
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import coverImage from '@/assets/img/blog/single/cover-image.jpg'
import flame from '@/assets/img/blog/flame.svg'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Scrollbar } from 'swiper/modules'

import BlogCard1 from '@/views/landings/blog/components/BlogCard1.vue'
import { blogData } from '@/views/landings/blog/data'

import { onMounted } from 'vue'
import { jarallax } from 'jarallax'

import { Icon } from '@iconify/vue'
import LikeIcon from '@iconify/icons-bx/bx-like'
import CommentIcon from '@iconify/icons-bx/comment'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.4
  })
})
</script>
