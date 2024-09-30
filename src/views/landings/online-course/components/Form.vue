<template>
  <section class="bg-secondary pb-lg-5" style="margin-top: -240px; padding-top: 300px">
    <b-container class="pt-2 pt-md-3 pt-lg-5 pb-5">
      <h2 class="h1 text-center pb-2 mb-4 mb-lg-5">
        Ready to Kick-Start Your Career?<br />Start Learning Today
      </h2>
      <b-row class="pb-3">
        <b-col xl="7" md="6">
          <div
            class="d-flex flex-column w-100 h-100 rounded-3 bg-position-center bg-repeat-0 bg-size-cover"
            :style="{ backgroundImage: `url('${signupImg}')` }"
          ></div>
        </b-col>
        <b-col xl="5" md="6">
          <div class="card border-0 p-lg-4">
            <div class="card-body">
              <h3 class="pb-3 pb-lg-4">
                Sign up and get <span class="text-danger">20% off</span> for your first course!
              </h3>
              <b-form class="mb-4 pb-2 pb-lg-0 mb-lg-5">
                <div class="position-relative mb-4">
                  <b-form-group label="Email address" label-class="fs-base" label-for="email">
                    <b-form-input
                      type="email"
                      id="email"
                      class="form-control-lg"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback
                      class="invalid-tooltip position-absolute top-100 start-0"
                      >Please provide a valid email address.
                    </b-form-invalid-feedback>
                  </b-form-group>
                </div>
                <div class="mb-4 pt-1 pb-2">
                  <label for="password" class="form-label fs-base">Password</label>
                  <div class="password-toggle">
                    <b-form-input
                      type="password"
                      id="password"
                      class="form-control-lg"
                      required
                    ></b-form-input>
                    <label class="password-toggle-btn" aria-label="Show/hide password">
                      <input class="password-toggle-check" type="checkbox" />
                      <span class="password-toggle-indicator"></span>
                    </label>
                    <b-form-invalid-feedback
                      class="invalid-tooltip position-absolute top-100 start-0"
                      >Please provide a valid email address.
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <b-button variant="primary" size="lg" type="submit" class="shadow-primary"
                  >Create free account
                </b-button>
              </b-form>
              <h6 class="mb-4">Or sign up using:</h6>
              <div class="d-flex">
                <a href="#" class="btn btn-icon btn-secondary btn-google me-2" aria-label="Google">
                  <Icon :icon="GoogleIcon" class="bx"></Icon>
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-facebook ms-1 me-2"
                  aria-label="Facebook"
                >
                  <Icon :icon="FacebookIcon" class="bx"></Icon>
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-linkedin ms-1 me-2"
                  aria-label="LinkedIn"
                >
                  <Icon :icon="LinkedinIcon" class="bx"></Icon>
                </a>
                <a href="#" class="btn btn-icon btn-secondary btn-github ms-1" aria-label="GitHub">
                  <Icon :icon="GithubIcon" class="bx"></Icon>
                </a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import signupImg from '@/assets/img/landing/online-courses/signup-img.jpg'
import GoogleIcon from '@iconify/icons-bx/bxl-google'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import GithubIcon from '@iconify/icons-bx/bxl-github'
import { Icon } from '@iconify/vue'
</script>
