<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 class="h2 pt-xl-1 pb-3">Account Details</h1>

        <!-- Basic info -->
        <h2 class="h5 text-primary mb-4">Basic info</h2>
        <b-form class="border-bottom pb-3 pb-lg-4">
          <b-row class="pb-2">
            <b-col sm="6" class="mb-4">
              <b-form-group label="First name" label-for="fn" label-class="text-muted fs-base">
                <b-form-input
                  id="fn"
                  type="text"
                  class="form-control-lg"
                  v-model="userBasicData.firstName"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Please enter your first name!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Last name" label-for="ln" label-class="text-muted fs-base">
                <b-form-input
                  id="ln"
                  type="text"
                  class="form-control-lg"
                  v-model="userBasicData.lastName"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Please enter your last name!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Email address" label-for="email" label-class="text-muted fs-base">
                <b-form-input
                  id="email"
                  type="email"
                  class="form-control-lg"
                  v-model="userBasicData.email"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Please enter your email!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Phone (optional)" label-for="phone" label-class="text-muted fs-base">
                <b-form-input
                  id="phone"
                  type="text"
                  class="form-control-lg"
                  v-mask="'+1 ###-###-##'"
                  placeholder="+1 ___ ___ __"
                  v-model="userBasicData.phone"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <b-form-group label="Bio (optional)" label-for="bio" label-class="text-muted fs-base">
                <b-form-textarea
                  id="bio"
                  type="text"
                  class="form-control-lg"
                  rows="4"
                  placeholder="Add a short bio..."
                  v-model="userBasicData.bio"
                  required
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="d-flex mb-3">
            <b-button variant="secondary" type="reset" class="me-3">Cancel</b-button>
            <b-button variant="primary" type="submit">Save changes</b-button>
          </div>
        </b-form>

        <!-- Address -->
        <h2 class="h5 text-primary pt-1 pt-lg-3 my-4">Address</h2>
        <b-form class="border-bottom pb-2 pb-lg-4">
          <b-row class="pb-2">
            <b-col sm="6" class="mb-4">
              <b-form-group label="Country" label-for="country" label-class="text-muted fs-base">
                <b-form-select
                  id="country"
                  class="form-select-lg"
                  v-model="userAddressData.country"
                  :options="countryOptions"
                ></b-form-select>
                <b-form-invalid-feedback>Please choose your country!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="State" label-for="state" label-class="text-muted fs-base">
                <b-form-select
                  id="state"
                  class="form-select-lg"
                  v-model="userAddressData.state"
                  :options="stateOptions"
                ></b-form-select>
                <b-form-invalid-feedback>Please choose your state!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="City" label-for="city" label-class="text-muted fs-base">
                <b-form-select
                  id="city"
                  class="form-select-lg"
                  v-model="userAddressData.city"
                  :options="cityOptions"
                ></b-form-select>
                <b-form-invalid-feedback>Please choose your city!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="ZIP code" label-for="zip" label-class="text-muted fs-base">
                <b-form-input
                  id="zip"
                  type="text"
                  class="form-control-lg"
                  v-model="userAddressData.zip"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Please enter your ZIP code!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <b-form-group label="Address line 1" label-for="address1" label-class="text-muted fs-base">
                <b-form-input
                  id="address1"
                  type="text"
                  class="form-control-lg"
                  v-model="userAddressData.zip"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <b-form-group
                label="Address line 2 (optional)"
                label-for="address2"
                label-class="text-muted fs-base"
              >
                <b-form-input
                  id="address2"
                  type="text"
                  class="form-control-lg"
                  v-model="userAddressData.zip"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="d-flex mb-3">
            <b-button variant="secondary" type="reset" class="me-3">Cancel</b-button>
            <b-button variant="primary" type="submit">Save changes</b-button>
          </div>
        </b-form>

        <!-- Delete account -->
        <h2 class="h5 text-primary pt-1 pt-lg-3 mt-4">Delete account</h2>
        <p>
          When you delete your account, your public profile will be deactivated immediately. If you
          change your mind before the 14 days are up, sign in with your email and password, and
          we’ll send you a link to reactivate your account.
        </p>
        <div class="mb-4">
          <b-form-checkbox id="delete-account">Yes, I want to delete my account</b-form-checkbox>
        </div>
        <b-button variant="danger">Delete</b-button>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'

const userBasicData = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'jonny@email.com',
  phone: '',
  bio: ''
})

const userAddressData = ref({
  country: 'USA',
  state: 'Florida',
  city: 'Miami',
  zip: ''
})

const countryOptions = [
  { text: 'Choose country', value: null },
  { text: 'Australia', value: 'Australia' },
  { text: 'Belgium', value: 'Belgium' },
  { text: 'Canada', value: 'Canada' },
  { text: 'Denmark', value: 'Denmark' },
  { text: 'USA', value: 'USA' }
]

const stateOptions = [
  { text: 'Choose state', value: null },
  { text: 'Arizona', value: 'Arizona' },
  { text: 'Iowa', value: 'Iowa' },
  { text: 'Florida', value: 'Florida' },
  { text: 'Michigan', value: 'Michigan' },
  { text: 'Texas', value: 'USA' }
]

const cityOptions = [
  { text: 'Choose city', value: null },
  { text: 'Boston', value: 'Boston' },
  { text: 'Chicago', value: 'Chicago' },
  { text: 'Los Angeles', value: 'Los Angeles' },
  { text: 'Miami', value: 'Miami' },
  { text: 'New York', value: 'New York' },
  { text: 'Philadelphia', value: 'Philadelphia' }
]
</script>
