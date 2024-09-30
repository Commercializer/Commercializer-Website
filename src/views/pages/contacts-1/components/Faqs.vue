<template>
  <b-container>
    <div class="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-md-0">
      <h2 class="text-center pt-md-1 pt-lg-3 pt-xl-4 pb-4 mt-xl-1 mb-2">
        Frequently Asked Questions
      </h2>
      <b-row class="justify-content-center pb-lg-4 pb-xl-5">
        <b-col xl="8" lg="9" md="10" class="pb-md-2">
          <div class="accordion" id="faq">
            <div
              v-for="(faq, idx) in faqsData"
              :key="faq.question + idx"
              :class="{ 'mb-3': idx != faqsData.length - 1 }"
              class="accordion-item border-0 rounded-3 shadow-sm"
            >
              <h3 class="accordion-header" :id="`heading-${idx + 1}`">
                <button
                  class="accordion-button shadow-none rounded-3"
                  v-b-toggle="`collapse-${idx + 1}`"
                  @click="visible = `collapse-${idx + 1}`"
                >
                  {{ faq.question }}
                </button>
              </h3>
              <b-collapse
                accordion="my-accordion"
                :id="`collapse-${idx + 1}`"
                :aria-labelledby="`heading-${idx + 1}`"
                :visible="visible == `collapse-${idx + 1}`"
              >
                <div class="accordion-body fs-sm pt-0">
                  <p v-for="(answer, idx) in faq.answers" :key="idx">{{ answer }}</p>
                </div>
              </b-collapse>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { faqsData } from '@/views/pages/contacts-1/data'
import { ref } from "vue";

const visible = ref("collapse-1");
</script>
