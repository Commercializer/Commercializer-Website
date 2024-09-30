<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Alerts"
      description="Provide contextual feedback messages for typical user actions."
    />

    <!-- Basic example -->
    <section id="alerts-basic" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>

      <div class="pt-1">
        <b-alert variant="primary" v-model="show"
          >A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a
          click if you like.
        </b-alert>
        <b-alert variant="secondary" v-model="show"
          >A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it
          a click if you like.
        </b-alert>
        <b-alert variant="success" v-model="show"
          >A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a
          click if you like.
        </b-alert>
        <b-alert variant="danger" v-model="show"
          >A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a
          click if you like.
        </b-alert>
        <b-alert variant="warning" v-model="show"
          >A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a
          click if you like.
        </b-alert>
        <b-alert variant="info" v-model="show"
          >A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a
          click if you like.
        </b-alert>
        <b-alert variant="light" v-model="show"
          >A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a
          click if you like.
        </b-alert>
        <b-alert variant="dark" v-model="show" class="mb-0"
          >A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a
          click if you like.
        </b-alert>
      </div>
    </section>

    <!-- Alert with icon -->
    <section id="alerts-icon" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alert with icon</h2>

      <div class="pt-1">
        <b-alert variant="primary" v-model="show" class="d-flex">
          <Icon :icon="BellIcon" class="lead me-3" />
          <div>
            A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it
            a click if you like.
          </div>
        </b-alert>
        <b-alert variant="secondary" v-model="show" class="d-flex">
          <Icon :icon="TimeIcon" class="lead me-3" />
          <div>
            A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give
            it a click if you like.
          </div>
        </b-alert>
        <b-alert variant="success" v-model="show" class="d-flex">
          <Icon :icon="CheckCircleIcon" class="lead me-3" />
          <div>
            A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it
            a click if you like.
          </div>
        </b-alert>
        <b-alert variant="danger" v-model="show" class="d-flex">
          <Icon :icon="BlockIcon" class="lead me-3" />
          <div>
            A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a
            click if you like.
          </div>
        </b-alert>
        <b-alert variant="warning" v-model="show" class="d-flex">
          <Icon :icon="ErrorIcon" class="lead me-3" />
          <div>
            A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it
            a click if you like.
          </div>
        </b-alert>
        <b-alert variant="info" v-model="show" class="d-flex">
          <Icon :icon="InfoCircleIcon" class="lead me-3" />
          <div>
            A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a
            click if you like.
          </div>
        </b-alert>
        <b-alert variant="light" v-model="show" class="d-flex">
          <Icon :icon="LockOpenIcon" class="lead me-3" />
          <div>
            A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a
            click if you like.
          </div>
        </b-alert>
        <b-alert variant="dark" v-model="show" class="d-flex mb-0">
          <Icon :icon="XCircleIcon" class="lead me-3" />
          <div>
            A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a
            click if you like.
          </div>
        </b-alert>
      </div>
    </section>

    <!-- Dismissible alerts -->
    <section id="alerts-dismissible" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Dismissible alerts</h2>

      <div class="pt-1">
        <b-alert dismissible variant="primary" v-model="dismissibleAlert1">
          <span class="fw-bold">Primary alert:</span> Dismiss me by clicking the close button on the
          right.
        </b-alert>
        <b-alert dismissible variant="secondary" v-model="dismissibleAlert2">
          <span class="fw-bold">Secondary alert:</span> Dismiss me by clicking the close button on
          the right.
        </b-alert>
        <b-alert dismissible variant="success" v-model="dismissibleAlert3">
          <span class="fw-bold">Success alert:</span> Dismiss me by clicking the close button on the
          right.
        </b-alert>
        <b-alert dismissible variant="danger" v-model="dismissibleAlert4">
          <span class="fw-bold">Danger alert:</span> Dismiss me by clicking the close button on the
          right.
        </b-alert>
        <b-alert dismissible variant="warning" v-model="dismissibleAlert5">
          <span class="fw-bold">Warning alert:</span> Dismiss me by clicking the close button on the
          right.
        </b-alert>
        <b-alert dismissible variant="info" v-model="dismissibleAlert6">
          <span class="fw-bold">Info alert:</span> Dismiss me by clicking the close button on the
          right.
        </b-alert>
        <b-alert dismissible variant="light" v-model="dismissibleAlert7">
          <span class="fw-bold">Light alert:</span> Dismiss me by clicking the close button on the
          right.
        </b-alert>
        <b-alert dismissible variant="dark" class="mb-0" v-model="dismissibleAlert8">
          <span class="fw-bold">Dark alert:</span> Dismiss me by clicking the close button on the
          right.
        </b-alert>
      </div>
    </section>

    <!-- Additional content -->
    <section id="alerts-additional-content" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Additional content</h2>

      <div class="pt-1">
        <b-alert variant="primary" v-model="show" class="mb-0">
          <h4 class="pt-2 alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This example text is going
            to run a bit longer so that you can see how spacing within an alert works with this kind
            of content.
          </p>
          <hr class="opacity-25 my-0" style="color: currentColor" />
          <p class="pt-3 mb-2">
            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
          </p>
        </b-alert>
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
import BellIcon from '@iconify/icons-bx/bell'
import TimeIcon from '@iconify/icons-bx/bx-time'
import CheckCircleIcon from '@iconify/icons-bx/check-circle'
import BlockIcon from '@iconify/icons-bx/block'
import ErrorIcon from '@iconify/icons-bx/error'
import InfoCircleIcon from '@iconify/icons-bx/bx-info-circle'
import LockOpenIcon from '@iconify/icons-bx/lock-open'
import XCircleIcon from '@iconify/icons-bx/x-circle'

const anchorNavigationData = [
  {
    id: 'alerts-basic',
    title: 'Basic example'
  },
  {
    id: 'alerts-icon',
    title: 'Alert with icon'
  },
  {
    id: 'alerts-dismissible',
    title: 'Dismissible alerts'
  },
  {
    id: 'alerts-additional-content',
    title: 'Additional content'
  }
]

const show = ref(true)
const dismissibleAlert1 = ref(true)
const dismissibleAlert2 = ref(true)
const dismissibleAlert3 = ref(true)
const dismissibleAlert4 = ref(true)
const dismissibleAlert5 = ref(true)
const dismissibleAlert6 = ref(true)
const dismissibleAlert7 = ref(true)
const dismissibleAlert8 = ref(true)
</script>
