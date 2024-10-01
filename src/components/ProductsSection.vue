<template>
  <section id="products" class="mt-5">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="9" xl="8" class="text-center">
          <h2 class="display-4 text-white mb-4 products-heading" style="font-size: 32px">
            From Innovation To Impact!
          </h2>
          <p
            class="text-white"
            :style="{
              fontSize: '18px'
            }"
          >
            Our tried and tested products!
          </p>
        </b-col>
      </b-row>
      <div class="row-1">
        <div class="box box-1">
          <img src="/images/logos/commercial-prime.svg" alt="Commercial Prime" class="logo" />
          <h4>Empowering <span style="color: #d1b75f">Seamless Connections</span></h4>
          <p>NFC-Based One Tap Connect Digital Business Card</p>
          <img
            src="/images/products/commercial-prime.png"
            alt="Commercial Prime 1"
            class="product-img"
          />
        </div>
        <div class="box box-2">
          <img
            src="/images/products/commercial-prime-2.png"
            alt="Commercial Prime 2"
            style="top: 0; right: 0; width: 75%; position: absolute"
          />
          <div style="position: absolute; bottom: 0; left: 1rem; color: #fff">
            <h4 style="font-size: 24px; font-weight: 700; margin: 0">Made For</h4>
            <p style="font-size: 14px">
              Entrepreneurs
              <span style="color: #d1b75f">.</span>
              Corporations
              <span style="color: #d1b75f">.</span>
              Professionals
            </p>
          </div>
        </div>
        <div class="box box-3">
          <div
            class="d-flex align-items-center gap-3"
            style="
              position: absolute;
              top: 1rem;
              right: 50%;
              transform: translateX(50%);
              width: 75%;
            "
          >
            <img src="/images/logos/privacy.png" alt="Privacy" />
            <h4 style="color: #d1b75f; font-size: 16px; margin: 0"># Privacy Protected</h4>
          </div>
          <img
            src="/images/products/commercial-prime-3.png"
            alt="Commercial Prime 3"
            style="
              top: 2rem;
              right: 50%;
              transform: translateX(50%);
              width: 75%;
              position: absolute;
            "
          />
          <button
            style="
              border: none;
              outline: none;
              background-color: #fff;
              color: #000;
              margin-inline: auto;
              display: block;
              padding: 10px 24px;
              border-radius: 8px;
              font-weight: 500;
              position: absolute;
              bottom: 1rem;
              right: 50%;
              font-size: 14px;
              transform: translateX(50%);
              width: 70%;
            "
          >
            Visit Commercial Prime
          </button>
        </div>
        <div class="box box-4">
          <img
            src="/images/products/commercial-prime-4.png"
            alt="Commercial Prime 2"
            style="top: 0; left: 0; width: 80%; position: absolute"
          />
          <div
            style="
              position: absolute;
              bottom: 1rem;
              right: 1rem;
              color: #fff;
              display: flex;
              align-items: center;
            "
          >
            <Icon :icon="UserIcon" style="font-size: 50px; color: #fff" />
            <div>
              <h4 style="font-size: 26px; font-weight: 700; margin: 0; text-align: right">5000+</h4>
              <p style="font-size: 14px; text-align: right; margin: 0">Active Users</p>
            </div>
          </div>
        </div>
        <div
          class="box box-5"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
        >
          <img
            src="/images/logos/network-logo.svg"
            alt="Network"
            style="width: 72px; height: 72px"
          />
          <div>
            <h4 style="font-size: 26px; font-weight: 700; margin: 0">1 Million+</h4>
            <p style="font-size: 14px; margin: 0">Connections Made</p>
          </div>
        </div>
        <div
          class="box box-6"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
        >
          <img
            src="/images/logos/network-logo-2.svg"
            alt="Network"
            style="width: 72px; height: 72px"
          />
          <div>
            <h4 style="font-size: 26px; font-weight: 700; margin: 0">Multi Tenancy</h4>
            <p style="font-size: 14px; margin: 0">Architecture</p>
          </div>
        </div>
      </div>
      <div class="row-2">
        <div class="box box-1">
          <img src="/images/logos/billable.png" alt="Commercial Prime" class="logo" />
          <h4>All in One Business Toolkit for MSMEs</h4>
          <p>
            Well Optimized, Affordable, Simple & Easy business management toolkit for micro and
            small businesses.
          </p>
          <img
            src="/images/products/billable.png"
            alt="Billable 1"
            class="product-img"
          />
        </div>
        <div class="box box-2">2</div>
        <div class="box box-3">3</div>
        <div
          class="box box-4"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
        >
          <img
            src="/images/logos/credit-card.svg"
            alt="Network"
            style="width: 72px; height: 72px"
          />
          <div>
            <h4 style="font-size: 26px; font-weight: 700; margin: 0">1 Billion+</h4>
            <p style="font-size: 14px; margin: 0">Worth Invoices Processed</p>
          </div>
        </div>
        <div
          class="box box-5"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
        >
          <img src="/images/logos/hex.svg" alt="Network" style="width: 72px; height: 72px" />
          <div>
            <h4 style="font-size: 26px; font-weight: 700; margin: 0">300,000+</h4>
            <p style="font-size: 14px; margin: 0">Products</p>
          </div>
        </div>
        <div class="box box-6">6</div>
      </div>
      <div class="row-3">
        <div class="box box-1">1</div>
        <div class="box box-2">2</div>
        <div class="box box-3">3</div>
        <div class="box box-4">4</div>
        <div class="box box-5">5</div>
        <div class="box box-6">6</div>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import UserIcon from '@iconify/icons-bx/bx-user'
