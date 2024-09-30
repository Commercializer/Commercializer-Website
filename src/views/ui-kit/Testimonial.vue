<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Testimonials / reviews"
      description="Component is designed to showcase testimonials from satisfied clients or reviews of the products on your website."
      is-silicon-component
    />

    <!-- &lt;!&ndash; Quotation &ndash;&gt; -->
    <section id="quotation" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Quotation</h2>
      <div class="pt-1">
        <figure class="position-relative mt-1 ps-4 mb-0" style="max-width: 60rem">
          <span class="position-absolute top-0 start-0 w-3 h-100 bg-primary"></span>
          <blockquote class="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
            <p>
              Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt
              vulputate lorem cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar
              eu. Tempus vel, mauris sed proin aliquet vulputate cras est. Ut ornare eget a viverra.
            </p>
          </blockquote>
          <figcaption class="d-flex align-items-center pt-3 ps-1 ps-sm-3">
            <img
              src="@/assets/img/avatar/04.jpg"
              width="48"
              class="rounded-circle"
              alt="Jane Cooper"
            />
            <div class="ps-3">
              <h6 class="fw-semibold lh-base mb-0">Jane Cooper</h6>
              <span class="fs-sm text-muted">CEO of Ipsum Company</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- &lt;!&ndash; Testimonial: Style 1 &ndash;&gt; -->
    <section id="testimonial-1" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Testimonial: Style 1</h2>
      <div class="pt-1">
        <figure
          class="card h-100 position-relative border-0 shadow-sm pt-4 mt-4 mb-0"
          style="width: 37rem"
        >
          <span
            class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
          >
            <Icon :icon="QuoteLeftIcon" />
          </span>
          <blockquote class="card-body mb-0">
            <p class="mb-0">
              Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada
              suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare
              consectetur. Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus.
            </p>
          </blockquote>
          <figcaption class="card-footer border-0 d-flex align-items-center pt-0">
            <img
              src="@/assets/img/avatar/10.jpg"
              width="48"
              class="rounded-circle"
              alt="Jerome Bell"
            />
            <div class="ps-3">
              <h6 class="fw-semibold lh-base mb-0">Jerome Bell</h6>
              <span class="fs-sm text-muted">Co-founder of Lorem Company</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- &lt;!&ndash; Testimonial: Style 2 &ndash;&gt; -->
    <section id="testimonial-2" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Testimonial: Style 2</h2>
      <div class="pt-1">
        <b-row>
          <b-col md="4">
            <div class="position-relative d-flex h-100">
              <div
                class="position-absolute top-0 start-0 w-100 h-100 rounded-3 bg-size-cover bg-repeat-0 bg-position-center"
                :style="{ backgroundImage: `url('${testimonial3}')` }"
              ></div>
            </div>
          </b-col>
          <b-col md="8">
            <figure
              class="card position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 mt-4 mb-0 ms-xxl-4"
            >
              <span
                class="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5"
              >
                <Icon :icon="QuoteLeftIcon" />
              </span>
              <blockquote class="card-body mt-2 mb-0">
                <p class="fs-lg">
                  Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius
                  mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget.
                  Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam
                  integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at
                  mauris.
                </p>
              </blockquote>
              <figcaption class="card-footer border-0 d-sm-flex pt-0 mt-n3 mt-lg-0">
                <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-4">
                  <img
                    src="@/assets/img/avatar/05.jpg"
                    width="48"
                    class="d-md-none rounded-circle"
                    alt="Ralph Edwards"
                  />
                  <div class="ps-3 ps-md-0">
                    <h5 class="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                    <span class="fs-sm text-muted">Head of Marketing</span>
                  </div>
                </div>
                <img
                  src="@/assets/img/brands/02.svg"
                  width="160"
                  class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
                  alt="Company logo"
                />
              </figcaption>
            </figure>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- &lt;!&ndash; Testimonial: Style 3 &ndash;&gt; -->
    <section id="testimonial-3" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Testimonial: Style 3</h2>

      <div class="pt-1">
        <div class="card border-0 bg-secondary p-1 p-sm-0 p-md-2" style="max-width: 400px">
          <img
            src="@/assets/img/landing/app-showcase-3/integrations/magento-color-light.svg"
            class="d-block d-dark-mode-none mx-auto"
            width="165"
            alt="Magento"
          />
          <img
            src="@/assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg"
            class="d-none d-dark-mode-block mx-auto"
            width="165"
            alt="Magento"
          />
          <div class="card-body text-center pt-1">
            <p class="pb-3 mb-3">
              Differentiate your app from the competition with this SaaS platform's outstanding
              performance and exceptional API for implementing AI models into your application.
            </p>
            <img
              src="@/assets/img/avatar/55.jpg"
              class="d-inline-block rounded-circle"
              width="80"
              alt="Avatar"
            />
            <div class="pt-2 mt-1">
              <h3 class="fs-lg mb-1">Christopher Davis</h3>
              <p class="fs-sm text-muted mb-0">Network Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- &lt;!&ndash; Review: Style 1 &ndash;&gt; -->
    <section id="review-1" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Review: Style 1</h2>
      <div class="pt-1">
        <figure class="d-flex flex-column h-100 mt-4 mb-0" style="width: 20rem">
          <div class="card h-100 position-relative border-0 shadow-sm pt-4">
            <span
              class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
            >
              <Icon :icon="QuoteLeftIcon" />
            </span>
            <blockquote class="card-body pb-3 mb-0">
              <p class="mb-0">
                Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue
                commodo id quis tempus etiam pulvinar at maecenas.
              </p>
            </blockquote>
            <div class="card-footer border-0 text-nowrap pt-0">
              <Icon :icon="StarIcon" class="text-warning" />
              <Icon :icon="StarIcon" class="text-warning" />
              <Icon :icon="StarIcon" class="text-warning" />
              <Icon :icon="StarIcon" class="text-muted opacity-75" />
              <Icon :icon="StarIcon" class="text-muted opacity-75" />
            </div>
          </div>
          <figcaption class="d-flex align-items-center pt-4">
            <img
              src="@/assets/img/avatar/03.jpg"
              width="48"
              class="rounded-circle"
              alt="Fannie Summers"
            />
            <div class="ps-3">
              <h6 class="fs-sm fw-semibold mb-0">Fannie Summers</h6>
              <span class="fs-xs text-muted">Designer</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <!--  Review: Style 2 -->
    <section id="review-2" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Review: Style 2</h2>
      <div class="pt-1">
        <div
          class="d-flex flex-column flex-sm-row align-items-start align-items-sm-center"
          style="max-width: 560px"
        >
          <div
            class="position-relative bg-light-subtle rounded-circle flex-shrink-0 zindex-1 p-2 ms-4 ms-sm-0 mb-n5 mb-sm-0 me-sm-n5"
          >
            <img src="@/assets/img/avatar/51.jpg" class="rounded-circle" width="80" alt="Avatar" />
          </div>
          <div class="card border-0 bg-secondary pt-5 pb-1 px-1 ps-sm-5 pe-sm-3 py-sm-3">
            <div class="card-body">
              <div class="fs-lg text-nowrap mb-3">
                <Icon :icon="StarIcon" class="text-warning" />
                <Icon :icon="StarIcon" class="text-warning" />
                <Icon :icon="StarIcon" class="text-warning" />
                <Icon :icon="StarIcon" class="text-warning" />
                <Icon :icon="StarIcon" class="text-muted opacity-75" />
              </div>
              <p class="text-body fs-lg mb-3">
                This app has completely transformed the way I approach my finances. It's packed with
                useful features and it's helped me stay on top of my finances and reach my financial
                goals.
              </p>
              <h6 class="fs-lg mb-0">Jenny Wilson</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  Testimonials slider: Style 1 -->
    <section id="testimonials-slider-1" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Testimonials slider: Style 1</h2>
      <div class="pt-1">
        <div class="position-relative px-sm-5" style="max-width: 61rem">
          <b-button
            id="prev"
            class="btn-prev btn-icon btn-sm position-absolute top-50 translate-middle-y start-0 d-none d-sm-inline-flex mt-n4"
            aria-label="Previous"
          >
            <Icon :icon="ChevronLeftIcon" />
          </b-button>
          <b-button
            id="next"
            class="btn-next btn-icon btn-sm position-absolute top-50 translate-middle-y end-0 d-none d-sm-inline-flex mt-n4"
            aria-label="Next"
          >
            <Icon :icon="ChevronRightIcon" />
          </b-button>
          <Swiper
            class="swiper-nav-onhover pt-1 mx-md-2"
            :modules="[Pagination, Navigation]"
            :spaceBetween="1"
            :loop="true"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
            :navigation="{
              prevEl: '#prev',
              nextEl: '#next'
            }"
            wrapper-class="pt-4 pb-3"
          >
            <SwiperSlide class="h-auto px-2" v-for="(item, idx) in style1Data" :key="idx">
              <figure class="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                <span
                  class="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5"
                >
                  <Icon :icon="QuoteLeftIcon" />
                </span>
                <blockquote class="card-body mt-2 mb-2">
                  <p class="fs-lg mb-0">{{ item.comment }}</p>
                </blockquote>
                <figcaption
                  class="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0"
                >
                  <img
                    :src="item.author.avatar"
                    width="60"
                    class="rounded-circle"
                    alt="Annette Black"
                  />
                  <div class="ps-3">
                    <h6 class="fw-semibold lh-base mb-0">{{ item.author.name }}</h6>
                    <span class="fs-sm text-muted">{{ item.author.designation }}</span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>

            <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
          </Swiper>
        </div>
      </div>
    </section>

    <!--  Testimonials slider: Style 2 -->
    <section id="testimonials-slider-2" class="border-bottom py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Testimonials slider: Style 2</h2>
      <div class="pt-1">
        <b-row>
          <b-col md="4" class="d-none d-md-block">
            <Swiper
              space-Between="10"
              :slides-Per-View="1"
              @swiper="setThumbsSwiper1"
              :modules="[Navigation, Thumbs, FreeMode]"
            >
              <SwiperSlide
                class="card bg-transparent border-0"
                v-for="(item, idx) in style2Data"
                :key="idx"
              >
                <img
                  :src="item.author.avatar"
                  class="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center"
                  alt="Image"
                />
                <div class="card-footer d-flex w-100 border-0 pb-0">
                  <img
                    :src="item.author.company?.image"
                    width="160"
                    class="d-none d-xl-block"
                    alt="Company logo"
                  />
                  <div class="border-start-xl ps-xl-4 ms-xl-2">
                    <h5 class="fw-semibold lh-base mb-0">{{ item.author.name }}</h5>
                    <span class="fs-sm text-muted">{{ item.author.designation }}</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </b-col>
          <div class="col-md-8">
            <div class="card border-0 shadow-sm p-4 p-xxl-5 ms-xxl-4">
              <div class="d-flex justify-content-between pb-4 mb-2">
                <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                  <Icon :icon="QuoteLeftIcon" />
                </span>
                <div class="d-flex">
                  <b-button
                    id="prev2"
                    class="btn-prev btn-icon me-2"
                    size="sm"
                    aria-label="Previous"
                  >
                    <Icon :icon="ChevronLeftIcon" />
                  </b-button>
                  <b-button id="next2" class="btn-next btn-icon ms-2" size="sm" aria-label="Next">
                    <Icon :icon="ChevronRightIcon" />
                  </b-button>
                </div>
              </div>
              <Swiper
                class="mx-0 mb-md-n2 mb-xxl-n3"
                :modules="[Pagination, Navigation, Thumbs, Controller]"
                :thumbs="{ swiper: thumbsSwiper1 }"
                :spaceBetween="24"
                :loop="true"
                :tabs="true"
                :pagination="{
                  el: '.swiper-pagination',
                  clickable: true
                }"
                :navigation="{
                  prevEl: '#prev2',
                  nextEl: '#next2'
                }"
              >
                <SwiperSlide class="h-auto" v-for="(item, idx) in style2Data" :key="idx">
                  <figure class="card h-100 position-relative border-0 bg-transparent">
                    <blockquote class="card-body p-0 mb-0">
                      <p class="fs-lg mb-0">{{ item.comment }}</p>
                    </blockquote>
                    <figcaption class="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                      <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                        <img :src="item.author.avatar" width="48" class="rounded-circle" alt="" />
                        <div class="ps-3">
                          <h5 class="fw-semibold lh-base mb-0">{{ item.author.name }}</h5>
                          <span class="fs-sm text-muted">{{ item.author.designation }}</span>
                        </div>
                      </div>
                      <img
                        :src="item.author.company?.image"
                        width="160"
                        class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
                        alt="Company logo"
                      />
                    </figcaption>
                  </figure>
                </SwiperSlide>

                <div class="swiper-pagination position-relative pt-3 mt-4 d-none d-md-flex"></div>
              </Swiper>
            </div>
          </div>
        </b-row>
      </div>
    </section>

    <!-- Testimonials slider: Style 3   -->
    <section id="testimonials-slider-3" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Testimonials slider: Style 3</h2>
      <div class="pt-1">
        <div class="px-2 px-sm-0">
          <Swiper
            class=""
            :modules="[Pagination, FreeMode]"
            :slidesPerView="1"
            :centeredSlides="true"
            :spaceBetween="8"
            :loop="true"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
            :breakpoints="{
              500: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1650: {
                slidesPerView: 4,
                spaceBetween: 24
              }
            }"
          >
            <SwiperSlide class="h-auto pt-4" v-for="(item, idx) in style3Data" :key="idx">
              <figure class="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                <div class="card h-100 position-relative border-0 shadow-sm pt-4">
                  <span
                    class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
                  >
                    <Icon :icon="QuoteLeftIcon" />
                  </span>
                  <blockquote class="card-body pb-3 mb-0">
                    <p class="mb-0">{{ item.comment }}</p>
                  </blockquote>
                  <div class="card-footer border-0 text-nowrap pt-0">
                    <Icon
                      v-for="(star, idx) in Array.from(new Array(Math.floor(item.rating ?? 0)))"
                      :key="idx"
                      :icon="StarIcon"
                      class="bx text-warning"
                    ></Icon>

                    <Icon
                      v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(item.rating ?? 0)))"
                      :key="idx"
                      :icon="StarBxIcon"
                      class="bx text-muted opacity-75"
                    ></Icon>
                  </div>
                </div>
                <figcaption class="d-flex align-items-center ps-4 pt-4">
                  <img
                    :src="item.author.avatar"
                    width="48"
                    class="rounded-circle"
                    alt="Fannie Summers"
                  />
                  <div class="ps-3">
                    <h6 class="fs-sm fw-semibold mb-0">{{ item.author.name }}</h6>
                    <span class="fs-xs text-muted">{{ item.author.designation }}</span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>

            <div class="swiper-pagination position-relative pt-1 pt-sm-3 mt-5"></div>
          </Swiper>
        </div>
      </div>
    </section>

    <!-- Testimonials slider: Style 4 -->
    <section id="testimonials-slider-4" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Testimonials slider: Style 4</h2>
      <div class="pt-1">
        <div class="row">
          <div class="col-md-8">
            <div class="card border-0 shadow-sm p-4 p-xxl-5 mb-4 me-xxl-4">
              <div class="pb-4 mb-2">
                <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                  <Icon :icon="QuoteLeftIcon" />
                </span>
              </div>
              <Swiper
                class="mx-0 mb-md-n2 mb-xxl-n3"
                :modules="[Navigation, Thumbs, Controller]"
                :thumbs="{ swiper: thumbsSwiper2 }"
                :spaceBetween="24"
                :pager="true"
                :loop="true"
                :tabs="true"
                :navigation="{
                  prevEl: '.page-prev',
                  nextEl: '.page-next'
                }"
              >
                <SwiperSlide class="h-auto" v-for="(item, idx) in style2Data" :key="idx">
                  <figure class="card h-100 position-relative border-0 bg-transparent">
                    <blockquote class="card-body p-0 mb-0">
                      <p class="fs-lg mb-0">{{ item.comment }}</p>
                    </blockquote>
                    <figcaption class="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                      <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                        <img
                          :src="item.author.avatar"
                          width="48"
                          class="rounded-circle"
                          alt="Ralph Edwards"
                        />
                        <div class="ps-3">
                          <h5 class="fw-semibold lh-base mb-0">{{ item.author.name }}</h5>
                          <span class="fs-sm text-muted">{{ item.author.designation }}</span>
                        </div>
                      </div>
                      <img
                        :src="item.author.company?.image"
                        width="160"
                        class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
                        alt="Company logo"
                      />
                    </figcaption>
                  </figure>
                </SwiperSlide>
              </Swiper>
            </div>
            <nav class="pagination d-flex justify-content-center justify-content-md-start">
              <div class="page-item me-2">
                <a class="page-link page-prev btn-icon btn-sm" href="#" aria-label="Previous">
                  <Icon :icon="ChevronLeftIcon" />
                </a>
              </div>
              <ul class="list-unstyled d-flex justify-content-center w-auto mb-0"></ul>
              <div class="page-item ms-2">
                <a class="page-link page-next btn-icon btn-sm" href="#" aria-label="Next">
                  <Icon :icon="ChevronRightIcon" />
                </a>
              </div>
            </nav>
          </div>
          <div class="col-md-4 d-none d-md-block">
            <Swiper
              :space-Between="10"
              :slides-Per-View="1"
              @swiper="setThumbsSwiper2"
              :modules="[Navigation, Thumbs, FreeMode]"
            >
              <SwiperSlide
                class="card bg-transparent border-0"
                v-for="(item, idx) in style2Data"
                :key="idx"
              >
                <img
                  :src="item.author.avatar"
                  class="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center"
                  alt="Image"
                />
                <div class="card-footer d-flex w-100 border-0 pb-0">
                  <img
                    :src="item.author.company?.image"
                    width="160"
                    class="d-none d-xl-block"
                    alt="Company logo"
                  />
                  <div class="border-start-xl ps-xl-4 ms-xl-2">
                    <h5 class="fw-semibold lh-base mb-0">{{ item.author.name }}</h5>
                    <span class="fs-sm text-muted">{{ item.author.designation }}</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Thumbs, FreeMode, Controller } from 'swiper/modules'
