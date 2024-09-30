<template>
  <b-container class="mb-5 pb-2 pb-md-4 pb-lg-5">
    <b-row class="gy-4 py-xl-2">
      <b-col md="4">
        <h2 class="mb-0 text-md-start text-center">Award-winning designs featured by</h2>
      </b-col>
      <b-col lg="7" class="offset-lg-1 col-md-8">
        <b-row class="row-cols-sm-4 row-cols-2 gy-4">
          <b-col v-for="(award, idx) in awardData" :key="idx">
            <div class="position-relative text-center">
              <img :src="award.image" :width="100" alt="Webby" class="d-block mx-auto mb-3" />
              <a
                href="#"
                class="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >{{ award.title }}</a
              >
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { awardData } from '@/views/landings/digital-agency/data'
</script>
