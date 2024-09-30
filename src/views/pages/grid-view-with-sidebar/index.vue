<template>
  <Navbar :fixedTop="true" :isTransparent="false" :absolute="false" :navbarSticky="false" :stuck="true" />

  <Breadcrumb subTitle="Blog Grid with Sidebar" />

  <Content />

  <Cta />

  <Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Content from '@/views/pages/grid-view-with-sidebar/components/Content.vue'
import Cta from '@/views/landings/blog/components/Cta.vue'
import Footer from '@/views/pages/grid-view-with-sidebar/components/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
