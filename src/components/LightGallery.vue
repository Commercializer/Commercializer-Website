<template>
  <lightgallery :settings="settings" :class="customClass" :style="customStyle">
    <a
      v-if="link"
      :href="link"
      class="btn btn-video btn-icon btn-xl bg-white stretched-link mb-2 mb-sm-4"
      data-bs-toggle="video"
      aria-label="Play video"
    >
      <Icon :icon="PlayIcon" class="bx"></Icon>
    </a>

    <slot />
  </lightgallery>
</template>

<script setup lang="ts">
import PlayIcon from '@iconify/icons-bx/bx-play'
import { Icon } from '@iconify/vue'
import Lightgallery from 'lightgallery/vue'
import lgVideo from 'lightgallery/plugins/video'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullscreen from 'lightgallery/plugins/fullscreen'

const props = defineProps({
  customClass: {
    type: String
  },
  customStyle: {
    type: Object
  },
  link: {
    type: String
  },
  options: {
    type: Object
  }
})

const lightGalleryOptions = {
  selector: '.gallery-item',
  plugins: [lgVideo, lgThumbnail, lgZoom, lgFullscreen],
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
