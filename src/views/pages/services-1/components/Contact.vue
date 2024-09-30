<template>
  <b-container>
    <div class="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-lg-0">
      <b-row class="align-items-center pt-1 pb-2 py-lg-4">
        <b-col xl="4" lg="5" md="6" class="offset-lg-1 mb-4 pb-3 mb-md-0 pb-md-0">
          <h2 class="h1 mb-lg-4">Get in Touch</h2>
          <p class="pb-2 pb-md-4 pb-lg-5">
            Have a project in mind? To request a quote contact us directly or fill out the form and
            let us know how we can help.
          </p>
          <h3 class="mb-lg-4">Contact Info</h3>
          <ul class="list-unstyled pb-3 pb-md-4 pb-lg-5 mb-2">
            <li class="mb-2">
              <a href="tel:4065550120" class="nav-link d-flex align-items-center p-0">
                <Icon :icon="PhoneCallIcon" class="fs-xl text-primary me-2" />
                (406)&nbsp;555&#8209;0120
              </a>
            </li>
            <li class="mb-2">
              <a href="mailto:example@email.com" class="nav-link d-flex align-items-center p-0">
                <Icon :icon="EnvelopeIcon" class="fs-xl text-primary me-2" />
                example@email.com
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="nav-link d-flex align-items-center p-0">
                <Icon :icon="MapIcon" class="fs-xl text-primary me-2" />
                2464 Royal Ln. Mesa,New Jersey 45463
              </a>
            </li>
          </ul>
          <div class="d-flex">
            <a
              href="#"
              class="btn btn-icon btn-outline-secondary btn-facebook me-3"
              aria-label="Facebook"
            >
              <Icon :icon="FacebookIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-outline-secondary btn-twitter me-3"
              aria-label="Twitter"
            >
              <Icon :icon="TwitterIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-outline-secondary btn-linkedin me-3"
              aria-label="LinkedIn"
            >
              <Icon :icon="LinkedinIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-outline-secondary btn-instagram"
              aria-label="Instagram"
            >
              <Icon :icon="InstagramIcon" />
            </a>
          </div>
        </b-col>
        <b-col lg="5" md="6" class="offset-xl-1">
          <div class="card border-0 shadow-sm p-sm-2">
            <b-form class="card-body">
              <div class="mb-4">
                <b-form-group label="Service" label-for="service" label-class="fs-base">
                  <b-form-select
                    v-model="selectedOption"
                    :options="options"
                    id="service"
                    class="form-select-lg"
                    required
                  ></b-form-select>
                  <b-form-invalid-feedback>Please choose the service!</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <div class="mb-4">
                <b-form-group label="Full name" label-for="name" label-class="fs-base">
                  <b-form-input type="text" id="name" class="form-control-lg" required />
                  <b-form-invalid-feedback>Please enter your name!</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <div class="mb-4">
                <b-form-group label="Email address" label-for="email" label-class="fs-base">
                  <b-form-input type="email" id="email" class="form-control-lg" required />
                  <b-form-invalid-feedback
                    >Please provide a valid email address!</b-form-invalid-feedback
                  >
                </b-form-group>
              </div>
              <div class="mb-4 pb-2">
                <b-form-group label="Message" label-for="message" label-class="fs-base">
                  <b-form-textarea
                    id="message"
                    class="form-control-lg"
                    rows="3"
                    placeholder="Tell us about your project"
                    required
                  ></b-form-textarea>
                  <b-form-invalid-feedback>Please enter you message!</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <b-button size="lg" type="submit" class="shadow-primary" variant="primary"
                >Send request</b-button
              >
            </b-form>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import MapIcon from '@iconify/icons-bx/bx-map'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import PhoneCallIcon from '@iconify/icons-bx/phone-call'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import { ref } from 'vue'

const selectedOption = ref(null)

const options = [
  { text: 'Choose the service you are interested in', value: null },
  { text: 'Custom Software Development', value: 'Custom Software Development' },
  { text: 'Software Integration', value: 'Software Integration' },
  { text: 'Mobile App Development', value: 'Mobile App Development' },
  { text: 'Business Analytics', value: 'Business Analytics' },
  { text: 'Software Testing', value: 'Software Testing' },
  { text: 'Project Management', value: 'Project Management' }
]
</script>
