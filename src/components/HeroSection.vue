<template>
  <section class="position-relative overflow-hidden zindex-2" id="home">
    <b-container style="min-height: calc(100vh - 74px)">
      <b-row
        class="justify-content-center align-items-center"
        style="min-height: calc(100vh - 120px)"
      >
        <!-- Parallax gfx -->
        <b-col xl="6" lg="6" md="6" sm="8" class="col-10 offset-xl-1 order-md-2">
          <div class="triangle-container">
            <img
              :src= "logo"
              alt="Triangle"
              class="center-triangle"
            />

            <!-- Circular Cards -->
            <div
              v-for="(card, index) in cards"
              :key="index"
              :class="['box-card-wrapper', { 'active-card': activeIndex === index }]"
              :style="getCardPosition(index)"
            >
              <div class="gradient-border"></div>
              <div class="box-card-content">
                <h4>{{ card.title }}</h4>
                <p>{{ card.text }}</p>
              </div>
            </div>
          </div>
        </b-col>

        <!-- Text -->
        <b-col lg="5" md="6" class="text-center text-md-start order-md-1">
          <h1 class="display-5 mb-lg-4 shimmer">
            Commercializing Innovations
          </h1>
          <p class="fs-xl pb-3 pb-lg-0 mb-2 mb-md-3 mb-lg-5" style="color: #dedede">
            Transforming groundbreaking ideas into market-leading products.
          </p>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-4 locations"
          >
            <p
              style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/us.png" style="width: 28px" />
              Delaware, USA
            </p>
            <p
              style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/qa.png" style="width: 28px" />
              Doha, Qatar
            </p>
            <p
              style="font-size: 18px; color: #fff; display: flex; align-items: center; gap: 0.4rem"
            >
              <img src="https://flagcdn.com/128x96/lk.png" style="width: 28px" />
              Colombo, Sri Lanka
            </p>
          </div>
          <a
            class="d-flex align-items-center gap-4 discover-more mt-3"
            style="text-decoration: none; color: #fff; cursor: pointer;"
            href="#clients"
          >
            <span
              style="
                padding: 10px;
                border-radius: 500px;
                aspect-ratio: 1;
                background-color: rgba(255, 255, 255, 0.15);
              "
            >
              <Icon :icon="ChevronIcon" style="font-size: 24px" />
            </span>
            <span> Discover More </span>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ChevronIcon from '@iconify/icons-bx/bx-chevrons-down';
import { Icon } from '@iconify/vue';
import logo from '@/assets/img/logo-large.svg';

const cards = ref([
  { title: 'Product Studio', text: 'Build Your Dream Product' },
  { title: 'AI Automation Agency', text: 'Streamline Processes with AI' },
  { title: 'UX Studio', text: 'Design Stunning Experiences' },
]);

const activeIndex = ref(0);

const getCardPosition = (index: number) => {
  const screenWidth = window.innerWidth;

  // Define default positions for larger screens
  const desktopPositions = [
    { left: '16%', top: '0%' },  // Active card
    { left: '86%', top: '38%' }, 
    { left: '24%', top: '100%' },
  ];

  // Define positions for mobile screens 
  const mobilePositions = [
    { left: '-7%', top: '10%' },  // Active card
    { left: '6%', top: '101%' }, 
    { left: '68%', top: '40%' }, 
  ];

  if (screenWidth <= 768) {
    return mobilePositions[(index - activeIndex.value + mobilePositions.length) % mobilePositions.length];
  }

  const positionIndex = (index - activeIndex.value + desktopPositions.length) % desktopPositions.length;
  return desktopPositions[positionIndex];
};


let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % cards.value.length;
  }, 4500); 

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
  /* background: -webkit-gradient(linear, left top, right bottom, from(#acacac), to(#acacac), color-stop(0.6, #fff)); */
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


@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.04);
    opacity: 0.85;
  }
}

.triangle-container {
  position: relative;
  display: flex; /* Stack cards below the logo */
  align-items: right; 
  justify-content: right;
  margin-bottom: 10% ;
  width: 100%;
  max-width: 500px;
  z-index: 3;
}

.center-triangle {
  width: 100%;
  max-width: 300px;
  z-index: 4;
  transform: translate(-10%, -10%); 
  transform-origin: center; 
  animation: pulse 4s infinite ease-in-out; /* Apply pulse animation */
}


.box-card-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44%;
  height: 24%;
  border-radius: 12px;
  transition: all 0.8s ease-in-out; 
  z-index: 1;
  opacity: 0.5;
  background: radial-gradient(
    97.57% 210.75% at 0.9% 2.98%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.box-card-wrapper.active-card {
  box-shadow: 0 0 0 2px rgba(0, 255, 149, 0.984);
  opacity: 1;
  width: 45%;
  height: 25%;
}

.box-card-content {
  position: relative;
  z-index: 2;
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

@media (max-width: 768px) {
  .triangle-container {
    align-items: center; 
    justify-content: center;
    max-width: 100%;
    margin-bottom: 20%;
    margin-top: 8%;
    margin-left: 2%;
  }

  .center-triangle {
    max-width: 200px;
    transform: translate(0, 0);
  }

  .box-card-wrapper {
    width: 38%;
    height: 20%;
  }

  .box-card-wrapper.active-card {
    width: 44%;
    height: 25%;
  }

  .box-card-content h4 {
    font-size: 0.5rem;
  }

  .box-card-content p {
    font-size: 0.4rem;
  }
}
</style>
