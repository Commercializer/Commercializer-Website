<template>
  <aside
    id="jumpToNav"
    class="side-nav side-nav-end d-none d-xxl-block position-fixed top-0 end-0 vh-100 py-5"
    style="width: 20rem"
  >
    <h3 class="fs-lg mt-5 pt-5">Jump to</h3>
    <ul class="nav">
      <li v-for="(item, idx) in elements" :key="item.id" class="nav-item">
        <a
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: currentElementId == item.id }"
          data-scroll
          data-scroll-offset="-6"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'

type ElementType = {
  id: string
  title: string
}

const props = defineProps({
  elements: {
    type: Object as PropType<ElementType[]>
  }
})

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top >= 0 && rect.bottom <= window.innerHeight
}

let currentElementId = ref(null)

onMounted(() => {
  let elements: any = []

  if (props.elements) {
    props.elements.forEach((i) => elements.push(document.getElementById(i.id)))
  }

  window.addEventListener('scroll', () => {
    elements.forEach((element: any) => {
      if (isInViewport(element)) {
        currentElementId.value = element.id
      }
    })
  })
})
</script>
