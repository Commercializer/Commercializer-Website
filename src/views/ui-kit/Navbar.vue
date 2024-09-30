<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Navbar"
      description="Responsive navigation header that includes support for branding, navigation, and more."
    />

    <!-- Supported content -->
    <section id="navbar-content" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Supported content</h2>
      <div class="pt-1">
        <b-navbar
          variant="light"
          toggleable="lg"
          class="shadow-sm border border-light rounded-3 mb-4"
        >
          <b-container class="px-3 d-md-flex justify-content-between">
            <div class="w-full d-flex justify-content-between">
              <b-navbar-brand href="#">
                <img src="@/assets/img/logo.svg" width="47" alt="Silicon" />
                Silicon
              </b-navbar-brand>
              <b-button
                class="navbar-toggler"
                v-b-toggle.collapse.navbarCollapse1
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </b-button>
            </div>

            <b-collapse id="navbarCollapse1" class="navbar-collapse" is-nav>
              <hr class="d-lg-none mt-3 mb-2" />
              <b-navbar-nav class="me-auto">
                <b-nav-item active>Home</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item-dropdown text="Dropdown">
                  <b-dropdown-item href="#">Action link</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-navbar-nav>

              <a href="#" class="btn btn-primary btn-sm fs-sm rounded my-3 my-lg-0">
                <Icon :icon="UserIcon" class="fs-lg me-2"></Icon>
                Sign up
              </a>
            </b-collapse>
          </b-container>
        </b-navbar>

        <b-navbar
          variant="light"
          toggleable="lg"
          class="shadow-sm border border-light rounded-3 mb-4"
        >
          <b-container class="px-3 d-md-flex justify-content-between">
            <div class="w-full d-flex justify-content-between">
              <b-navbar-brand href="#">
                <img src="@/assets/img/logo.svg" width="47" alt="Silicon" />
                Silicon
              </b-navbar-brand>
              <b-button
                class="navbar-toggler ms-auto"
                v-b-toggle.collapse.navbarCollapse2
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </b-button>
            </div>

            <b-collapse id="navbarCollapse2" class="navbar-collapse">
              <hr class="d-lg-none mt-3 mb-2" />

              <b-navbar-nav class="me-auto">
                <b-nav-item active>Home</b-nav-item>
                <b-nav-item>Services</b-nav-item>
                <b-nav-item>About</b-nav-item>
              </b-navbar-nav>

              <a href="#" class="btn btn-secondary btn-sm fs-sm rounded my-3 d-lg-none">
                <Icon :icon="LoginIcon" class="bx fs-lg me-2"></Icon>
                Sign in
              </a>
              <div class="form-check form-switch mode-switch order-lg-2 ms-4 ms-lg-auto me-lg-4">
                <input type="checkbox" role="button" class="form-check-input" id="theme-mode1" />
                <label
                  class="form-check-label d-none d-sm-block d-lg-none d-xl-block"
                  for="theme-mode1"
                  >Light</label
                >
                <label
                  class="form-check-label d-none d-sm-block d-lg-none d-xl-block"
                  for="theme-mode1"
                  >Dark</label
                >
              </div>
              <a
                href="#"
                class="btn btn-secondary btn-sm fs-sm rounded order-lg-3 d-none d-lg-inline-flex"
              >
                <Icon :icon="LoginIcon" class="bx fs-lg me-2"></Icon>
                Sign in
              </a>
            </b-collapse>
          </b-container>
        </b-navbar>

        <header class="d-flex flex-column bg-light shadow-sm border border-light rounded-3 mb-4">
          <b-navbar toggleable="lg">
            <b-container class="px-3 d-md-flex justify-content-between">
              <div class="w-full d-flex justify-content-between">
                <b-navbar-brand href="#">
                  <img src="@/assets/img/logo.svg" :width="47" alt="Silicon" />
                  Silicon
                </b-navbar-brand>
                <b-button
                  class="navbar-toggler ms-3"
                  v-b-toggle.collapse.navbarCollapse3
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </b-button>
              </div>
              <b-collapse id="navbarCollapse3" class="navbar-collapse">
                <hr class="d-lg-none mt-3 mb-2" />

                <b-navbar-nav class="me-auto">
                  <b-nav-item active>Home</b-nav-item>
                  <b-nav-item>Services</b-nav-item>
                  <b-nav-item>About</b-nav-item>
                  <b-nav-item>Contacts</b-nav-item>
                  <li class="d-lg-none my-2">
                    <hr />
                  </li>
                  <b-nav-item class="d-lg-none">
                    <Icon :icon="UserIcon" class="fs-5 me-2"></Icon>
                    My account
                  </b-nav-item>
                </b-navbar-nav>

                <div class="d-flex align-items-center order-lg-2 ms-auto">
                  <b-nav-item
                    href="#searchCollapse"
                    class="nav-link px-2"
                    v-b-toggle.collapse.searchCollapse
                    aria-label="Search"
                  >
                    <Icon :icon="SearchIcon" class="fs-4 mx-1"></Icon>
                  </b-nav-item>
                  <b-nav-item href="#" class="nav-link d-none d-lg-block px-2" aria-label="Account">
                    <Icon :icon="UserIcon" class="fs-4 mx-1"></Icon>
                  </b-nav-item>
                  <a
                    href="#"
                    class="btn btn-icon btn-secondary rounded-circle position-relative ms-2"
                    aria-label="Cart"
                  >
                    <b-badge
                      variant="danger"
                      class="rounded-circle position-absolute top-0 start-100 translate-middle-x ms-n1 mt-n2 text-white"
                    >
                      2
                    </b-badge>
                    <Icon :icon="CartIcon" class="fs-4"></Icon>
                  </a>
                </div>
              </b-collapse>
            </b-container>
          </b-navbar>

          <div class="w-full d-flex justify-content-between">
            <b-collapse id="searchCollapse">
              <b-container class="px-3 py-3 pt-lg-2 pb-lg-4">
                <div class="position-relative">
                  <b-form-input
                    type="search"
                    class="form-control-lg ps-5"
                    placeholder="Search..."
                  />
                  <Icon
                    :icon="SearchIcon"
                    class="fs-5 text-muted position-absolute top-50 start-0 translate-middle-y ms-3"
                  ></Icon>
                </div>
              </b-container>
            </b-collapse>
          </div>
        </header>

        <b-navbar
          variant="light"
          toggleable="lg"
          class="shadow-sm border border-light rounded-3 mb-4"
        >
          <b-container class="px-3 d-md-flex justify-content-between">
            <div class="w-full d-flex justify-content-between">
              <b-navbar-brand href="#">
                <img src="@/assets/img/logo.svg" width="47" alt="Silicon" />
                Silicon
              </b-navbar-brand>
              <button
                class="navbar-toggler ms-auto"
                type="button"
                v-b-toggle.collapse.navbarCollapse4
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <b-collapse id="navbarCollapse4" class="navbar-collapse order-lg-2">
              <hr class="d-lg-none mt-3 mb-2" />

              <b-navbar-nav class="me-auto">
                <b-nav-item active>Home</b-nav-item>
                <b-nav-item>Services</b-nav-item>
                <b-nav-item>About</b-nav-item>
              </b-navbar-nav>

              <div class="d-flex d-lg-none order-lg-3">
                <a href="tel:4055550128" class="nav-link px-2 ms-2" aria-label="Phone">
                  <Icon :icon="MobileAltIcon" class="fs-2"></Icon>
                </a>
                <a href="mailto:hello@example.com" class="nav-link px-2" aria-label="Chat">
                  <Icon :icon="ChatIcon" class="fs-2"></Icon>
                </a>
              </div>
              <div class="d-none d-lg-flex order-lg-3">
                <a
                  href="tel:4055550128"
                  class="d-flex align-items-center text-decoration-none ms-4"
                >
                  <Icon :icon="MobileAltIcon" class="fs-2 text-primary"></Icon>
                  <div class="fs-sm text-nowrap ps-2">
                    <h6 class="fs-sm mb-0">Call&nbsp;us</h6>
                    <span class="text-nav">(405)&nbsp;555&#8209;0128</span>
                  </div>
                </a>
                <a
                  href="mailto:hello@example.com"
                  class="d-flex align-items-center text-decoration-none ms-4"
                >
                  <Icon :icon="ChatIcon" class="fs-2 text-primary"></Icon>
                  <div class="fs-sm ps-2">
                    <h6 class="fs-sm mb-0">Talk to us</h6>
                    <span class="text-nav">hello@example.com</span>
                  </div>
                </a>
              </div>
            </b-collapse>
          </b-container>
        </b-navbar>

        <b-navbar variant="light" toggleable="lg" class="shadow-sm border border-light rounded-3">
          <b-container class="px-3">
            <div class="w-full d-flex justify-content-between">
              <b-navbar-brand href="#">
                <img src="@/assets/img/logo.svg" width="47" alt="Silicon" />
                Silicon
              </b-navbar-brand>
              <b-button class="navbar-toggler ms-auto" v-b-toggle.collapse.navbarCollapse5>
                <span class="navbar-toggler-icon"></span>
              </b-button>
              <b-nav-item-dropdown
                class="d-block order-lg-3 ms-4"
                menu-class="dropdown-menu dropdown-menu-end my-1"
              >
                <template v-slot:button-content>
                  <a href="#" class="d-flex nav-link p-0">
                    <img
                      src="@/assets/img/avatar/09.jpg"
                      class="rounded-circle"
                      width="48"
                      alt="Avatar"
                    />
                    <div class="d-none d-sm-block ps-2">
                      <div class="fs-xs lh-1 opacity-60">Hello,</div>
                      <div class="fs-sm">Alexander</div>
                    </div>
                  </a>
                </template>

                <b-dropdown-item class="d-flex align-items-center">
                  <Icon :icon="ShoppingBagIcon" class="bx fs-base opacity-60 me-2"></Icon>
                  Orders
                  <span
                    class="bg-success rounded-circle mt-n2 ms-1"
                    style="width: 5px; height: 5px"
                  ></span>
                  <span class="ms-auto fs-xs text-muted">2</span>
                </b-dropdown-item>
                <b-dropdown-item class="d-flex align-items-center">
                  <Icon :icon="DollarIcon" class="bx fs-base opacity-60 me-2"></Icon>
                  Sales
                  <span class="ms-auto fs-xs text-muted">$735.00</span>
                </b-dropdown-item>
                <b-dropdown-item class="d-flex align-items-center">
                  <Icon :icon="ChatIcon" class="bx fs-base opacity-60 me-2"></Icon>
                  Messages
                  <span
                    class="bg-success rounded-circle mt-n2 ms-1"
                    style="width: 5px; height: 5px"
                  ></span>
                  <span class="ms-auto fs-xs text-muted">1</span>
                </b-dropdown-item>
                <b-dropdown-item class="d-flex align-items-center">
                  <Icon :icon="GroupIcon" class="bx fs-base opacity-60 me-2"></Icon>
                  Followers
                  <span class="ms-auto fs-xs text-muted">146</span>
                </b-dropdown-item>
                <b-dropdown-item class="d-flex align-items-center">
                  <Icon :icon="StarIcon" class="bx fs-base opacity-60 me-2"></Icon>
                  Reviews
                  <span class="ms-auto fs-xs text-muted">15</span>
                </b-dropdown-item>
                <b-dropdown-item class="d-flex align-items-center" href="#">
                  <Icon :icon="HeartIcon" class="bx fs-base opacity-60 me-2"></Icon>
                  Favorites
                  <span class="ms-auto fs-xs text-muted">6</span>
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item class="d-flex align-items-center" href="#">
                  <Icon :icon="LogOutIcon" class="bx fs-base opacity-60 me-2"></Icon>
                  Sign out
                </b-dropdown-item>
              </b-nav-item-dropdown>

              <b-collapse id="navbarCollapse5" class="navbar-collapse order-lg-2">
                <hr class="d-lg-none mt-3 mb-2" />
                <b-navbar-nav class="me-auto">
                  <b-nav-item active>Home</b-nav-item>
                  <b-nav-item>Services</b-nav-item>
                  <b-nav-item>About</b-nav-item>
                  <b-nav-item>Contacts</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </div>
          </b-container>
        </b-navbar>
      </div>
    </section>

    <!-- Color schemes -->
    <section id="navbar-colors" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Color schemes</h2>
      <div class="pt-1">
        <b-navbar
          variant="dark"
          toggleable="lg"
          class="navbar-dark shadow-sm border border-light rounded-3 mb-4"
        >
          <b-container class="px-3 d-md-flex justify-content-between">
            <div class="w-full d-flex justify-content-between">
              <b-navbar-brand href="#">
                <img src="@/assets/img/logo.svg" width="47" alt="Silicon" />
                Silicon
              </b-navbar-brand>
              <b-button
                class="navbar-toggler"
                v-b-toggle.collapse.navbarCollapseDark
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </b-button>
            </div>

            <b-collapse id="navbarCollapseDark" class="navbar-collapse" is-nav>
              <hr class="d-lg-none mt-3 mb-2" />
              <b-navbar-nav class="me-auto">
                <b-nav-item active>Home</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item-dropdown text="Dropdown">
                  <b-dropdown-item href="#">Action link</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-navbar-nav>

              <a href="#" class="btn btn-primary btn-sm fs-sm rounded my-3 my-lg-0">
                <Icon :icon="UserIcon" class="fs-lg me-2"></Icon>
                Sign up
              </a>
            </b-collapse>
          </b-container>
        </b-navbar>

        <b-navbar
          variant="secondary"
          toggleable="lg"
          class="shadow-sm border border-light rounded-3 mb-4"
        >
          <b-container class="px-3 d-md-flex justify-content-between">
            <div class="w-full d-flex justify-content-between">
              <b-navbar-brand href="#">
                <img src="@/assets/img/logo.svg" width="47" alt="Silicon" />
                Silicon
              </b-navbar-brand>
              <b-button
                class="navbar-toggler"
                v-b-toggle.collapse.navbarCollapseSecondary
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </b-button>
            </div>

            <b-collapse id="navbarCollapseSecondary" class="navbar-collapse" is-nav>
              <hr class="d-lg-none mt-3 mb-2" />
              <b-navbar-nav class="me-auto">
                <b-nav-item active>Home</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item-dropdown text="Dropdown">
                  <b-dropdown-item href="#">Action link</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-navbar-nav>

              <a href="#" class="btn btn-primary btn-sm fs-sm rounded my-3 my-lg-0">
                <Icon :icon="UserIcon" class="fs-lg me-2"></Icon>
                Sign up
              </a>
            </b-collapse>
          </b-container>
        </b-navbar>
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
import { Icon } from '@iconify/vue'
import UserIcon from '@iconify/icons-bx/bx-user'
import LoginIcon from '@iconify/icons-bx/bx-log-in'
import SearchIcon from '@iconify/icons-bx/bx-search'
import CartIcon from '@iconify/icons-bx/bx-cart'
import MobileAltIcon from '@iconify/icons-bx/bx-mobile-alt'
import ChatIcon from '@iconify/icons-bx/bx-chat'
import ShoppingBagIcon from '@iconify/icons-bx/bx-shopping-bag'
import DollarIcon from '@iconify/icons-bx/bx-dollar'
import StarIcon from '@iconify/icons-bx/bx-star'
import GroupIcon from '@iconify/icons-bx/bx-group'
import HeartIcon from '@iconify/icons-bx/bx-heart'
import LogOutIcon from '@iconify/icons-bx/bx-log-out'

const anchorData = [
  {
    id: 'navbar-content',
    title: 'Supported content'
  },
  {
    id: 'navbar-colors',
    title: 'Color schemes'
  }
]
</script>
