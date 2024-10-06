<template>
  <section id="examples">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="9" xl="8" class="text-center">
          <a
            href="#"
            class="d-inline-flex align-items-center fs-sm fw-semibold text-decoration-none px-3"
          >
            <span
              :style="{
                fontSize: '24px',
                background: 'linear-gradient(90deg, #81CB30 0%, #14B7C6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 400
              }"
              >COMMERCIALIZER UX IN ACTION</span
            >
          </a>
          <h2 class="examples__heading">Designed for Users, Powered by Strategy and Innovation</h2>
          <p
            class="text-white"
            :style="{
              fontSize: '18px'
            }"
          >
            Explore how we blend user-first design with strategic insights and cutting-edge
            innovation to create experiences that stand out. See the quality for yourself in our
            portfolio.
          </p>
        </b-col>
      </b-row>
      <Swiper
        :style="{ marginTop: '60px' }"
        :modules="[Pagination]"
        :slidesPerView="1"
        :space-between="24"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          560: {
            slidesPerView: 2
          },
          960: {
            slidesPerView: 3
          }
        }"
      >
        <SwiperSlide v-for="(swiper, idx) in examples" :key="idx">
          <div href="#" class="d-block rounded-3 overflow-hidden">
            <div class="">
              <img
                :src="swiper.image"
                :style="{
                  aspectRatio: '387/300'
                }"
              />
              <div
                :style="{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  padding: '1.25rem 1rem'
                }"
              >
                <div
                  :style="{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    color: 'black',
                    fontSize: '14px',
                    padding: '0.125rem 0.25rem',
                    fontWeight: '600'
                  }"
                >
                  {{ swiper.tag }}
                </div>
                <h3
                  :style="{
                    fontSize: '20px',
                    fontWeight: '700',
                    margin: '0',
                    marginTop: '1rem'
                  }"
                >
                  {{ swiper.title }}
                </h3>
                <div
                  :style="{
                    marginTop: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    display: 'block',
                    height: '0.1rem',
                    width: '100%',
                    borderRadius: '100rem'
                  }"
                />
                <div
                  class="d-flex align-items-center"
                  :style="{ marginTop: '1.25rem', gap: '0.75rem' }"
                >
                  <img
                    :src="swiper.image"
                    :style="{ height: '48px', width: '48px', borderRadius: '4px' }"
                  />
                  <div class="d-flex flex-column">
                    <p
                      :style="{ fontSize: '16px', fontWeight: '700', margin: '0' }"
                      class="text-white"
                    >
                      {{ swiper.name }}
                    </p>
                    <span :style="{ fontSize: '14px', fontWeight: '400' }">{{
                      swiper.location
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- Pagination (bullets) -->
        <div class="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import ecommerceImg from '@/assets/img/landing/saas-5/categories/ecommerce.jpg'
import transportationImg from '@/assets/img/landing/saas-5/categories/transportation.jpg'
import marketingImg from '@/assets/img/landing/saas-5/categories/marketing.jpg'
import roboticsImg from '@/assets/img/landing/saas-5/categories/robotics.jpg'
import programmingImg from '@/assets/img/landing/saas-5/categories/programming.jpg'

type Example = {
  tag: string
  title: string
  name: string
  location: string
  image: string
  thumbnail: string
}

const examples: Example[] = [
  {
    tag: 'FINTECH',
    title: `QR Payment & Sales Mobile App
UX Design`,
    name: 'Ariv Pay',
    location: 'London, UK',
    image: '/images/case-studies/ariv-pay.png',
    thumbnail: '/images/case-studies/ariv-pay-thumbnail.png'
  },
  {
    tag: 'MANAGEMENT',
    title: `Calendar Meetings & Appointments App UX Design`,
    name: 'CalendQ',
    location: 'Doha, Quatar',
    image: '/images/case-studies/calendq.png',
    thumbnail: '/images/case-studies/calendq-thumbnail.png'
  },
  {
    tag: 'LEGAL',
    title: 'Dash Screen Panel with Zero Layer UX Design',
    name: 'Agreementor',
    location: 'Delaware, USA',
    image: '/images/case-studies/agreementor.png',
    thumbnail: '/images/case-studies/agreementor-thumbnail.png'
  }
]
</script>

<style lang="scss" scoped>
.examples__heading {
  font-size: 32px;
  color: #fff;
  margin-bottom: 3rem;

  @include mq(md) {
    text-align: center;
    font-size: 28px;
  }

  @include mq(sm) {
    font-size: 24px;
  }

  @include mq(xs) {
    font-size: 22px;
  }
}
</style>
