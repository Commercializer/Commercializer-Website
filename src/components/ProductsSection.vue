<template>
  <section id="products" style="margin-top: 6rem">
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
           <!-- Our tried and tested products! -->
            Crafted with innovation, experience, and strategic insight, Commercializer products are
            designed for corporates, entrepreneurs, professionals, and MSMEs. Trusted by thousands
            of businesses, our solutions embody quality and reliability, leveraging SaaS and
            multi-tenancy architecture to deliver scalable and robust products.
          </p>
        </b-col>
      </b-row>
      <div
        class="row-1"
        :style="{
          transform: `scale(${scale})`
        }"
        id="commercial-prime"
      >
        <div class="box box-1" id="products" @mousemove="handleMouseMove">
          <img src="/images/logos/commercial-prime.svg" alt="Commercial Prime" class="logo" />
          <h4>Empowering <span style="color: #d1b75f">Seamless Connections</span></h4>
          <p>NFC-Based One Tap Connect Digital Business Card</p>
          <img
            src="/images/products/commercial-prime.png"
            alt="Commercial Prime 1"
            class="product-img"
          />
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow1"
          class="box box-2"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
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
              Corporates
              <span style="color: #d1b75f">.</span>
              Professionals
            </p>
          </div>
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow1"
          class="box box-3"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
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
          <a
            style="
              border: none;
              outline: none;
              background-color: #fff;
              color: #000;
              margin-inline: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px 24px;
              border-radius: 8px;
              font-weight: 500;
              position: absolute;
              bottom: 1rem;
              right: 50%;
              font-size: 14px;
              transform: translateX(50%);
              width: 70%;
              text-decoration: none;
            "
            target="_blank"
            href="https://commercialprime.co.uk/"
          >
            Visit Commercial Prime
          </a>
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow1"
          class="box box-4"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
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
          v-if="isLargerThanLarge || showMoreRow1"
          class="box box-5"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
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
          v-if="isLargerThanLarge || showMoreRow1"
          class="box box-6"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
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
        <div v-if="!isLargerThanLarge" class="mobile-toggle-buttons">
          <button @click="toggleShowMoreRow1" v-if="!showMoreRow1">Show More</button>
          <button @click="toggleShowMoreRow1" v-if="showMoreRow1">Show Less</button>
        </div>
      </div>
      <div
        class="row-2"
        :style="{
          transform: `scale(${scale})`
        }"
        id="billable"
      >
        <div class="box box-1" @mousemove="handleMouseMove">
          <img src="/images/logos/billable.png" alt="Commercial Prime" class="logo" />
          <h4>All in One Business Toolkit for MSMEs</h4>
          <p>
            Well Optimized, Affordable, Simple & Easy business management toolkit for micro and
            small businesses.
          </p>
          <img src="/images/products/billable.png" alt="Billable 1" class="product-img" />
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow2"
          class="box box-2"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img
            src="/images/products/billable-2-1.png"
            alt="Commercial Prime 3"
            style="bottom: 0; left: 2rem; width: 40%; position: absolute"
          />
          <img
            src="/images/products/billable-2-2.png"
            alt="Commercial Prime 3"
            style="top: 0; right: 2rem; width: 42%; position: absolute"
          />
          <a
            style="
              border: none;
              outline: none;
              background-color: #fff;
              color: #000;
              margin-inline: auto;
              padding: 10px 24px;
              border-radius: 8px;
              font-weight: 500;
              position: absolute;
              bottom: 1rem;
              right: 50%;
              font-size: 14px;
              transform: translateX(50%);
              width: 70%;
              text-align: center;
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            href="https://billable.global"
            target="_blank"
          >
            Visit Billable
          </a>
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow2"
          class="box box-3"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img
            src="/images/products/billable-2.png"
            alt="Commercial Prime 2"
            style="
              top: 2rem;
              right: 50%;
              transform: translateX(50%);
              width: calc(100% - 2rem);
              position: absolute;
            "
          />
          <div style="position: absolute; bottom: 0; left: 1rem; color: #fff">
            <h4 style="font-size: 24px; font-weight: 700; margin: 0">Made For</h4>
            <p style="font-size: 14px">
              Retail
              <span style="color: #22c55e">.</span>
              Distributions
              <span style="color: #22c55e">.</span>
              Services
            </p>
          </div>
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow2"
          class="box box-4"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
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
          v-if="isLargerThanLarge || showMoreRow2"
          class="box box-5"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img src="/images/logos/hex.svg" alt="Network" style="width: 72px; height: 72px" />
          <div>
            <h4 style="font-size: 26px; font-weight: 700; margin: 0">300,000+</h4>
            <p style="font-size: 14px; margin: 0">Products</p>
          </div>
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow2"
          class="box box-6"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img
            src="/images/products/billable-4.png"
            alt="Commercial Prime 2"
            style="bottom: 0.5rem; right: 0.5rem; width: 75%; position: absolute"
          />
          <div
            style="
              position: absolute;
              top: 1rem;
              left: 1rem;
              color: #fff;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            "
          >
            <img src="/images/logos/building.svg" style="width: 50px" />
            <div>
              <h4 style="font-size: 26px; font-weight: 700; margin: 0; text-align: right">1200+</h4>
              <p style="font-size: 14px; text-align: right; margin: 0">MSMEs</p>
            </div>
          </div>
        </div>
        <div v-if="!isLargerThanLarge" class="mobile-toggle-buttons">
          <button @click="toggleShowMoreRow2" v-if="!showMoreRow2">Show More</button>
          <button @click="toggleShowMoreRow2" v-if="showMoreRow2">Show Less</button>
        </div>
      </div>
      <div
        class="row-3"
        :style="{
          transform: `scale(${scale})`
        }"
        id="agreementor"
      >
        <div class="box box-1" @mousemove="handleMouseMove">
          <img src="/images/logos/agreementor.png" alt="Commercial Prime" class="logo" />
          <h4>Complex Legal Jargon to Clarity</h4>
          <p>AI Based Legal Agreement Explainer</p>
          <img src="/images/products/agreementor.png" alt="Agreementor 1" class="product-img" />
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow3"
          class="box box-2"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img
            src="/images/products/agreementor-2.png"
            alt="Agreementor 2"
            style="
              top: 2rem;
              right: 48%;
              transform: translateX(50%);
              width: calc(100% - 3rem);
              position: absolute;
            "
          />
          <div style="position: absolute; bottom: 0; left: 1rem; color: #fff">
            <h4 style="font-size: 24px; font-weight: 700; margin: 0">Made For</h4>
            <p style="font-size: 14px">
              Lawyers
              <span style="color: #6e30c8">.</span>
              CEOs
              <span style="color: #6e30c8">.</span>
              Professionals
            </p>
          </div>
        </div>
        <div
          v-if="isLargerThanLarge || showMoreRow3"
          class="box box-3"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img
            src="/images/products/agreementor-3.png"
            alt="Agreementor 3"
            style="
              top: 3rem;
              left: 50%;
              transform: translateX(-50%);
              width: 80%;
              position: absolute;
            "
          />
          <div
            style="
              position: absolute;
              bottom: 1rem;
              right: 1rem;
              color: #fff;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            "
          >
            <img src="/images/logos/deep-learning.svg" style="width: 50px" />
            <div>
              <h4 style="font-size: 26px; font-weight: 700; margin: 0">AI Enabled</h4>
              <p style="font-size: 14px; margin: 0">Revolutionary Features</p>
            </div>
          </div>
        </div>
        <div
           v-if="isLargerThanLarge || showMoreRow3"
          class="box box-4"
          style="overflow: hidden"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <div
            class="d-flex align-items-center gap-3"
            style="
              position: absolute;
              top: 1rem;
              right: 50%;
              transform: translateX(50%);
              width: 75%;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <img src="/images/logos/lock.svg" alt="Logo" />
            <h4 style="font-size: 16px; margin: 0">Trustworthy and Secure</h4>
          </div>
          <img
            src="/images/products/agreementor-4-1.png"
            alt="Agreementor 4-1"
            style="top: 16.5%; left: 15%; width: 27.5%; position: absolute"
          />
          <img
            src="/images/products/agreementor-4-2.png"
            alt="Agreementor 4-2"
            style="top: 33%; right: 35%; transform: translateX(50%); width: 30%; position: absolute"
          />
          <a
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
              text-align: center;
              text-decoration: none;
            "
            href="https://www.agreementor.ai/"
            target="_blank"
          >
            Visit Agreementor
          </a>
        </div>
        <div
           v-if="isLargerThanLarge || showMoreRow3"
          class="box box-5"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img
            src="/images/logos/inspection.svg"
            alt="Network"
            style="width: 72px; height: 72px"
          />
          <div>
            <h4 style="font-size: 26px; font-weight: 700; margin: 0">Simplified</h4>
            <p style="font-size: 14px; margin: 0">Legal</p>
          </div>
        </div>
        <div
           v-if="isLargerThanLarge || showMoreRow3"
          class="box box-6"
          style="display: flex; align-items: center; justify-content: center; gap: 1rem"
          @mousemove="handleMouseMove"
          :class="{ 'mobile-dropdown-item': !isLargerThanLarge }"
        >
          <img
            src="/images/logos/network-layer.svg"
            alt="Network"
            style="width: 72px; height: 72px"
          />
          <div>
            <h4 style="font-size: 26px; font-weight: 700; margin: 0">Multi language</h4>
            <p style="font-size: 14px; margin: 0">Support available</p>
          </div>
        </div>
         <div v-if="!isLargerThanLarge" class="mobile-toggle-buttons">
          <button @click="toggleShowMoreRow3" v-if="!showMoreRow3">Show More</button>
          <button @click="toggleShowMoreRow3" v-if="showMoreRow3">Show Less</button>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import UserIcon from '@iconify/icons-bx/bx-user'
