<template>
  <aside data-bs-theme="dark">
    <b-offcanvas
      v-model="useTheme.isSidebarVisible"
      :bodyScrolling="true"
      :backdrop="false"
      size="lg"
      id="componentsNav"
      class="d-flex flex-column position-fixed top-0 start-0 vh-100 border-end-lg"
      body-class="px-4"
      header-class="border-bottom"
      style="width: 21rem; z-index: 1045"
    >
      <template v-slot:header>
        <div class="d-none d-lg-flex justify-content-start">
          <router-link
            :to="{ name: 'ui.typography' }"
            class="navbar-brand text-dark d-none d-lg-flex py-0"
          >
            <img :src="logo" width="47" alt="Silicon" />
            Silicon
          </router-link>
          <div class="">
            <b-badge
              v-if="badge"
              :class="`bg-${badgeVariant ?? 'primary'}`"
              class="text-white d-none d-lg-inline-block"
            >
              {{ badge }}
            </b-badge>
          </div>
        </div>
        <div class="d-block d-lg-none w-100">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="d-lg-none mb-0">Menu</h5>
            <button
              type="button"
              class="btn-close d-lg-none"
              @click="useTheme.toggleSidebar"
            ></button>
          </div>

          <div v-if="mobileLink" class="list-group list-group-flush mx-n4">
            <router-link
              v-for="(item, idx) in mobileLink"
              :key="idx"
              :to="{ name: item.link?.name, params: item.link?.params }"
              class="list-group-item list-group-item-action d-flex align-items-center border-0 py-2 px-4"
            >
              <Icon v-if="item.icon" :icon="item.icon" class="fs-lg opacity-80 me-2" />
              {{ item.title }}
            </router-link>
          </div>
        </div>
      </template>
      <template v-slot:default>
        <Simplebar class="scrollbar-hover overflow-hidden w-100 h-auto">
          <template v-for="(item, idx) in sidebarLink" :key="item.title">
            <h3 class="fs-lg">{{ item.title }}</h3>
            <div
              class="list-group list-group-flush mx-n4"
              :class="idx != sidebarLink.length - 1 ? 'border-bottom pb-3 mb-4' : 'pb-2'"
            >
              <template v-for="(child, idx) in item.children" :key="child.link?.name">
                <a
                  v-if="child.externalLink"
                  :href="child.externalLink"
                  class="list-group-item list-group-item-action border-0 py-2 px-4"
                  target="_blank"
                  rel="noopener"
                >
                  {{ child.title }}
                </a>

                <router-link
                  v-else
                  :to="{ name: child.link?.name, params: child.link?.params }"
                  class="list-group-item list-group-item-action border-0 py-2 px-4"
                  :class="{ active: child.link?.name === currentRouteName }"
                >
                  {{ child.title }}
                </router-link>
              </template>
            </div>
          </template>
        </Simplebar>
      </template>
    </b-offcanvas>
  </aside>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'

import { useThemeStore } from '@/stores/themes'

import logo from '@/assets/img/logo.svg'

import router from '@/router'

import { Icon } from '@iconify/vue'

import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'

import type { ChildrenLinkType, SidebarLinkType } from '@/layouts/type'

const currentRouteName = router.currentRoute.value.name

defineProps({
  badge: String,
  badgeVariant: {
    type: String,
    required: true
  },
  sidebarLink: {
    type: Array as PropType<SidebarLinkType[]>,
    required: true
  },
  mobileLink: {
    type: Array as PropType<ChildrenLinkType[]>
  }
})

const useTheme = useThemeStore()

onMounted(() => {
  addEventListener('resize', (event) => {
    if (window.innerWidth < 990) {
      useTheme.isSidebarVisible = false
    } else {
      useTheme.isSidebarVisible = true
    }
  })

  useTheme.isSidebarVisible = window.innerWidth >= 990
})
</script>
