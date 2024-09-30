<template>
  <section
    class="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <b-container class="pt-5 pb-lg-4 pb-xl-5">
      <!-- Breadcrumb -->
      <b-nav class="pt-lg-4" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Contacts v.3</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>

      <b-row class="pt-md-2 pt-lg-5 pb-2 pb-md-4">
        <b-col xxl="4" xl="5" lg="6" class="pt-3 mt-3">
          <h1 class="h3 mb-2">Want to work with us?</h1>
          <h2 class="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3">Let's talk!</h2>
          <div class="nav d-block lead pt-lg-5">
            <a href="#" class="nav-link fw-normal text-decoration-underline p-0 mb-4"
              >email@example.com</a
            >
            <div class="text-nav">+1 406 555-0120</div>
          </div>
        </b-col>
        <b-col lg="6" class="offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
          <b-form>
            <b-row class="g-4">
              <b-col sm="6">
                <b-form-group label="Full name" label-for="fn" label-class="fs-base">
                  <b-form-input id="fn" type="text" class="form-control-lg" required></b-form-input>
                  <b-form-invalid-feedback>Please enter your full name!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col sm="6">
                <b-form-group label="Email" label-for="email" label-class="fs-base">
                  <b-form-input
                    id="email"
                    type="email"
                    class="form-control-lg"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback
                    >Please provide a valid email address!</b-form-invalid-feedback
                  >
                </b-form-group>
              </b-col>

              <b-col cols="12" class="pb-2">
                <b-form-group label="Message" label-for="message" label-class="fs-base">
                  <b-form-textarea
                    id="message"
                    rows="3"
                    class="form-control-lg"
                    required
                  ></b-form-textarea>
                  <b-form-invalid-feedback>Please provide a valid message!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-button size="lg" variant="primary" type="submit" class="w-100 w-sm-auto"
                  >Contact Us</b-button
                >
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg from '@/assets/img/contacts/bg.svg'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
