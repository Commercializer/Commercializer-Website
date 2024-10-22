<template>
  <footer
    class="footer pt-5 pb-4"
    style="background-color: #131022; border-top: 1px solid rgba(255, 255, 255, 0.1)"
    data-bs-theme="dark"
  >
    <b-container class="pt-1 pt-md-3 pt-lg-4 pt-xl-5">
      <b-row>
        <b-col lg="5" xl="4" class="mb-4 mb-md-5 mb-lg-0">
          <div class="d-flex align-items-center pb-3 mb-1">
            <div class="footer-brand p-0 pe-1 me-0">
              <img src="/commercializer-logo.svg" width="220" alt="Commercializer Logo" />
            </div>
          </div>
          <p class="text-body pb-1 pb-md-2 pb-lg-3 mb-3 footer-paragraph">
            Transforming groundbreaking ideas into market-leading products.
          </p>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-4 locations"
            style="margin-top: 50px"
          >
            <p
              style="font-size: 14px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/us.png" style="width: 24px" />
              Delaware, USA
            </p>
            <p
              style="font-size: 14px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/qa.png" style="width: 24px" />
              Doha, Qatar
            </p>
            <p
              style="font-size: 14px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/lk.png" style="width: 24px" />
              Colombo, Sri Lanka
            </p>
          </div>
        </b-col>
        <b-col lg="7" class="offset-xl-1">
          <div id="footer-links" class="row">
            <b-col md="3" v-for="(item, idx) in footerLinks" :key="item.title">
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
                      :to="{ name: child.link?.name }"
                      class="nav-link fs-sm fw-medium px-0 py-1"
                      v-if="child.link"
                      >{{ child.title }}
                    </router-link>
                    <a
                      v-if="child.href"
                      :href="child.href"
                      class="nav-link fs-sm fw-medium px-0 py-1"
                      >{{ child.title }}
                    </a>
                  </li>
                </ul>
              </b-collapse>
            </b-col>
            <b-col md="6" class="news-letter">
              <h2>Subscribe to Our Newsletter</h2>
              <form
                class="subscription-form position-relative validate"
                action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate
              >
                <div class="d-flex flex-column flex-sm-row gap-0 footer-contact">
                  <div class="position-relative w-100 mb-3 mb-sm-0">
                    <input
                      class="form-control form-control-lg ps-5 footer-contact__input"
                      type="email"
                      name="EMAIL"
                      placeholder="Your email"
                      required
                    />
                    <i
                      class="bx bx-envelope fs-xl text-muted position-absolute top-50 start-0 translate-middle-y ms-3"
                    ></i>
                  </div>
                  <button
                    class="btn btn-primary btn-lg footer-contact__button"
                    type="submit"
                    name="subscribe"
                  >
                    Subscribe
                  </button>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
                <div style="position: absolute; left: -5000px" aria-hidden="true">
                  <input
                    class="subscription-form-antispam"
                    type="text"
                    name="b_c7103e2c981361a6639545bd5_29ca296126"
                    tabindex="-1"
                  />
                </div>
                <p
                  style="
                    font-size: 20px;
                    font-weight: 700;
                    margin-top: 2rem;
                    margin-bottom: 0rem;
                    color: #fff;
                  "
                >
                  Contact Us
                </p>
                <a
                  href="mailto:sales@commercializer.global"
                  style="color: #6ac457; font-size: 18px; text-decoration: none"
                  >sales@commercializer.global</a
                >
                <div
                  class="subscription-status position-absolute top-100 start-50 translate-middle-x"
                ></div>
              </form>
            </b-col>
          </div>
        </b-col>
      </b-row>
      <div
        class="d-md-flex align-items-center justify-content-between pt-sm-2 pt-md-4 pt-lg-5 pb-2 mt-4"
      >
        <ul class="nav order-md-2 ms-n3 ms-md-0 mb-3 mb-md-0">
          <li class="nav-item">
            <a href="/terms-of-use" class="nav-link fs-sm fw-medium">Terms and conditions</a>
          </li>
          <li class="nav-item">
            <a href="/privacy-policy" class="nav-link fs-sm fw-medium">Privacy policy</a>
          </li>
        </ul>
        <p class="nav d-block fs-sm mb-0 order-md-1">
          <span class="text-body" style="font-weight: bold">&copy; 2024 Commercializer </span>
        </p>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
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
  link?: LinkType
  href?: string
}

type FooterLinkType = {
  title: string
  children: ChildLinkType[]
}

const footerLinks: FooterLinkType[] = [
  {
    title: 'Menu',
    children: [
      // {
      //   title: 'Home',
      //   href: '#home'
      // },
      // {
      //   title: 'Awards',
      //   link: { name: '' },
      //   href: '#awards'
      // },
      // {
      //   title: 'Clients',
      //   link: { name: '' },
      //   href: '#clients'
      // },
      // {
      //   title: 'Case studies',
      //   link: { name: '' },
      //   href: '#examples'
      // }
    ]
  },
  {
    title: 'Products',
    children: [
      // {
      //   title: 'Portfolio',
      //   link: { name: '' }
      // },
      {
        title: 'Commercial Prime',
        href: '#commercial-prime'
      },
      {
        title: 'Billable',
        href: '#billable'
      },
      {
        title: 'Agreementor',
        href: '#agreementor'
      }
      // {
      //   title: 'Services',
      //   link: { name: '' }
      // }
    ]
  }
]
</script>

<style lang="scss" scoped>
.footer-brand {
  font-size: 32px;
  color: #fff;

  @include mq(md) {
    font-size: 30px;
  }

  @include mq(sm) {
    font-size: 28px;
  }

  @include mq(xs) {
    font-size: 26px;
  }
}

.footer-paragraph {
  font-size: 20px;
  color: #fff;

  @include mq(md) {
    font-size: 19px;
  }

  @include mq(sm) {
    font-size: 18px;
  }

  @include mq(xs) {
    font-size: 17px;
  }
}

.news-letter {
  h2 {
    font-size: 20px;
    font-weight: 700;

    @include mq(md) {
      font-size: 19px;
    }

    @include mq(sm) {
      font-size: 18px;
    }

    @include mq(xs) {
      font-size: 17px;
    }
  }
}

.footer-contact {
  &__input {
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;

    @include mq(499px) {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }

  &__button {
    background-color: #6ac457;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;

    @include mq(499px) {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
  }
}
</style>
