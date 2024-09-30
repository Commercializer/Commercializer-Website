<template>
  <b-container class="py-5 my-md-3 my-lg-5">
    <b-row class="align-items-center">
      <b-col md="4" class="text-center text-md-start">
        <h2 class="h1 mb-4">Plan Comparison</h2>
        <p class="fs-lg mb-md-0">Choose the option that makes the most sense for your business.</p>
      </b-col>
      <b-col md="8">
        <b-row class="row-cols-1 row-cols-md-3">
          <b-col class="text-md-center pb-2 mb-4">
            <h3 class="h5 mb-2 mb-md-3">Team</h3>
            <ul class="d-md-none list-unstyled">
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Users:&nbsp;</span>
                1 included
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Member support via email:&nbsp;</span>
                Standard
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Live chat support:&nbsp;</span>
                <Icon :icon="XIcon" class="lead text-muted" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                <Icon :icon="XIcon" class="lead text-muted" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Projects:&nbsp;</span>
                4 projects
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Zoom integration:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                <Icon :icon="XIcon" class="lead text-muted" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                <Icon :icon="XIcon" class="lead text-muted" />
              </li>
            </ul>
            <b-button variant="outline-primary" class="w-100 w-md-auto">Free trial</b-button>
          </b-col>
          <b-col class="text-md-center pb-2 mb-4">
            <h3 class="h5 mb-2 mb-md-3">Company</h3>
            <ul class="d-md-none list-unstyled">
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Users:&nbsp;</span>
                5 included
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Member support via email:&nbsp;</span>
                3 hours
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Live chat support:&nbsp;</span>
                10+ members
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Projects:&nbsp;</span>
                Unlimited
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Zoom integration:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                <Icon :icon="XIcon" class="lead text-muted" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
            </ul>
            <b-button variant="outline-primary" class="w-100 w-md-auto">Get started</b-button>
          </b-col>
          <b-col class="text-md-center mb-3">
            <h3 class="h5 mb-2 mb-md-3">Enterprise</h3>
            <ul class="d-md-none list-unstyled">
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Users:&nbsp;</span>
                10 +
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Member support via email:&nbsp;</span>
                With highest priority
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Live chat support:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Projects:&nbsp;</span>
                Unlimited
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Zoom integration:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2">
                <span class="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
              <li class="d-flex align-items-center p-2 bg-secondary">
                <span class="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                <Icon :icon="CheckIcon" class="lead text-primary" />
              </li>
            </ul>
            <b-button variant="outline-primary" class="w-100 w-md-auto">Get started</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="d-none d-md-block pt-5 mt-2 pb-4">
      <b-row class="g-0">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Users</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">1 included</b-col>
            <b-col class="position-relative bg-primary px-2 py-4">
              <span class="text-light opacity-80">5 included</span>
              <span
                class="position-absolute start-0 bottom-100 w-100 bg-primary rounded-3 rounded-bottom-0"
                style="height: 2rem"
              ></span>
            </b-col>
            <b-col class="px-2 py-4">10+</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0 bg-secondary rounded-3">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Member support via email</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">Standard</b-col>
            <b-col class="bg-primary px-2 py-4">
              <span class="text-light opacity-80">3 hours</span>
            </b-col>
            <b-col class="px-2 py-4">With highest priority</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Live chat support</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">
              <Icon :icon="XIcon" class="lead text-muted" />
            </b-col>
            <b-col class="bg-primary px-2 py-4">
              <span class="text-light opacity-80">10+ members</span>
            </b-col>
            <b-col class="px-2 py-4">Unlimited</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0 bg-secondary rounded-3">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4"
          >IT security and legal review</b-col
        >
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">
              <Icon :icon="XIcon" class="lead text-muted" />
            </b-col>
            <b-col class="bg-primary px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-light" />
            </b-col>
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Projects</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">4 projects</b-col>
            <b-col class="bg-primary px-2 py-4">
              <span class="text-light opacity-80">Unlimited</span>
            </b-col>
            <b-col class="px-2 py-4">Unlimited</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0 bg-secondary rounded-3">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Comments and sharing</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
            <b-col class="bg-primary px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-light" />
            </b-col>
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Zoom integration</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
            <b-col class="bg-primary px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-light" />
            </b-col>
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0 bg-secondary rounded-3">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Ongoing strategy calls</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">
              <Icon :icon="XIcon" class="lead text-muted" />
            </b-col>
            <b-col class="bg-primary px-2 py-4">
              <Icon :icon="XIcon" class="lead text-light opacity-50" />
            </b-col>
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Analytics dashboard</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
            <b-col class="bg-primary px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-light" />
            </b-col>
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="g-0 bg-secondary rounded-3">
        <b-col md="4" class="text-dark fw-semibold ps-4 pe-2 py-4">Get custom integrations</b-col>
        <b-col md="8" class="text-center">
          <b-row class="row-cols-3 g-0">
            <b-col class="px-2 py-4">
              <Icon :icon="XIcon" class="lead text-muted" />
            </b-col>
            <b-col class="position-relative bg-primary px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-light" />
              <span
                class="position-absolute start-0 top-100 w-100 bg-primary rounded-3 rounded-top-0"
                style="height: 2rem"
              ></span>
            </b-col>
            <b-col class="px-2 py-4">
              <Icon :icon="CheckIcon" class="lead text-primary" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CheckIcon from '@iconify/icons-bx/bx-check'
import XIcon from '@iconify/icons-bx/bx-x'
</script>
