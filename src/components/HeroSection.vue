<template>
  <section class="position-relative overflow-hidden zindex-2" id="home">
    <b-container style="min-height: calc(100vh - 74px)">
      <b-row class="justify-content-center align-items-center hero-row" style="min-height: calc(100vh - 120px)">
        <b-col xl="6" lg="6" md="6" sm="8" class="col-10 offset-xl-1 order-md-2 image-col">
          <div class="triangle-container">
            <div ref="logo" id="center-triangle" class="center-triangle">
              <img src="@/assets/img/Asset_L35.svg" class="triangle-part part-1" ref="part1" />
              <img src="@/assets/img/Asset_L36.svg" class="triangle-part part-2" ref="part2" />
              <img src="@/assets/img/Asset_L37.svg" class="triangle-part part-3" ref="part3" />
            </div>
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
    <section class="below-section" id="below">
      <div class="final-text-row">
        <div class="final-text-col">Innovation</div>
        <div class="final-text-col">Experience</div>
        <div class="final-text-col">Commercial strategy</div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import ChevronIcon from '@iconify/icons-bx/bx-chevrons-down';
import { Icon } from '@iconify/vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logo = ref<HTMLImageElement | null>(null);

const cards = ref([
  { title: 'Product Studio', text: 'Build Your Dream Product' },
  { title: 'AI Automation Agency', text: 'Streamline Processes with AI' },
  { title: 'UX Studio', text: 'Design Stunning Experiences' },
]);

const activeIndex = ref(0);

const getCardPosition = (index: number) => {
  const screenWidth = window.innerWidth;
  const cardPositions ={
    desktop: [
      { left: `${ 54}px`, top: `${ -150}px` },
      { left: `${ 465}px`, top: `${ -30}px` },
      { left: `${ 90}px`, top: `${ 145}px` },
  ], 
    mobile: [
      { left: `${ -8}px`, top: `${ -32}px` },
      { left: `${ 205}px`, top: `${ 15}px` },
      { left: `${ 20}px`, top: `${ 132}px` },
  ],

  }
  const isMobile = screenWidth <= 768;
    const positions = isMobile ? cardPositions.mobile : cardPositions.desktop;

    const positionIndex = (index - activeIndex.value + positions.length) % positions.length;
    return positions[positionIndex];
};

let intervalId: ReturnType<typeof setInterval>;
let tl : gsap.core.Timeline;
let tlSplit : gsap.core.Timeline;
let tlRotate: gsap.core.Timeline;

onMounted(() => {
  const isMobile = window.innerWidth <= 768;
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
      top: "80vh",
      left: "-24vw",
      duration: 2,
      ease: "power2.inOut",
    });

    tlSplit = gsap.timeline({
      scrollTrigger: {
        trigger: ".below-section",
        start: "center +=75%",
        end: "+=40%",
        scrub: true,
      },
    });

    tlSplit
      .to(".part-1", { x: -310, y: 500, duration: 1 }, "<")
      .to(".part-2", { x: 90, y: 320, duration: 1 }, "<")
      .to(".part-3", { x: 300, y: 400, duration: 1 }, "<");

    tlRotate = gsap.timeline({
      scrollTrigger: {
        trigger: ".below-section",
        start: "center +=30%",
        end: "+=5%",
        scrub: true,
        onEnter: () => {
          gsap.set(".final-text-row", { opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.set(".final-text-row", { opacity: 0 });
        },
      },
    });
    tlRotate
      .to(".part-1", { rotation: 190, duration: 2 })
      .to(".part-2", { rotation: -50, duration: 2 }, "<")
      .to(".part-3", { rotation: 70, duration: 2 }, ">");
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
  height: 100%;
}

.triangle-part {
  position: absolute;
  height: auto;
  transform-origin: center;
}

.center-triangle {
  width: 100%;
  max-width: 300px;
  z-index: 10;
  position: relative;
}

.box-card-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 60px;
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
  width: 230px;
  height: 70px;
  z-index: 5;
}
.part-1 {
  top: -27vh;
  left: 2vw;
  width: 234px;
  height: 224px;
}

.part-2 {
  top: 5vh;
  left: -0.3vw;
  width: 250px;
  height: 109px;
}

.part-3 {
  top: -12vh;
  left: 15vw;
  width: 140px;
  height: 230px;
}

.box-card-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
.box-card-content h4 {
  margin: 0;
  font-size: 1rem;
}
.box-card-content p {
  font-size: 0.7rem;
  margin: 0.2rem 0 0;
}
.below-section{
  height: 150vh;
}
.final-text-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  position: absolute;
  bottom: 20vh;
  opacity: 0;
  transition: opacity 1s ease;
  left: 6%;
}

.final-text-col {
  font-family: 'Roboto', sans-serif;
  flex: 1;
  text-align: center;
  font-size: 24px;
  color: #fff;
  padding: 0 10px;
}

@media (max-width: 768px) {
  .triangle-container {
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin-bottom: 26vh;
    margin-top: 8vh;
  }

  .center-triangle {
    max-width: 200px;
    transform: translate(0, 0);
  }
  .part-1 {
  top: -6.7rem;
  left: 19%;
  width: 46%;
  }

  .part-2 {
  top: 2.8rem;
  left: -1.2%;
  width: 70%;
  }

  .part-3 {
  top: -3rem;
  left: 65%;
  width: 39%;

  }

  .box-card-wrapper {
      width: 110px;
      height: 30px;
  }

  .box-card-wrapper.active-card {
      width: 120px;
      height: 40px;
  }

  .box-card-content h4 {
      font-size: 0.5rem;
  }

  .box-card-content p {
      font-size: 0.4rem;
  }
}
</style>
