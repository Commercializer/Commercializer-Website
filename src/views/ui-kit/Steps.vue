<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Steps"
      description="Component is designed to showcase numbered steps of the process or timeline."
      :is-silicon-component="true"
    />

    <!-- Horizontal layout -->
    <section id="steps-horizontal" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Horizontal layout</h2>
      <div class="pt-1">
        <div class="steps steps-horizontal-md">
          <div class="step" v-for="(item, idx) in processData" :key="idx">
            <div class="step-number">
              <div class="step-number-inner">{{ idx + 1 }}</div>
            </div>
            <div class="step-body">
              <h5 class="mb-2">{{ item.title }}</h5>
              <p class="fs-sm mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alignment -->
    <section id="steps-alignment" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alignment</h2>
      <div class="pt-1">
        <div class="steps steps-horizontal-md steps-center pb-md-4 mb-5">
          <div class="step" v-for="(step, idx) in processData" :key="idx">
            <div class="step-number">
              <div class="step-number-inner">{{ idx + 1 }}</div>
            </div>
            <div class="step-body">
              <h5 class="mb-2">{{ step.title }}</h5>
              <p class="fs-sm mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
        <div class="steps steps-horizontal-md steps-end">
          <div class="step" v-for="(step, idx) in processData" :key="idx">
            <div class="step-number">
              <div class="step-number-inner">{{ idx + 1 }}</div>
            </div>
            <div class="step-body">
              <h5 class="mb-2">{{ step.title }}</h5>
              <p class="fs-sm mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Completed step -->
    <section id="steps-completed" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Completed step</h2>
      <div class="pt-1">
        <div class="steps steps-horizontal-md">
          <div class="step" v-for="(item, idx) in processData" :key="idx">
            <div v-if="item.icon" class="step-number bg-light">
              <span
                class="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-faded-success"
              ></span>
              <div class="step-number-inner bg-success">
                <Icon :icon="item.icon" class="bx fs-1 text-white"></Icon>
              </div>
            </div>
            <div v-else class="step-number">
              <div class="step-number-inner">{{ idx + 1 }}</div>
            </div>
            <div class="step-body">
              <h5 class="mb-2">{{ item.title }}</h5>
              <p class="fs-sm mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical layout -->
    <section id="steps-vertical" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Vertical layout</h2>
      <div class="pt-1">
        <div class="steps" style="max-width: 42rem">
          <div class="step" v-for="(item, idx) in processData" :key="idx">
            <div class="step-number">
              <div class="step-number-inner">{{ idx + 1 }}</div>
            </div>
            <div class="step-body">
              <h5 class="mb-2">{{ item.title }}</h5>
              <p class="fs-sm mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Small size -->
    <section id="steps-small" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Small size</h2>
      <div class="pt-1">
        <div class="steps steps-sm steps-horizontal-md">
          <div class="step" v-for="(item, idx) in processData" :key="idx">
            <div class="step-number">
              <div class="step-number-inner">{{ idx + 1 }}</div>
            </div>
            <div class="step-body">
              <h5 class="mb-2">{{ item.title }}</h5>
              <p class="fs-sm mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Icons instead of numbers -->
    <section id="steps-icons" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Icons instead of numbers</h2>
      <div class="pt-1">
        <div class="steps steps-horizontal-md">
          <div class="step" v-for="(item, idx) in processWithIconData" :key="idx">
            <div class="step-number text-primary">
              <div class="step-number-inner">
                <Icon v-if="item.icon" :icon="item.icon" class="bx fs-1"></Icon>
              </div>
            </div>
            <div class="step-body">
              <h5 class="mb-2">{{ item.title }}</h5>
              <p class="fs-sm mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import { Icon, type IconifyIcon } from '@iconify/vue'

import SearchAltIcon from '@iconify/icons-bx/bx-search-alt'
import LayoutIcon from '@iconify/icons-bx/bx-layout'
import DevicesIcon from '@iconify/icons-bx/bx-devices'
import CheckIcon from '@iconify/icons-bx/bx-check'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const anchorData = [
  {
    id: 'steps-horizontal',
    title: 'Horizontal layout'
  },
  {
    id: 'steps-alignment',
    title: 'Alignment'
  },
  {
    id: 'steps-completed',
    title: 'Completed step'
  },
  {
    id: 'steps-vertical',
    title: 'Vertical layout'
  },
  {
    id: 'steps-small',
    title: 'Small size'
  },
  {
    id: 'steps-icons',
    title: 'Icons instead of numbers'
  }
]

type ProcessType = {
  icon?: IconifyIcon
  title: string
  description: string
}

const processData: ProcessType[] = [
  {
    icon: CheckIcon,
    title: 'Choose your course',
    description: `Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat ac nunc dapibus.`
  },
  {
    title: 'Learn by doing',
    description: `Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer.`
  },
  {
    title: 'Get instant expert feedback',
    description: `Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum.`
  }
]

const processWithIconData: ProcessType[] = [
  {
    icon: SearchAltIcon,
    title: 'Research & Analysis',
    description: `Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat ac nunc dapibus.`
  },
  {
    icon: LayoutIcon,
    title: 'Prototyping',
    description: `Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer.`
  },
  {
    icon: DevicesIcon,
    title: 'Pixel-perfect UI Design',
    description: `Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum.`
  }
]
</script>
