<template>
  <UIKitLayout>
    <!-- Page title -->
    <UIKitPageTitle
      title="Parallax"
      description="Silicon supports 2 types of parallax effect: on page scrolling and cursor position."
      is-silicon-component
    />

    <!-- Background image -->
    <section id="parallax-background" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Background image</h2>
      <div class="pt-1">
        <div class="pb-4 mx-auto" style="max-width: 38rem">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            <span class="d-none d-md-inline"
              >Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat.</span
            >
          </p>
        </div>
        <Jarallax custom-class="jarallax bg-dark py-5" :options="{ speed: 0.5 }">
          <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></span>
          <div class="jarallax-img" :style="{ backgroundImage: `url('${bgImg}')` }"></div>
          <div class="position-relative text-center zindex-5 py-sm-5">
            <div class="py-lg-5 px-3">
              <h2 class="h1 my-5 text-light text-shadow">Parallax backgound image</h2>
            </div>
          </div>
        </Jarallax>
        <div class="pt-5 mx-auto" style="max-width: 38rem">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            <span class="d-none d-md-inline"
              >Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat.</span
            >
          </p>
        </div>
      </div>
    </section>

    <!-- Element parallax -->
    <section id="parallax-element" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Element parallax</h2>
      <div class="pt-1">
        <Rellax custom-class="d-flex justify-content-center py-5">
          <div
            class="rellax display-1 text-primary px-1"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.5"
          >
            S
          </div>
          <div
            class="rellax display-1 text-success px-1"
            data-rellax-percentage="0.5"
            data-rellax-speed="1"
          >
            I
          </div>
          <div
            class="rellax display-1 text-warning px-1"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.75"
          >
            L
          </div>
          <div
            class="rellax display-1 text-info px-1"
            data-rellax-percentage="0.5"
            data-rellax-speed="0.75"
          >
            I
          </div>
          <div
            class="rellax display-1 text-danger px-1"
            data-rellax-percentage="0.5"
            data-rellax-speed="-1.5"
          >
            C
          </div>
          <div
            class="rellax display-1 text-success px-1"
            data-rellax-percentage="0.5"
            data-rellax-speed="1.25"
          >
            O
          </div>
          <div
            class="rellax display-1 text-primary px-1"
            data-rellax-percentage="0.5"
            data-rellax-speed="-1"
          >
            N
          </div>
        </Rellax>
      </div>
    </section>

    <!-- Cursor position parallax -->
    <section id="parallax-cursor" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Cursor position parallax</h2>
      <div class="pt-1">
        <div class="position-relative py-5 px-3">
          <div
            class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10"
          ></div>
          <div class="position-relative d-flex justify-content-center zindex-5 py-md-4">
            <Parallax custom-class="parallax" :custom-style="{ maxWidth: '648px' }">
              <div class="parallax-layer" data-depth="0.1">
                <img src="@/assets/img/landing/online-courses/hero/layer01.png" alt="Layer" />
              </div>
              <div class="parallax-layer" data-depth="0.13">
                <img src="@/assets/img/landing/online-courses/hero/layer02.png" alt="Layer" />
              </div>
              <div class="parallax-layer zindex-5" data-depth="-0.12">
                <img src="@/assets/img/landing/online-courses/hero/layer03.png" alt="Layer" />
              </div>
              <div class="parallax-layer zindex-3" data-depth="0.27">
                <img src="@/assets/img/landing/online-courses/hero/layer04.png" alt="Layer" />
              </div>
              <div class="parallax-layer zindex-1" data-depth="-0.18">
                <img src="@/assets/img/landing/online-courses/hero/layer05.png" alt="Layer" />
              </div>
              <div class="parallax-layer zindex-1" data-depth="0.1">
                <img src="@/assets/img/landing/online-courses/hero/layer06.png" alt="Layer" />
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D tilt effect -->
    <section id="parallax-tilt" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">3D tilt effect</h2>
      <div class="pt-1">
        <VanillaTilt
          custom-class="tilt-3d position-relative bg-gradient-primary ratio ratio-4x3 mx-auto"
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.4"
          :custom-style="{ maxWidth: '500px' }"
        >
          <div
            class="tilt-3d-inner d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 text-center p-3"
          >
            <h4 class="text-light text-shadow mb-0">Hover and move your mouse</h4>
          </div>
        </VanillaTilt>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

import bgImg from '@/assets/img/landing/software-agency-1/case-study01.jpg'
import Jarallax from '@/components/Jarallax.vue'
import Rellax from '@/components/Rellax.vue'
import Parallax from '@/components/Parallax.vue'
import VanillaTilt from '@/components/VanillaTilt.vue'

const anchorData = [
  {
    id: 'parallax-background',
    title: 'Background image'
  },
  {
    id: 'parallax-element',
    title: 'Element parallax'
  },
  {
    id: 'parallax-cursor',
    title: 'Cursor position parallax'
  },
  {
    id: 'parallax-tilt',
    title: '3D tilt effect'
  }
]
</script>
