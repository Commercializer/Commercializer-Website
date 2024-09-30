<template>
  <Navbar :absolute="false" />

  <SingleCourseHero />

  <CourseDescription />

  <Author />

  <Testimonial />

  <Faqs />

  <CourseSlide />

  <SingleCourseFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import SingleCourseHero from '@/views/pages/single-course/components/SingleCourseHero.vue'
import CourseDescription from '@/views/pages/single-course/components/CousreDescription.vue'
import Testimonial from '@/views/pages/single-course/components/Testimonial.vue'
import Author from '@/views/pages/single-course/components/Author.vue'
import Faqs from '@/views/pages/single-course/components/Faqs.vue'
import CourseSlide from '@/views/pages/single-course/components/CourseSlider.vue'
import SingleCourseFooter from './components/SingleCourseFooter.vue'
</script>
