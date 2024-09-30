<template>
  <b-container class="mb-5 pb-lg-5">
    <b-row class="gy-md-5 gy-4">
      <!-- Author -->
      <b-col lg="3" md="4" class="order-md-2 position-relative">
        <div class="sticky-top ms-xxl-5 ps-lg-4" style="top: 105px !important">
          <div class="d-flex align-items-center position-relative mb-lg-5 mb-4">
            <img
              src="@/assets/img/avatar/06.jpg"
              class="rounded-circle me-3"
              width="60"
              alt="Avatar"
            />
            <div>
              <h4 class="h6 mb-1">Hosted by</h4>
              <a href="#" class="fw-semibold stretched-link">Jenny Wilson</a>
            </div>
          </div>
          <b-button size="lg" variant="outline-secondary" class="mb-3">
            <i class="bx bx-like me-2 lead"></i>
            Like it
            <span class="badge bg-primary shadow-primary ms-3">8</span>
          </b-button>
        </div>
      </b-col>

      <!-- Player + Timeline -->
      <b-col lg="9" md="8" class="order-md-1">
        <div class="card p-lg-4 p-md-2 mb-4 mb-lg-5">
          <!-- Audio player -->
          <div class="audio-player card-body p-2 p-sm-4">
            <audio src="@/assets/audio/sample.wav" preload="auto"></audio>
            <b-button
              class="ap-play-button btn btn-icon shadow-primary"
              variant="primary"
              aria-label="Play/pause"
            ></b-button>
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
        <h3 class="h4 mb-4 pt-2 pt-md-0">Timeline</h3>
        <ul class="list-unstyled mb-0">
          <li class="d-flex mb-2">
            <span class="flex-shrink-0 fw-medium text-nowrap me-2" style="width: 80px"
              >00:05:12</span
            >
            Diam erat molestie duis auctor sit quis.
          </li>
          <li class="d-flex mb-2">
            <span class="flex-shrink-0 fw-medium text-nowrap me-2 text-primary" style="width: 80px"
              >00:28:19</span
            >
            Non mi eget molestie pretium commodo urna duis facilisis turpis.
          </li>
          <li class="d-flex mb-2">
            <span class="flex-shrink-0 fw-medium text-nowrap me-2" style="width: 80px"
              >00:45:37</span
            >
            Sit placerat adipiscing interdum libero neque, aliquam nec imperdiet ullamcorper.
          </li>
          <li class="d-flex mb-2">
            <span class="flex-shrink-0 fw-medium text-nowrap me-2" style="width: 80px"
              >00:56:04</span
            >
            Pulvinar eu porttitor nulla morbi varius tristique leo.
          </li>
          <li class="d-flex mb-2">
            <span class="flex-shrink-0 fw-medium text-nowrap me-2" style="width: 80px"
              >01:32:17</span
            >
            Cras et gravida iaculis vel at quis euismod.
          </li>
          <li class="d-flex mb-2">
            <span class="flex-shrink-0 fw-medium text-nowrap me-2" style="width: 80px"
              >01:50:43</span
            >
            Volutpat malesuada nulla lectus justo tempus est sollicitudin.
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts"></script>
