<template>
  <!-- <div> -->
  <section class="position-relative zindex-2 px-3 mt-n2 mt-sm-0">
    <div class="card border-0 rounded-3 shadow py-5 px-3 px-lg-0 mx-auto" style="max-width: 1560px">
      <b-container class="py-lg-4 py-xl-5">
        <b-row class="pt-md-3 pb-md-2">
          <b-col
            lg="5"
            class="d-flex flex-column align-items-center justify-content-center text-center text-lg-start mb-3 mb-sm-4 mb-lg-0"
          >
            <div class="logo-with-name">
              <img :src="logoImg" alt="Commercializer" width="47" />
              <p>Commercializer</p>
            </div>
            <p class="text-center mt-4" style="font-size: 20px; width: 100%; color: #fff">
              The Innovation Hub Where Usability Meets Profitability
            </p>
          </b-col>
          <b-col lg="7" xl="6" class="offset-xl-1">
            <h3>Our Products & Services Are Trusted By</h3>
            <b-row class="g-4 g-xl-4 mt-3">
              <b-col sm="3" v-for="client in clients" :key="client.image">
                <div
                  class="d-flex justify-content-center align-items-center pe-md-2"
                  style="
                    padding: 1.25rem 1rem;
                    border-radius: 0.35rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                  "
                >
                  <img
                    :src="client.image"
                    style="
                      filter: drop-shadow(
                          0px 0.8645132780075073px 4.602016925811768px rgba(99, 102, 241, 0.02)
                        )
                        drop-shadow(
                          0px 2.9037201404571533px 10.33138370513916px rgba(99, 102, 241, 0.05)
                        )
                        drop-shadow(0px 13px 27px rgba(99, 102, 241, 0.17));
                      height: 30px;
                    "
                    alt="Payment icon"
                  />
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
  <!-- </div> -->
</template>

<script setup lang="ts">
import logoImg from '@/assets/img/logo-large.png'
import { featureData } from '@/views/landings/mobile-app-3/data'

const clients: { image: string }[] = [
  {
    image: '/images/clients/mastercard-logo.webp'
  },
  {
    image: '/images/clients/JAT-logo.webp'
  },
  {
    image: '/images/clients/amana-logo.webp'
  },
  {
    image: '/images/clients/NCINGA-logo.webp'
  },
  {
    image: '/images/clients/hatch-logo.webp'
  },
  {
    image: '/images/clients/Ex-pack-logo.webp'
  },
  {
    image: '/images/clients/payable-logo.webp'
  },
  {
    image: '/images/clients/fastcorp-logo.webp'
  }
]
</script>

<style lang="scss" scoped>
.logo-with-name {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  img {
    width: 150px;

    @include mq(lg) {
      width: 100px;
    }

    @include mq(md) {
      width: 72px;
    }

    @include mq(sm) {
      width: 56px;
    }
  }

  p {
    font-weight: 700;
    font-size: 54px;
    color: #fff;
    margin-bottom: 0;

    @include mq(lg) {
      font-size: 42px;
    }

    @include mq(md) {
      font-size: 36px;
    }

    @include mq(sm) {
      font-size: 32px;
    }

    @include mq(xs) {
      font-size: 28px;
    }
  }
}

h3 {
  font-size: 28px;
  font-weight: 700;
  color: #fff;

  @include mq(lg) {
    font-size: 27px;
  }

  @include mq(md) {
    font-size: 26px;
    text-align: center;
  }

  @include mq(sm) {
    font-size: 24px;
  }

  @include mq(xs) {
    font-size: 22px;
  }
}
</style>
