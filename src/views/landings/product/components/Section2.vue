<template>
  <section class="mb-5 py-5 bg-secondary">
    <b-container class="my-xl-5 my-lg-4 pb-2 py-sm-3 py-md-4">
      <b-row class="my-2">
        <b-col xl="4" lg="5">
          <div
            class="mb-lg-0 mb-5 mx-lg-0 mx-auto text-lg-start text-center"
            style="max-width: 26rem"
          >
            <h2 class="h1 mb-4 pb-3">
              Two colors.<br />
              Choose your best.
            </h2>
            <p class="mb-4">
              “ProDrone 2.0 changes the rules of the game in aerial photography. Now you can capture
              more details from a safe distance, as well as implement different visual effects with
              different focal lengths.”
            </p>
            <h5 class="mb-1">Wade Warren</h5>
            <span>ProDrone Inc. Co-Owner</span>
          </div>
        </b-col>
        <b-col lg="7" class="offset-xl-1">
          <b-row class="row-cols-sm-2 row-cols-1 gy-4">
            <!-- Item -->
            <b-col>
              <b-card class="card-hover border-0 shadow position-relative">
                <img :src="product1Img" alt="Skin image" class="card-img-top" />
                <div class="mt-n5 mx-3 mb-3 pt-0 text-center">
                  <span>White ProDrone 2.0</span>
                  <h3 class="mt-2 mb-4">$1200</h3>
                  <a href="#" class="btn btn-primary stretched-link">Buy now</a>
                </div>
              </b-card>
            </b-col>

            <!-- Item -->
            <b-col>
              <b-card class="card-hover border-0 shadow position-relative">
                <img :src="product2Img" alt="Skin image" class="card-img-top" />
                <div class="mt-n5 mx-3 mb-3 pt-0 text-center">
                  <span>White ProDrone 2.0</span>
                  <h3 class="mt-2 mb-4">$1100</h3>
                  <a href="#" class="btn btn-primary stretched-link">Buy now</a>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { product1Img, product2Img } from '@/assets/data/image'
</script>
