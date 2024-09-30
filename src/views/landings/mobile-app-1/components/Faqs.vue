<template>
  <b-container class="py-5 mb-lg-2">
    <b-row class="py-2 py-md-4 py-lg-5">
      <b-col xl="4" md="5" class="text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
        <h2 class="pb-3 mb-1 mb-lg-3">
          Any questions? <br class="d-none d-md-inline" />Check out the FAQs
        </h2>
        <p class="fs-lg pb-3 mb-2 mb-lg-3">
          Still have unanswered questions and need to get in touch?
        </p>
        <b-row class="row-cols-1 row-cols-sm-2 g-3 g-sm-4">
          <b-col>
            <div class="card card-hover">
              <div class="card-body pb-3">
                <Icon :icon="PhoneCallIcon" class="bx d-block fs-2 text-primary mb-2 py-1"></Icon>
                <p class="fs-sm mb-2">Still have questions?</p>
                <a href="#" class="btn btn-link stretched-link px-0">
                  Call us
                  <Icon :icon="RightArrowIcon" class="bx fs-xl ms-2"></Icon>
                </a>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="card card-hover">
              <div class="card-body pb-3">
                <Icon :icon="MessageRoundedDotIcon" class="bx d-block fs-2 text-success mb-2 py-1"></Icon>
                <p class="fs-sm mb-2">Still have questions?</p>
                <a href="#" class="btn btn-link text-success stretched-link px-0">
                  Chat with us
                  <Icon :icon="RightArrowIcon" class="bx fs-xl ms-2"></Icon>
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="7" class="offset-xl-1">
        <div class="accordion" id="faq" role="tablist">
          <div v-for="(item, idx) in faqData" :key="item.question + idx"
            class="accordion-item border-0 rounded-3 shadow-sm" :class="idx != faqData.length - 1 ? 'mb-3' : ''">
            <h2 class="accordion-header" :id="`heading-${idx + 1}`">
              <button class="accordion-button shadow-none rounded-3" v-b-toggle="`collapse-${idx + 1}`"
                @click="visible = `collapse-${idx + 1}`">
                {{ item.question }}
              </button>
            </h2>
            <b-collapse :id="`collapse-${idx + 1}`" :aria-labelledby="`heading-${idx + 1}`" accordion="my-accordion"
              role="tabpanel" :visible="visible == `collapse-${idx + 1}`">
              <div class="accordion-body fs-sm pt-0">
                <p v-for="(answer, idx) in item.answers" :key="idx">{{ answer }}</p>
              </div>
            </b-collapse>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import PhoneCallIcon from '@iconify/icons-bx/phone-call';
import RightArrowIcon from '@iconify/icons-bx/right-arrow-alt';
import MessageRoundedDotIcon from '@iconify/icons-bx/message-rounded-dots';

import { faqData } from '@/views/landings/mobile-app-1/data';
import { ref } from "vue";

const visible = ref("collapse-1");
</script>
