<template>
  <section class="bg-dark position-relative pt-5 pb-4 py-md-5" data-bs-theme="dark">
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-secondary"></div>
    <b-container class="position-relative zindex-3 py-lg-4 pt-md-2 py-xl-5 mb-lg-4">
      <!-- Title -->
      <b-row class="justify-content-center text-center pb-4 mb-2">
        <b-col xl="6" class="pt-2">
          <h2 class="h1 mb-4">Buy crypto at true cost</h2>
          <p class="text-body fs-lg mb-0">
            Egestas ullamcorper posuere tortor eget netus elementum dui eu cras eros accumsan,
            ullamcorper tortor gula dui in netus
          </p>
        </b-col>
      </b-row>

      <!-- Table -->
      <div class="d-sm-flex flex-wrap d-lg-table w-100">
        <!-- Row -->
        <div
          class="d-lg-table-row w-sm-50 w-lg-100 pe-sm-3 pe-lg-0 mb-3 mb-lg-0"
          v-for="(item, idx) in cryptoTableData"
          :key="idx"
        >
          <div class="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
            <div class="d-flex align-items-center">
              <img :src="item.image" width="32" alt="Bitcoin" />
              <div class="ps-3">
                <h3 class="h4 mb-0">
                  {{ item.coin
                  }}<span class="d-inlin-block opacity-60 ps-2 ms-1">{{ item.shortened }}</span>
                </h3>
              </div>
            </div>
          </div>
          <div class="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">
            ${{ item.price }}
          </div>
          <div
            class="d-lg-table-cell align-middle fs-lg border-bottom py-3 py-lg-4"
            :class="item.growth > 0 ? 'text-success' : 'text-danger'"
          >
            {{ Math.abs(item.growth) }} %
          </div>
          <div class="d-lg-table-cell align-middle fs-lg text-white border-bottom py-3 py-lg-4">
            ${{ item.totalTreading }}
          </div>
          <div class="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
            <img :src="item.graph" width="108" alt="BTC graph" />
          </div>
          <div class="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
            <button type="button" class="btn btn-sm btn-outline-secondary fs-sm w-100 w-lg-auto">
              Trade
            </button>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { cryptoTableData } from '../data'
</script>
