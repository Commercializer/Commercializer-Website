<template>
  <div v-if="isLoading" class="page-loading active">
    <div class="page-loading-inner">
      <div class="page-spinner"></div>
      <span>Loading...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>
