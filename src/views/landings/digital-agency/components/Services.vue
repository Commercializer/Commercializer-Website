<template>
  <section class="container mb-5 pb-2 pb-md-4 pb-lg-5">
    <div class="card border-0 bg-secondary p-md-5 px-sm-2 pt-4 pb-3">
      <div class="card-body mx-auto" style="max-width: 860px">
        <h2 class="h1 mb-4 text-center">Our Competencies</h2>
        <p class="mb-4 pb-3 fs-lg text-center text-muted">
          We fully understand your business. If you need to update something, we are more than happy
          to help you with the services we are providing.
        </p>

        <!-- Accordion: Alternative style -->
        <div class="accordion">
          <!-- Item -->
          <div
            v-for="(service, idx) in servicesData"
            :key="service.title + idx"
            class="accordion-item border-0 rounded-3 shadow-sm mb-3"
          >
            <h3 class="accordion-header" :id="`heading-${idx + 1}`">
              <button
                class="accordion-button fs-xl shadow-none rounded-3"
                v-b-toggle="`collapse-${idx + 1}`"
                @click="visible = `collapse-${idx + 1}`"
              >
                {{ service.title }}
              </button>
            </h3>
            <b-collapse
              :id="`collapse-${idx + 1}`"
              :aria-labelledby="`heading-${idx + 1}`"
              :visible="visible == `collapse-${idx + 1}`"
            >
              <div class="accordion-body pt-0">
                <div class="d-flex flex-md-row flex-column align-items-md-center">
                  <img
                    :src="service.image"
                    width="200"
                    alt="Digital Marketing"
                    class="me-md-4 mb-md-0 mb-3"
                  />
                  <div class="ps-md-3">
                    <p class="mb-0">{{ service.description }}</p>
                  </div>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { servicesData } from '@/views/landings/digital-agency/data'
import { ref } from "vue";

const visible = ref("collapse-1");
</script>
