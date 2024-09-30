<template>
  <UIKitLayout>
    <UIKitPageTitle title="Badges" description="Small count and labeling component." />

    <!-- Background colors -->
    <section id="badges-colors" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Background colors</h2>

      <div class="pt-1">
        <div class="mb-2">
          <b-badge variant="primary" class="me-2 mb-2">Primary</b-badge>
          <b-badge variant="secondary" class="me-2 mb-2">Secondary</b-badge>
          <b-badge variant="success" class="me-2 mb-2">Success</b-badge>
          <b-badge variant="danger" class="me-2 mb-2">Danger</b-badge>
          <b-badge variant="warning" class="me-2 mb-2">Warning</b-badge>
          <b-badge variant="info" class="me-2 mb-2">Info</b-badge>
          <div class="d-inline-block me-2 mb-2 pt-1 pb-2 px-2 bg-dark">
            <b-badge variant="light" class="">Light</b-badge>
          </div>
          <b-badge variant="dark" class="me-2 mb-2">Dark</b-badge>
        </div>
        <b-badge class="bg-faded-primary text-primary me-2 mb-2">Primary</b-badge>
        <b-badge class="bg-faded-success text-success me-2 mb-2">Success</b-badge>
        <b-badge class="bg-faded-danger text-danger me-2 mb-2">Danger</b-badge>
        <b-badge class="bg-faded-warning text-warning me-2 mb-2">Warning</b-badge>
        <b-badge class="bg-faded-info text-info me-2 mb-2">Info</b-badge>
        <div class="d-inline-block me-2 mb-2 pt-1 pb-2 px-2 bg-dark">
          <b-badge class="bg-faded-light text-white">Light</b-badge>
        </div>
        <b-badge class="bg-faded-dark text-dark me-2 mb-2">Dark</b-badge>
      </div>
    </section>

    <!-- Badge with shadow -->
    <section id="badges-shadow" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Badge with shadow</h2>

      <div class="pt-1">
        <b-badge variant="primary" class="shadow-primary me-2 mb-2">Primary</b-badge>
        <b-badge variant="secondary" class="shadow-secondary me-2 mb-2">Secondary</b-badge>
        <b-badge variant="success" class="shadow-success me-2 mb-2">Success</b-badge>
        <b-badge variant="danger" class="shadow-danger me-2 mb-2">Danger</b-badge>
        <b-badge variant="warning" class="shadow-warning me-2 mb-2">Warning</b-badge>
        <b-badge variant="info" class="shadow-info me-2 mb-2">Info</b-badge>
        <b-badge variant="light" class="shadow-secondary me-2 mb-2">Light</b-badge>
        <b-badge variant="dark" class="shadow-dark me-2 mb-2">Dark</b-badge>
      </div>
    </section>

    <!-- Pill badges -->
    <section id="badges-pill" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Pill badges</h2>

      <div class="pt-1">
        <b-badge variant="primary" pill class="me-2 mb-2">Primary</b-badge>
        <b-badge variant="secondary" pill class="me-2 mb-2">Secondary</b-badge>
        <b-badge variant="success" pill class="me-2 mb-2">Success</b-badge>
        <b-badge variant="danger" pill class="me-2 mb-2">Danger</b-badge>
        <b-badge variant="warning" pill class="me-2 mb-2">Warning</b-badge>
        <b-badge variant="info" pill class="me-2 mb-2">Info</b-badge>
        <div class="d-inline-block me-2 mb-2 pt-1 pb-2 px-2 bg-dark">
          <b-badge variant="light" pill>Light</b-badge>
        </div>
        <b-badge variant="dark" pill class="me-2 mb-2">Dark</b-badge>
      </div>
    </section>

    <!-- Inside heading -->
    <section id="badges-heading" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inside heading</h2>

      <div class="pt-1">
        <h1>
          Example heading
          <b-badge variant="secondary" class="ms-1">New</b-badge>
        </h1>
        <h2>
          Example heading
          <b-badge variant="secondary" class="ms-1">New</b-badge>
        </h2>
        <h3>
          Example heading
          <b-badge variant="secondary" class="ms-1">New</b-badge>
        </h3>
        <h4>
          Example heading
          <b-badge variant="secondary" class="ms-1">New</b-badge>
        </h4>
        <h5>
          Example heading
          <b-badge variant="secondary" class="ms-1">New</b-badge>
        </h5>
        <h6>
          Example heading
          <b-badge variant="secondary" class="ms-1">New</b-badge>
        </h6>
      </div>
    </section>

    <!-- Inside button -->
    <section id="badges-button" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inside button</h2>

      <div class="tab-content">
        <button class="btn btn-info me-3 my-2" type="button">
          Notifications
          <b-badge variant="light" class="ms-2">4</b-badge>
        </button>
        <button class="btn rounded-pill btn-dark me-3 my-2" type="button">
          Profile
          <b-badge variant="danger" pill class="ms-2">9</b-badge>
        </button>
        <button class="btn btn-outline-secondary me-3 my-2" type="button">
          Messages
          <b-badge class="bg-faded-success text-success ms-2">18</b-badge>
        </button>
      </div>
    </section>

    <!-- Inside list group -->
    <section id="badges-list-group" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inside list group</h2>

      <div class="pt-1">
        <div class="list-group" style="max-width: 27rem">
          <a
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            href="#"
          >
            Messages
            <b-badge pill variant="info">14</b-badge>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            href="#"
          >
            Orders
            <b-badge pill variant="warning">2</b-badge>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            href="#"
          >
            Favourites
            <b-badge pill variant="danger">6</b-badge>
          </a>
        </div>
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

const anchorNavigationData = [
  {
    id: 'badges-colors',
    title: 'Background colors'
  },
  {
    id: 'badges-shadow',
    title: 'Badge with shadow'
  },
  {
    id: 'badges-pill',
    title: 'Pill badges'
  },
  {
    id: 'badges-heading',
    title: 'Inside heading'
  },
  {
    id: 'badges-button',
    title: 'Inside button'
  },
  {
    id: 'badges-list-group',
    title: 'Inside list group'
  }
]
</script>
