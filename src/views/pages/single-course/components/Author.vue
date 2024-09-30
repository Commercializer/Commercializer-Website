<template>
  <b-container class="py-lg-4 py-xl-5 mt-3 mb-5">
    <b-row
      class="g-0 bg-dark bg-repeat-0 bg-position-center border rounded-3 overflow-hidden"
      :style="{ backgroundImage: `url('${authorPattern}')` }"
    >
      <b-col
        md="5"
        class="bg-repeat-0 bg-position-top-center bg-size-cover"
        :style="{ backgroundImage: `url('${author}')` }"
        style="min-height: 350px"
      ></b-col>
      <b-col md="7" class="py-xl-5 px-4">
        <div class="py-5 mx-auto" style="max-width: 530px">
          <div class="fs-xl text-light opacity-50 mb-2">Learn from the best</div>
          <h2 class="h1 text-light mb-4">Albert Flores</h2>
          <p class="text-light opacity-70 pb-4">
            Dolor ipsum amet cursus quisque porta adipiscing. Lorem convallis malesuada sed
            maecenas. Ac dui at vitae mauris cursus in nullam porta sem. Quis pellentesque elementum
            ac bibendum. Nunc aliquam in tortor facilisis. Vulputate eget risus, metus phasellus.
            Pellentesque faucibus amet, eleifend diam quam condimentum convallis ultricies placerat.
            Duis habitasse placerat amet, odio pellentesque rhoncus, feugiat at. Eget pellentesque
            tristique felis magna fringilla.
          </p>
          <div class="d-flex flex-column flex-sm-row">
            <a href="#" class="btn btn-danger me-sm-4 mb-3 mb-sm-0">
              <Icon :icon="YoutubeIcon" class="fs-xl me-2" />
              240k subscribers
            </a>
            <a href="#" class="btn btn-info">
              <Icon :icon="FacebookIcon" class="fs-xl me-2" />
              180k followers
            </a>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import authorPattern from '@/assets/img/portfolio/courses/author-pattern.svg'
import author from '@/assets/img/portfolio/courses/author.jpg'

import { Icon } from '@iconify/vue'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
</script>
