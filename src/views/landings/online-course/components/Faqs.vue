<template>
  <!-- FAQ (Accordion) -->
  <b-container class="pt-1 pt-lg-3">
    <div class="position-relative bg-primary rounded-3 overflow-hidden px-3 px-sm-4 px-md-0 py-5">
      <Rellax>
        <div
          class="rellax position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.75"
        >
          <img
            :src="pattern1"
            class="position-absolute top-0 start-100 translate-middle ms-n4"
            alt="Pattern"
          />
          <img :src="pattern2" class="position-absolute top-50 start-0 mt-n5 ms-n5" alt="Pattern" />
          <img
            :src="pattern3"
            class="position-absolute top-100 start-100 translate-middle ms-n5 mt-n5"
            alt="Pattern"
          />
        </div>
      </Rellax>

      <b-row class="justify-content-center position-relative zindex-2 py-lg-4">
        <b-col xl="8" lg="9" md="10" class="py-2">
          <h2 class="h1 text-light text-center mt-n2 mt-lg-0 mb-4 mb-lg-5">
            Frequently Asked Questions
          </h2>
          <div class="accordion" id="faq" role="tablist">
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
import pattern1 from '@/assets/img/landing/online-courses/pattern-1.svg'
import pattern2 from '@/assets/img/landing/online-courses/pattern-2.svg'
import pattern3 from '@/assets/img/landing/online-courses/pattern-3.svg'
import { faqsData } from '../data'
import Rellax from '@/components/Rellax.vue'
import { ref } from "vue";

const visible = ref("collapse-1");
</script>
