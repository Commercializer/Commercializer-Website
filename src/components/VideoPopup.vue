<template>
  <lightgallery :settings="settings">
    <a
      v-if="link"
      :href="link"
      :class="customClass"
      data-bs-toggle="video"
      aria-label="Play video"
      style="color: black"
    >
      <Icon :icon="PlayIcon" class="bx"></Icon>
    </a>

    <slot />
  </lightgallery>
</template>

<script lang="ts" setup>
import PlayIcon from '@iconify/icons-bx/bx-play'
import { Icon } from '@iconify/vue'
import Lightgallery from 'lightgallery/vue'
import lgVideo from 'lightgallery/plugins/video'

const props = defineProps({
  link: {
    type: String
  },
  options: {
    type: Object
  },
  customClass: {
    type: String
  }
})

const lightGalleryOptions = {
  plugins: [lgVideo],
  licenseKey: 'D4194FDD-48924833-A54AECA3-D6F8E646',
  download: false,
  youtubePlayerParams: {
    modestbranding: 1,
    showinfo: 0,
    rel: 0
  },
  vimeoPlayerParams: {
    byline: 0,
    portrait: 0,
    color: '6366f1'
  }
}

const settings = {
  ...lightGalleryOptions,
  ...props.options
}
</script>
