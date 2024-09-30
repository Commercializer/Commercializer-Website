<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Dropdowns"
      description="Toggle contextual overlays for displaying lists of links or other content."
    />

    <!-- Static examples -->
    <section id="dropdowns-static" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Static examples</h2>

      <div class="pt-1 d-flex gap-1">
        <b-dropdown text="Dropdown" variant="primary" menu-class="align-top me-4 mt-2 mb-3">
          <b-dropdown-item>Regular link</b-dropdown-item>
          <b-dropdown-item>Another regular link</b-dropdown-item>
          <b-dropdown-item active>Active link</b-dropdown-item>
          <b-dropdown-item disabled>Disabled link</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dropdown" variant="primary" menu-class="align-top me-4 mt-2 mb-3">
          <b-dropdown-item>Active</b-dropdown-item>
          <b-dropdown-item>Active action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dropdown" variant="primary" menu-class="align-top me-4 mt-2 mb-3">
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="HomeAltIcon" class="opacity-70 me-2" />
            Home
            <span class="badge rounded-pill bg-secondary ms-2">2</span>
          </b-dropdown-item>
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="UserIcon" class="opacity-70 me-2" />
            Profile
            <span class="badge rounded-pill bg-danger ms-2">3</span>
          </b-dropdown-item>
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="MessageDotIcon" class="opacity-70 me-2" />
            Messages
            <span class="badge rounded-pill bg-success ms-2">5</span>
          </b-dropdown-item>
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="CogIcon" class="opacity-70 me-2" />
            Settings
            <span class="badge rounded-pill bg-warning ms-2">1</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </section>

    <!-- Dark dropdowns -->
    <section id="dropdowns-dark" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Dark dropdowns</h2>

      <div class="pt-1 d-flex gap-1">
        <b-dropdown
          text="Dropdown"
          variant="dark"
          menu-class="dropdown-menu-dark align-top me-4 mt-2 mb-3"
        >
          <b-dropdown-item>Regular link</b-dropdown-item>
          <b-dropdown-item>Another regular link</b-dropdown-item>
          <b-dropdown-item active>Active link</b-dropdown-item>
          <b-dropdown-item disabled>Disabled link</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          text="Dropdown"
          variant="dark"
          menu-class="dropdown-menu-dark align-top me-4 mt-2 mb-3"
        >
          <b-dropdown-item>Active</b-dropdown-item>
          <b-dropdown-item>Active action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          dark
          text="Dropdown"
          variant="dark"
          menu-class="dropdown-menu-dark align-top me-4 mt-2 mb-3"
        >
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="HomeAltIcon" class="opacity-70 me-2" />
            Home
            <span class="badge rounded-pill bg-secondary ms-2">2</span>
          </b-dropdown-item>
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="UserIcon" class="opacity-70 me-2" />
            Profile
            <span class="badge rounded-pill bg-danger ms-2">3</span>
          </b-dropdown-item>
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="MessageDotIcon" class="opacity-70 me-2" />
            Messages
            <span class="badge rounded-pill bg-success ms-2">5</span>
          </b-dropdown-item>
          <b-dropdown-item class="d-flex align-items-center">
            <Icon :icon="CogIcon" class="opacity-70 me-2" />
            Settings
            <span class="badge rounded-pill bg-warning ms-2">1</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </section>

    <!-- Forms inside dropdown -->
    <section id="dropdowns-forms" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Forms inside dropdown</h2>

      <div class="pt-1">
        <b-dropdown text="Form" auto-close="outside">
          <b-dropdown-form :style="{ width: '20rem' }">
            <div class="mb-4">
              <b-form-group label="Email address" label-for="exampleDropdownFormEmail">
                <b-form-input
                  type="email"
                  id="exampleDropdownFormEmail"
                  placeholder="email@example.com"
                  required
                />
              </b-form-group>
            </div>
            <div class="mb-4">
              <b-form-group label="Password" label-for="exampleDropdownFormPassword">
                <b-form-input
                  type="password"
                  id="exampleDropdownFormPassword"
                  placeholder="Password"
                  required
                />
              </b-form-group>
            </div>
            <div class="mb-4">
              <b-form-checkbox>Remember me</b-form-checkbox>
            </div>
            <b-button variant="primary" type="submit">Sign In</b-button>
          </b-dropdown-form>
        </b-dropdown>
      </div>
    </section>

    <!-- Directions -->
    <section id="dropdowns-directions" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Directions</h2>

      <div class="pt-1 d-flex gap-1">
        <b-dropdown text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown dropup text="Dropdown" menu-class="mb-4">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown dropend text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown dropstart text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
    </section>

    <!-- Menu alignment -->
    <section id="dropdowns-alignment" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Menu alignment</h2>

      <div class="pt-1">
        <b-dropdown end variant="primary" text="Right-aligned menu example" menu-class="mt-2">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
    </section>

    <!-- Split button -->
    <section id="dropdowns-split-button" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Split button</h2>

      <div class="pt-1 d-flex gap-1">
        <b-dropdown split variant="primary" text="Button" menu-class="mt-2">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown split variant="outline-primary" text="Button" menu-class="mt-2">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
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
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CogIcon from '@iconify/icons-bx/cog'
import MessageDotIcon from '@iconify/icons-bx/bx-message-dots'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import UserIcon from '@iconify/icons-bx/user'

const anchorNavigationData = [
  {
    id: 'dropdowns-static',
    title: 'Static examples'
  },
  {
    id: 'dropdowns-dark',
    title: 'Dark dropdowns'
  },
  {
    id: 'dropdowns-forms',
    title: 'Forms inside dropdown'
  },
  {
    id: 'dropdowns-directions',
    title: 'Directions'
  },
  {
    id: 'dropdowns-alignment',
    title: 'Menu alignment'
  },
  {
    id: 'dropdowns-split-button',
    title: 'Split button'
  }
]

const show = ref(false)
</script>
