<template>
  <section class="bg-secondary py-5">
    <b-container class="py-2 py-md-4 py-lg-5">
      <b-row>
        <b-col md="4">
          <div class="position-relative d-flex h-100">
            <div
              class="position-absolute top-0 start-0 w-100 h-100 rounded-3 bg-size-cover bg-repeat-0 bg-position-center"
              :style="{ backgroundImage: `url('${testimonialImg}')` }"
            ></div>
          </div>
        </b-col>
        <b-col md="8">
          <figure
            class="card position-relative border-0 shadow-sm py-3 p-0 p-lg-4 mt-4 mb-0 ms-xl-5"
          >
            <span
              class="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-lg-5"
            >
              <Icon :icon="QuoteLeftIcon" />
            </span>
            <blockquote class="card-body mt-2 mb-0">
              <p class="fs-lg">
                Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius
                mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget.
                Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam
                integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris.
              </p>
            </blockquote>
            <figcaption class="card-footer border-0 d-sm-flex pt-0 mt-n3 mt-lg-0">
              <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-4">
                <div class="ps-3 ps-md-0">
                  <h5 class="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                  <span class="fs-sm text-muted">Head of Marketing</span>
                </div>
              </div>
              <img
                :src="brand"
                width="160"
                class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
                alt="Company logo"
              />
            </figcaption>
          </figure>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import testimonialImg from '@/assets/img/testimonials/03.jpg'
import brand from '@/assets/img/brands/02.svg'
import { Icon } from '@iconify/vue'
import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
</script>
