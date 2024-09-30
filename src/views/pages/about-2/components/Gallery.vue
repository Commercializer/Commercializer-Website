<template>
  <!-- Gallery -->
  <b-container class="pb-5 mb-2 mb-md-4 mb-lg-5 mt-n2">
    <div class="d-flex align-items-center justify-content-between pb-4 mb-2">
      <h2 class="h1 mb-0">We are Powerful</h2>
      <b-link href="#" class="btn btn-outline-primary btn-lg">
        <i class="bx bx-images fs-4 lh-1 me-2"></i>
        See all photos
      </b-link>
    </div>
    <LightGallery>
      <b-row class="gallery g-4" data-video="true" data-thumbnails="true">
        <b-col md="5">
          <b-link href="https://www.youtube.com/watch?v=zPo5ZaH6sW8" class="gallery-item video-item is-hovered rounded-3"
            data-sub-html='<h6 class="fs-sm text-light">Silicon Inc. Showreel by Marvin McKinney</h6>'>
            <img src="@/assets/img/about/gallery/01.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption p-4">
              <h4 class="text-light mb-1">Silicon Inc.</h4>
              <p class="mb-0">Showreel by Marvin McKinney</p>
            </div>
          </b-link>
        </b-col>
        <b-col md="3" sm="5">
          <b-link href="../src/assets/img/about/gallery/02.jpg" class="gallery-item rounded-3 mb-4"
            data-sub-html='<h6 class="fs-sm text-light">Program for apprentices</h6>'>
            <img src="@/assets/img/about/gallery/02.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption fs-sm fw-medium">Program for apprentices</div>
          </b-link>
          <b-link href="../src/assets/img/about/gallery/03.jpg" class="gallery-item rounded-3"
            data-sub-html='<h6 class="fs-sm text-light">Modern bright offices</h6>'>
            <img src="@/assets/img/about/gallery/03.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption fs-sm fw-medium">Modern bright offices</div>
          </b-link>
        </b-col>
        <b-col md="4" sm="7">
          <b-link href="../src/assets/img/about/gallery/04.jpg" class="gallery-item rounded-3 mb-4"
            data-sub-html='<h6 class="fs-sm text-light">Friendly professional team</h6>'>
            <img src="@/assets/img/about/gallery/04.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption fs-sm fw-medium">Friendly professional team</div>
          </b-link>
          <b-link href="../src/assets/img/about/gallery/05.jpg" class="gallery-item rounded-3"
            data-sub-html='<h6 class="fs-sm text-light">Efficient project management</h6>'>
            <img src="@/assets/img/about/gallery/05.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption fs-sm fw-medium">Efficient project management</div>
          </b-link>
        </b-col>
      </b-row>
    </LightGallery>
  </b-container>
</template>

<script setup lang="ts">
import LightGallery from '@/components/LightGallery.vue';
</script>
