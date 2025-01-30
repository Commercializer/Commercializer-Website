<!-- Automatically Looop Scrolling-->
<!-- <template>
    <div class="benefits-section">
      <div class="container">
        <h3 class="heading">What do we deliver & How we deliver</h3>
        <p class="subtitle">
          We believe in the power of innovation, experience, and commercial strategy. These three
          pillars form the foundation of our company culture.
        </p>
        <div class="swipe-container" ref="swipeContainer">
          <div class="swipe-row">

            <div class="swipe-item">
              <div class="pricing-plan">
                <div class="content" v-for="(item, index) in firstPlan" :key="index">
                  <img :src="item.icon" alt="checkmark" class="checkmark" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>

            <div class="swipe-item featured-plan-container">
              <div class="featured-plan">
                <div class="triangle-logo">
                  <img :src="logo" alt="logo" class="logo" />
                </div>
              </div>
            </div>

            <div class="swipe-item">
              <div class="pricing-plan">
                <div class="content" v-for="(item, index) in secondPlan" :key="index">
                  <img :src="item.icon" alt="checkmark" class="checkmark" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref, onUnmounted } from "vue";
  import icon1 from "@/assets/img/Checkmark3.svg";
  import icon2 from "@/assets/img/Checkmark2.svg";
  import icon3 from "@/assets/img/Checkmark1.svg";
  import logo from "@/assets/img/logo-large.png";
  
  const swipeContainer = ref<HTMLDivElement | null>(null);

  
  const firstPlan = [
    { icon: icon1, text: "Innovation" },
    { icon: icon2, text: "Experience" },
    { icon: icon3, text: "Commercial Strategy" },
  ];
  
  const secondPlan = [
    { icon: icon1, text: "Trust & Integrity" },
    { icon: icon2, text: "Quality" },
    { icon: icon3, text: "Guidance to Perfection" },
  ];
  
  let scrollInterval: NodeJS.Timeout | null = null;
  
  const startAutoScroll = () => {
  if (swipeContainer.value) {
    const container = swipeContainer.value;

    scrollInterval = setInterval(() => {
      container.scrollLeft += 1;

      // Reset scroll to create a loop
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }, 25); // Adjust the speed of scrolling
  }
};
  
  const stopAutoScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
  };
  
  onMounted(() => {
    startAutoScroll();
  });
  
  onUnmounted(() => {
    stopAutoScroll();
  });
  </script>
  
  <style scoped>
  .benefits-section {
    text-align: center;
    background-color: #000;
    color: #fff;
    padding: 40px 20px;
  }
  
  .heading {
    font-family: Ubuntu;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
  }
  
  .subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8;
    max-width: 700px;
    margin: 20px auto 40px;
  }
  
  .swipe-container {
    overflow-x: hidden; 
    white-space: nowrap; 
    position: relative;
  }
  
  .swipe-row {
    align-items: center;
    display: flex;
    gap: 16px;
  }
  
  .swipe-item {
    flex: 0 0 auto;
    width: 100%;
    max-width: 300px;
  }
  
  .pricing-plan {
    display: flex;
    flex-direction: column;
    background-color: #1c1c1c;
    border-radius: 8px;
    padding: 24px;
    gap: 16px;
  }
  
  .featured-plan-container {
    flex: 0 0 auto;
    max-width: 320px;
  }
  
  .featured-plan {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0px 8px 18px -8px rgba(99, 102, 241, 0.9);
  }
  
  .logo {
    max-width: 100%;
    max-height: 100%;
  }
  
  .content {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
    height: 100%;
  }
  
  .checkmark {
    align-items: center;
    width: 40px;
    height: 40px;
  }

  </style>   -->
  
  <!--freezing vertical Scrolling and horizontal scroll -->
  <template>
    <div class="benefits-section">
      <div class="container">
        <h3 class="heading">What do we deliver & How we deliver</h3>
        <p class="subtitle">
          We believe in the power of innovation, experience, and commercial strategy. These three
          pillars form the foundation of our company culture.
        </p>
        <div class="swipe-container" ref="swipeContainer">
          <div class="swipe-row">
            <div class="swipe-item">
              <div class="pricing-plan">
                <div class="content" v-for="(item, index) in firstPlan" :key="index">
                  <img :src="item.icon" alt="checkmark" class="checkmark" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
  
            <div class="swipe-item featured-plan-container">
              <div class="featured-plan">
                <div class="triangle-logo">
                  <img :src="logo" alt="logo" class="logo" />
                </div>
              </div>
            </div>
  
            <div class="swipe-item">
              <div class="pricing-plan">
                <div class="content" v-for="(item, index) in secondPlan" :key="index">
                  <img :src="item.icon" alt="checkmark" class="checkmark" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref, onBeforeUnmount } from "vue";
  import icon1 from "@/assets/img/Checkmark3.svg";
  import icon2 from "@/assets/img/Checkmark2.svg";
  import icon3 from "@/assets/img/Checkmark1.svg";
  import logo from "@/assets/img/logo-large.png";
  
  const swipeContainer = ref<HTMLDivElement | null>(null);
  
  const firstPlan = [
    { icon: icon1, text: "Innovation" },
    { icon: icon2, text: "Experience" },
    { icon: icon3, text: "Commercial Strategy" },
  ];
  
  const secondPlan = [
    { icon: icon1, text: "Trust & Integrity" },
    { icon: icon2, text: "Quality" },
    { icon: icon3, text: "Guidance to Perfection" },
  ];
  
  let startY = 0;
  let scrollLeft = 0;
  let lastScrollLeft = 0;
  let isSwiping = false;
  
  // Lock mobile scroll
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };
  
  // Unlock mobile scroll
  const unlockScroll = () => {
    document.body.style.overflow = "";
  };
  
  // Handle touch start for mobile scrolling
  const handleTouchStart = (event: TouchEvent) => {
    const container = swipeContainer.value;
    if (!container) return;
  
    startY = event.touches[0].pageY;
    scrollLeft = container.scrollLeft;
    lastScrollLeft = scrollLeft;
    isSwiping = true;
  
    lockScroll(); // Lock scroll on mobile devices
  };
  
  // Handle touch move for mobile scrolling
  const handleTouchMove = (event: TouchEvent) => {
    const container = swipeContainer.value;
    if (!container || !isSwiping) return;
  
    const currentY = event.touches[0].pageY;
    const deltaY = startY - currentY;
    const horizontalScroll = deltaY * 1.5;
  
    if (Math.abs(deltaY) > 5) {
      const newScrollLeft = lastScrollLeft + horizontalScroll;
  
      requestAnimationFrame(() => {
        if (container) {
            container.scrollLeft = newScrollLeft;
        }
        
      });
  
    }
  };
  
  // Handle touch end for mobile scrolling
  const handleTouchEnd = () => {
    isSwiping = false;
    unlockScroll(); // Unlock scroll after swiping
  };
  
  onMounted(() => {
    const container = swipeContainer.value;
  
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: true });
      container.addEventListener("touchend", handleTouchEnd);
    }
  });
  
  onBeforeUnmount(() => {
    const container = swipeContainer.value;
    if (container) {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    }
  
    unlockScroll(); // Ensure scroll unlocks on component destruction
  });
  </script>
  
  
  <style scoped>
  .benefits-section {
    text-align: center;
    background-color: #000;
    color: #fff;
    padding-bottom: 4rem;
    width: 100%;
  }
  
  .container {
    position: relative;
  }
  
  .heading {
    font-family: Ubuntu;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
  }
  
  .subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8;
    max-width: 700px;
    margin: 20px auto 40px;
    position: static;
  }
  
  .swipe-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  
  .swipe-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    scroll-snap-type: x mandatory;
  }
  
  .swipe-item {
    flex: 0 0 auto;
    width: 100%;
    max-width: 300px;
    scroll-snap-align: center;
  }
  
  .pricing-plan {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: #1c1c1c;
    border-radius: 8px;
    padding: 24px;
    gap: 16px;
  }
  
  .featured-plan-container {
    flex: 0 0 auto;
    max-width: 320px;
  }
  
  .featured-plan {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0px 8px 18px -8px rgba(99, 102, 241, 0.9);
  }
  
  .logo {
    max-width: 100%;
    max-height: 100%;
  }
  
  .content {
    display: flex;
    gap: 12px;
    font-size: 1rem;
  }
  
  .checkmark {
    width: 32px;
    height: 32px;
  }
  
  @media (max-width: 768px) {
    .subtitle {
      font-size: 1rem;
      padding: 0 10px;
    }
  
    .swipe-row {
      justify-content: flex-start;
    }
  
    .checkmark {
      width: 32px;
      height: 32px;
    }
  
    .content {
      gap: 8px;
      font-size: 0.9rem;
    }
  }
  </style>

