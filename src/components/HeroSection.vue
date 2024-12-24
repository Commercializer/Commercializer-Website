<template>
  <section class="position-relative overflow-hidden zindex-2" id="home">
    <b-container style="min-height: calc(100vh - 74px)">
      <b-row class="justify-content-space-between align-items-center hero-row" ref="heroRow" style="min-height: calc(100vh - 120px); position: relative;">
        <div class="center-triangle" ref="logo" style="position:absolute; right: 0; left: 0; margin: auto; background-color: blue;" >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 313.25 277.23"
              class="pulse-svg"
              width=100%
              height=100%
              style="background-color: #fff;"
              preserve-aspect-ratio="xMinYMid meet"
            >
              <defs>
                <linearGradient id="linear-gradient" x1="-45.68" y1="93.23" x2="337.81" y2="93.23" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#00b3de" />
                  <stop offset="1" stop-color="#a8d100" />
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="-45.68" y1="109.11" x2="337.81" y2="109.11" xlink:href="#linear-gradient" />
                <linearGradient id="linear-gradient-3" x1="-45.68" y1="182.84" x2="337.81" y2="182.84" xlink:href="#linear-gradient" />
                <linearGradient id="linear-gradient-4" x1="-45.68" y1="231.84" x2="337.81" y2="231.84" xlink:href="#linear-gradient" />
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path class="cls-1 part-1" ref="part1" d="M60.59,186.45,147.19,82a16.32,16.32,0,0,1,20-4.13l29,14.76L165.13,8.51a13,13,0,0,0-23.47-2L63.54,142.23a32.49,32.49,0,0,0-4.3,17.89Z" />
                  <line class="cls-2 "  x1="228.71" y1="109.21" x2="228.35" y2="109.02" />
                  <path class="cls-3 part-3" ref="part3" d="M236.83,239.67l-27.8,18,89,15.13a13,13,0,0,0,13.45-19.3L233.17,117.4a32.51,32.51,0,0,0-13.43-12.76l-23.56-12,47.09,127.67A16.31,16.31,0,0,1,236.83,239.67Z" />
                  <path class="cls-4 part-2" ref="part2" d="M209,257.69,75.82,234.77a16.33,16.33,0,0,1-13.53-15.26l-1.7-33.06L3,255.88a13,13,0,0,0,10,21.31l156.23,0A32.51,32.51,0,0,0,187,272Z" />
                </g>
              </g>
            </svg>
        </div>
        <b-col xl="6" lg="6" md="6" sm="8" class="col-10 offset-xl-1 order-md-2 image-col">
          <div class="triangle-container">
            <!-- <div ref="logo" id="center-triangle" class="center-triangle" style="background-color: #fff;">
              <img src="@/assets/img/Asset_L35.svg" width="70%" class="triangle-part part-1" ref="part1" />
              <img src="@/assets/img/Asset_L36.svg" width="70%" class="triangle-part part-2" ref="part2" />
              <img src="@/assets/img/Asset_L37.svg" width="70%" class="triangle-part part-3" ref="part3" />
            </div> -->
            <div v-for="(card, index) in cards" :key="index" :class="['box-card-wrapper', { 'active-card': activeIndex === index }]" :style="getCardPosition(index)">
              <div class="gradient-border"></div>
              <div class="box-card-content">
                <h4>{{ card.title }}</h4>
                <p>{{ card.text }}</p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="5" md="6" class="text-center text-md-start order-md-1 text-col">
          <h1 class="display-5 mb-lg-4 shimmer">Commercializing Innovations</h1>
          <p class="fs-xl pb-3 pb-lg-0 mb-2 mb-md-3 mb-lg-5" style="color: #dedede">Transforming groundbreaking ideas into market-leading products.</p>
          <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-4 locations">
            <p style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem">
              <img src="https://flagcdn.com/128x96/us.png" style="width: 28px" />
              Delaware, USA
            </p>
            <p style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem">
              <img src="https://flagcdn.com/128x96/qa.png" style="width: 28px" />
              Doha, Qatar
            </p>
            <p style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem">
              <img src="https://flagcdn.com/128x96/lk.png" style="width: 28px" />
              Colombo, Sri Lanka
            </p>
          </div>
          <a class="d-flex align-items-center gap-4 discover-more mt-3" style="text-decoration: none; color: #fff; cursor: pointer;" href="#clients">
            <span style="padding: 10px; border-radius: 500px; aspect-ratio: 1; background-color: rgba(255, 255, 255, 0.15);">
              <Icon :icon="ChevronIcon" style="font-size: 24px" />
            </span>
            <span> Discover More </span>
          </a>
        </b-col>
      </b-row>
    </b-container>
    <section class="below-section container" id="below">
      <b-row class="final-text-row">
        <b-col class="final-text-col">
          <h5 class="final-text" >Innovation</h5>
        </b-col>
        <b-col class="final-text-col">
          <h5 class="final-text" >Experience</h5>
        </b-col>
        <b-col class="final-text-col">
            <h5 class="final-text" >Commercial strategy</h5>
        </b-col>
      </b-row>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ChevronIcon from '@iconify/icons-bx/bx-chevrons-down';
