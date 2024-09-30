<template>
  <footer class="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
    <b-container class="pt-lg-4">
      <b-row class="gy-5 pb-5">
        <b-col lg="4">
          <div style="max-width: 26rem">
            <h3 class="mb-4">Newsletter</h3>
            <p class="text-body mb-4 pb-2">
              Please, subscribe to our newsletter to keep updated about our news and offers.
            </p>
            <b-form>
              <div class="input-group">
                <b-form-input
                  type="email"
                  id="subscr-email"
                  class="rounded-start ps-5"
                  placeholder="Your email"
                  required
                />
                <Icon
                  :icon="EnvelopeIcon"
                  class="bx fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                ></Icon>
                <div class="invalid-tooltip position-absolute top-100 start-0">
                  Please provide a valid email address.
                </div>
                <b-button variant="primary" type="submit">Subscribe</b-button>
              </div>
            </b-form>
          </div>
        </b-col>
        <b-col lg="7" class="offset-lg-1">
          <div class="d-flex flex-lg-row flex-column justify-content-lg-between mt-n4 mx-n2">
            <div class="mt-4 px-2">
              <h3 class="mb-4 pb-lg-2">Our office</h3>
              <ul class="nav flex-column mb-0">
                <li class="mb-1">
                  <a href="#" class="nav-link align-items-start fw-normal px-0 py-1">
                    <Icon :icon="MapIcon" class="bx fs-5 text-primary me-2"></Icon>
                    3517 W. Gray St. Utica, <br />
                    Pennsylvania 57867
                  </a>
                </li>
                <li class="mb-1">
                  <a href="tel:4065550120" class="nav-link align-items-start fw-normal px-0 py-1">
                    <Icon :icon="PhoneCallIcon" class="bx fs-5 text-primary me-2"></Icon>
                    (406)&nbsp;555&#8209;0120
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:email@example.com"
                    class="nav-link align-items-start fw-normal px-0 py-1"
                  >
                    <Icon :icon="EnvelopeIcon" class="bx fs-5 text-primary me-2"></Icon>
                    email@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-4 px-2">
              <h3 class="mb-4 pb-lg-2">Payments accepted</h3>
              <div class="mt-n3 ms-n3">
                <a href="#" class="mt-3 ms-3 d-inline-block">
                  <img :src="visaImg" width="96" alt="Visa" />
                </a>
                <a href="#" class="mt-3 ms-3 d-inline-block">
                  <img :src="mastercardImg" width="96" alt="Visa" />
                </a>
                <a href="#" class="mt-3 ms-3 d-inline-block">
                  <img :src="paypalImg" width="96" alt="Visa" />
                </a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="pt-4">
      <div
        class="d-flex flex-sm-row flex-column align-items-center justify-content-between text-center text-md-start pt-4 border-top border-light"
      >
        <p class="nav d-block fs-sm mb-sm-0 mb-4">
          <span class="text-light opacity-50">&copy; All rights reserved. Made by </span>
          <a
            class="nav-link d-inline-block p-0"
            href="https://coderthemes.com/"
            target="_blank"
            rel="noopener"
            >Coderthemes</a
          >
        </p>
        <div class="mt-n3 ms-n3">
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-facebook rounded-circle mt-3 ms-3"
            aria-label="Facebook"
          >
            <Icon :icon="FacebookIcon" class="bx"></Icon>
          </a>
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-instagram rounded-circle mt-3 ms-3"
            aria-label="Instagram"
          >
            <Icon :icon="InstagramIcon" class="bx"></Icon>
          </a>
          <a
            href="#"
            class="btn btn-icon btn-secondary btn-twitter rounded-circle mt-3 ms-3"
            aria-label="Twitter"
          >
            <Icon :icon="TwitterIcon" class="bx"></Icon>
          </a>
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/bx-envelope'
import MapIcon from '@iconify/icons-bx/bx-map'
import PhoneCallIcon from '@iconify/icons-bx/bx-phone-call'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import visaImg from '@/assets/img/landing/product/payments/visa.png'
import mastercardImg from '@/assets/img/landing/product/payments/mastercard.png'
import paypalImg from '@/assets/img/landing/product/payments/paypal.png'
</script>
