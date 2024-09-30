<template>
  <Navbar is-dark />

  <Saas5Hero />

  <Categories />

  <UseCase />

  <Section />

  <Testimonial />

  <Pricing />

  <Saas5Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import Saas5Hero from '@/views/landings/saas-5/components/Saas5Hero.vue'
import Categories from '@/views/landings/saas-5/components/Categories.vue'
import UseCase from '@/views/landings/saas-5/components/UseCase.vue'
import Section from '@/views/landings/saas-5/components/Section.vue'
import Testimonial from '@/views/landings/saas-5/components/Testimonial.vue'
import Pricing from '@/views/landings/saas-5/components/Pricing.vue'
import Saas5Footer from '@/views/landings/saas-5/components/Saas5Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
