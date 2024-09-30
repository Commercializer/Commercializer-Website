<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Button group"
      description="Groups a series of buttons together on a single line."
    />

    <!-- Basic example -->
    <section id="btn-group-basic" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>

      <b-button-group class="my-2 me-2">
        <b-button variant="primary">Left</b-button>
        <b-button variant="primary">Middle</b-button>
        <b-button variant="primary">Right</b-button>
      </b-button-group>

      <b-button-group class="my-2 me-2">
        <b-button variant="outline-primary">Left</b-button>
        <b-button variant="outline-primary">Middle</b-button>
        <b-button variant="outline-primary">Right</b-button>
      </b-button-group>

      <br />

      <b-button-group class="my-2 me-2">
        <b-button variant="secondary">Left</b-button>
        <b-button variant="secondary">Middle</b-button>
        <b-button variant="secondary">Right</b-button>
      </b-button-group>

      <b-button-group class="my-2 me-2">
        <b-button variant="outline-secondary">Left</b-button>
        <b-button variant="outline-secondary">Middle</b-button>
        <b-button variant="outline-secondary">Right</b-button>
      </b-button-group>
    </section>

    <!-- Button toolbar -->
    <section id="btn-group-toolbar" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Button toolbar</h2>

      <div class="pt-1">
        <div class="btn-toolbar mb-3">
          <b-button-group class="me-2 mb-2">
            <b-button variant="dark" class="btn-icon">
              <Icon :icon="UndoIcon" />
            </b-button>
            <b-button variant="secondary" class="btn-icon">
              <Icon :icon="FontFamilyIcon" />
            </b-button>
            <b-button variant="secondary" class="btn-icon">
              <Icon :icon="ShareAltIcon" />
            </b-button>
            <b-button variant="secondary" class="btn-icon">
              <Icon :icon="FullScreenIcon" />
            </b-button>
          </b-button-group>

          <b-button-group class="me-2 mb-2">
            <b-button variant="success">
              <Icon :icon="CheckIcon" class="fs-5 lh-1 me-2" />
              Apply
            </b-button>
          </b-button-group>

          <b-button-group class="mb-2">
            <b-button variant="outline-danger" class="btn-icon">
              <Icon :icon="TrashIcon" />
            </b-button>
          </b-button-group>
        </div>

        <div class="btn-toolbar">
          <b-button-group class="me-2">
            <b-button variant="outline-secondary">1</b-button>
            <b-button variant="outline-secondary">2</b-button>
            <b-button variant="outline-secondary">3</b-button>
          </b-button-group>
          <b-button-group class="me-2">
            <b-button variant="outline-secondary">4</b-button>
            <b-button variant="outline-secondary">5</b-button>
          </b-button-group>
          <b-button-group>
            <b-button variant="outline-secondary">6</b-button>
          </b-button-group>
        </div>
      </div>
    </section>

    <!-- Nested dropdown -->
    <section id="btn-group-dropdown" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Nested dropdown</h2>

      <div class="pt-1">
        <b-row>
          <b-col xxl="5" sm="6" class="mb-3">
            <b-button-group>
              <b-button variant="primary">1</b-button>
              <b-button variant="primary">2</b-button>
              <b-dropdown text="Dropdown" menu-class="my-1" variant="primary">
                <b-dropdown-item>Dropdown link</b-dropdown-item>
                <b-dropdown-item>Dropdown link</b-dropdown-item>
                <b-dropdown-item>Dropdown link</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-col>
          <b-col sm="6" class="mb-3">
            <b-button-group>
              <b-button variant="outline-primary">1</b-button>
              <b-button variant="outline-primary">2</b-button>
              <b-dropdown text="Dropdown" menu-class="my-1" variant="outline-primary">
                <b-dropdown-item>Dropdown link</b-dropdown-item>
                <b-dropdown-item>Dropdown link</b-dropdown-item>
                <b-dropdown-item>Dropdown link</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Sizing -->
    <section id="btn-group-sizing" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizing</h2>

      <div class="pt-1">
        <b-row>
          <b-col xxl="5" md="6">
            <b-button-group size="lg" class="mb-3">
              <b-button variant="primary">Left</b-button>
              <b-button variant="primary">Middle</b-button>
              <b-button variant="primary">Right</b-button>
            </b-button-group>
            <br />
            <b-button-group class="mb-3">
              <b-button variant="primary">Left</b-button>
              <b-button variant="primary">Middle</b-button>
              <b-button variant="primary">Right</b-button>
            </b-button-group>
            <br />
            <b-button-group size="sm" class="mb-3 mb-md-0">
              <b-button variant="primary">Left</b-button>
              <b-button variant="primary">Middle</b-button>
              <b-button variant="primary">Right</b-button>
            </b-button-group>
          </b-col>
          <b-col md="6">
            <b-button-group size="lg" class="mb-3">
              <b-button variant="outline-secondary">Left</b-button>
              <b-button variant="outline-secondary">Middle</b-button>
              <b-button variant="outline-secondary">Right</b-button>
            </b-button-group>
            <br />
            <b-button-group class="mb-3">
              <b-button variant="outline-secondary">Left</b-button>
              <b-button variant="outline-secondary">Middle</b-button>
              <b-button variant="outline-secondary">Right</b-button>
            </b-button-group>
            <br />
            <b-button-group size="sm">
              <b-button variant="outline-secondary">Left</b-button>
              <b-button variant="outline-secondary">Middle</b-button>
              <b-button variant="outline-secondary">Right</b-button>
            </b-button-group>
          </b-col>
        </b-row>
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
import { Icon } from '@iconify/vue'
import UndoIcon from '@iconify/icons-bx/undo'
import FontFamilyIcon from '@iconify/icons-bx/font-family'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import FullScreenIcon from '@iconify/icons-bx/fullscreen'
import CheckIcon from '@iconify/icons-bx/bx-check'
import TrashIcon from '@iconify/icons-bx/trash'

const anchorNavigationData = [
  {
    id: 'btn-group-basic',
    title: 'Basic example'
  },
  {
    id: 'btn-group-toolbar',
    title: 'Button toolbar'
  },
  {
    id: 'btn-group-dropdown',
    title: 'Nested dropdown'
  },
  {
    id: 'btn-group-sizing',
    title: 'Sizing'
  }
]
</script>
