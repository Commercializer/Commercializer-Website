<template>
  <b-container class="pt-2 pt-sm-4 pb-5 mb-md-2 mb-lg-4 mb-xl-5">
    <b-row class="align-items-center mb-2 pb-sm-3 pb-md-4">
      <!-- Text -->
      <b-col
        md="5"
        lg="6"
        xl="5"
        class="offset-xl-1 order-md-2 text-center text-md-start mb-5 mb-md-0"
      >
        <h2 class="h1 pb-2 pb-lg-3">Make Your Life a lot Easier with Crypto Bank</h2>
        <p class="pb-2 mb-4 mb-xl-5">
          Sociis sit risus id. Sit facilisis dolor fermentum vestibulum arcuulvi maecenas maecenas
          pharet tincidunt sollicitudin in pellentesque vitae.
        </p>
        <hr />
        <div
          class="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-md-between pt-3"
        >
          <img :src="binanceImg" width="48" class="d-block m-2 mx-md-0" alt="Bitcoin" />
          <img :src="ensImg" width="48" class="d-block m-2 mx-md-0" alt="Ens" />
          <img :src="tetherImg" width="48" class="d-block m-2 mx-md-0" alt="Tether" />
          <img :src="alqoImg" width="48" class="d-block m-2 mx-md-0" alt="Alqo" />
          <img :src="blockfiImg" width="48" class="d-block m-2 mx-md-0" alt="BlockFi" />
          <img :src="bitcoinImg" width="48" class="d-block m-2 mx-md-0" alt="Bitcoin" />
        </div>
      </b-col>

      <b-col md="7" lg="6" class="order-md-1">
        <Rellax custom-class="position-relative pt-5" :custom-style="{ maxWidth: '636px' }">
          <img
            :src="popupImg"
            class="rellax position-absolute top-0 mt-n5"
            alt="Card"
            data-rellax-percentage="0.5"
            data-rellax-speed="1"
            data-disable-parallax-down="lg"
          />
          <img
            :src="dashbpoardImg"
            class="d-block rounded-3 mt-sm-4 mt-md-0 mt-lg-4"
            alt="Dashboard"
            style="box-shadow: 0 1.875rem 7.5rem -0.625rem rgba(124, 125, 152, 0.2)"
          />
        </Rellax>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import binanceImg from '@/assets/img/landing/saas-3/feature-3/binance.svg'
import ensImg from '@/assets/img/landing/saas-3/feature-3/ens.svg'
import tetherImg from '@/assets/img/landing/saas-3/feature-3/tether.svg'
import alqoImg from '@/assets/img/landing/saas-3/feature-3/alqo.svg'
import blockfiImg from '@/assets/img/landing/saas-3/feature-3/blockfi.svg'
import bitcoinImg from '@/assets/img/landing/saas-3/feature-3/bitcoin.svg'
import popupImg from '@/assets/img/landing/saas-3/feature-3/popup.png'
import dashbpoardImg from '@/assets/img/landing/saas-3/feature-3/dashboard.jpg'
import Rellax from '@/components/Rellax.vue'
</script>
