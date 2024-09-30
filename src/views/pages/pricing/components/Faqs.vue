<template>
  <section class="bg-secondary py-5">
    <b-container class="my-2 py-md-2 py-lg-5">
      <b-row>
        <b-col xl="4" md="5" class="text-center text-md-start pb-2 pb-md-0 mb-4 mb-md-0">
          <h2 class="pb-3 mb-1 mb-lg-2">
            Any questions? <br class="d-none d-md-inline" />Check out the FAQs
          </h2>
          <p class="fs-lg pb-3 mb-2 mb-lg-3">
            Still have unanswered questions and need to get in touch?
          </p>
          <router-link :to="{ name: 'pages.contacts-2' }" class="btn btn-primary"
            >Contact support</router-link
          >
        </b-col>
        <b-col md="7" class="offset-xl-1">
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
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faqsData } from '@/views/pages/pricing/data'
import { ref } from "vue";

const visible = ref("collapse-1");
</script>
