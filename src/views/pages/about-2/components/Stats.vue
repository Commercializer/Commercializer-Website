<template>
  <b-container class="pb-5 mb-2 mb-md-4 mb-lg-5">
    <div class="bg-secondary rounded-3 py-5 px-3 px-md-0">
      <b-row class="justify-content-center mb-2 py-md-2 py-lg-4">
        <b-col lg="10" md="11">
          <h2 class="pb-3">Overpass by Numbers</h2>
          <b-row class="row-cols-1 row-cols-md-2 g-4">
            <b-col v-for="(item, idx) in statsData" :key="idx">
              <div class="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                <div class="card-body d-flex align-items-center">
                  <div class="bg-primary shadow-primary rounded-3 flex-shrink-0 p-3">
                    <img :src="item.image" class="d-block m-1" width="40" alt="Icon" />
                  </div>
                  <div class="ps-4 ms-lg-3">
                    <h3 class="display-5 mb-1">{{ item.number }}</h3>
                    <p class="mb-0">{{ item.content }}</p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { statsData } from '../data'
</script>
