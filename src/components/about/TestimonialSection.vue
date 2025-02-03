<template>
    <b-container class="pb-5 mb-md-2 mb-xl-4">
      <b-row class="pb-lg-2">
        <b-col md="5" class="mb-4 mb-md-0">
          <div class="card p-0 overflow-hidden ">
            <img
              :src="pic"
              alt="Profile Picture"
              class="img-fluid h-100 w-100 profile-img"
            />
          </div>
        </b-col>
  
        <b-col md="7" class="col-md-7">
          <div class="card border-0 shadow-sm p-4 p-xxl-5 bg-dark text-light">
            <div class="d-flex justify-content-start pb-4 mb-2">
              <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <Icon :icon="QuoteLeftIcon" />
              </span>
            </div>
  
            <div>
              <p class="Paragrapgh">
                At Commercializer, we're more than just a technology company; we're your partner in innovation.
                With over nine years of experience building successful companies and products, I've witnessed
                firsthand the transformative power of technology.
              </p>
              <p class="Paragrapgh">
                Our vision is built on the foundation of trust and quality. I believe that innovation, experience, and
                commercial strategy are not isolated components but interconnected elements that drive success.
              </p>
              <p class="Paragrapgh">
                We're committed to helping our clients navigate the complexities of the market and bring their
                innovative ideas to life. Our goal is to provide the fastest path to market with products that are
                not only technologically advanced but also commercially viable.
              </p>
              <p class="last-line">
                Join us on this journey of innovation and let's build a brighter future together.
              </p>
              <h5 class="Name mt-4">Supun Mayushan</h5>
              <p class="text-muted">CEO, Commercializer LLC</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script setup lang="ts">
  import pic from '@/assets/img/Supun.png'
  import { Icon } from '@iconify/vue'
  import QuoteLeftIcon from '@iconify/icons-bx/bxs-quote-left'
  </script>
  
  <style scoped>
  .profile-img {
    object-fit: cover;
  }
  
  .card {
    height: 100%;
  }
  
  .last-line {
    font-style: italic;
  }
  
  .Paragrapgh {
    margin-bottom: 1.5rem;
  }
  
  .Name {
    font-weight: 700;
  }
  </style>
  