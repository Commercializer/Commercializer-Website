<template>
  <Navbar />

  <section class="position-relative h-100 pt-5 pb-4">
    <b-container class="d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
      <div class="w-100 align-self-end pt-1 pt-md-4 pb-4" style="max-width: 526px">
        <h1 class="text-center text-xl-start">Create Account</h1>
        <p class="text-center text-xl-start pb-3 mb-3">
          Already have an account?
          <router-link :to="{ name: 'account.sign-in' }">Sign in here.</router-link>
        </p>

        <b-form @submit.prevent="signUp">
          <div v-if="error" class="text-danger pb-2">Please Provide valid credentials</div>
          <b-row>
            <b-col sm="6" class="mb-4">
              <b-form-group label="Full name" label-for="name" label-class="fs-base">
                <b-form-input id="name" type="text" class="form-control-lg" v-model="userData.fullName"></b-form-input>
                <b-form-invalid-feedback>Please enter your name!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Email" label-for="email" label-class="fs-base">
                <b-form-input id="email" type="email" class="form-control-lg" v-model="userData.email"></b-form-input>
                <b-form-invalid-feedback>Please enter your email!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <PasswordInput place-holder="" v-model="userData.password" />
            </b-col>

            <b-col cols="12" class="mb-4">
              <label for="password-confirm" class="form-label fs-base">Confirm password</label>
              <div class="password-toggle">
                <input :type="showPassword ? 'text' : 'password'" id="password-confirm"
                  class="form-control form-control-lg">
                <label class="password-toggle-btn" aria-label="Show/hide password">
                  <input class="password-toggle-check" type="checkbox" @change="setShowPassword">
                  <span class="password-toggle-indicator"></span>
                </label>
                <div class="invalid-feedback position-absolute start-0 top-100">Please enter a password!</div>
              </div>
            </b-col>
          </b-row>

          <div class="mb-4">
            <b-form-checkbox id="terms" class="fs-base">I agree to <a href="#">Terms & Conditions</a></b-form-checkbox>
          </div>

          <b-button variant="primary" size="lg" type="submit" class="shadow-primary w-100">Sign up</b-button>
        </b-form>

        <hr class="my-4" />
        <h6 class="text-center mb-4">Or sign up with your social network</h6>
        <b-row class="row-cols-1 row-cols-sm-2">
          <b-col class="mb-3">
            <a href="#" class="btn btn-icon btn-secondary btn-google btn-lg w-100">
              <Icon :icon="GoogleIcon" class="fs-xl me-2" />
              Google
            </a>
          </b-col>
          <b-col class="mb-3">
            <a href="#" class="btn btn-icon btn-secondary btn-facebook btn-lg w-100">
              <Icon :icon="FacebookIcon" class="fs-xl me-2" />
              Facebook
            </a>
          </b-col>
        </b-row>
      </div>
      <div class="w-100 align-self-end">
        <p class="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
          &copy; All rights reserved. Made by
          <a class="nav-link d-inline-block p-0" href="https://coderthemes.com/" target="_blank" rel="noopener">Coderthemes</a>
        </p>
      </div>
    </b-container>

    <!-- Background -->
    <div class="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
      :style="{ backgroundImage: `url(${bg})` }"></div>
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import bg from '@/assets/img/account/signin-bg.jpg'
import PasswordInput from '@/components/PasswordInput.vue'
import { useFakeAuthStore } from '@/stores/fakeAuth'
import router from '@/router'
import { useRoute } from 'vue-router'

import { Icon } from '@iconify/vue'
import GoogleIcon from '@iconify/icons-bx/bxl-google'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'

const showPassword = ref<boolean>(false)

const setShowPassword = () => {
  return (showPassword.value = !showPassword.value)
}

import { ref } from 'vue'

const useFakeAuth = useFakeAuthStore()

const userData = ref({
  fullName: '',
  email: '',
  password: ''
})

const error = ref(false)

const route = useRoute()

const signUp = () => {
  if (useFakeAuth.signUp(userData.value.fullName, userData.value.email, userData.value.password)) {
    if (route.query.redirectFrom) {
      return router.push(`${route.query.redirectFrom}`)
    }
    return router.push('/')
  }
  error.value = true
}
</script>
