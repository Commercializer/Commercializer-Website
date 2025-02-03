<template>
  <b-container class="py-5 mt-5 hero-section">
    <b-row class="align-items-center">
      <b-col lg="6" class="mb-4 mb-lg-0">
        <h1 class="display-6 gradient-text text-center text-lg-start">About</h1>
        <h2 class="display-2 fw-bold text-white text-center text-lg-start">Commercializer</h2>
      </b-col>
      <b-col lg="6">
        <p class="description text-white text-center text-lg-start mx-auto">
          We're a company driven by innovation with a strong focus on usability and improved
          experience. We believe that product, marketing, and commercial strategy are not
          separate entities but a harmonious blend essential for product success. We embed these
          elements into every product from its inception. Our clients receive our consultation
          and guidance throughout their journey.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts"></script>

<style scoped>

.b-container {
  background-color: #000;
  padding-left: 2rem; 
  padding-right: 2rem;
}

.hero-section {
  padding-left: 3rem;
  padding-right: 3rem;
}

.gradient-text {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  background: linear-gradient(0deg, #81cb30 0%, #14b7c6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

h1,
h2 {
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1.1rem;
  margin-top: 1.5rem;
  text-align: left;
  width: 90%;
}

@media (max-width: 768px) {
  .hero-section {
    padding-left: 2.5rem; 
    padding-right: 2.5rem;
  }

  .description {
    text-align: center;
    width: 100%;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .description {
    text-align: center;
    width: 100%;
  }
}
</style>
