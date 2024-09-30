<template>
  <b-container class="mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5">
    <h2 class="h1 mb-4 text-center">Featured Projects</h2>
    <p class="mb-4 mx-auto pb-3 fs-lg text-center" style="max-width: 636px">
      We create websites and mobile apps, marketing materials, branding, web design, UX/UI design
      and illustrations.
    </p>

    <b-row class="masonry-grid g-md-4 g-3 mb-4">
      <b-col md="4" cols="12">
        <router-link
          :to="{ name: 'pages.single-project' }"
          class="card card-portfolio card-hover bg-transparent border-0"
        >
          <div
            class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
          >
            <span
              class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"
            ></span>
            <div class="position-relative zindex-2">
              <h3 class="h5 text-light mb-2">Astronaut &amp; Flashing Neon Lights</h3>
              <span class="fs-sm text-light opacity-70"
                >3D Render / Graphic Design / Motion Design</span
              >
            </div>
          </div>
          <div class="card-img">
            <img :src="img7" class="rounded-3" alt="Image" />
          </div>
        </router-link>
      </b-col>

      <b-col md="8" cols="12">
        <b-row class="mb-md-4 mb-0">
          <b-col md="6" cols="12" class="masonry-grid-item mb-md-0 mb-3">
            <router-link
              :to="{ name: 'pages.single-project' }"
              class="card card-portfolio card-hover bg-transparent border-0"
            >
              <div
                class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
              >
                <span
                  class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"
                ></span>
                <div class="position-relative zindex-2">
                  <h3 class="h5 text-light mb-2">Plaster Antique Sculpture in a Pop Art Style</h3>
                  <span class="fs-sm text-light opacity-70">NFT / Graphic Design / Art / 3D</span>
                </div>
              </div>
              <div class="card-img">
                <img :src="img8" class="rounded-3" alt="Image" />
              </div>
            </router-link>
          </b-col>
          <b-col md="6" cols="12" class="masonry-grid-item mb-md-0 mb-3">
            <router-link
              :to="{ name: 'pages.single-project' }"
              class="card card-portfolio card-hover bg-transparent border-0"
            >
              <div
                class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
              >
                <span
                  class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"
                ></span>
                <div class="position-relative zindex-2">
                  <h3 class="h5 text-light mb-2">Big Blue Whale Shape</h3>
                  <span class="fs-sm text-light opacity-70"
                    >3D Pollygonal Shape / Graphic Design / Art</span
                  >
                </div>
              </div>
              <div class="card-img">
                <img :src="img9" class="rounded-3" alt="Image" />
              </div>
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <router-link
            :to="{ name: 'pages.single-project' }"
            class="card card-portfolio card-hover bg-transparent border-0"
          >
            <div
              class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
            >
              <span
                class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"
              ></span>
              <div class="position-relative zindex-2">
                <h3 class="h5 text-light mb-2">3D Shape Illustration</h3>
                <span class="fs-sm text-light opacity-70">3D Design / Illustration / Art</span>
              </div>
            </div>
            <div class="card-img">
              <img :src="img10" class="rounded-3" alt="Image" />
            </div>
          </router-link>
        </b-row>
      </b-col>
    </b-row>

    <div class="pt-md-3 pt-2 text-center">
      <router-link to="/grid" class="btn btn-lg btn-primary w-sm-auto w-100"
        >Explore all</router-link
      >
    </div>
  </b-container>
</template>

<script setup lang="ts">
import img7 from '@/assets/img/portfolio/grid/07.jpg'
import img8 from '@/assets/img/portfolio/grid/08.jpg'
import img9 from '@/assets/img/portfolio/grid/09.jpg'
import img10 from '@/assets/img/portfolio/grid/10.jpg'
</script>
