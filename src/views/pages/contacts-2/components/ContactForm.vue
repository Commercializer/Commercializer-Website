<template>
  <section class="position-relative bg-secondary pt-5">
    <b-container class="position-relative zindex-2 pt-5">
      <!-- Breadcrumb -->
      <b-nav class="pt-lg-4 pb-3 mb-2 mb-sm-3" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Contacts v.2</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>

      <b-row>
        <!-- Contact links -->
        <b-col xl="4" lg="5" class="pb-4 pb-sm-5 mb-2 mb-sm-0">
          <div class="pe-lg-4 pe-xl-0">
            <h1 class="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>
            <div class="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
              <div class="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                <Icon :icon="EnvelopeIcon" />
              </div>
              <div class="ps-3 ps-sm-4">
                <h2 class="h4 pb-1 mb-2">Email us</h2>
                <p class="mb-2">
                  Please feel free to drop us a line. We will respond as soon as possible.
                </p>
                <div class="btn btn-link btn-lg px-0">
                  Leave a message
                  <Icon :icon="RightArrowAltIcon" class="lead ms-2" />
                </div>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <div class="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                <Icon :icon="GroupIcon" />
              </div>
              <div class="ps-3 ps-sm-4">
                <h2 class="h4 pb-1 mb-2">Careers</h2>
                <p class="mb-2">
                  Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
                </p>
                <div class="btn btn-link btn-lg px-0">
                  Send an application
                  <Icon :icon="RightArrowAltIcon" class="lead ms-2" />
                </div>
              </div>
            </div>
          </div>
        </b-col>

        <!-- Contact form -->
        <b-col xl="6" lg="7" class="offset-xl-2">
          <div class="card border-light shadow-lg py-3 p-sm-4 p-md-5">
            <div
              class="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"
            ></div>
            <div class="card-body position-relative zindex-2">
              <h2 class="card-title pb-3 mb-4">Get Online Consultation</h2>
              <b-form class="row g-4">
                <b-col cols="12">
                  <b-form-group label="Full name" label-for="fn" label-class="fs-base">
                    <b-form-input
                      id="fn"
                      type="text"
                      class="form-control-lg"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback>Please enter your full name!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group label="Email address" label-for="email" label-class="fs-base">
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

                <b-col cols="12">
                  <b-form-group label="Specialist" label-for="specialist" label-class="fs-base">
                    <b-form-select
                      id="specialist"
                      v-model="selectedValue"
                      :options="options"
                      class="form-select-lg"
                    ></b-form-select>
                    <b-form-invalid-feedback
                      >Choose a specialist from the list!</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>

                <b-col sm="6">
                  <b-form-group label="Date" label-for="date" label-class="fs-base">
                    <b-form-input
                      id="date"
                      type="text"
                      v-mask="'##-##'"
                      placeholder="mm/dd"
                      class="form-control-lg"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback>Enter a date!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col sm="6">
                  <b-form-group label="Time" label-for="time" label-class="fs-base">
                    <b-form-input
                      id="time"
                      type="text"
                      v-mask="'##:##'"
                      placeholder="hh:mm"
                      class="form-control-lg"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback>Enter a time!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col cols="12" class="pt-2 pt-sm-3">
                  <b-button variant="primary" size="lg" type="submit" class="w-100 w-sm-auto"
                    >Make an appointment
                  </b-button>
                </b-col>
              </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="position-absolute bottom-0 start-0 w-100 bg-light" style="height: 8rem"></div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import GroupIcon from '@iconify/icons-bx/bx-group'
import { ref } from 'vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'

const selectedValue = ref(null)
const options = [
  { text: 'Choose a specialist', value: null },
  { text: 'Therapist', value: 'Therapist' },
  { text: 'Dentist', value: 'Dentist' },
  { text: 'Cardiologist', value: 'Cardiologist' },
  { text: 'Pediatrician', value: 'Pediatrician' },
  { text: 'Gynecologist', value: 'Gynecologist' },
  { text: 'Surgeon', value: 'Therapist' }
]
</script>
