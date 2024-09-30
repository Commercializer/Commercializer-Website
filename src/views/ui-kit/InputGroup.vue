<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Input group"
      description="Extend form controls by adding text, buttons, etc. on either side."
    />

    <!-- Addon position -->
    <section id="ig-addon-position" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Addon position</h2>
      <div class="pt-1" style="max-width: 40rem">
        <b-input-group class="mb-4">
          <b-input-group-text>
            <Icon :icon="LockAltIcon" class="fs-base" />
          </b-input-group-text>
          <b-form-input type="password" placeholder="Password" />
        </b-input-group>
        <b-input-group class="mb-4" append="@example.com">
          <b-form-input placeholder="Recipient's e-mail"></b-form-input>
        </b-input-group>
        <b-input-group>
          <b-input-group-text>
            <Icon :icon="DollarIcon" class="fs-base" />
          </b-input-group-text>
          <b-form-input class="" type="text" placeholder="Amount" />
          <span class="input-group-text">.00</span>
        </b-input-group>
      </div>
    </section>

    <!-- Multiple addons -->
    <section id="ig-multiple-addons" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Multiple addons</h2>
      <div class="pt-1" style="max-width: 40rem">
        <b-input-group class="mb-4">
          <b-input-group-text>$</b-input-group-text>
          <b-input-group-text class="border-end-0">0.00</b-input-group-text>
          <b-form-input type="text" placeholder="Amount" />
        </b-input-group>
        <b-input-group class="mb-4">
          <b-form-input type="text" placeholder="Amount" />
          <b-input-group-text class="border-start-0">0.00</b-input-group-text>
          <b-input-group-text class="border-start">$</b-input-group-text>
        </b-input-group>
        <b-input-group append="$">
          <b-input-group-text>
            <Icon :icon="UserIcon" class="fs-base" />
          </b-input-group-text>
          <b-input-group-text class="border-end-0">
            <Icon :icon="CreditCardFrontIcon" class="fs-base" />
          </b-input-group-text>
          <b-form-input type="text" placeholder="Amount" />
          <b-input-group-text class="border-start-0">0.00</b-input-group-text>
        </b-input-group>
      </div>
    </section>

    <!-- Different types -->
    <section id="ig-addon-types" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Different types</h2>
      <div class="pt-1" style="max-width: 40rem">
        <b-input-group class="mb-4">
          <b-input-group-text>
            <Icon :icon="MessageDotIcon" class="fs-lg" />
          </b-input-group-text>
          <b-form-textarea placeholder="Type your message here..." rows="6"></b-form-textarea>
        </b-input-group>
        <b-input-group class="mb-4">
          <b-input-group-text class="text-heading">Options</b-input-group-text>
          <b-form-select v-model="selectOptions" :options="options"></b-form-select>
        </b-input-group>
        <b-input-group class="mb-4">
          <b-input-group-text>
            <input type="checkbox" />
          </b-input-group-text>
          <b-form-input type="text" placeholder="Checkbox here" />
        </b-input-group>
        <b-input-group>
          <b-input-group-text>
            <input class="" type="radio" name="radio" />
          </b-input-group-text>
          <b-form-input type="text" placeholder="Radio button here" />
        </b-input-group>
      </div>
    </section>

    <!-- Multiple inputs -->
    <section id="ig-multiple-inputs" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Multiple inputs</h2>
      <div class="pt-1" style="max-width: 40rem">
        <b-input-group class="mb-4">
          <b-input-group-text class="text-dark">First &amp; last name</b-input-group-text>
          <b-form-input type="text" placeholder="First name" />
          <b-form-input type="text" placeholder="Last name" />
        </b-input-group>
        <b-input-group>
          <b-form-input type="time" value="07:45" />
          <b-form-input type="time" value="09:00" />
          <b-input-group-text>
            <Icon :icon="TimeIcon" class="fs-base" />
          </b-input-group-text>
        </b-input-group>
      </div>
    </section>

    <!-- Button addons -->
    <section id="ig-addon-button" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Button addons</h2>
      <div class="pt-1" style="max-width: 40rem">
        <b-input-group class="mb-4">
          <b-button variant="primary" type="button">Button</b-button>
          <b-form-input type="text" placeholder="Button on the left" />
        </b-input-group>
        <b-input-group class="mb-4">
          <b-form-input type="text" placeholder="Button on the right" />
          <b-button variant="primary" type="button">Button</b-button>
        </b-input-group>
        <b-input-group class="mb-4">
          <b-dropdown text="Dropdown" variant="primary">
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
          </b-dropdown>
          <b-form-input type="text" placeholder="Dropdown on the left" />
        </b-input-group>
        <b-input-group>
          <b-form-input type="text" placeholder="Dropdown on the right" />
          <b-dropdown text="Dropdown" variant="primary" class="dropdown-menu-end">
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
          </b-dropdown>
        </b-input-group>
      </div>
    </section>

    <!-- Sizing -->
    <section id="ig-sizing" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizing</h2>
      <div class="pt-1">
        <div class="d-md-flex">
          <div class="w-100 me-md-4 mb-md-0 mb-4">
            <b-input-group size="lg" class="mb-4">
              <b-input-group-text>
                <Icon :icon="LockAltIcon" class="fs-lg" />
              </b-input-group-text>
              <b-form-input type="password" placeholder="Password" />
            </b-input-group>
            <b-input-group size="md" class="mb-4">
              <b-input-group-text>
                <Icon :icon="LockAltIcon" class="fs-lg" />
              </b-input-group-text>
              <b-form-input type="password" placeholder="Password" />
            </b-input-group>
            <b-input-group size="sm" class="mb-4">
              <b-input-group-text>
                <Icon :icon="LockAltIcon" class="fs-lg" />
              </b-input-group-text>
              <b-form-input type="password" placeholder="Password" />
            </b-input-group>
          </div>
          <div class="w-100">
            <b-input-group size="lg" class="mb-4">
              <b-form-select v-model="selectOptions" :options="options" />
              <b-button variant="primary">Submit</b-button>
            </b-input-group>
            <b-input-group size="md" class="mb-4">
              <b-form-select v-model="selectOptions" :options="options" />
              <b-button variant="primary">Submit</b-button>
            </b-input-group>
            <b-input-group size="sm">
              <b-form-select v-model="selectOptions" :options="options" />
              <b-button variant="primary">Submit</b-button>
            </b-input-group>
          </div>
        </div>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import LockAltIcon from '@iconify/icons-bx/lock-alt'
import DollarIcon from '@iconify/icons-bx/dollar'
import UserIcon from '@iconify/icons-bx/user'
import CreditCardFrontIcon from '@iconify/icons-bx/credit-card-front'
import MessageDotIcon from '@iconify/icons-bx/bx-message-dots'
import TimeIcon from '@iconify/icons-bx/bx-time'

const anchorData = [
  {
    id: 'ig-addon-position',
    title: 'Addon position'
  },
  {
    id: 'ig-multiple-addons',
    title: 'Multiple addons'
  },
  {
    id: 'ig-addon-types',
    title: 'Different types'
  },
  {
    id: 'ig-multiple-inputs',
    title: 'Multiple inputs'
  },
  {
    id: 'ig-addon-button',
    title: 'Button addons'
  },
  {
    id: 'ig-sizing',
    title: 'Sizing'
  }
]

const selectOptions = ref(null)
const options = [
  { text: 'Choose option', value: null },
  { text: 'Option item 1', value: 'option1' },
  { text: 'Option item 2', value: 'option2' },
  { text: 'Option item 3', value: 'option3' }
]
</script>
