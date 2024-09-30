<template>
  <b-container class="pb-5 mb-md-3 mb-lg-4 mb-xl-5">
    <b-row class="pb-3">
      <b-col md="5" class="mb-4 mb-md-0">
        <div class="card bg-dark h-100 p-lg-5">
          <div class="card-body p-lg-2">
            <h2 class="h1 text-light">Still Have Any Questions?</h2>
            <p class="fs-xl text-light opacity-70 mb-0">Check out the FAQs.</p>
          </div>
          <div class="card-footer border-0 w-100 pt-0 p-4 p-lg-2">
            <div class="h2 d-flex align-items-center text-light mb-4">
              $28.99
              <del class="fs-xl fw-normal opacity-70 ms-2">49.99</del>
            </div>
            <a href="#" class="btn btn-primary btn-lg shadow-primary">Join the course</a>
          </div>
        </div>
      </b-col>
      <b-col md="7">
        <div class="accordion" id="faq">
          <div
            class="accordion-item border-0 rounded-3 shadow-sm"
            v-for="(faq, idx) in faqsData"
            :key="faq.question + idx"
            :class="idx != faq.question.length - 1 ? 'mb-3' : ''"
          >
            <h3 class="accordion-header">
              <button
                class="accordion-button shadow-none rounded-3"
                v-b-toggle="`collapse-${idx + 1}`"
                @click="visible = `collapse-${idx + 1}`"
              >
                {{ faq.question }}
              </button>
            </h3>
            <b-collapse
              class="accordion-collapse"
              :id="`collapse-${idx + 1}`"
              :aria-labelledby="`heading-${idx + 1}`"
              :visible="visible == `collapse-${idx + 1}`"
            >
              <div class="accordion-body fs-sm pt-0">
                <p>{{ faq.answers }}</p>
              </div>
            </b-collapse>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { faqsData } from '../data'
import { ref } from "vue";

const visible = ref("collapse-1");
</script>
