<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Progress bars"
      description="Custom progress bars featuring support for stacked bars, animated backgrounds, and text labels."
      :is-silicon-component="true"
    />

    <!-- Color variations (thick) -->
    <section id="progress-colors-thick" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Color variations (thick)</h2>
      <div class="pt-1">
        <b-progress class="mb-3">
          <b-progress-bar :value="45">45%</b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar variant="success" class="text-white" :value="55">55%</b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar variant="danger" class="text-white" :value="40">40%</b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar variant="warning" class="text-white" :value="70">70%</b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar variant="info" class="text-white" :value="60">60%</b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar variant="dark" class="text-white" :value="33">33%</b-progress-bar>
        </b-progress>
        <b-progress>
          <b-progress-bar class="bg-gradient-primary" :value="78">78%</b-progress-bar>
        </b-progress>
      </div>
    </section>

    <!-- Color variations (thin) -->
    <section id="progress-colors-thin" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Color variations (thin)</h2>
      <div class="pt-1">
        <div class="fs-sm mb-2">Primary - 45%</div>
        <b-progress class="mb-3" height="4px">
          <b-progress-bar :value="45"></b-progress-bar>
        </b-progress>
        <div class="fs-sm mb-2">Success - 55%</div>
        <b-progress class="mb-3" height="4px">
          <b-progress-bar class="bg-success" :value="55"></b-progress-bar>
        </b-progress>
        <div class="fs-sm mb-2">Danger - 40%</div>
        <b-progress class="mb-3" height="4px">
          <b-progress-bar class="bg-danger" :value="40"></b-progress-bar>
        </b-progress>
        <div class="fs-sm mb-2">Warning - 70%</div>
        <b-progress class="mb-3" height="4px">
          <b-progress-bar class="bg-warning" :value="70"></b-progress-bar>
        </b-progress>
        <div class="fs-sm mb-2">Info - 60%</div>
        <b-progress class="mb-3" height="4px">
          <b-progress-bar class="bg-info" :value="60"></b-progress-bar>
        </b-progress>
        <div class="fs-sm mb-2">Dark - 33%</div>
        <b-progress class="mb-3" height="4px">
          <b-progress-bar class="bg-dark" :value="33"></b-progress-bar>
        </b-progress>
        <div class="fs-sm mb-2">Gradient - 78%</div>
        <b-progress height="4px">
          <b-progress-bar class="bg-gradient-primary" :value="78"></b-progress-bar>
        </b-progress>
      </div>
    </section>

    <!-- Multiple bars -->
    <section id="progress-multiple" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Multiple bars</h2>
      <div class="pt-1">
        <b-progress class="mb-3">
          <b-progress-bar variant="info" :value="15"></b-progress-bar>
          <b-progress-bar variant="danger" :value="10"></b-progress-bar>
          <b-progress-bar variant="success" :value="20"></b-progress-bar>
          <b-progress-bar variant="warning" :value="25"></b-progress-bar>
        </b-progress>
        <b-progress height="4px">
          <b-progress-bar variant="warning" :value="20"></b-progress-bar>
          <b-progress-bar variant="info" :value="25"></b-progress-bar>
          <b-progress-bar variant="danger" :value="10"></b-progress-bar>
          <b-progress-bar variant="success" :value="15"></b-progress-bar>
        </b-progress>
      </div>
    </section>

    <!-- Animated striped bars -->
    <section id="progress-animated" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Animated striped bars</h2>
      <div class="pt-1">
        <b-progress class="mb-3">
          <b-progress-bar striped animated :value="45"></b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar striped animated variant="success" :value="55"></b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar striped animated variant="danger" :value="40"></b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar striped animated variant="warning" :value="70"></b-progress-bar>
        </b-progress>
        <b-progress class="mb-3">
          <b-progress-bar striped animated variant="info" :value="60"></b-progress-bar>
        </b-progress>
        <b-progress>
          <b-progress-bar striped animated variant="dark" :value="33"></b-progress-bar>
        </b-progress>
      </div>
    </section>

    <!-- Use case: Rating breakdown -->
    <section id="progress-rating" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Use case: Rating breakdown</h2>
      <div class="pt-1">
        <div class="d-flex align-items-center mb-2">
          <div class="text-nowrap me-3">
            <span class="d-inline-block align-middle">5</span>

            <Icon :icon="StarIcon" class="opacity-70 align-middle ms-1" />
          </div>
          <div class="w-100">
            <b-progress height="4px">
              <b-progress-bar variant="success" :value="60"></b-progress-bar>
            </b-progress>
          </div>
          <span class="ms-3">43</span>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="text-nowrap me-3">
            <span class="d-inline-block align-middle">4</span>
            <Icon :icon="StarIcon" class="opacity-70 align-middle ms-1" />
          </div>
          <div class="w-100">
            <b-progress height="4px">
              <b-progress-bar :value="27" style="background-color: #a7e453"></b-progress-bar>
            </b-progress>
          </div>
          <span class="ms-3">16</span>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="text-nowrap me-3">
            <span class="d-inline-block align-middle">3</span>
            <Icon :icon="StarIcon" class="opacity-70 align-middle ms-1" />
          </div>
          <div class="w-100">
            <b-progress height="4px">
              <b-progress-bar variant="warning" :value="17"></b-progress-bar>
            </b-progress>
          </div>
          <span class="ms-3">9</span>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="text-nowrap me-3">
            <span class="d-inline-block align-middle">2</span>
            <Icon :icon="StarIcon" class="opacity-70 align-middle ms-1" />
          </div>
          <div class="w-100">
            <b-progress height="4px">
              <b-progress-bar :value="9" style="background-color: #fa8027"></b-progress-bar>
            </b-progress>
          </div>
          <span class="ms-3">4</span>
        </div>
        <div class="d-flex align-items-center">
          <div class="text-nowrap me-3">
            <span class="d-inline-block align-middle">1</span>
            <Icon :icon="StarIcon" class="opacity-70 align-middle ms-1" />
          </div>
          <div class="w-100">
            <b-progress height="4px">
              <b-progress-bar variant="danger" :value="4"></b-progress-bar>
            </b-progress>
          </div>
          <span class="ms-3">2</span>
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
import { Icon } from '@iconify/vue'
import StarIcon from '@iconify/icons-bx/bx-star'

const anchorData = [
  {
    id: 'progress-colors-thick',
    title: 'Color variations (thick)'
  },
  {
    id: 'progress-colors-thin',
    title: 'Color variations (thin)'
  },
  {
    id: 'progress-multiple',
    title: 'Multiple bar'
  },
  {
    id: 'progress-animated',
    title: 'Animated striped bars'
  },
  {
    id: 'progress-rating',
    title: 'Use case: Rating breakdown'
  }
]
</script>
