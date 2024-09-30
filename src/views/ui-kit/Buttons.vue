<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Buttons"
      description="Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
    />

    <!-- Solid (default) -->
    <section id="buttons-solid" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Solid (default)</h2>

      <b-button variant="primary" class="my-1 me-1">Primary</b-button>
      <b-button variant="secondary" class="my-1 me-1">Secondary</b-button>
      <b-button variant="success" class="my-1 me-1">Success</b-button>
      <b-button variant="danger" class="my-1 me-1">Danger</b-button>
      <b-button variant="warning" class="my-1 me-1">Warning</b-button>
      <b-button variant="info" class="my-1 me-1">Info</b-button>
      <div class="d-inline-block my-1 me-1 p-2 bg-dark">
        <b-button variant="light">Light</b-button>
      </div>
      <b-button variant="dark" class="my-1 me-1">Dark</b-button>
      <b-button variant="link" class="my-1">Link</b-button>
    </section>

    <!-- Outline -->
    <section id="buttons-outline" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Outline</h2>

      <b-button variant="outline-primary" class="my-1 me-1">Primary</b-button>
      <b-button variant="outline-secondary" class="my-1 me-1">Secondary</b-button>
      <b-button variant="outline-success" class="my-1 me-1">Success</b-button>
      <b-button variant="outline-danger" class="my-1 me-1">Danger</b-button>
      <b-button variant="outline-warning" class="my-1 me-1">Warning</b-button>
      <b-button variant="outline-info" class="my-1 me-1">Info</b-button>
      <div class="d-inline-block my-1 me-1 p-2 bg-dark">
        <b-button variant="outline-light">Light</b-button>
      </div>
      <b-button variant="outline-dark" class="my-1">Dark</b-button>
    </section>

    <!-- Buttons with shadow -->
    <section id="buttons-shadow" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Buttons with shadow</h2>

      <b-button variant="primary" class="shadow-primary my-1 me-1">Primary</b-button>
      <b-button variant="secondary" class="shadow-secondary my-1 me-1">Secondary</b-button>
      <b-button variant="success" class="shadow-success my-1 me-1">Success</b-button>
      <b-button variant="danger" class="shadow-danger my-1 me-1">Danger</b-button>
      <b-button variant="warning" class="shadow-warning my-1 me-1">Warning</b-button>
      <b-button variant="info" class="shadow-info my-1 me-1">Info</b-button>
      <b-button variant="light" class="shadow-secondary my-1 me-1">Light</b-button>
      <b-button variant="dark" class="shadow-dark my-1">Dark</b-button>
    </section>

    <!-- Gradient buttons -->
    <section id="buttons-gradient" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Gradient buttons</h2>

      <b-button variant="primary" class="bg-gradient my-1 me-1">Primary</b-button>
      <b-button variant="success" class="bg-gradient my-1 me-1">Success</b-button>
      <b-button variant="danger" class="bg-gradient my-1 me-1">Danger</b-button>
      <b-button variant="warning" class="bg-gradient my-1 me-1">Warning</b-button>
      <b-button variant="info" class="bg-gradient my-1 me-1">Info</b-button>
      <b-button variant="dark" class="bg-gradient my-1">Dark</b-button>
    </section>

    <!-- Icons -->
    <section id="buttons-icons" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Icons</h2>

      <b-button variant="outline-secondary" class="my-1 me-2">
        <Icon :icon="UserIcon" class="fs-lg me-2" />
        Profile
      </b-button>
      <b-button variant="secondary" class="btn-icon my-1 me-2" aria-label="Upload">
        <Icon :icon="UploadIcon" />
      </b-button>
      <b-button variant="outline-danger" class="btn-icon my-1 me-2" aria-label="Dismiss">
        <Icon :icon="ErrorCircleIcon" />
      </b-button>
      <b-button variant="success" class="btn-icon my-1 me-2" aria-label="Confirm">
        <Icon :icon="CheckCircleIcon" />
      </b-button>
      <b-button variant="warning" class="btn-icon rounded-circle my-1 me-2" aria-label="Rate">
        <Icon :icon="StarIcon" />
      </b-button>
      <b-button
        variant="outline-info"
        class="btn-icon rounded-circle my-1 me-2"
        aria-label="Notify"
      >
        <Icon :icon="BellIcon" />
      </b-button>
    </section>

    <!-- Market buttons -->
    <section id="buttons-market" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Market buttons</h2>

      <a href="#" class="btn btn-dark btn-lg px-3 py-2 my-1 me-2">
        <img
          src="@/assets/img/market/appstore-light.svg"
          class="light-mode-img"
          width="124"
          alt="App Store"
        />
        <img
          src="@/assets/img/market/appstore-dark.svg"
          class="dark-mode-img"
          width="124"
          alt="App Store"
        />
      </a>
      <a href="#" class="btn btn-dark btn-lg px-3 py-2 my-1 me-2">
        <img
          src="@/assets/img/market/googleplay-light.svg"
          class="light-mode-img"
          width="139"
          alt="Google Play"
        />
        <img
          src="@/assets/img/market/googleplay-dark.svg"
          class="dark-mode-img"
          width="139"
          alt="Google Play"
        />
      </a>
    </section>

    <!-- Shapes -->
    <section id="buttons-shapes" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Shapes</h2>

      <b-button variant="primary" class="my-1 me-2">Rounded</b-button>
      <b-button variant="primary" class="rounded-pill my-1 me-2">Pill button</b-button>
      <b-button variant="primary" class="rounded-0 my-1">Square</b-button>
      <div class="pt-2"></div>
      <b-button variant="outline-primary" class="my-1 me-2">Rounded</b-button>
      <b-button variant="outline-primary" class="rounded-pill my-1 me-2">Pill button</b-button>
      <b-button variant="outline-primary" class="rounded-0 my-1">Square</b-button>
    </section>

    <!-- Sizes -->
    <section id="buttons-sizes" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizes</h2>

      <div class="pt-1">
        <b-button variant="primary" size="lg" class="mb-2 me-1">Large button</b-button>
        <b-button variant="primary" class="mb-2 me-1">Normal button</b-button>
        <b-button variant="primary" size="sm" class="mb-2">Small button</b-button>
        <div class="pt-2"></div>
        <b-button variant="outline-primary" size="lg" class="mb-2 me-1">Large button</b-button>
        <b-button variant="outline-primary" class="mb-2 me-1">Normal button</b-button>
        <b-button variant="outline-primary" size="sm" class="mb-2">Small button</b-button>
        <b-row class="mx-n1 pt-2">
          <b-col sm="6" class="px-1">
            <b-button variant="primary" class="w-100 mb-3 mb-sm-0">Block level button</b-button>
          </b-col>
          <b-col sm="6" class="px-1">
            <b-button variant="outline-primary" class="w-100 mb-3 mb-sm-0"
              >Block level button
            </b-button>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- States -->
    <section id="buttons-states" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">States</h2>

      <b-button variant="primary" active class="my-1 me-1">Active</b-button>
      <b-button variant="secondary" active class="my-1 me-1">Active</b-button>
      <b-button variant="primary" disabled class="my-1 me-1">Disabled</b-button>
      <b-button variant="secondary" disabled class="my-1 me-1">Disabled</b-button>
      <b-button variant="primary" class="my-1 me-1" data-bs-toggle="button">Button toggle</b-button>
      <b-button variant="primary" class="pe-none my-1 me-1">
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true">
          <span class="visually-hidden">Loading...</span>
        </span>
        Loading
      </b-button>
      <b-button variant="secondary" class="pe-none my-1">
        <span class="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true">
          <span class="visually-hidden">Loading...</span>
        </span>
        Loading
      </b-button>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorNavigationData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import { Icon } from '@iconify/vue'
import UserIcon from '@iconify/icons-bx/user'
import UploadIcon from '@iconify/icons-bx/upload'
import ErrorCircleIcon from '@iconify/icons-bx/error-circle'
import StarIcon from '@iconify/icons-bx/bx-star'
import BellIcon from '@iconify/icons-bx/bell'
import CheckCircleIcon from '@iconify/icons-bx/check-circle'

const anchorNavigationData = [
  {
    id: 'buttons-solid',
    title: 'Solid (default)'
  },
  {
    id: 'buttons-outline',
    title: 'Outline'
  },
  {
    id: 'buttons-shadow',
    title: 'Buttons with shadow'
  },
  {
    id: 'buttons-gradient',
    title: 'Gradient buttons'
  },
  {
    id: 'buttons-icons',
    title: 'Icons'
  },
  {
    id: 'buttons-market',
    title: 'Market buttons'
  },
  {
    id: 'buttons-shapes',
    title: 'Shapes'
  },
  {
    id: 'buttons-sizes',
    title: 'Sizes'
  },
  {
    id: 'buttons-states',
    title: 'States'
  }
]
</script>
