<template>
  <div>
    <section class="position-relative zindex-2 px-3 mt-n2 mt-sm-0">
      <div
        class="card border-0 rounded-3 shadow py-5 px-3 px-lg-0 mx-auto"
        style="max-width: 1560px"
      >
        <b-container class="py-lg-4 py-xl-5">
          <b-row class="pt-md-3 pb-md-2">
            <b-col lg="5" class="d-flex flex-column text-center text-lg-start mb-3 mb-sm-4 mb-lg-0">
              <h2 class="h1">
                New generation mobile bank. An easy way to
                <span class="text-primary">manage your finances</span> directly from your
                smartphone*.
              </h2>
              <p class="fs-lg mt-auto">
                *Serviced by <span class="fw-semibold">Universal Bank</span>
              </p>
            </b-col>
            <b-col lg="7" xl="6" class="offset-xl-1">
              <b-row class="g-4 g-xl-5">
                <b-col sm="6" v-for="(item, idx) in featureData" :key="idx">
                  <div class="text-center text-sm-start pe-md-2">
                    <img
                      :src="item.image"
                      style="
                        filter: drop-shadow(
                            0px 0.8645132780075073px 4.602016925811768px rgba(99, 102, 241, 0.02)
                          )
                          drop-shadow(
                            0px 2.9037201404571533px 10.33138370513916px rgba(99, 102, 241, 0.05)
                          )
                          drop-shadow(0px 13px 27px rgba(99, 102, 241, 0.17));
                      "
                      alt="Payment icon"
                    />
                    <h3 class="h4 mt-4 mb-2">{{ item.title }}</h3>
                    <p class="mb-2">{{ item.description }}</p>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { featureData } from '@/views/landings/mobile-app-3/data'
</script>
