<template>
  <section class="position-relative py-5">
    <!-- Gradient BG -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10"></div>

    <!-- Content -->
    <b-container class="position-relative zindex-2 py-lg-4">
      <b-row>
        <b-col lg="5" class="d-flex flex-column pt-lg-4 pt-xl-5">
          <h5 class="my-2">Welcome!</h5>
          <h1 class="display-3 mb-4">
            Learn <span class="text-primary">IT Online</span> with No Limits
          </h1>
          <p class="fs-lg mb-5">
            Enjoy our great selection of IT courses. Choose from more than 25K online video courses
            and become an IT expert now!
          </p>

          <!-- Desktop form -->
          <b-form class="d-none d-sm-flex mb-5">
            <div class="input-group d-block d-sm-flex input-group-lg me-3">
              <b-form-input type="text" class="w-50" placeholder="Search courses..."></b-form-input>
              <b-form-select
                class="w-50 dark-select"
                v-model="selectedCourse"
                :options="courseOptions"
              ></b-form-select>
            </div>
            <b-button
              variant="primary"
              size="lg"
              type="submit"
              class="btn-icon"
              aria-label="Search"
            >
              <Icon :icon="SearchIcon" class="bx"></Icon>
            </b-button>
          </b-form>

          <!-- Mobile form -->
          <b-form class="d-sm-none mb-5">
            <b-form-input
              type="text"
              class="form-control-lg mb-2"
              placeholder="Search courses..."
            ></b-form-input>
            <b-form-select
              class="form-select-lg mb-2"
              v-model="selectedCourse"
              :options="courseOptions"
            ></b-form-select>
            <b-button
              variant="primary"
              size="lg"
              type="submit"
              class="btn-icon w-100 d-sm-none"
              aria-label="Search"
            >
              <Icon :icon="SearchIcon" class="bx"></Icon>
            </b-button>
          </b-form>
          <div class="d-flex align-items-center mt-auto mb-3 mb-lg-0 pb-4 pb-lg-0 pb-xl-5">
            <div class="d-flex me-3">
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle"
                style="width: 52px; height: 52px"
              >
                <img
                  src="@/assets/img/avatar/08.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img
                  src="@/assets/img/avatar/15.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img
                  src="@/assets/img/avatar/16.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
            </div>
            <span class="fs-sm"
              ><span class="text-primary fw-semibold">10K+</span> students are already with us</span
            >
          </div>
        </b-col>

        <b-col lg="7">
          <!-- Parallax gfx -->
          <Parallax custom-class="parallax mx-auto me-lg-0" :custom-style="{ maxWidth: '648px' }">
            <div class="parallax-layer" data-depth="0.1">
              <img :src="layer1" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.13">
              <img :src="layer2" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-5" data-depth="-0.12">
              <img :src="layer3" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-3" data-depth="0.27">
              <img :src="layer4" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-1" data-depth="-0.18">
              <img :src="layer5" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-1" data-depth="0.1">
              <img :src="layer6" alt="Layer" />
            </div>
          </Parallax>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import layer1 from '@/assets/img/landing/online-courses/hero/layer01.png'
import layer2 from '@/assets/img/landing/online-courses/hero/layer02.png'
import layer3 from '@/assets/img/landing/online-courses/hero/layer03.png'
import layer4 from '@/assets/img/landing/online-courses/hero/layer04.png'
import layer5 from '@/assets/img/landing/online-courses/hero/layer05.png'
import layer6 from '@/assets/img/landing/online-courses/hero/layer06.png'

import { Icon } from '@iconify/vue'
import SearchIcon from '@iconify/icons-bx/bx-search'

import { ref } from 'vue'

import Parallax from '@/components/Parallax.vue'

const selectedCourse = ref(null)
const courseOptions = [
  { text: 'Categories', value: null },
  { text: 'Web Development', value: 'Web Development' },
  { text: 'Mobile Development', value: 'Mobile Development' },
  { text: 'Programming', value: 'Programming' },
  { text: 'Game Development', value: 'Game Development' },
  { text: 'Software Testing', value: 'Software Testing' },
  { text: 'Software Engineering', value: 'Software Engineering' },
  { text: 'Network & Security', value: 'Network & Security' }
]
</script>
