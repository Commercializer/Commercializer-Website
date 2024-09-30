<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Team"
      description="Component designed to showcase team members. Comes in different styles."
      :is-silicon-component="true"
    />

    <!-- Style 1 -->
    <section id="team-style1" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Style 1</h2>
      <div class="pt-1">
        <div class="card card-hover border-0 bg-transparent" style="max-width: 306px">
          <div class="position-relative">
            <img src="@/assets/img/team/25.jpg" class="rounded-3" alt="Albert Flores" />
            <div
              class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
            >
              <span
                class="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"
              ></span>
              <div class="position-relative d-flex zindex-2">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                  aria-label="Facebook"
                >
                  <Icon :icon="FacebookIcon" />
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                  aria-label="LinkedIn"
                >
                  <Icon :icon="LinkedinIcon" />
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                  aria-label="Twitter"
                >
                  <Icon :icon="TwitterIcon" />
                </a>
              </div>
            </div>
          </div>
          <div class="card-body text-center p-3 pb-1">
            <h3 class="fs-lg fw-semibold pt-1 mb-2">Albert Flores</h3>
            <p class="fs-sm mb-0">Principal Consultant, Twitch</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Style 2: Vertical -->
    <section id="team-style2-vertical" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Style 2: Vertical</h2>
      <div class="pt-1">
        <div
          class="card card-body card-hover bg-light border-0 text-center"
          style="max-width: 300px"
        >
          <img
            src="@/assets/img/team/11.jpg"
            class="d-block rounded-circle mx-auto mb-3"
            width="162"
            alt="Cameron Williamson"
          />
          <h5 class="fw-medium fs-lg mb-1">Cameron Williamson</h5>
          <p class="fs-sm mb-3">Creative Director</p>
          <div class="d-flex justify-content-center">
            <a
              href="#"
              class="btn btn-icon btn-outline-secondary btn-facebook btn-sm me-2"
              aria-label="Facebook"
            >
              <Icon :icon="FacebookIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-outline-secondary btn-dribbble btn-sm me-2"
              aria-label="Dribbble"
            >
              <Icon :icon="DribbleIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-outline-secondary btn-linkedin btn-sm"
              aria-label="LinkedIn"
            >
              <Icon :icon="LinkedinIcon" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Style 2: Horizontal -->
    <section id="team-style2-horizontal" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Style 2: Horizontal</h2>
      <div class="pt-1">
        <div
          class="card card-body d-flex flex-row align-items-center card-hover bg-light border-0"
          style="max-width: 400px"
        >
          <img
            src="@/assets/img/team/10.jpg"
            class="d-block rounded-circle"
            width="162"
            alt="Darrell Steward"
          />
          <div class="ps-4">
            <h5 class="fw-medium fs-lg mb-1">Darrell Steward</h5>
            <p class="fs-sm mb-3">Lead Developer</p>
            <div class="d-flex">
              <a
                href="#"
                class="btn btn-icon btn-outline-secondary btn-facebook btn-sm me-2"
                aria-label="Facebook"
              >
                <Icon :icon="FacebookIcon" />
              </a>
              <a
                href="#"
                class="btn btn-icon btn-outline-secondary btn-stack-overflow btn-sm me-2"
                aria-label="Stack Overflow"
              >
                <Icon :icon="StackOverflowIcon" />
              </a>
              <a
                href="#"
                class="btn btn-icon btn-outline-secondary btn-github btn-sm"
                aria-label="GitHub"
              >
                <Icon :icon="GithubIcon" />
              </a>
            </div>
          </div>
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
import GithubIcon from '@iconify/icons-bx/bxl-github'
import StackOverflowIcon from '@iconify/icons-bx/bxl-stack-overflow'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import DribbleIcon from '@iconify/icons-bx/bxl-dribbble'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'

const anchorData = [
  {
    id: 'team-style1',
    title: 'Style 1'
  },
  {
    id: 'team-style2-vertical',
    title: 'Style 2: Vertical'
  },
  {
    id: 'team-style2-horizontal',
    title: 'Style 2: Horizontal'
  }
]
</script>
