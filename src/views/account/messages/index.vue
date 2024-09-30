<template>
  <AccountLayout>
    <b-col md="8" lg="9" class="pb-5 mb-lg-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 mt-md-2 pt-md-4 pb-md-2">
        <b-row class="g-0 border rounded-3 shadow-sm position-relative overflow-hidden">
          <ContactList />

          <Chat />
        </b-row>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import ContactList from '@/views/account/messages/components/ContactList.vue'
import Chat from '@/views/account/messages/components/Chat.vue'
</script>
