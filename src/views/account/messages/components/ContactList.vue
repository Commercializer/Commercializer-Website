<template>
  <b-col lg="4">
    <div
      id="contactsList"
      class="offcanvas-lg offcanvas-start position-absolute position-lg-relative h-100 bg-secondary shadow-none border-end"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      style="max-height: 712px"
    >
      <div class="card-header w-100 border-0 p-4">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0">Messages</h1>
          <b-button
            class="btn btn-link nav-link bg-faded-primary-hover d-lg-none py-2 ps-2 pe-3 me-n3"
            data-bs-dismiss="offcanvas"
            data-bs-target="#contactsList"
          >
            <Icon :icon="XIcon" class="fs-xl me-1" />
            Close
          </b-button>
        </div>
        <div class="position-relative">
          <b-form-input type="text" class="pe-5" placeholder="Search" />
          <Icon
            :icon="SearchIcon"
            class="fs-xl text-nav position-absolute top-50 end-0 translate-middle-y me-3"
          />
        </div>
      </div>
      <Swiper
        class="card-body scrollbar-hover overflow-hidden w-100 p-0"
        :modules="[Mousewheel, Scrollbar]"
        direction="vertical"
        slidesPerView="auto"
        :freeMode="true"
        :scrollbar="{
          el: '.swiper-scrollbar'
        }"
        :mousewheel="true"
      >
        <SwiperSlide class="h-auto">
          <a
            href="#"
            v-for="(contact, idx) in contactData"
            :key="idx"
            class="d-flex align-items-start border-bottom text-decoration-none py-3 px-4"
            :class="
              contact.currentlyChatting
                ? 'position-relative bg-light pe-none'
                : 'bg-faded-primary-hover'
            "
          >
            <div
              v-if="contact.currentlyChatting"
              class="position-absolute top-0 start-0 bg-primary w-2 h-100"
            ></div>

            <img :src="contact.user.image" class="rounded-circle" :width="40" alt="Devon Lane" />
            <div class="w-100 ps-2 ms-1">
              <div class="d-flex align-items-center justify-content-between mb-1">
                <h6 class="mb-0 me-2">{{ contact.user.name }}</h6>
                <span class="fs-xs text-muted">{{ contact.lastSeen }}</span>
              </div>
              <p v-if="contact.isTyping" class="fs-sm text-body mb-0">Typing...</p>
              <p v-else class="fs-sm text-body mb-0">{{ contact.lastMessage }}</p>
            </div>
          </a>
        </SwiperSlide>

        <div class="swiper-scrollbar end-0"></div>
      </Swiper>
    </div>
  </b-col>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Scrollbar } from 'swiper/modules'

import { Icon } from '@iconify/vue'
import XIcon from '@iconify/icons-bx/bx-x'
import SearchIcon from '@iconify/icons-bx/bx-search'

import { contactData } from '@/views/account/messages/data'
</script>
