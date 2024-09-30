<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Audio player"
      description="HTML5 audio player that has consistent UI across all browsers and devices."
      :is-silicon-component="true"
    />

    <section class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Example</h2>

      <div class="pt-1">
        <div class="card p-lg-4 p-md-2 mb-4 mb-lg-5">
          <div class="audio-player card-body p-2 p-sm-4">
            <audio src="@/assets/audio/sample.wav" preload="auto"></audio>
            <button
              type="button"
              class="ap-play-button btn btn-icon btn-primary shadow-primary"
              aria-label="Play/pause"
            ></button>
            <span class="ap-current-time flex-shr fw-medium mx-3 mx-lg-4">0:00</span>
            <input type="range" class="ap-seek-slider" max="100" value="0" />
            <span class="ap-duration flex-shr fw-medium mx-3 mx-lg-4">0:00</span>
            <div class="dropup">
              <button
                type="button"
                class="ap-volume-button btn btn-icon btn-secondary"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Volume"
              >
                <i class="bx bx-volume-full"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-dark my-1">
                <input type="range" class="ap-volume-slider" max="100" value="100" />
              </div>
            </div>
            <a
              href="@/assets/audio/sample.wav"
              download="audio-sample"
              class="btn btn-icon btn-secondary ms-2"
              aria-label="Download"
            >
              <i class="bx bx-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
</script>