import { useBreakpoints, breakpointsBootstrapV5 } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'

const breakpoints = useBreakpoints(breakpointsBootstrapV5)

const isLargerThanLarge = breakpoints.greater('lg')

const showMoreRow1 = ref(false);
const showMoreRow2 = ref(false);
const showMoreRow3 = ref(false);


const scale = computed(() => {
  if (!isLargerThanLarge.value) {
    return 1
  } else {
    return 0.88
  }
})


const toggleShowMoreRow1 = () => {
  showMoreRow1.value = !showMoreRow1.value
}
const toggleShowMoreRow2 = () => {
  showMoreRow2.value = !showMoreRow2.value
}
const toggleShowMoreRow3 = () => {
    showMoreRow3.value = !showMoreRow3.value
}

const handleMouseMove = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
};


</script>

<style lang="scss" scoped>
.box {
  border-radius: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: radial-gradient(108.51% 131.17% at 13.08% 8.07%, #1c1c1c 0%, #414141 100%);
  position: relative;
  transition: all 0.3s ease-in-out;
  --mouse-x: 0px;
  --mouse-y: 0px;
  overflow: hidden;

  &:hover {
    transform: scale(1.01);
  }

    &::before {
      content: '';
      position: absolute;
      width: 96px;
      height: 96px;
      left: -48px;
      top: -48px;
      background-color: #481a96;
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s, transform 0.5s;
      transform: translate(var(--mouse-x), var(--mouse-y));
      z-index: 30;
      filter: blur(100px);
    }

    &:hover::before {
       opacity: 0.2;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.5s;
      background: radial-gradient(
        250px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.2),
        transparent
      );
       z-index: 10;
    }
    &:hover::after {
        opacity: 1;
    }
}
.mobile-dropdown-item {
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
  }

