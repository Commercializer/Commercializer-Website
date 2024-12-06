<template>
    <section class="map-section pb-5 mb-md-2 mb-lg-4 mb-xl-5">
      <b-container class="pt-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
        <div class="map-wrapper pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
          <img :src="mapImg" alt="Map" class="map-image" />
          <div class="text-overlay">
            <p>
              With our official presence in 
              <span class="gradient-text">Qatar, Sri Lanka, and the USA</span>, 
              Commercializer brings global innovation to clients everywhere.
            </p>
            <h2><span class="gradient-text">One world, One vision, Boundless possibilities!</span></h2>
          </div>
        </div>
      </b-container>
    </section>
  </template>
  
  <script lang="ts" setup>
  import mapImg from '@/assets/img/AboutMap.png';
  </script>
  
  <style scoped>
  
  .map-section {
    position: relative;
    text-align: center; 
  }
  
  .map-wrapper {
    position: relative;
  }
  
  .map-image {
    width: 100%; 
    height: auto; 
    display: block; 
    margin: 0 auto;
  }
  
  .text-overlay {
    position: absolute;
    top: 35%; 
    left: 49%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    font-family: Ubuntu, sans-serif; 
    width: 80%; 
    max-width: 62.5; 
  }
  
  .text-overlay p,
  .text-overlay h2 {
    line-height: 1.5;
    margin: 0;
    font-size: 2rem; 
    font-weight: 700;
  }
  
  .gradient-text {
    background: linear-gradient(90deg, #81CB30 0%, #14B7C6 100%);
    -webkit-background-clip: text; 
    background-clip: text; 
    -webkit-text-fill-color: transparent; 
    font-weight: 700;
  }
  
  @media (max-width: 768px) {
  .text-overlay p,
  .text-overlay h2 {
    font-size: 1.5rem;
    line-height: 1.35;
  }
}

@media (max-width: 480px) {
  .text-overlay p,
  .text-overlay h2 {
    font-size: 1.1rem;
    line-height: 1.25;
  }
}
  </style>
  