import testimonial3 from '@/assets/img/testimonials/03.jpg'
import testimonial2 from '@/assets/img/testimonials/02.jpg'
import testimonial1 from '@/assets/img/testimonials/01.jpg'
import avatar14 from '@/assets/img/avatar/14.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar13 from '@/assets/img/avatar/13.jpg'
import avatar5 from '@/assets/img/avatar/05.jpg'
import avatar6 from '@/assets/img/avatar/06.jpg'
import avatar1 from '@/assets/img/avatar/01.jpg'
import avatar2 from '@/assets/img/avatar/02.jpg'
import avatar3 from '@/assets/img/avatar/03.jpg'
import avatar4 from '@/assets/img/avatar/04.jpg'
import { Icon } from '@iconify/vue'
import StarBxIcon from '@iconify/icons-bx/bx-star'
import StarIcon from '@iconify/icons-bx/bxs-star'
import brand1 from '@/assets/img/brands/01.svg'
import brand2 from '@/assets/img/brands/02.svg'
import brand4 from '@/assets/img/brands/04.svg'

import type { SwiperType } from '@/types'
import { ref } from 'vue'
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'

const thumbsSwiper1 = ref<SwiperType | null>(null)

const thumbsSwiper2 = ref<SwiperType | null>(null)

const setThumbsSwiper1 = (swiper: SwiperType) => {
  return (thumbsSwiper1.value = swiper)
}

