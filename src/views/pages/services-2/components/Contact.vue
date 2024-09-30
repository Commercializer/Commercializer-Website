<template>
  <section class="position-relative pt-2 pt-lg-0 pb-5">
    <b-container class="position-relative zindex-5 pb-2 pb-md-4 pb-lg-5">
      <b-row class="justify-content-center text-center pt-xl-2 pb-4 mb-1 mb-lg-3">
        <b-col xl="6" lg="7" md="8" sm="11">
          <h2 class="mb-4">Let's Change the Game Together</h2>
          <p class="text-muted mb-0">
            Like what you have seen? Let’s get started. Just fill in a few details and we will get
            in touch as soon as possible.
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col lg="8" md="10">
          <b-form class="row">
            <b-col sm="6" class="mb-4">
              <b-form-group label-for="fn" label="First name">
                <b-form-input type="text" id="fn" required />
                <b-form-invalid-feedback>Please, enter your first name!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col sm="6" class="mb-4">
              <b-form-group label-for="ln" label="Last name">
                <b-form-input type="text" id="ln" required />
                <b-form-invalid-feedback>Please, enter your last name!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col sm="6" class="mb-4">
              <b-form-group label-for="email" label="Email address">
                <b-form-input type="email" id="email" required />
                <b-form-invalid-feedback
                  >Please, provide a valid email address!</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>
            <b-col sm="6" class="mb-4">
              <b-form-group label-for="phone" label="Phone">
                <b-form-input
                  type="text"
                  id="phone"
                  v-mask="'+1 ### ### ##'"
                  placeholder="+1 ___ ___ __"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col sm="6" class="mb-4">
              <b-form-group label="City" label-for="city">
                <b-form-select
                  id="city"
                  v-model="selectedCity"
                  :options="cityOptions"
                ></b-form-select>
                <b-form-invalid-feedback>Please, choose your city!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Your company" label-for="company">
                <b-form-input type="text" id="company"></b-form-input>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Your position" label-for="position">
                <b-form-select
                  id="position"
                  v-model="selectedPosition"
                  :options="positionOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="People in company" label-for="people">
                <b-form-select
                  id="people"
                  v-model="selectedEmployee"
                  :options="employeeOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="mb-4">
              <b-form-group label-for="message" label="Message">
                <b-form-textarea id="message" class="" rows="4" required></b-form-textarea>
                <b-form-invalid-feedback>Please, enter your message!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="text-center pt-2 pt-md-3 pt-lg-4">
              <b-button type="submit" class="shadow-primary" size="lg" variant="primary"
                >Send a request</b-button
              >
            </b-col>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

    <!-- BG shape -->
    <div class="position-absolute end-0 bottom-0 text-primary">
      <svg
        width="469"
        height="343"
        viewBox="0 0 469 343"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.08"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z"
          fill="currentColor"
        />
        <path
          opacity="0.08"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M298.401 633.404C434.98 704.59 598.31 656.971 664.332 530.451C730.355 403.932 675.946 242.827 539.367 171.642C402.787 100.457 239.458 148.076 173.435 274.595C107.413 401.114 161.822 562.219 298.401 633.404ZM288.455 652.464C434.545 728.606 611.369 678.429 683.403 540.391C755.437 402.353 695.402 228.725 549.312 152.583C403.222 76.4404 226.398 126.617 154.365 264.655C82.331 402.693 142.365 576.321 288.455 652.464Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedCity = ref(null)
const cityOptions = [
  { text: 'Choose city', value: null },
  { text: 'Boston', value: 'Boston' },
  { text: 'Chicago', value: 'Chicago' },
  { text: 'Los Angeles', value: 'Los Angeles' },
  { text: 'Miami', value: 'Miami' },
  { text: 'New York', value: 'New York' },
  { text: 'Philadelphia', value: 'Philadelphia' }
]

const selectedPosition = ref('Owner')
const positionOptions = [
  { text: 'Owner', value: 'Owner' },
  { text: 'CEO', value: 'CEO' },
  { text: 'Manager', value: 'Manager' },
  { text: 'Accountant', value: 'Accountant' }
]

const selectedEmployee = ref('0-10')
const employeeOptions = [
  { text: '0-10', value: '0-10' },
  { text: '10-25', value: '10-25' },
  { text: '25-50', value: '25-50' },
  { text: '50-100', value: '50-100' }
]
</script>
