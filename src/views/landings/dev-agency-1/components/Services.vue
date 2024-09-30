<template>
  <section class="bg-secondary pb-md-2 pb-lg-5">
    <div class="d-none d-lg-block" style="margin-top: -60px; padding-top: 60px"></div>
    <b-container class="pb-4 pt-5">
      <h2 class="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">Our Services</h2>
      <b-row class="align-items-center pb-5 mb-lg-2">
        <b-col md="8" class="text-center text-md-start">
          <p class="fs-lg text-muted mb-md-0">
            We are focused on helping brands grow through digital transformation services. We bring
            real solutions to each client’s problems through a deep understanding of their market,
            solution, and vision.
          </p>
        </b-col>
        <b-col md="4" class="d-flex justify-content-center justify-content-md-end">
          <router-link to="/services-1" class="btn btn-outline-primary btn-lg"
            >See all services</router-link
          >
        </b-col>
      </b-row>

      <b-row class="row-cols-1 row-cols-md-2">
        <b-col class="py-4 my-2 my-sm-3" v-for="(service, idx) in serviceData" :key="idx">
          <router-link
            to="/services-1"
            class="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2"
          >
            <div class="card-body pt-3">
              <div
                class="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3"
              >
                <img :src="service.image" class="d-block m-1" width="40" alt="Icon" />
              </div>
              <h2 class="h4 d-inline-flex align-items-center">
                {{ service.title }}
                <i class="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
              </h2>
              <p class="fs-sm text-body mb-0">{{ service.description }}</p>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { serviceData } from '@/views/landings/dev-agency-1/data'
</script>