const setThumbsSwiper2 = (swiper: SwiperType) => {
  return (thumbsSwiper2.value = swiper)
}

type CompanyType = {
  image: string
  name?: string
  about?: string
}

type AuthorType = {
  avatar: string
  name?: string
  designation?: string
  company?: CompanyType
}

type TestimonialType = {
  comment: string
  author: AuthorType
  rating?: number
}

const style1Author: AuthorType[] = [
  {
    avatar: avatar14,
    name: 'Annette Black',
    designation: 'QA Engineer in Company Name'
  },
  {
    avatar: avatar11,
    name: 'Jerome Bell',
    designation: 'Co-founder of Lorem Company'
  },
  {
    avatar: avatar13,
    name: 'Robert Fox',
    designation: 'CEO of Ipsum Company'
  },
  {
    avatar: avatar13,
    name: 'Robert Fox',
    designation: 'CEO of Ipsum Company'
  }
]

const style1Data: TestimonialType[] = [
  {
    comment:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa lobortis facilisis.',
    author: style1Author[0]
  },
  {
    comment:
      'Id nibh sed purus eu. Viverra eu sed quam pellentesque magna ac sit odio. Mi at interdum hendrerit neque vulputate semper vulputate. Et augue lacinia magna tempor blandit dui porttitor in senectus. Porttitor nulla in ac in quis. Et ultrices lacus, nunc at nulla eu sodales. At aliquam euismod est in praesent ornare etiam id.',
    author: style1Author[1]
  },
  {
    comment:
      'Nec iaculis fermentum interdum habitasse feugiat massa id pellentesque. Ut porta gravida lobortis facilisis dui augue. Fringilla nunc porttitor eget dictum tempus. Lorem erat eu congue curabitur est. Pulvinar morbi pulvinar venenatis rhoncus egestas euismod massa mauris. Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus.',
    author: style1Author[2]
  },
  {
    comment:
      'Nec iaculis fermentum interdum habitasse feugiat massa id pellentesque. Ut porta gravida lobortis facilisis dui augue. Fringilla nunc porttitor eget dictum tempus. Lorem erat eu congue curabitur est. Pulvinar morbi pulvinar venenatis rhoncus egestas euismod massa mauris. Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus.',
    author: style1Author[3]
  }
]

