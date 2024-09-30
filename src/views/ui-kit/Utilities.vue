<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Silicon utilities"
      description="Custom Silicon classes with a purpose to reduce the frequency of highly repetitive declarations."
      is-silicon-component
    />

    <!-- Faded background colors -->
    <section id="bg-faded" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Faded background colors</h2>

      <div class="pt-1">
        <div class="bg-faded-primary p-4 text-center mb-4">
          <h5 class="text-primary mb-0 py-2">Primary faded background</h5>
        </div>
        <div class="bg-secondary p-4 text-center mb-4">
          <h5 class="mb-0 py-2">Secondary background</h5>
        </div>
        <div class="bg-faded-success p-4 text-center mb-4">
          <h5 class="text-success mb-0 py-2">Success faded background</h5>
        </div>
        <div class="bg-faded-warning p-4 text-center mb-4">
          <h5 class="text-warning mb-0 py-2">Warning faded background</h5>
        </div>
        <div class="bg-faded-danger p-4 text-center mb-4">
          <h5 class="text-danger mb-0 py-2">Danger faded background</h5>
        </div>
        <div class="bg-faded-info p-4 text-center mb-4">
          <h5 class="text-info mb-0 py-2">Info faded background</h5>
        </div>
        <div class="bg-faded-dark p-4 text-center">
          <h5 class="text-dark mb-0 py-2">Dark faded background</h5>
        </div>
      </div>
    </section>

    <!-- Gradient background -->
    <section id="bg-gradient" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Gradient background</h2>

      <div class="pt-1">
        <div class="bg-gradient-primary p-4 text-center">
          <h5 class="text-light mb-0 py-2">Gradient background</h5>
        </div>
      </div>
    </section>

    <!-- Translucent image overlay -->
    <section id="image-overlay" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Translucent image overlay</h2>

      <div class="pt-1">
        <div class="row g-3">
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span
                class="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-60"
              ></span>
              <div
                class="position-relative fw-bold text-white text-shadow text-center zindex-5 py-5"
              >
                Primary overlay
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span
                class="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-60"
              ></span>
              <div
                class="position-relative fw-bold text-white text-shadow text-center zindex-5 py-5"
              >
                Success overlay
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span
                class="position-absolute top-0 start-0 w-100 h-100 bg-warning opacity-60"
              ></span>
              <div
                class="position-relative fw-bold text-white text-shadow text-center zindex-5 py-5"
              >
                Warning overlay
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-danger opacity-60"></span>
              <div
                class="position-relative fw-bold text-white text-shadow text-center zindex-5 py-5"
              >
                Danger overlay
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-info opacity-60"></span>
              <div
                class="position-relative fw-bold text-white text-shadow text-center zindex-5 py-5"
              >
                Info overlay
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></span>
              <div
                class="position-relative fw-bold text-white text-shadow text-center zindex-5 py-5"
              >
                Dark overlay
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-white bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-60"></span>
              <div class="position-relative fw-bold text-dark text-center zindex-5 py-5">
                White overlay
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="position-relative bg-size-cover py-5"
              :style="{ backgroundImage: `url(${img})` }"
            >
              <span
                class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-60"
              ></span>
              <div
                class="position-relative fw-bold text-white text-shadow text-center zindex-5 py-5"
              >
                Gradient overlay
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gradient text -->
    <section id="gradient-text" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Gradient text</h2>

      <div class="pt-1">
        <h2 class="display-4 mb-0">
          <span class="text-gradient-primary">I'm a gradient text</span>
        </h2>
      </div>
    </section>

    <!-- Text shadow -->
    <section id="text-shadow" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Text shadow</h2>

      <div class="pt-1">
        <h2 class="display-4 text-white text-shadow mb-0">Text shadow</h2>
      </div>
    </section>

    <!-- Opacity -->
    <section id="opacity" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Opacity</h2>

      <div class="pt-1">
        <div class="d-flex flex-wrap pt-2">
          <span class="text-dark opacity-10 mb-3 me-4">Opacity 10%</span>
          <span class="text-dark opacity-15 mb-3 me-4">Opacity 15%</span>
          <span class="text-dark opacity-25 mb-3 me-4">Opacity 25%</span>
          <span class="text-dark opacity-35 mb-3 me-4">Opacity 35%</span>
          <span class="text-dark opacity-40 mb-3 me-4">Opacity 40%</span>
          <span class="text-dark opacity-50 mb-3 me-4">Opacity 50%</span>
          <span class="text-dark opacity-60 mb-3 me-4">Opacity 60%</span>
          <span class="text-dark opacity-70 mb-3 me-4">Opacity 70%</span>
          <span class="text-dark opacity-75 mb-3 me-4">Opacity 75%</span>
          <span class="text-dark opacity-80 mb-3 me-4">Opacity 80%</span>
          <span class="text-dark opacity-90 mb-3 me-4">Opacity 90%</span>
          <span class="text-dark opacity-100 mb-3">Opacity 100%</span>
        </div>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

import img from '@/assets/img/blog/podcasts/02.jpg'

const anchorData = [
  {
    id: 'bg-faded',
    title: 'Faded background colors'
  },
  {
    id: 'bg-gradient',
    title: 'Gradient background'
  },
  {
    id: 'image-overlay',
    title: 'Translucent image overlay'
  },
  {
    id: 'gradient-text',
    title: 'Gradient text'
  },
  {
    id: 'text-shadow',
    title: 'Text shadow'
  },
  {
    id: 'opacity',
    title: 'Opacity'
  }
]
</script>
