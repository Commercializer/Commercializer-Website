<template>
  <b-col lg="3" md="4" class="border-end pb-5 mt-n5">
    <div class="position-sticky top-0">
      <div class="text-center pt-5">
        <div class="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
          <img :src="user18" class="d-block rounded-circle" width="120" alt="John Doe" />
          <b-button
            variant="light"
            size="sm"
            class="btn-icon bg-white border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4"
            v-b-tooltip.hover.bottom
            title="Change picture"
          >
            <Icon :icon="RefreshIcon" />
          </b-button>
        </div>
        <h2 class="h5 mb-1">John Doe</h2>
        <p class="mb-3 pb-3">jonny@email.com</p>
        <b-button
          variant="secondary"
          class="w-100 d-md-none mt-n2 mb-3"
          data-bs-toggle="collapse"
          data-bs-target="#account-menu"
        >
          <Icon :icon="UserDetailIcon" class="fs-xl me-2" />
          Account menu
          <Icon :icon="ChevronDownIcon" class="fs-lg ms-1" />
        </b-button>

        <div id="account-menu" class="list-group list-group-flush collapse d-md-block">
          <template v-for="(item, idx) in sidebarLinkData" :key="item.title">
            <router-link
              :to="{ name: item.route.name }"
              class="list-group-item list-group-item-action d-flex align-items-center"
              :class="{ active: item.route.name === currentRouteName }"
            >
              <Icon :icon="item.icon" class="fs-xl opacity-60 me-2" />
              {{ item.title }}
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script setup lang="ts">
import user18 from '@/assets/img/avatar/18.jpg'
import { Icon } from '@iconify/vue'
import RefreshIcon from '@iconify/icons-bx/refresh'
import UserDetailIcon from '@iconify/icons-bx/bxs-user-detail'
import ChevronDownIcon from '@iconify/icons-bx/chevron-down'

import CogIcon from '@iconify/icons-bx/cog'
import LockAltIcon from '@iconify/icons-bx/lock-alt'
import BellIcon from '@iconify/icons-bx/bell'
import ChatIcon from '@iconify/icons-bx/chat'
import BookmarkIcon from '@iconify/icons-bx/bookmark'
import CollectionIcon from '@iconify/icons-bx/collection'
import CreditCardIcon from '@iconify/icons-bx/credit-card'
import LogOutIcon from '@iconify/icons-bx/log-out'

import router from '@/router'
import { BButton } from 'bootstrap-vue-next'

const currentRouteName = router.currentRoute.value.name

const sidebarLinkData = [
  {
    icon: CogIcon,
    title: 'Account Details',
    route: {
      name: 'account.details'
    }
  },
  {
    icon: LockAltIcon,
    title: 'Security',
    route: {
      name: 'account.security'
    }
  },
  {
    icon: BellIcon,
    title: 'Notifications',
    route: {
      name: 'account.notifications'
    }
  },
  {
    icon: ChatIcon,
    title: 'Messages',
    route: {
      name: 'account.messages'
    }
  },
  {
    icon: BookmarkIcon,
    title: 'Saved Items',
    route: {
      name: 'account.saved-items'
    }
  },
  {
    icon: CollectionIcon,
    title: 'My Collections',
    route: {
      name: 'account.collections'
    }
  },
  {
    icon: CreditCardIcon,
    title: 'Payment Details',
    route: {
      name: 'account.payment'
    }
  },
  {
    icon: LogOutIcon,
    title: 'Sign Out',
    route: {
      name: 'account.sign-in'
    }
  }
]
</script>
