<template>
  <footer class="footer bg-dark pt-5 pb-4" data-bs-theme="dark">
    <b-container class="pt-1 pt-md-3 pt-lg-4 pt-xl-5">
      <b-row>
        <b-col lg="5" xl="4" class="mb-4 mb-md-5 mb-lg-0">
          <div class="d-flex align-items-center pb-3 mb-1">
            <div class="navbar-brand text-dark p-0 pe-1 me-0">
              <img :src="logoImg" width="47" alt="Silicon" />
              Silicon
            </div>
            <hr class="vr mt-2 mx-3" style="height: 26px" />
            <div class="text-white fw-semibold ps-1">Banking made easy.</div>
          </div>
          <p class="text-body fs-sm pb-1 pb-md-2 pb-lg-3 mb-3">
            With just a few taps, you can securely manage your finances from the palm of your hand.
            Download our app today and take control of your finances like never before!
          </p>
          <div
            class="d-flex flex-column flex-sm-row flex-lg-column align-items-sm-center align-items-lg-start justify-content-between"
          >
            <div class="position-relative dark-select">
              <b-form-select
                v-model="selectedCountry"
                :options="countryOptions"
                class="form-select-sm"
                style="max-width: 180px; padding-left: 1.75rem"
              >
              </b-form-select>
              <Icon
                :icon="MapIcon"
                class="bx position-absolute top-50 start-0 translate-middle-y text-body ms-2"
              ></Icon>
            </div>
            <div class="d-flex pt-4 pt-sm-0 pt-lg-4 mt-lg-3">
              <a
                href="#"
                class="btn btn-icon btn-secondary btn-facebook rounded-circle me-3"
                aria-label="Facebook"
              >
                <Icon :icon="FacebookIcon" class="bx"></Icon>
              </a>
              <a
                href="#"
                class="btn btn-icon btn-secondary btn-instagram rounded-circle me-3"
                aria-label="Instagram"
              >
                <Icon :icon="InstagramIcon" class="bx"></Icon>
              </a>
              <a
                href="#"
                class="btn btn-icon btn-secondary btn-youtube rounded-circle me-3"
                aria-label="YouTube"
              >
                <Icon :icon="YoutubeIcon" class="bx"></Icon>
              </a>
              <a
                href="#"
                class="btn btn-icon btn-secondary btn-telegram rounded-circle me-3"
                aria-label="Telegram"
              >
                <Icon :icon="TelegramIcon" class="bx"></Icon>
              </a>
            </div>
          </div>
        </b-col>
        <b-col lg="7" class="offset-xl-1">
          <div id="footer-links" class="row">
            <b-col md="4" v-for="(item, idx) in footerLinks" :key="item.title">
              <h6 class="fs-lg mb-1 mb-md-3">
                <span class="d-none d-md-block">{{ item.title }}</span>
                <a
                  href="#tools"
                  class="d-block text-dark dropdown-toggle d-md-none py-2"
                  v-b-toggle="`footer-link-${idx + 1}`"
                  >{{ item.title }}</a
                >
              </h6>
              <b-collapse
                :id="`footer-link-${idx + 1}`"
                class="d-md-block"
                data-bs-parent="#footer-links"
              >
                <ul class="nav flex-column">
                  <li
                    class="nav-item mb-1"
                    v-for="(child, idx) in item.children"
                    :key="child.title"
                  >
                    <router-link
                      :to="{ name: child.link.name }"
                      class="nav-link fs-sm fw-medium px-0 py-1"
                      >{{ child.title }}
                    </router-link>
                  </li>
                </ul>
              </b-collapse>
            </b-col>
          </div>
        </b-col>
      </b-row>
      <div
        class="d-md-flex align-items-center justify-content-between pt-sm-2 pt-md-4 pt-lg-5 pb-2 mt-4"
      >
        <ul class="nav order-md-2 ms-n3 ms-md-0 mb-3 mb-md-0">
          <li class="nav-item">
            <a href="#" class="nav-link fs-sm fw-medium">Terms and conditions</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link fs-sm fw-medium">Privacy policy</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link fs-sm fw-medium">Contact</a>
          </li>
        </ul>
        <p class="nav d-block fs-sm mb-0 order-md-1">
          <span class="text-body">&copy; All rights reserved. Made by </span>
          <a
            class="nav-link d-inline-block p-0"
            href="https://coderthemes.com/"
            target="_blank"
            rel="noopener"
            >Coderthemes</a
          >
        </p>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoImg from '@/assets/img/logo.svg'
import { Icon } from '@iconify/vue'
import MapIcon from '@iconify/icons-bx/bx-map'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
import TelegramIcon from '@iconify/icons-bx/bxl-telegram'
import { ref } from 'vue'

const selectedCountry = ref(null)
const countryOptions = [
  { text: 'Choose country', value: 'Choose country' },
  { text: 'Australia', value: 'Australia' },
  { text: 'Belgium', value: 'Belgium' },
  { text: 'Canada', value: 'Canada' },
  { text: 'Denmark', value: 'Denmark' },
  { text: 'United States', value: null }
]

import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

type ChildLinkType = {
  title: string
  link: LinkType
}

type FooterLinkType = {
  title: string
  children: ChildLinkType[]
}

const footerLinks: FooterLinkType[] = [
  {
    title: 'Tools and features',
    children: [
      {
        title: 'Bill payment tracker',
        link: { name: '' }
      },
      {
        title: 'Budgeting goal tracker',
        link: { name: '' }
      },
      {
        title: 'Budget alerts',
        link: { name: '' }
      },
      {
        title: 'Categorize transactions',
        link: { name: '' }
      },
      {
        title: 'Investment tracker',
        link: { name: '' }
      },
      {
        title: 'Loan calculator',
        link: { name: '' }
      },
      {
        title: 'Investment calculator',
        link: { name: '' }
      }
    ]
  },
  {
    title: 'Resources',
    children: [
      {
        title: 'About Silicon',
        link: { name: '' }
      },
      {
        title: 'Latest news and insights',
        link: { name: '' }
      },
      {
        title: 'Budgeting tips',
        link: { name: '' }
      },
      {
        title: 'Investing tips',
        link: { name: '' }
      },
      {
        title: 'Financial planning tips',
        link: { name: '' }
      },
      {
        title: 'Careers at Silicon',
        link: { name: '' }
      }
    ]
  },
  {
    title: 'Help center',
    children: [
      {
        title: 'Help center',
        link: { name: '' }
      },
      {
        title: 'Community',
        link: { name: '' }
      },
      {
        title: 'Support chat',
        link: { name: '' }
      },
      {
        title: 'API documentation',
        link: { name: '' }
      },
      {
        title: 'Account &amp; transactions',
        link: { name: '' }
      },
      {
        title: 'Login and password',
        link: { name: '' }
      }
    ]
  }
]
</script>
