<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Images & figures"
      description="Image styles and figure component for displaying images and text."
    />

    <!-- Image shapes -->
    <CustomSyntax id="image-shapes" title="Image shapes" :code="imageShape">
      <div class="row g-3 gx-sm-4" style="max-width: 50rem">
        <div class="col-sm-4 col-6">
          <img :src="team1" alt="Square image" />
        </div>
        <div class="col-sm-4 col-6">
          <img class="rounded-3" :src="team2" alt="Rounded image" />
        </div>
        <div class="col-sm-4 col-6">
          <img class="rounded-circle" :src="team3" alt="Circle image" />
        </div>
      </div>
    </CustomSyntax>

    <!-- Thumbnails -->
    <CustomSyntax id="image-thumbnails" title="Thumbnails" :code="thumbnails">
      <div class="row g-3 gx-sm-4" style="max-width: 50rem">
        <div class="col-sm-4 col-6">
          <img :src="team8" class="img-thumbnail rounded-0" alt="Square thumbnail" />
        </div>
        <div class="col-sm-4 col-6">
          <img class="img-thumbnail" :src="team6" alt="Rounded thumbnail" />
        </div>
        <div class="col-sm-4 col-6">
          <img class="img-thumbnail rounded-circle" :src="team7" alt="Circle thumbnail" />
        </div>
      </div>
    </CustomSyntax>

    <!-- Figures with caption -->
    <CustomSyntax id="image-figures" title="Figures with caption" :code="figureWithCaption">
      <div class="row g-3 gx-sm-4" style="max-width: 50rem">
        <div class="col-sm-4 col-6">
          <figure class="figure mb-sm-0">
            <img class="figure-img" :src="team1" alt="Figure with caption" />
            <figcaption class="figure-caption">Caption on the left</figcaption>
          </figure>
        </div>
        <div class="col-sm-4 col-6">
          <figure class="figure mb-sm-0">
            <img class="figure-img" :src="team2" alt="Figure with caption" />
            <figcaption class="figure-caption text-center">Caption in the center</figcaption>
          </figure>
        </div>
        <div class="col-sm-4 col-6">
          <figure class="figure mb-0">
            <img class="figure-img" :src="team3" alt="Figure with caption" />
            <figcaption class="figure-caption text-end">Caption on the right</figcaption>
          </figure>
        </div>
      </div>
    </CustomSyntax>

    <!-- Image swap on hover -->
    <CustomSyntax id="image-swap" title="Image swap on hover" :code="imageSwap">
      <div class="swap-image my-n4">
        <img :src="angular" class="swap-from" width="196" alt="Angular" />
        <div class="swap-to">
          <img :src="angularLight" class="light-mode-img" width="196" alt="Angular" />
          <img :src="angularDark" class="dark-mode-img" width="196" alt="Angular" />
        </div>
      </div>
    </CustomSyntax>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorNavigationData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import CustomSyntax from '@/components/CustomSyntax.vue'

import team1 from '@/assets/img/team/01.jpg'
import team2 from '@/assets/img/team/02.jpg'
import team3 from '@/assets/img/team/03.jpg'

import team6 from '@/assets/img/team/06.jpg'
import team7 from '@/assets/img/team/07.jpg'
import team8 from '@/assets/img/team/08.jpg'

import angular from '@/assets/img/landing/app-showcase-3/integrations/angular-gray.svg'
import angularLight from '@/assets/img/landing/app-showcase-3/integrations/angular-color-light.svg'
import angularDark from '@/assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const imageShape = `<!-- Square image (default) -->
<img src="@/assets/img/team/01.jpg" alt="Square image">

<!-- Rounded image -->
<img src="@/assets/img/team/02.jpg" class="rounded-3" alt="Rounded image">

<!-- Circle image -->
<img src="@/assets/img/team/03.jpg" class="rounded-circle" alt="Circle image">`

const thumbnails = `<!-- Square thumbnail -->
<img src="@/assets/img/team/08.jpg" class="img-thumbnail rounded-0" alt="Square thumbnail">

<!-- Rounded thumbnail -->
<img src="@/assets/img/team/06.jpg" class="img-thumbnail" alt="Rounded thumbnail">

<!-- Circle thumbnail -->
<img src="@/assets/img/team/07.jpg" class="img-thumbnail rounded-circle" alt="Circle thumbnail">`

const figureWithCaption = `<!-- Caption on the left -->
<figure class="figure">
  <img src="@/assets/img/team/01.jpg" class="figure-img" alt="...">
  <figcaption class="figure-caption">Caption on the left</figcaption>
</figure>

<!-- Caption in the center -->
<figure class="figure">
  <img src="@/assets/img/team/02.jpg" class="figure-img" alt="...">
  <figcaption class="figure-caption text-center">Caption in the center</figcaption>
</figure>

<!-- Caption on the right -->
<figure class="figure">
  <img src="@/assets/img/team/03.jpg" class="figure-img" alt="...">
  <figcaption class="figure-caption text-end">Caption on the right</figcaption>
</figure>`

const imageSwap = `<!-- Image swap on hover -->
<div class="swap-image">
  <img src="@/assets/img/landing/app-showcase-3/integrations/angular-gray.svg" class="swap-from" width="196" alt="Angular">
  <div class="swap-to">
    <img src="@/assets/img/landing/app-showcase-3/integrations/angular-color-light.svg" class="light-mode-img" width="196" alt="Angular">
    <img src="@/assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg" class="dark-mode-img" width="196" alt="Angular">
  </div>
</div>`

const anchorNavigationData = [
  {
    id: 'image-shapes',
    title: 'Image shapes'
  },
  {
    id: 'image-thumbnails',
    title: 'Thumbnails'
  },
  {
    id: 'image-figures',
    title: 'Figures with caption'
  },
  {
    id: 'image-swap',
    title: 'Image swap on hover'
  }
]
</script>
