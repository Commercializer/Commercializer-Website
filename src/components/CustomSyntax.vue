<template>
  <section class="border-bottom py-5 ps-lg-2 ps-xxl-0">
    <h2 class="h4">{{ title }}</h2>

    <b-tabs no-nav-style nav-class="nav-tabs-alt">
      <b-tab>
        <template v-slot:title>
          <i class="bx bx-show-alt fs-base opacity-70 me-2"></i>
          Preview
        </template>

        <template v-slot:default>
          <slot />
        </template>
      </b-tab>

      <b-tab>
        <template v-slot:title>
          <i class="bx bx-code-alt fs-base opacity-70 me-2"></i>
          HTML
        </template>

        <template v-slot:default>
          <Prism language="html">
            {{ code }}
          </Prism>

          <button class="btn btn-sm btn-outline-primary mt-3" @click="doCopy">
            {{ copied ? 'Copied' : 'Copy' }}
          </button>
        </template>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script setup lang="ts">
import Prism from 'vue-prism-component'
import { copyText } from 'vue3-clipboard'
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  code: { type: String }
})

const copied = ref(false)

const doCopy = () => {
  copyText(props.code, undefined, (error: any, event: any) => {
    if (error) {
    } else {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    }
  })
}
</script>