const companyData: CompanyType[] = [
  {
    image: brand1,
    name: 'Lorem Ltd.'
  },
  {
    image: brand2,
    name: 'Company LLC'
  },
  {
    image: brand4,
    name: 'Ipsum Ltd.'
  }
]

const style2Author: AuthorType[] = [
  {
    avatar: testimonial3,
    name: 'Ralph Edwards',
    designation: 'Head of Marketing',
    company: companyData[0]
  },
  {
    avatar: testimonial2,
    name: 'Annette Black',
    designation: 'Strategic Advisor',
    company: companyData[1]
  },
  {
    avatar: testimonial1,
    name: 'Darrell Steward',
    designation: 'Project Manager',
    company: companyData[2]
  }
]

const style2Data: TestimonialType[] = [
  {
    comment:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.',
    author: style2Author[0]
  },
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.',
    author: style2Author[1]
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.',
    author: style2Author[2]
  }
]

const style3Author: AuthorType[] = [
  {
    avatar: avatar3,
    name: 'Fannie Summers',
    designation: 'Designer'
  },
  {
    avatar: avatar2,
    name: 'Robert Fox',
    designation: 'QA Engineer'
  },
  {
    avatar: avatar4,
    name: 'Annette Black',
    designation: 'Project Manager'
  },
  {
    avatar: avatar5,
    name: 'Albert Flores',
    designation: 'PR Director'
  },
  {
    avatar: avatar6,
    name: 'Jenny Wilson',
    designation: 'Marketing'
  }
]

const style3Data: TestimonialType[] = [
  {
    comment: `Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.`,
    author: style3Author[0],
    rating: 3
  },
  {
    comment: `Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.`,
    author: style3Author[1],
    rating: 5
  },
  {
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.`,
    author: style3Author[2],
    rating: 3
  },
  {
    comment: `Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.`,
    author: style3Author[3],
    rating: 4
  },
  {
    comment: `Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.`,
    author: style3Author[4],
    rating: 5
  }
]
</script>
