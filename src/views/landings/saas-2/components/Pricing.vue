<template>
  <b-container class="pt-5">
    <b-row class="justify-content-center text-center pt-2 pt-md-4 pt-lg-5 pb-4 pb-lg-5 mb-1">
      <b-col xl="6" lg="7" md="9" sm="11" class="pt-xl-3">
        <h2 class="h1 mb-lg-4">Transparent Pricing for You</h2>
        <p class="fs-lg text-muted mb-0">
          Varius sed maecenas massa dictum viverra in. Viverra vel in elit, vivamus dui interdum.
          Nulla congue lobortis amet amet eleifend.
        </p>
      </b-col>
    </b-row>
    <div class="table-responsive-lg">
      <div class="d-flex align-items-center pb-4">
        <!-- Pricing plan -->
        <div class="bg-primary rounded-3 shadow-primary p-4" style="width: 36%; min-width: 18rem">
          <div class="card bg-transparent border-light py-3 py-sm-4 py-lg-5">
            <div class="card-body text-light text-center">
              <h3 class="text-light mb-2">Team</h3>
              <div class="fs-lg opacity-70 pb-4 mb-3">Best for small teams</div>
              <div class="display-5 mb-1">$10</div>
              <div class="opacity-50 mb-5">per month</div>
            </div>
            <div class="card-footer border-0 text-center pt-0 pb-4">
              <a href="#" class="btn btn-light btn-lg shadow-secondary">Get started now</a>
            </div>
          </div>
        </div>
        <b-row
          class="flex-nowrap border rounded-3 rounded-start-0 shadow-sm g-0"
          style="width: 64%; min-width: 32rem"
        >
          <!-- Pricing plan -->
          <b-col>
            <div class="card bg-light h-100 border-0 border-end rounded-0 py-3 py-sm-4 py-lg-5">
              <div class="card-body text-center">
                <h3 class="mb-2">Company</h3>
                <div class="fs-lg pb-4 mb-3">Best for growing teams</div>
                <div class="display-5 text-dark mb-1">$25</div>
                <div class="text-muted mb-5">per month</div>
              </div>
              <div class="card-footer border-0 text-center pt-0 pb-4">
                <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
              </div>
            </div>
          </b-col>

          <!-- Pricing plan -->
          <b-col>
            <div class="card bg-light h-100 border-0 rounded-start-0 py-3 py-sm-4 py-lg-5">
              <div class="card-body text-center">
                <h3 class="mb-2">Enterprise</h3>
                <div class="fs-lg pb-4 mb-3">Best for large teams</div>
                <div class="display-5 text-dark mb-1">$50</div>
                <div class="text-muted mb-5">per month</div>
              </div>
              <div class="card-footer border-0 text-center pt-0 pb-4">
                <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts"></script>
