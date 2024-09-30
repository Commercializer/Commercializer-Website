<template>
  <b-container class="pb-2 pb-lg-3">
    <b-row class="pb-5 mb-md-4 mb-lg-5" v-for="(item, idx) in listData" :key="idx">
      <div
        class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0"
        :class="idx % 2 != 0 ? 'order-md-2' : ''"
        data-rellax-percentage="0.5"
        data-rellax-speed="0.8"
        data-disable-parallax-down="md"
      >
        <router-link :to="{ name: item.link?.name, params: item.link?.params }">
          <img :src="item.image" class="rounded-3" width="600" alt="Image" />
        </router-link>
      </div>

      <div
        class="rellax col-md-6"
        :class="idx % 2 != 0 ? 'pt-md-4 pt-lg-5' : 'order-md-1 pt-md-4 pt-lg-5'"
        data-rellax-percentage="0.5"
        data-rellax-speed="-0.6"
        data-disable-parallax-down="md"
      >
        <div class="" :class="idx % 2 != 0 ? 'pe-md-4 me-md-2' : 'ps-md-4 ms-md-2'">
          <div class="fs-sm text-muted mb-1">{{ item.date }}</div>
          <h2 class="h3">{{ item.title }}</h2>
          <a href="#" class="d-table badge bg-faded-primary text-primary fs-sm mb-3">{{
            item.category
          }}</a>
          <p class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">{{ item.description }}</p>
          <router-link
            :to="{ name: item.link?.name, params: item.link?.params }"
            class="btn btn-outline-primary"
            >View more
          </router-link>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { listData } from '../data'
import Rellax from '@/components/Rellax.vue'
</script>
