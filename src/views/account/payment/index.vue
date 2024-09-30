<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
        <h1 class="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">Payment Details</h1>
        <h2 class="h5 text-primary mb-4">Your saved payment methods</h2>

        <template v-for="(card, idx) in paymentCardData" :key="idx">
          <PaymentCard :card="card" />
        </template>

        <template v-for="(crypto, idx) in paymentCryptoData" :key="idx">
          <PaymentCryptoCard :crypto="crypto" />
        </template>

        <div class="py-2">
          <b-button variant="primary" class="ps-4">
            <i class="bx bx-plus fs-xl me-2"></i>
            Add new payment method
          </b-button>
        </div>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import PaymentCard from '@/views/account/payment/components/PaymentCard.vue'
import PaymentCryptoCard from '@/views/account/payment/components/PaymentCryptoCard.vue'
import { paymentCardData, paymentCryptoData } from '@/views/account/payment/data'
</script>
