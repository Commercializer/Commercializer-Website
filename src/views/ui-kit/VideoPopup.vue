<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Video popup"
      description="Responsive YouTube video player inside lightbox triggered by specially styled button."
    />

    <!-- Play button -->
    <section id="video-button" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Play button</h2>

      <div class="d-flex align-items-center">
        <VideoPopup
          link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
          class="btn fs-5 btn-video btn-icon"
        />
        <span class="fs-sm text-muted ps-3">Click me to watch video!</span>
      </div>
    </section>

    <!-- Sizing -->
    <section id="video-button-sizing" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizing</h2>
      <VideoPopup
        link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
        class="btn fs-2 justify-content-center align-item-center btn-video btn-icon btn-xl me-3 my-2"
      />
      <VideoPopup
        link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
        class="btn btn-video btn-icon btn-lg me-3 my-2"
      />
      <VideoPopup
        link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
        class="btn btn-video btn-icon me-3 my-2"
      />
      <VideoPopup
        link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
        class="btn btn-video btn-icon btn-sm me-3 my-2"
      />
    </section>

    <!-- On top of the image -->
    <section id="video-button-image" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">On top of the image</h2>
      <div class="pt-1">
        <div
          class="position-relative bg-size-cover bg-position-center py-5"
          :style="{ backgroundImage: `url('${casestudy}')` }"
        >
          <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></span>
          <div class="position-relative text-center zindex-5 px-3 py-4 py-sm-5 my-lg-5">
            <VideoPopup
              link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
              class="btn btn-video btn-xl fs-2 justify-content-center align-item-center btn-icon"
            />
            <div class="fs-sm text-white opacity-75">Click me to watch video!</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Inside card -->
    <section id="video-button-card" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inside card</h2>
      <div class="pt-1">
        <div class="card overflow-hidden" style="max-width: 20rem">
          <div class="position-relative">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></span>
            <div
              class="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 zindex-2"
            >
              <VideoPopup
                link="https://www.youtube.com/watch?v=vTgKtoU--Z8"
                class="btn btn-video btn-icon bg-white"
              />
            </div>
            <img
              src="@/assets/img/landing/financial/services/02.jpg"
              class="card-img-top"
              alt="Card image"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="btn btn-sm btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </section>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import VideoPopup from '@/components/VideoPopup.vue'

import casestudy from '@/assets/img/landing/software-agency-1/case-study01.jpg'
</script>
