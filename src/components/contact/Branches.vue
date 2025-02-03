<template>
  <b-container class="py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
    <b-row class="py-5">
      <b-col lg="6" class="mb-5 mb-lg-0">
          <div class="shadow-sm rounded-3 overflow-hidden">
              <img
                  :src="map"
                  alt="Locations Map"
                  class="d-block w-100 h-auto object-fit-contain"
                  style="max-height: 400px;"
              />
          </div>
      </b-col>
      <b-col lg="5" class="offset-lg-1">
          <h2 class="h4 mb-4">
              Locations
          </h2>
          <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li class="d-flex pb-1 mb-2">
                  <Icon :icon="MapIcon" class="text-primary fs-xl me-2" style="margin-top: 0.125rem" />
                  <div>
                      <strong class="text-nav">Sri Lanka</strong>
                      <br />
                      Commercializer (Private) Limited
                      <br/>
                      283, Pohaddaramulla East, Wadduwa
                  </div>
              </li>
              <li class="d-flex pb-1 mb-2">
                  <Icon :icon="MapIcon" class="text-primary fs-xl me-2" style="margin-top: 0.125rem" />
                  <div>
                      <strong class="text-nav">Qatar</strong>
                      <br />
                      Commercializer LLC
                      <br/>
                      Office No. 1, Floor No. 9, QFC Tower 1, Doha, Qatar
                  </div>
              </li>
              <li class="d-flex pb-1 mb-2">
                  <Icon :icon="MapIcon" class="text-primary fs-xl me-2" style="margin-top: 0.125rem" />
                  <div>
                      <strong class="text-nav">United States</strong>
                      <br />
                      Commercial Technologies Plus LLC
                      <br/>
                      1728, 1007 N Orange St. 4th Floor, Wilmington, DE, New Castle, US, 19801
                  </div>
              </li>
          </ul>

      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import MapIcon from '@iconify/icons-bx/bx-map'
import map from '@/assets/img/AboutMap.png';

</script>