</script>

<style lang="scss" scoped>
.box {
  border-radius: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: radial-gradient(108.51% 131.17% at 13.08% 8.07%, #1c1c1c 0%, #414141 100%);
  position: relative;
}

.row {
  &-1 {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 40% repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;

    .box {
      &-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 5;

        padding: 2rem 3rem;

        h4 {
          font-size: 24px;
          font-weight: 400;
          margin-top: 1rem;
          color: #fff;
        }

        p {
          color: #fff;
          font-size: 24px;
          font-weight: 700;
          margin-top: 2rem;
        }

        .product-img {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 55%;
        }
      }

      &-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        aspect-ratio: 1;
      }

      &-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 3;
      }

      &-4 {
        grid-column: 2/ 3;
        grid-row: 3 / 5;
      }

      &-5 {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
      }

      &-6 {
        grid-column: 3 / 4;
        grid-row: 4 / 5;
      }
    }
  }

  &-2 {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 40% repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;

    .box {
      &-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 5;

        padding: 2rem 3rem;

        h4 {
          font-size: 20px;
          font-weight: 400;
          margin-top: 1rem;
          color: #fff;
        }

        p {
          color: #fff;
          font-size: 22px;
          font-weight: 700;
          margin-top: 2rem;
        }

        .product-img {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 55%;
        }
      }

      &-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        aspect-ratio: 1;
      }

      &-3 {
        background-color: purple;
        grid-column: 3 / 4;
        grid-row: 1 / 3;
      }

      &-4 {
        background-color: green;
        grid-column: 2/ 3;
        grid-row: 3 / 4;
      }

      &-5 {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
      }

      &-6 {
        grid-column: 3 / 4;
        grid-row: 3 / 5;
      }
    }
  }

  &-3 {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 40% repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;

    .box {
      &-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 5;
      }

      &-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        aspect-ratio: 1;
      }

      &-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 3;
      }

      &-4 {
        grid-column: 2/ 3;
        grid-row: 3 / 5;
      }

      &-5 {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
      }

      &-6 {
        grid-column: 3 / 4;
        grid-row: 4 / 5;
      }
    }
  }
}
</style>
