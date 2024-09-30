<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Image Comparison Slider"
      description="JavaScript based slider component that can be used to demonstrate the difference between two images."
      is-silicon-component
    />

    <section class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Example</h2>
      <div class="pt-1">
        <ImgComparisonSlider style="max-width: 860px">
          <figure slot="first" class="position-relative">
            <img src="@/assets/img/portfolio/grid/10.jpg" alt="Image before" />
            <figcaption
              class="badge position-absolute top-50 start-0 translate-middle-y bg-white rounded text-nav fs-sm fw-semibold lh-1 px-3 py-2 ms-3 ms-sm-4"
            >
              Before
            </figcaption>
          </figure>
          <figure slot="second" class="position-relative">
            <img src="@/assets/img/portfolio/grid/11.jpg" alt="Image after" />
            <figcaption
              class="badge position-absolute top-50 end-0 translate-middle-y bg-white rounded text-nav fs-sm fw-semibold lh-1 px-3 py-2 me-3 me-sm-4"
            >
              After
            </figcaption>
          </figure>
          <div slot="handle" style="width: 36px">
            <svg
              class="text-primary shadow-primary rounded-circle"
              width="36"
              height="36"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 36 36"
            >
              <g>
                <circle fill="currentColor" cx="18" cy="18" r="18" />
              </g>
              <path
                fill="#fff"
                d="M22.2,17.2h-8.3v-3.3L9.7,18l4.2,4.2v-3.3h8.3v3.3l4.2-4.2l-4.2-4.2V17.2z"
              />
            </svg>
          </div>
        </ImgComparisonSlider>
      </div>
    </section>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
</script>
