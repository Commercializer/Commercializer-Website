<template>
  <div class="col-lg-8" style="max-height: 712px">
    <div class="card h-100 border-0 bg-transparent pb-3">
      <!-- Header -->
      <div class="navbar card-header d-flex align-items-center justify-content-between w-100 p-sm-4 p-3">
        <div class="d-flex align-items-center pe-3">
          <b-button class="navbar-toggler d-lg-none me-3" data-bs-toggle="offcanvas" data-bs-target="#contactsList"
            aria-controls="contactsList" aria-label="Toggle contacts list">
            <span class="navbar-toggler-icon"></span>
          </b-button>
          <img src="@/assets/img/avatar/20.jpg" class="rounded-circle" width="40" alt="Albert Flores" />
          <h6 class="mb-0 px-1 mx-2">Albert Flores</h6>
          <div class="bg-success rounded-circle" style="width: 8px; height: 8px"></div>
        </div>
        <div class="d-flex">
          <b-dropdown class="me-sm-2" variant="outline-primary" toggle-class="px-2 px-sm-3">
            <template v-slot:button-content>
                <Icon :icon="DotHorizontalRoundedIcon" class="fs-xl mx-1 mx-sm-0 me-xl-2" />
                <span class="d-none d-xl-inline">More</span>
            </template>

              <b-dropdown-item href="#" class="">View profile</b-dropdown-item>
              <b-dropdown-item href="#" class="">Disable notifications</b-dropdown-item>
              <b-dropdown-item href="#" class="">Edit contact</b-dropdown-item>
              <b-dropdown-item href="#" class="">Delete contact</b-dropdown-item>
              <b-dropdown-item href="#" class="">Delete chat</b-dropdown-item>
              <b-dropdown-item href="#" class="">Clear history</b-dropdown-item>
              <b-dropdown-item href="#" class="">Block user</b-dropdown-item>
          </b-dropdown>
          <button type="button" class="btn btn-outline-danger d-none d-sm-inline-flex px-2 px-sm-3 ms-1">
            <Icon :icon="TrashAltIcon" class="fs-xl me-xl-2" />
            <span class="d-none d-xl-inline">Clear chat</span>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <Swiper class="card-body scrollbar-hover overflow-hidden w-100 pb-0" :modules="[Mousewheel, Scrollbar]"
        direction="vertical" slidesPerView="auto" :freeMode="true" :scrollbar="{
          el: '.swiper-scrollbar'
        }" :mousewheel="true">
        <SwiperSlide class="h-auto">
          <template v-for="(item, idx) in chatData" :key="idx">
            <div class="fs-sm text-muted text-center mb-3">{{ item.date }}</div>

            <template v-for="(chat, idx) in item.chat" :key="idx">
              <div v-if="idx % 2 == 0" class="d-flex align-items-start mb-3">
                <img :src="chat.user.image" class="rounded-circle" :width="40" alt="" />
                <div class="ps-2 ms-1" style="max-width: 348px">
                  <div v-for="message in chat.message" class="bg-secondary p-3 mb-1" style="
                      border-top-right-radius: 0.5rem;
                      border-bottom-right-radius: 0.5rem;
                      border-bottom-left-radius: 0.5rem;
                    ">
                    {{ message }}
                  </div>

                  <div class="fs-sm text-muted">{{ chat.time }}</div>
                </div>
              </div>

              <!-- Own message -->
              <div v-else class="d-flex align-items-start justify-content-end mb-3">
                <div class="pe-2 me-1" style="max-width: 348px">
                  <div v-for="message in chat.message" class="bg-primary text-light p-3 mb-1" style="
                      border-top-left-radius: 0.5rem;
                      border-bottom-right-radius: 0.5rem;
                      border-bottom-left-radius: 0.5rem;
                    ">
                    {{ message }}
                  </div>

                  <div class="d-flex justify-content-end align-items-center fs-sm text-muted">
                    {{ chat.time }}
                    <Icon :icon="CheckIcon" class="fs-xl text-primary ms-2" />
                  </div>
                </div>
                <img :src="chat.user.image" class="rounded-circle" :width="40" alt="" />
              </div>
            </template>
          </template>
        </SwiperSlide>

        <div class="swiper-scrollbar end-0"></div>
      </Swiper>

      <!-- Footer (Send message form) -->
      <div class="card-footer d-sm-flex w-100 border-0 pt-3 pb-3 px-4">
        <div class="position-relative w-100 me-2 mb-3 mb-sm-0">
          <b-form-input type="text" class="form-control-lg" style="padding-right: 85px" />
          <div class="position-absolute top-50 end-0 translate-middle-y d-flex zindex-3 me-2">
            <b-button size="sm" class="btn-icon btn-link nav-link bg-faded-primary-hover me-1" aria-label="Attachment">
              <Icon :icon="PaperClipIcon" class="fs-4" />
            </b-button>
            <b-button size="sm" class="btn-icon btn-link nav-link bg-faded-primary-hover" aria-label="Emoji">
              <Icon :icon="SmileIcon" class="fs-4" />
            </b-button>
          </div>
        </div>
        <b-button variant="primary" size="lg" class="btn-icon d-none d-sm-inline-flex ms-1" aria-label="Send">
          <Icon :icon="SendIcon" />
        </b-button>
        <b-button variant="primary" size="lg" class="w-100 d-sm-none">
          <Icon :icon="SendIcon" class="fs-xl me-2" />
          Send
        </b-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Scrollbar } from 'swiper/modules'
import { chatData } from '@/views/account/messages/data'
import { Icon } from '@iconify/vue'
import DotHorizontalRoundedIcon from '@iconify/icons-bx/bx-dots-horizontal-rounded'
import TrashAltIcon from '@iconify/icons-bx/trash-alt'
import CheckIcon from '@iconify/icons-bx/bx-check'
import PaperClipIcon from '@iconify/icons-bx/paperclip'
import SmileIcon from '@iconify/icons-bx/smile'
import SendIcon from '@iconify/icons-bx/send'
</script>
