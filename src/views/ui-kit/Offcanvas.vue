<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Offcanvas"
      description="Build hidden sidebars into your project for navigation, shopping carts, widgets
          etc."
    />

    <b-offcanvas v-model="show" title="Menu" class="border border-light shadow-sm mt-2">
      <div class="py-3 px-2">
        <ul class="nav flex-column">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Our Works</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Our Team</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>
        </ul>
      </div>
    </b-offcanvas>

    <!-- Left offcanvas example-->
    <b-offcanvas
      placement="start"
      id="offcanvasLeft"
      title="Left offcanvas"
      header-class="border-bottom"
    >
      <p>
        Content for the offcanvas goes here. You can place just about any Bootstrap component or
        custom elements here.
      </p>
    </b-offcanvas>

    <!-- Right offcanvas example-->
    <b-offcanvas
      placement="end"
      id="offcanvasRight"
      title="Right offcanvas"
      header-class="border-bottom"
    >
      <p>
        Content for the offcanvas goes here. You can place just about any Bootstrap component or
        custom elements here.
      </p>
    </b-offcanvas>

    <!-- Top offcanvas example-->
    <b-offcanvas
      placement="top"
      id="offcanvasTop"
      title="Top offcanvas"
      header-class="border-bottom"
    >
      <p>
        Content for the offcanvas goes here. You can place just about any Bootstrap component or
        custom elements here.
      </p>
    </b-offcanvas>

    <!-- Bottom offcanvas example-->
    <b-offcanvas
      placement="bottom"
      id="offcanvasBottom"
      title="Bottom offcanvas"
      header-class="border-bottom"
    >
      <p>
        Content for the offcanvas goes here. You can place just about any Bootstrap component or
        custom elements here.
      </p>
    </b-offcanvas>

    <!-- Offcanvas components -->
    <section id="offcanvas-components" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Offcanvas components</h2>
      <div class="pt-1">
        <b-button class="me-2 my-1" variant="primary" @click="show = !show">
          Toggle offcanvas
        </b-button>
      </div>
    </section>

    <!-- Placement -->
    <section id="offcanvas-placement" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Placement</h2>
      <div class="pt-1">
        <b-button class="me-2 my-1" variant="outline-primary" v-b-toggle.offcanvasLeft>
          Toggle left offcanvas
        </b-button>
        <b-button class="me-2 my-1" variant="outline-primary" v-b-toggle.offcanvasRight>
          Toggle right offcanvas
        </b-button>
        <b-button class="me-2 my-1" variant="outline-primary" v-b-toggle.offcanvasTop>
          Toggle top offcanvas
        </b-button>
        <b-button class="my-1" variant="outline-primary" v-b-toggle.offcanvasBottom>
          Toggle bottom offcanvas
        </b-button>
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
import { ref } from 'vue'

const anchorData = [
  {
    id: 'offcanvas-components',
    title: 'Offcanvas components'
  },
  {
    id: 'offcanvas-placement',
    title: 'Placement'
  }
]

const show = ref(false)
</script>
