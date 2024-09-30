<template>
  <Navbar :absolute="false" />

  <OnlineCourseHero />

  <PopularCourse />

  <Work />

  <Feature />

  <Testimonial />

  <Brands />

  <Faqs />

  <Form />

  <OnlineCourseFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import OnlineCourseHero from '@/views/landings/online-course/components/OnlineCourseHero.vue'
import PopularCourse from '@/views/landings/online-course/components/PopularCourse.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import Work from '@/views/landings/online-course/components/Work.vue'
import Feature from '@/views/landings/online-course/components/Feature.vue'
import Testimonial from '@/views/landings/online-course/components/Testimonial.vue'
import Brands from '@/views/landings/online-course/components/Brands.vue'
import Faqs from '@/views/landings/online-course/components//Faqs.vue'
import Form from '@/views/landings/online-course/components/Form.vue'
import OnlineCourseFooter from '@/views/landings/online-course/components/OnlineCourseFooter.vue'
</script>