.mobile-toggle-buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    button {
        background-color: #000;
        color: #fff;
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        margin-inline: 0.25rem;
        transition: all 0.3s ease-in-out;
        display: block;
    }
}

.row {
  &-1 {
    // margin-top: 2rem;
    display: grid;
    grid-template-columns: 40% repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    transition: all 0.3s ease-in-out;


    @include mq(md) {
      margin-top: 3rem;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      // row-gap: 2rem;
    }

    .box {
      &-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 5;

        padding: 2rem 3rem;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 1 / 5;
          min-height: 600px;
          row-gap: 2rem;
        }

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

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 5 / 7;
        }
      }

      &-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 3;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 7 / 9;
          min-height: 400px;
        }
      }

      &-4 {
        grid-column: 2/ 3;
        grid-row: 3 / 5;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 9 / 11;
             min-height: 320px;
        }
      }

      &-5 {
        grid-column: 3 / 4;
        grid-row: 3 / 4;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 11 / 12;
        }
      }

      &-6 {
        grid-column: 3 / 4;
        grid-row: 4 / 5;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 12 / 13;
        }
      }
    }
  }

  &-2 {
    // margin-top: 2rem;
    display: grid;
    grid-template-columns: 40% repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    transition: all 0.3s ease-in-out;

    @include mq(md) {
      margin-top: 3rem;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      // row-gap: 2rem;
    }

    .box {
      &-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 5;

        padding: 2rem 3rem;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 1 / 5;
          min-height: 600px;
        }

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
          bottom: 3rem;
          right: 50%;
          transform: translateX(50%);
          width: 75%;
        }
      }

      &-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        aspect-ratio: 1;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 5 / 7;
        }
      }

      &-3 {
        background-color: purple;
        grid-column: 3 / 4;
        grid-row: 1 / 3;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 7 / 9;
          min-height: 400px;
        }
      }

      &-4 {
        background-color: green;
        grid-column: 2/ 3;
        grid-row: 3 / 4;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 9 / 10;
        }
      }

      &-5 {
        grid-column: 2 / 3;
        grid-row: 4 / 5;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 10 / 11
        }
      }

      &-6 {
        grid-column: 3 / 4;
        grid-row: 3 / 5;
        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 11 / 13;
          min-height: 400px;
        }
      }
    }
  }

  &-3 {
    // margin-top: 2rem;
    display: grid;
    grid-template-columns: 40% repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    transition: all 0.3s ease-in-out;

    @include mq(md) {
      margin-top: 3rem;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      // row-gap: 2rem;
    }

    .box {
      &-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 5;

        padding: 2rem 3rem;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 1 / 5;
          min-height: 600px;
        }

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
          bottom: 3rem;
          right: 50%;
          transform: translateX(50%);
          width: calc(100% - 4rem);
        }
      }

      &-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        aspect-ratio: 1;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 5 / 7;
        }
      }

      &-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 3;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 7 / 9;
          min-height: 360px;
        }
      }

      &-4 {
        grid-column: 2/ 3;
        grid-row: 3 / 5;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 9 / 11;
          min-height: 360px;
        }
      }

      &-5 {
        grid-column: 3 / 4;
        grid-row: 3 / 4;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 11 / 12;
        }
      }

      &-6 {
        grid-column: 3 / 4;
        grid-row: 4 / 5;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 12 / 13;
        }
      }
    }
  }
}
</style>