<!-- Vertical coloumn -->
  <!-- <template>
    <div class="benefits-section">
      <div class="container">
        <h3 class="heading">What do we deliver & How we deliver</h3>
        <p class="subtitle">
          We believe in the power of innovation, experience, and commercial strategy. These three
          pillars form the foundation of our company culture.
        </p>
        <div class="row align-items-center justify-content-center">

          <div class="col-md-4 mb-4 order-1 order-md-2">
            <div class="featured-plan">
              <div class="triangle-logo">
                <img :src="logo" alt="logo" class="logo" />
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4 order-2 order-md-1">
            <div class="pricing-plan">
              <div class="content">
                <img :src="icon1" alt="checkmark" class="checkmark" />
                <p>Innovation</p>
              </div>
              <div class="content">
                <img :src="icon2" alt="checkmark" class="checkmark" />
                <p>Experience</p>
              </div>
              <div class="content">
                <img :src="icon3" alt="checkmark" class="checkmark" />
                <p>Commercial Strategy</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4 order-3 order-md-3">
            <div class="pricing-plan">
              <div class="content">
                <img :src="icon1" alt="checkmark" class="checkmark" />
                <p>Trust & Integrity</p>
              </div>
              <div class="content">
                <img :src="icon2" alt="checkmark" class="checkmark" />
                <p>Quality</p>
              </div>
              <div class="content">
                <img :src="icon3" alt="checkmark" class="checkmark" />
                <p>Guidance to Perfection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import icon1 from '@/assets/img/Checkmark3.svg';
  import icon2 from '@/assets/img/Checkmark2.svg';
  import icon3 from '@/assets/img/Checkmark1.svg';
  import logo from '@/assets/img/logo-large.png';
  </script>
  
  <style scoped>
  .benefits-section {
    text-align: center;
    background-color: #000;
    color: #fff;
    padding: 40px 40px;
  }
  
  .heading {
    font-family: Ubuntu;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
    text-underline-position: from-font;
  }
  
  .subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8;
    max-width: 700px;
    margin: 20px auto 40px;
  }
  
  .pricing-plan {
    display: flex;
    flex-direction: column;
    background-color: #1c1c1c;
    border-radius: 8px;
    padding: 48px;
    gap: 24px;
  }
  
  .featured-plan {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0px 8px 18px -8px rgba(99, 102, 241, 0.9);
  }
  
  .logo {
    max-width: 100%;
    max-height: 100%;
  }
  
  .content {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 1rem;
  }
  
  .checkmark {
    width: 40px;
    height: 40px;
  }
  </style> -->
  
  <!--Manual Horizontal Scrolling -->
   <!-- <template>
    <div class="benefits-section">
      <div class="container">
        <h3 class="heading">What do we deliver & How we deliver</h3>
        <p class="subtitle">
          We believe in the power of innovation, experience, and commercial strategy. These three
          pillars form the foundation of our company culture.
        </p>
        <div class="swipe-container" ref="swipeContainer">
          <div class="swipe-row">

            <div class="swipe-item">
              <div class="pricing-plan">
                <div class="content" v-for="(item, index) in firstPlan" :key="index">
                  <img :src="item.icon" alt="checkmark" class="checkmark" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
  
            <div class="swipe-item featured-plan-container">
              <div class="featured-plan">
                <div class="triangle-logo">
                  <img :src="logo" alt="logo" class="logo" />
                </div>
              </div>
            </div>
  
            <div class="swipe-item">
              <div class="pricing-plan">
                <div class="content" v-for="(item, index) in secondPlan" :key="index">
                  <img :src="item.icon" alt="checkmark" class="checkmark" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import icon1 from "@/assets/img/Checkmark3.svg";
  import icon2 from "@/assets/img/Checkmark2.svg";
  import icon3 from "@/assets/img/Checkmark1.svg";
  import logo from "@/assets/img/logo-large.png";
  
  const swipeContainer = ref(null);
  
  const firstPlan = [
    { icon: icon1, text: "Innovation" },
    { icon: icon2, text: "Experience" },
    { icon: icon3, text: "Commercial Strategy" },
  ];
  
  const secondPlan = [
    { icon: icon1, text: "Trust & Integrity" },
    { icon: icon2, text: "Quality" },
    { icon: icon3, text: "Guidance to Perfection" },
  ];
  
  onMounted(() => {
  if (swipeContainer.value) {
    const container = swipeContainer.value as HTMLDivElement;
    const scrollPosition = container.scrollWidth / 2 - container.clientWidth / 2;
    container.scrollLeft = scrollPosition;
  }
});
  </script>
  
  <style scoped>
  .benefits-section {
    text-align: center;
    background-color: #000;
    color: #fff;
    padding: 40px 20px;
  }
  
  .heading {
    font-family: Ubuntu;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
  }
  
  .subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8;
    max-width: 700px;
    margin: 20px auto 40px;
  }
  
  .swipe-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .swipe-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    scroll-snap-type: x mandatory;
  }
  
  .swipe-item {
    flex: 0 0 auto;
    width: 100%;
    max-width: 300px;
    scroll-snap-align: center;
  }
  
  .pricing-plan {
    display: flex;
    flex-direction: column;
    background-color: #1c1c1c;
    border-radius: 8px;
    padding: 24px;
    gap: 16px;
  }
  
  .featured-plan-container {
    flex: 0 0 auto;
    max-width: 320px;
  }
  
  .featured-plan {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0px 8px 18px -8px rgba(99, 102, 241, 0.9);
  }
  
  .logo {
    max-width: 100%;
    max-height: 100%;
  }
  
  .content {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
  }
  
  .checkmark {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    .subtitle {
      font-size: 1rem;
      padding: 0 10px;
    }
  
    .swipe-row {
      gap: 24px;
      justify-content: flex-start;
    }
  
    .pricing-plan {
      padding: 20px;
    }
  
    .checkmark {
      width: 32px;
      height: 32px;
    }
  
    .content {
      gap: 8px;
      font-size: 0.9rem;
    }
  }
  </style>
   -->