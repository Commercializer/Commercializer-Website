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
          <h2 class="display-4 text-white mb-4" style="font-size: 32px">
            Designed for Users, Powered by Strategy and Innovation
          </h2>
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
        <SwiperSlide v-for="(swiper, idx) in categoriesData" :key="idx">
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
                  FINTECH
                </div>
                <h3
                  :style="{
                    fontSize: '20px',
                    fontWeight: '700',
                    margin: '0',
                    marginTop: '1rem'
                  }"
                >
                  Smart Crypto-Wallet Mobile App UX Design
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
                      Mint Pay
                    </p>
                    <span :style="{ fontSize: '14px', fontWeight: '400' }">California, USA</span>
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


const categoriesData = [
  {
    head: 'E-commerce',
    description: 'Order processing, price suggestions, user research',
    image: ecommerceImg
  },
  {
    head: 'Transportation',
    description: 'Itinerary planning, freight pricing culculations, etc.',
    image: transportationImg
  },
  {
    head: 'Marketing',
    description: 'Market research, data visualization, user testing',
    image: marketingImg
  },
  {
    head: 'Robotics',
    description: 'Enhancing robot learning, improve robotic precision',
    image: roboticsImg
  },
  {
    head: 'Programming',
    description: 'Code generation, code debugging and optimization',
    image: programmingImg
  }
]
</script>
