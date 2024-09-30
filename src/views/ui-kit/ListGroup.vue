<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="List group"
      description="Flexible component for displaying a series of content."
    />

    <!-- Basic example -->
    <section id="lg-basic" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>
      <div class="pt-1">
        <b-list-group style="max-width: 25rem">
          <b-list-group-item active>Active item here</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item disabled aria-disabled="true">Disabled item here</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </div>
    </section>

    <!-- Links or buttons -->
    <section id="lg-links" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Links or buttons</h2>
      <div class="pt-1">
        <b-list-group style="max-width: 25rem">
          <b-list-group-item action href="#">Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item action active href="#">Active item here</b-list-group-item>
          <b-list-group-item action href="#">Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item action disabled href="#" tabindex="-1" aria-disabled="true"
            >Disabled item here
          </b-list-group-item>
          <b-list-group-item action href="#">Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </div>
    </section>

    <!-- Flush -->
    <section id="lg-flush" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Flush</h2>
      <div class="pt-1">
        <div class="d-md-flex">
          <b-list-group flush class="w-100 mb-3 mb-md-0 me-md-5" style="max-width: 25rem">
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
          <b-list-group flush class="w-100" style="max-width: 25rem">
            <b-list-group-item action href="#">Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item action active href="#">Active item here</b-list-group-item>
            <b-list-group-item action href="#">Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item action disabled href="#" tabindex="-1" aria-disabled="true"
              >Disabled item here
            </b-list-group-item>
            <b-list-group-item action href="#">Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </section>

    <!-- With icons & badges -->
    <section id="lg-icons" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">With icons &amp; badges</h2>
      <div class="pt-1">
        <b-list-group style="max-width: 25rem">
          <b-list-group-item class="d-flex align-items-center">
            <Icon :icon="MessageDotIcon" class="fs-lg opacity-70 me-2" />
            Messages
            <b-badge pill class="ms-auto text-white" variant="success">14</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <Icon :icon="CartAltIcon" class="fs-lg opacity-70 me-2" />
            Orders
            <b-badge pill class="ms-auto text-white" variant="warning">2</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <Icon :icon="HeartIcon" class="fs-lg opacity-70 mt-n1 me-2" />
            Favorites
            <b-badge pill class="ms-auto text-white" variant="danger">6</b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
    </section>

    <!-- Numbered list group -->
    <section id="lg-numbered" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Numbered list group</h2>
      <div class="pt-1">
        <b-list-group numbered style="max-width: 25rem">
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
        </b-list-group>
      </div>
    </section>

    <!-- Horizontal list group -->
    <section id="lg-horizontal" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Horizontal list group</h2>
      <div class="pt-1">
        <b-list-group horizontal="sm" class="mb-4">
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
        </b-list-group>
        <b-list-group horizontal="sm" style="max-width: 50rem">
          <b-list-group-item class="flex-fill text-center">Cras justo odio</b-list-group-item>
          <b-list-group-item class="flex-fill text-center"
            >Dapibus ac facilisis in</b-list-group-item
          >
          <b-list-group-item class="flex-fill text-center">Morbi leo risus</b-list-group-item>
        </b-list-group>
      </div>
    </section>

    <!-- Actionable horizontal list group -->
    <section id="lg-horizontal-links" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Actionable horizontal list group</h2>
      <div class="pt-1">
        <b-list-group horizontal="sm" style="max-width: 50rem">
          <b-list-group-item action active class="text-center" href="#"
            >Active item here</b-list-group-item
          >
          <b-list-group-item action class="text-center" href="#"
            >Dapibus ac facilisis in</b-list-group-item
          >
          <b-list-group-item action class="text-center" href="#">Morbi leo risus</b-list-group-item>
        </b-list-group>
      </div>
    </section>

    <!-- Custom content -->
    <section id="lg-custom-content" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Custom content</h2>
      <div class="pt-1">
        <b-list-group style="max-width: 30rem">
          <b-list-group-item action class="flex-column align-items-start active py-3" href="#">
            <div class="d-flex flex-wrap w-100 justify-content-between">
              <h6 class="text-white">List group item heading</h6>
              <small class="text-white opacity-50 mb-2">3 days ago</small>
            </div>
            <p class="fs-sm fw-normal text-white opacity-70">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
              blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat.
            </p>
            <small class="text-white opacity-50">Donec id elit non mi porta.</small>
          </b-list-group-item>
          <b-list-group-item action class="flex-column align-items-start py-3" href="#">
            <div class="d-flex flex-wrap w-100 justify-content-between">
              <h6>List group item heading</h6>
              <small class="text-muted mb-2">3 days ago</small>
            </div>
            <p class="fs-sm fw-normal text-body">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
              blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat.
            </p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
          <b-list-group-item action class="flex-column align-items-start py-3" href="#">
            <div class="d-flex flex-wrap w-100 justify-content-between">
              <h6>List group item heading</h6>
              <small class="text-muted mb-2">3 days ago</small>
            </div>
            <p class="fs-sm fw-normal text-body">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
              blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat.
            </p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
        </b-list-group>
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
import MessageDotIcon from '@iconify/icons-bx/bx-message-dots'
import CartAltIcon from '@iconify/icons-bx/bx-cart-alt'
import HeartIcon from '@iconify/icons-bx/bx-heart'

const anchorData = [
  {
    id: 'lg-links',
    title: 'Basic example'
  },
  {
    id: 'lg-links',
    title: 'Links or buttons'
  },
  {
    id: 'lg-flush',
    title: 'Flush'
  },
  {
    id: 'lg-icons',
    title: 'With icons & badges'
  },
  {
    id: 'lg-numbered',
    title: 'Numbered list group'
  },
  {
    id: 'lg-horizontal',
    title: 'Horizontal list group'
  },
  {
    id: 'lg-horizontal-links',
    title: 'Actionable horizontal list group'
  },
  {
    id: 'lg-custom-content',
    title: 'Custom content'
  }
]
</script>
