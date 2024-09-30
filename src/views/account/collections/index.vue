<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-lg-2 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
        <div class="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
          <h1 class="h2 mb-sm-0">My Collections</h1>
          <b-form-select
            v-model="selectedOption"
            :options="options"
            style="max-width: 15rem"
          ></b-form-select>
        </div>

        <template v-for="(collection, idx) in collectionData" :key="idx">
          <CollectionCard :collection="collection" />
        </template>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import CollectionCard from '@/views/account/collections/components/CollectionCard.vue'
import { collectionData } from '@/views/account/collections/data'
import { ref } from 'vue'

const selectedOption = ref('Published')

const options = [
  { text: 'Published', value: 'Published' },
  { text: 'Category', value: 'Category' },
  { text: 'Title AZ', value: 'Title AZ' },
  { text: 'Title ZA', value: 'Title ZA' }
]
</script>
