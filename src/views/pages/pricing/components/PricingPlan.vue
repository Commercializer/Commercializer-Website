<template>
  <b-container class="position-relative zindex-2" style="margin-top: -300px">
    <div class="price-switch-wrapper">
      <div class="pb-2 pb-lg-3" data-bs-theme="dark">
        <div class="form-check form-switch price-switch justify-content-center mt-2 mb-4" data-bs-toggle="price">
          <input type="checkbox" class="form-check-input" id="pricing" v-model="isTabActive" />
          <label class="form-check-label" for="pricing">Monthly</label>
          <label class="form-check-label d-flex align-items-start" for="pricing">Annually <span
              class="text-danger fs-xs fw-semibold mt-n2 ms-2">-20%</span></label>
        </div>
      </div>
      <div class="table-responsive-lg">
        <b-tabs no-nav-style>
          <b-tab>
            <div class="d-flex align-items-center pb-4">

              <!-- Pricing plan -->
              <div class="border rounded-3 rounded-end-0 shadow-sm me-n1" style="width: 32%; min-width: 16rem;">
                <div class="card bg-light h-100 border-0 border-end rounded-end-0 py-3 py-sm-4 py-lg-5">
                  <div class="card-body text-center">
                    <h3 class="mb-2">Team</h3>
                    <div class="fs-lg pb-4 mb-3">Best for small teams</div>
                    <div class="display-5 text-dark mb-1" data-monthly-price v-if="isTabActive ? '' : 'd-none'">$15</div>
                    <div class="display-5 text-dark mb-1" data-annual-price v-else>$12</div>
                    <div class="text-muted mb-5">per month</div>
                  </div>
                  <div class="card-footer border-0 text-center pt-0 pb-4">
                    <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
                  </div>
                </div>
              </div>

              <!-- Featurd pricing plan -->
              <div class="bg-primary position-relative rounded-3 shadow-primary shadow-dark-mode-none zindex-2 p-4"
                style="width: 36%; min-width: 18rem;">
                <div class="card bg-transparent border-light py-3 py-sm-4 py-lg-5">
                  <div class="card-body text-light text-center">
                    <h3 class="text-light mb-2">Company</h3>
                    <div class="fs-lg opacity-70 pb-4 mb-3">Best for growing teams</div>
                    <div class="display-5 mb-1" data-monthly-price v-if="isTabActive ? '' : 'd-none'">$25</div>
                    <div class="display-5 mb-1" data-annual-price v-else>$20</div>
                    <div class="opacity-50 mb-5">per month</div>
                  </div>
                  <div class="card-footer border-0 text-center pt-0 pb-4">
                    <a href="#" class="btn btn-light btn-lg shadow-secondary">Get started now</a>
                  </div>
                </div>
              </div>

              <!-- Pricing plan -->
              <div class="border rounded-3 rounded-start-0 shadow-sm" style="width: 32%; min-width: 16rem;">
                <div class="card bg-light h-100 border-0 rounded-start-0 py-3 py-sm-4 py-lg-5">
                  <div class="card-body text-center">
                    <h3 class="mb-2">Enterprise</h3>
                    <div class="fs-lg pb-4 mb-3">Best for large teams</div>
                    <div class="display-5 text-dark mb-1" data-monthly-price v-if="isTabActive ? '' : 'd-none'">$50</div>
                    <div class="display-5 text-dark mb-1" data-annual-price v-else>$40</div>
                    <div class="text-muted mb-5">per month</div>
                  </div>
                  <div class="card-footer border-0 text-center pt-0 pb-4">
                    <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isTabActive = ref<boolean>(false)
</script>
