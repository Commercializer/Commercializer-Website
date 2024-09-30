<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Accordion"
      description="Vertically stacked list of headers that can be clicked to reveal or hide content associated with them."/>

    <!-- Default style -->
    <section id="accordion-default" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Default style</h2>

      <div class="pt-1">
        <div class="accordion" id="accordionDefault" style="max-width: 50rem">
          <div v-for="(item, idx) in accordionData" :key="item.title" class="accordion-item">
            <h2 class="accordion-header" :id="`heading1-${idx + 1}`">
              <button class="accordion-button" v-b-toggle="`collapse1-${idx + 1}`" @click="defaultAccordion = `collapse-${idx + 1}`">
                {{ item.title }}
              </button>
            </h2>
            <b-collapse :id="`collapse1-${idx + 1}`" :aria-labelledby="`heading1-${idx + 1}`"
            :visible="defaultAccordion == `collapse-${idx + 1}`"
            >
              <div class="accordion-body">
                {{ item.body }}
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </section>

    <!-- Alternative style -->
    <section id="accordion-alt" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alternative style</h2>

      <div class="pt-1">
        <div class="accordion" id="accordionAlt" style="max-width: 50rem">
          <div
            v-for="(item, idx) in accordionData"
            :key="item.title"
            class="accordion-item border-0 rounded-3 shadow-sm"
            :class="idx != faqData.length - 1 ? 'mb-3' : ''"
          >
            <h2 class="accordion-header" :id="`heading2-${idx + 1}`">
              <button
                class="accordion-button shadow-none rounded-3"
                v-b-toggle="`collapse2-${idx + 1}`"
                @click="alternateAccordion = `collapse-${idx + 1}`"
              >
                {{ item.title }}
              </button>
            </h2>
            <b-collapse :id="`collapse2-${idx + 1}`" :aria-labelledby="`heading2-${idx + 1}`"
            :visible="alternateAccordion == `collapse-${idx + 1}`"
            >
              <div class="accordion-body pt-0">
                {{ item.body }}
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorNavigationData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import { faqData } from '@/views/landings/mobile-app-1/data'

import { ref } from "vue";

const defaultAccordion = ref("collapse-1");
const alternateAccordion = ref("collapse-1");

const anchorNavigationData = [
  {
    id: 'accordion-default',
    title: 'Default style'
  },
  {
    id: 'accordion-alt',
    title: 'Alternative style'
  }
]

const accordionData = [
  {
    title: 'Accordion Item #1',
    body: `This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
  },
  {
    title: 'Accordion Item #2',
    body: `This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
  },
  {
    title: 'Accordion Item #3',
    body: `This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
  }
]
</script>
