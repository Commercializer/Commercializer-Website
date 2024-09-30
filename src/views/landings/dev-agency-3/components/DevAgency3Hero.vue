<template>
  <section
    class="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden"
  >
    <span
      class="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"
    ></span>
    <b-container
      class="position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3"
      data-bs-theme="dark"
    >
      <b-row class="gy-5">
        <b-col xl="5" lg="6">
          <div class="position-relative zindex-5 text-lg-start text-center">
            <h1 class="display-2 mb-4 pb-lg-3 pb-md-2">
              Top <span class="text-primary">software</span> engineering company
            </h1>
            <p class="mb-4 pb-lg-3 pb-md-2">
              <span class="me-2 text-light">We are the Top Rated agency on</span>
              <img :src="clutchRating" :width="193" alt="Clutch rating" class="mt-n1" />
            </p>
            <a href="#" class="btn btn-lg btn-primary">Start your project</a>
          </div>
        </b-col>
        <b-col lg="6" class="offset-xl-1">
          <div class="position-relative ms-xl-0 ms-lg-4">
            <div
              class="position-absolute top-50 start-50 translate-middle ratio ratio-1x1"
              style="width: 125%; max-width: 49.75rem"
            >
              <div class="p-md-0 p-5">
                <img :src="heroBg" alt="Shape" class="hero-animation-spin p-md-0 p-5" />
              </div>
            </div>
            <b-row class="position-relative row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
              <b-col>
                <div class="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                  <div
                    class="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                    style="min-height: 176px; backdrop-filter: blur(6px)"
                  >
                    <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                      <span class="hero-animation-fade text-white">I need AI engineers</span>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                    style="min-height: 176px; backdrop-filter: blur(6px)"
                  >
                    <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                      <span class="hero-animation-fade hero-animation-delay-2 text-white"
                        >We are looking for Shopify Experts</span
                      >
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col class="mt-sm-5 mt-2 pt-sm-5">
                <div class="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                  <div
                    class="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                    style="min-height: 176px; backdrop-filter: blur(6px)"
                  >
                    <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                      <span class="hero-animation-fade hero-animation-delay-1 text-white"
                        >I need MVP for startup</span
                      >
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                    style="min-height: 176px; backdrop-filter: blur(6px)"
                  >
                    <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                      <span class="hero-animation-fade hero-animation-delay-3 text-white"
                        >I need web development</span
                      >
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import heroBg from '@/assets/img/landing/software-agency-3/hero-bg.png'
import clutchRating from '@/assets/img/landing/software-agency-3/clutch-rating.png'
</script>

<style scoped>
/* Spin animation */
@-webkit-keyframes hero-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes hero-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.hero-animation-spin {
  -webkit-animation: hero-spin 35s linear infinite;
  animation: hero-spin 35s linear infinite;
}

/* Fade animation */
@-webkit-keyframes hero-fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes hero-fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.hero-animation-fade {
  -webkit-animation: hero-fade 4s ease-in infinite;
  animation: hero-fade 4s ease-in infinite;
}

.hero-animation-delay-1,
.hero-animation-delay-2,
.hero-animation-delay-3 {
  opacity: 0;
}

.hero-animation-delay-1 {
  animation-delay: 0.75s;
}

.hero-animation-delay-2 {
  animation-delay: 1.5s;
}

.hero-animation-delay-3 {
  animation-delay: 2s;
}
</style>