import { Icon } from '@iconify/vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefSymbol } from '@vue/reactivity';

gsap.registerPlugin(ScrollTrigger);

const logo = ref<SVGElement | null>(null);
const part1 = ref<SVGPathElement | null>(null);
const part2 = ref<SVGPathElement | null>(null);
const part3 = ref<SVGPathElement | null>(null);


const cards = ref([
  { title: 'Product Studio', text: 'Build Your Dream Product' },
  { title: 'AI Automation Agency', text: 'Streamline Processes with AI' },
  { title: 'UX Studio', text: 'Design Stunning Experiences' },
]);

const activeIndex = ref(0);

const getCardPosition = (index: number) => {
  const screenWidth = window.innerWidth;
  
  const desktopPositions = [
    { left: `8%`, top: `-16%` },
    { left: `68%`, top: `16%` },
    { left: `12%`, top: `78%` },
  ];
  const mobilePositions = [
    { left: `6%`, top: `0%` },
    { left: `72%`, top: `32%` },
    { left: `0%`, top: `96%` },
  ];

  if (screenWidth <= 768) {
        return mobilePositions[(index - activeIndex.value + mobilePositions.length) % mobilePositions.length];
    }

    const positionIndex = (index - activeIndex.value + desktopPositions.length) % desktopPositions.length;
    return desktopPositions[positionIndex];
};

let intervalId: ReturnType<typeof setInterval>;
let tl : gsap.core.Timeline;
let tlSplit : gsap.core.Timeline;
let tlRotate: gsap.core.Timeline;
const ScreenWidth = ref(window.innerWidth)
const ScreenHeight = ref(window.innerHeight)

onMounted(() => {
  const isMobile = window.innerWidth <= 1024;
  if (!isMobile) {
    intervalId = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % cards.value.length;
    }, 4500);

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".below",
        start: "top top",
        end: "+=80%",
        scrub: true,
        onUpdate: (self) => {
          const logoTop = self.progress;
          if (logoTop > 0.01) {
            gsap.set(".box-card-wrapper", { opacity: 0, duration: 1 });
          } else {
            gsap.set(".box-card-wrapper", { opacity: 1, duration: 1 });
          }
        },
      },
    });

    tl.fromTo(
      [".text-col h1", ".text-col p", ".text-col .locations", ".discover-more"],
      {},
      {
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut",
      },
      0
    );
    tl.to(".center-triangle", {
      rotation: 360,
      scale: 1.1,
      y: ((ScreenHeight.value/2)- ((logo.value?.getBoundingClientRect().y ?? 0) + (logo.value?.getBoundingClientRect().height ?? 0)/2)) + 480,
      x: (ScreenWidth.value/2)- ((logo.value?.getBoundingClientRect().x ?? 0) + (logo.value?.getBoundingClientRect().width ?? 0)/2) ,
      duration: 2,
      ease: "power2.inOut",
    });
    tl.to(".center-triangle", {
      width:1200,
      ease: "power2.inOut",
      duration:2,
    });

    tlSplit = gsap.timeline({
      scrollTrigger: {
        trigger: ".below-section",
        start: "center +=60%",
        end: "+=80%",
        scrub: true,
        onEnter: () => {
            gsap.set(".final-text-row", { opacity: 1 });
        },
         onLeaveBack: () => {
              gsap.set(".final-text-row", { opacity: 0 });
        },
      },
    });
    const partWidth = ScreenWidth.value / 3;
    tlSplit
    .to(".part-1", { x: -partWidth, y: 0, duration: 1 })
    .to(".part-2", { x: 0, y: 100, duration: 1 }, "<")
    .to(".part-3", { x: partWidth, y: 0, duration: 1 }, "<")
    .to(".final-text-row", { opacity: 1, duration: 1 },"<");

    tlRotate = gsap.timeline({
      scrollTrigger: {
        trigger: ".below-section",
         start: "center +=30%",
         end: "+=5%",
        scrub: true,
      },
    });
      tlRotate
      .to(part1.value, { rotation: 180, duration: 2 })
      .to(part2.value, { rotation: -58, duration: 2 }, "<")
      .to(part3.value, { rotation: 62, duration: 2 }, "<");

  } else {
    intervalId = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % cards.value.length;
    }, 4500);
    const belowSection = document.querySelector(".below-section") as HTMLElement;
    if (belowSection) {
      belowSection.style.display = "none";
    }
  }
});


onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.hero-section {
  min-height: calc(100vh - 74px);
  display: flex;
  align-items: center;
}
.hero-container {
  display: flex;
  align-items: center;
}
.shimmer {
  display: inline-block;
  color: #acacacdb;
  background: linear-gradient( -45deg, #acacac 25%, #fff 50%, #acacac 75%);
  -webkit-background-size: 200% 100%;
  background-size: 80px 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-animation-name: shimmer;
  animation-name: shimmer;
  -webkit-animation-duration: 6s;
  animation-duration: 6s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #222222;
}
.cls-1 { fill: url(#linear-gradient); }
.cls-2 { fill: url(#linear-gradient-2); }
.cls-3 { fill: url(#linear-gradient-3); }
.cls-4 { fill: url(#linear-gradient-4); }

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.triangle-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
}

.triangle-part {
  position: absolute;
  transform-origin: center;
}

.center-triangle {
  z-index: 10;
  width: 400px; 
  height:400px;
}

.box-card-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36%;
  height: 16%;
  border-radius: 12px;
  transition: all 0.6s ease-in-out;
  z-index: 5;
  opacity: 0.5;
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  filter: brightness(0.7);
}

.box-card-wrapper.active-card {
  box-shadow: 0 0 0 2px rgba(0, 255, 149, 0.984);
  opacity: 1;
  filter: brightness(1.2);
  width: 38%;
  height: 18%;
  z-index: 5;
}


.box-card-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
.box-card-content h4 {
  margin: 0;
  font-size: 0.9em;
}
.box-card-content p {
  font-size: 0.7em;
  margin: 0.1em 0 0;
}
.below-section{
  height: 120vh;
  margin: auto;
  position: relative;
}
.final-text-row {
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 10%;
  opacity: 0;
  margin: 0 auto; /* Center the row */
  gap: 10px; /* Adjust gap for small screens */
  flex-wrap: wrap;
  transition: opacity 1s ease;
}

.final-text-col {
  background-color: red;
  flex: 1;
  text-align: center;
  font-size: 24px;
  color: #fff;
  padding: 10px 5px;
}
.final-text{
  margin-top: 10px;
}

@media (max-width: 768px) {
  .center-triangle {
    width: 280px;
    height: 280px;
  }

  .part-1 {
  top: -8%;
  left: 2%;
  width: 82%;
  }

  .part-2 {
  top: 40%;
  left: -6%;
  width: 82%;
  }

  .part-3 {
  top: 24%;
  left: 46%;
  width: 82%;
  }

  .box-card-wrapper {
  width: 36%;
  height: 16%;
  }

  .box-card-wrapper.active-card {
    width: 36%;
    height: 17%;
  }

  .box-card-content h4 {
      font-size: 0.5em;
  }

  .box-card-content p {
      font-size: 0.4em;
  }
  .final-text-row {
    flex-direction: column; /* Stack on small screens */
    gap: 15px;
  }

  .final-text-col {
    min-width: 100%; /* Full width for stacked layout */
    font-size: 18px; /* Adjust text size */
  }
}

</style>