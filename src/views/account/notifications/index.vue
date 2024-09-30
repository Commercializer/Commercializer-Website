<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <b-form class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
        <div class="d-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
          <h1 class="h2 mb-0">Notifications</h1>
          <button class="btn btn-outline-danger px-3 px-sm-4">
            <Icon :icon="BellOffIcon" class="fs-xl me-sm-1" />
            <span class="d-none d-sm-inline">Pause all notifications</span>
          </button>
        </div>
        <b-row class="align-items-end pb-3 mb-2 mb-sm-4">
          <b-col lg="6" sm="7">
            <b-form-group
              label="Preferred email"
              label-for="notifications-email"
              label-class="text-muted fs-base"
            >
              <b-form-select
                id="notifications-email"
                class="form-select-lg"
                v-model="userEmail"
                :options="emailOptions"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col lg="6" sm="7">
            <button type="button" class="btn btn-link btn-lg px-0">
              <Icon :icon="PlusIcon" class="fs-xl me-2" />
              Add new email
            </button>
          </b-col>
        </b-row>
        <div class="form-check form-switch form-switch-success d-flex mb-4">
          <input type="checkbox" id="activity" class="form-check-input flex-shrink-0" checked />
          <label for="activity" class="form-check-label ps-3">
            <span class="h6 d-block mb-2">Activity updates</span>
            <span class="fs-sm text-muted"
              >Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque
              ullamcorper.</span
            >
          </label>
        </div>
        <div class="form-check form-switch form-switch-success d-flex mb-4">
          <input type="checkbox" id="letters" class="form-check-input flex-shrink-0" />
          <label for="letters" class="form-check-label ps-3">
            <span class="h6 d-block mb-2">Info letters from our partners</span>
            <span class="fs-sm text-muted"
              >Tortor massa porttitor enim tristique neque fermentum sed.</span
            >
          </label>
        </div>
        <div class="form-check form-switch form-switch-success d-flex mb-4">
          <input type="checkbox" id="account" class="form-check-input flex-shrink-0" checked />
          <label for="account" class="form-check-label ps-3">
            <span class="h6 d-block mb-2">Account activity</span>
            <span class="fs-sm text-muted"
              >Maecenas aenean porta sit integer a duis commodo massa pulvinar.</span
            >
          </label>
        </div>
        <div class="form-check form-switch form-switch-success d-flex mb-4">
          <input type="checkbox" id="promoions" class="form-check-input flex-shrink-0" />
          <label for="promoions" class="form-check-label ps-3">
            <span class="h6 d-block mb-2">Promotions, recommendations &amp; helpful resources</span>
            <span class="fs-sm text-muted"
              >Aliquam sagittis fames pharetra placerat tempus. Volutpat orci neque elit malesuada
              mauris neque, tempus.</span
            >
          </label>
        </div>
        <div class="form-check form-switch form-switch-success d-flex mb-4">
          <input type="checkbox" id="summary" class="form-check-input flex-shrink-0" />
          <label for="summary" class="form-check-label ps-3">
            <span class="h6 d-block mb-2">Daily summary emails</span>
            <span class="fs-sm text-muted"
              >Condimentum nunc, massa, nibh maecenas bibendum morbi neque.</span
            >
          </label>
        </div>
        <div class="d-flex pt-3 mb-3">
          <b-button variant="secondary" type="reset" class="me-3">Restore</b-button>
          <b-button variant="primary" type="submit">Save changes</b-button>
        </div>
      </b-form>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { Icon } from '@iconify/vue'
import BellOffIcon from '@iconify/icons-bx/bell-off'
import PlusIcon from '@iconify/icons-bx/plus'
import { ref } from 'vue'

const userEmail = ref('jonny@email.com')

const emailOptions = [
  { text: 'jonny@email.com', value: 'jonny@email.com' },
  { text: 'john_doe@email.com', value: 'john_doe@email.com' }
]
</script>
