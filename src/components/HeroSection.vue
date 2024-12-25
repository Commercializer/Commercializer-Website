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
    <section class="below-section container" id="below">
      <b-row class="final-text-row">
        <b-col class="final-text-col" >
          <h5 class="final-text" ref="finaltext1">Innovation</h5>
        </b-col>
        <b-col class="final-text-col"  >
          <h5 class="final-text" ref="finaltext2">Experience</h5>
        </b-col>
        <b-col class="final-text-col" >
          <h5 class="final-text" ref="finaltext3">Commercial strategy</h5>
        </b-col>
      </b-row>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, type ComponentPublicInstance } from 'vue';
import ChevronIcon from '@iconify/icons-bx/bx-chevrons-down';
import { Icon } from '@iconify/vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const logo = ref<HTMLImageElement | null>(null);
const part1 = ref<SVGElement | null>(null);
const part2 = ref<SVGElement | null>(null);
const part3 = ref<SVGElement | null>(null);
const finaltext1 = ref<HTMLHeadingElement | null>(null);
const finaltext2 = ref<HTMLHeadingElement | null>(null);
const finaltext3 = ref<HTMLHeadingElement | null>(null);

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
    { left: `0%`, top: `6%` },
    { left: `61%`, top: `28%` },
    { left: `12%`, top: `84%` },
  ],
    mobile: [
    { left: `0%`, top: `8%` },
    { left: `64%`, top: `24%` },
    { left: `0%`, top: `86%` },
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
const screenWidth = ref(window.innerWidth)
const screenHeight = ref(window.innerHeight)


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
    const partWidth = screenWidth.value / 6;
    tl.to(".center-triangle", {
      rotation: 360,
      scale: 1.1,
      x: (screenWidth.value/2) - ((logo.value?.getBoundingClientRect().x ?? 0) + (logo.value?.getBoundingClientRect().width ?? 0)/2),
      y: 3*(screenHeight.value/2)/2,
      duration: 2,
      ease: "power2.inOut",
    });

    tlSplit = gsap.timeline({
      scrollTrigger: {
        trigger: ".below-section",
        start: "center +=72%",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
            gsap.set(".final-text-row", { opacity: 1 });
        },
         onLeaveBack: () => {
              gsap.set(".final-text-row", { opacity: 0 });
        },
      },
    });
const partX1Position= (part1.value?.getBoundingClientRect().x ?? 0)
const partX2Position= (part2.value?.getBoundingClientRect().x ?? 0)
const partX3Position= (part3.value?.getBoundingClientRect().x ?? 0)
const text1Position =(finaltext1.value?.getBoundingClientRect().x ?? 0)+((finaltext1.value?.getBoundingClientRect().width ?? 0)/2)
const text2Position =(finaltext2.value?.getBoundingClientRect().x ?? 0)+((finaltext2.value?.getBoundingClientRect().width ?? 0)/2)
const text3Position =(finaltext3.value?.getBoundingClientRect().x ?? 0)+((finaltext3.value?.getBoundingClientRect().width ?? 0)/2)
const part1Dest = text1Position + ((part1.value?.getBoundingClientRect().width ?? 0)*0.8)
const part2Dest = text2Position + ((part2.value?.getBoundingClientRect().width ?? 0)*0.65)
const part3Dest = text3Position + ((part3.value?.getBoundingClientRect().width ?? 0)*0.6)
    
tlSplit
      .to(".part-1", { x: (part1Dest-partX1Position), y: "131%", transformOrigin:("50% 50%"), duration: 1 }, "<")
      .to(".part-2", { x: (part2Dest-partX2Position), y: "67%", transformOrigin:("50% 50%"), duration: 1 }, "<")
      .to(".part-3", { x: (part3Dest-partX3Position), y: "95%", transformOrigin:("50% 50%"), duration: 1 }, "<")
      .to(".final-text-row", { opacity: 1, duration: 1, delay: 1 },"<");
      // ((finaltext1.value?.getBoundingClientRect().x ?? 0)-(finaltext1.value?.getBoundingClientRect().width ?? 0)/2)-((part1.value?.getBoundingClientRect().x ?? 0)+((part1.value?.getBoundingClientRect().width ?? 0)))
        //  console.log(((finaltext1.value?.getBoundingClientRect().x ?? 0)-(finaltext1.value?.getBoundingClientRect().width ?? 0)/2)-((part1.value?.getBoundingClientRect().x ?? 0)+((part1.value?.getBoundingClientRect().width ?? 0))))

    tlRotate = gsap.timeline({
      scrollTrigger: {
        trigger: ".below-section",
         start: "center +=45%",
         end: "+=15%",
        scrub: true,
      },
    });
      tlRotate
      .to(part1.value, { rotation: 180, transformOrigin:("50% 50%"), duration: 2 })
      .to(part2.value, { rotation: -58,transformOrigin:("50% 50%"), duration: 2 }, "<")
      .to(part3.value, { rotation: 62,transformOrigin:("50% 50%"), duration: 2 }, "<");


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
  width: 100%;
  height: 100%;

}

.triangle-part {
  position: absolute;
  transform-origin: center;
}

.center-triangle {
  width: 400px;
  height: 400px;
  z-index: 10;
  position: relative;

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
.part-1 {
  top: -4%;
  left: 2%;
  width: 70%;
}

.part-2 {
  top: 36%;
  left: -5%;
  width: 70%;
}

.part-3 {
  top: 22%;
  left: 39%;
  width: 70%;
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
  flex: 1;
  text-align: center;
  font-size: 24px;
  color: #fff;
  padding: 10px 5px;
}
.final-text{
  margin-top: 10px;
}

@media (max-width: 800px) {
  .center-triangle {
    width: 280px;
    height: 280px;
  }


  .part-1 {
  top: 0%;
  left: 5%;
  width: 70%;
  }

  .part-2 {
  top: 40%;
  left: -1%;
  width: 70%;
  }

  .part-3 {
  top: 27%;
  left: 43%;
  width: 69%;
  }

  .box-card-wrapper {
  width: 38%;
  height: 15%;
  }

  .box-card-wrapper.active-card {
    width: 38%;
    height: 16%;
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