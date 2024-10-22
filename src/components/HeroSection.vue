<template>
  <!-- Hero -->
  <section
    class="position-relative overflow-hidden zindex-2"
    id="home"
    style="min-height: calc(100vh - 74px)"
  >
    <b-container style="min-height: calc(100vh - 74px)">
      <b-row
        class="justify-content-center align-items-center"
        style="min-height: calc(100vh - 74px)"
      >
        <!-- Parallax gfx -->
        <b-col xl="6" lg="6" md="6" sm="8" class="col-10 offset-xl-1 order-md-2">
          <img
            src="/commercializer-logo-with-annotations.png"
            alt=""
            style="width: 100%; max-width: 600px"
          />
          <!-- <Parallax custom-class="parallax mx-auto" :custom-style="{ maxWidth: '556px' }">
            <div class="parallax-layer" data-depth="0.1">
              <img :src="layer1Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="-0.2">
              <img :src="layer2Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="-0.3">
              <img :src="layer3Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="0.4">
              <img :src="layer4Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="-0.1">
              <img :src="layer5Img" alt="Screen" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img :src="layer6Img" alt="Screen" />
            </div>
          </Parallax> -->
        </b-col>

        <!-- Text -->
        <b-col lg="5" md="6" class="text-center text-md-start order-md-1">
          <h1 class="display-5 mb-lg-4">
            Commercializing Innovations
            <!-- Transforming groundbreaking ideas br into market-leading products. -->
          </h1>
          <p class="fs-xl pb-3 pb-lg-0 mb-2 mb-md-3 mb-lg-5" style="color: #dedede">
            Transforming groundbreaking ideas into market-leading products.
          </p>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-4 locations"
          >
            <p
              style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/us.png" style="width: 28px" />
              Delaware, USA
            </p>
            <p
              style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/qa.png" style="width: 28px" />
              Doha, Qatar
            </p>
            <p
              style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/lk.png" style="width: 28px" />
              Colombo, Sri Lanka
            </p>
          </div>
          <a
            class="d-flex align-items-center gap-4 discover-more mt-3"
            style="text-decoration: none; color: #fff;cursor: pointer;"
            href="#clients"
          >
            <span
              style="
                padding: 10px;
                border-radius: 500px;
                aspect-ratio: 1;
                background-color: rgba(255, 255, 255, 0.15);
              "
            >
              <Icon :icon="ChevronIcon" style="font-size: 24px" />
            </span>
            <span> Discover More </span>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import layer1Img from '@/assets/img/landing/app-showcase-3/hero/layer01.png'
import layer2Img from '@/assets/img/landing/app-showcase-3/hero/layer02.png'
import layer3Img from '@/assets/img/landing/app-showcase-3/hero/layer03.png'
import layer4Img from '@/assets/img/landing/app-showcase-3/hero/layer04.png'
import layer5Img from '@/assets/img/landing/app-showcase-3/hero/layer05.png'
import layer6Img from '@/assets/img/landing/app-showcase-3/hero/layer06.png'
import Parallax from '@/components/Parallax.vue'
import PlayIcon from '@iconify/icons-bx/bx-play'
import ChevronIcon from '@iconify/icons-bx/bx-chevrons-down'
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scopes>
.locations {
  text-align: center;
  margin-top: 100px;

  @include mq(md) {
    gap: 1rem;
    margin-top: 50px;
  }

  @include mq(sm) {
    margin-top: 1rem;
  }

  p {
    @include mq(md) {
      margin-bottom: 0rem;
    }

    @include mq(sm) {
      justify-content: center;
    }
  }
}

.discover-more {
  @include mq(sm) {
    justify-content: center;
    margin-top: 2rem;
  }
}
</style>
