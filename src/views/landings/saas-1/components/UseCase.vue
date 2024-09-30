<template>
  <b-container class="pt-5 pb-2 mt-3 mt-sm-4 mt-xl-5">
    <h2 class="h1 text-center pb-3 pb-lg-4">One Tool — Endless Use Cases</h2>

    <div class="bg-secondary py-4">
      <b-tabs align="center">
        <b-tab :active="idx == 0 ? true : false" v-for="(item, idx) in useCasesData" :key="idx">
          <template #title>
            <Icon :icon="item.icon" class="bx fs-lg opacity-60 me-2"></Icon>
            {{ item.title }}
          </template>

          <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
            <b-col lg="4" md="5" class="offset-lg-1 text-center text-md-start">
              <h3 class="mb-lg-4">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </b-col>
            <b-col lg="6" md="7" class="mt-md-4">
              <img
                :src="item.image"
                class="d-block my-lg-2 mx-auto me-md-0"
                width="595"
                alt="Image"
              />
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useCasesData } from '@/views/landings/saas-1/data'
</script>
