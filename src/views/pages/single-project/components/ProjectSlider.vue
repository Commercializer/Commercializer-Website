<template>
  <b-container class="py-5 mt-2 mt-md-4 mt-lg-5 mb-xl-2">
    <h2 class="h1 text-center pt-2 pt-md-3 pb-4 mb-2 mb-lg-3">Explore More Projects</h2>
    <Swiper
      class=""
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        560: {
          slidesPerView: 2
        },
        1000: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide class="h-auto" v-for="(project, idx) in projectData" :key="idx">
        <div class="card card-portfolio">
          <div class="card-img">
            <img :src="project.image" alt="Image" />
          </div>
          <div class="card-body">
            <h3 class="h4 mb-2">
              <router-link :to="{ name: 'pages.single-project' }" class="stretched-link">{{
                project.title
              }}</router-link>
            </h3>
            <div class="card-portfolio-meta">
              <span class="text-muted">
                <template v-for="(tag, idx) in project.tags">
                  {{ tag }} <span v-if="idx != project.tags.length - 1">/</span>
                </template>
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-sm-2 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { projectData } from '../data'
</script>
