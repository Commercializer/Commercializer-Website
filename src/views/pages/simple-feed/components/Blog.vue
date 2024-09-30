<template>
  <b-container class="mb-lg-4 pb-5">
    <article class="mb-5 pt-5 border-top" v-for="(item, idx) in blogData" :key="idx">
      <BlogCard :item="item"></BlogCard>
    </article>
  </b-container>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue'
import { blogData } from '../data'
</script>
